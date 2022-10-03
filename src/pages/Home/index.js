import { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import formatPhone from "../../utils/formatPhone";
import ContactsService from "../../services/ContactsService";

import Loader from "../../components/Loader";

import {
	Container,
	InputSearchContainer,
	Header,
	ListHeader,
	Card,
	ErrorContainer,
} from "../../pages/Home/styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import sad from "../../assets/images/sad.svg";

import Button from "../../components/Button";

export default function Home() {
	const [contacts, setContacts] = useState([]);
	const [orderBy, setOrderBy] = useState("asc");
	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const filteredContacts = useMemo(() => {
		return contacts.filter((contact) =>
			contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
		);
	}, [contacts, searchTerm]);

	const loadContacts = useCallback(async () => {
		try {
			setIsLoading(true);

			const contactsList = await ContactsService.listContacts(orderBy);

			setHasError(false);
			setContacts(contactsList);
		} catch (error) {
			setHasError(true);
		} finally {
			setIsLoading(false);
		}
	}, [orderBy]);

	useEffect(() => {
		loadContacts();
	}, [loadContacts]);

	function handleToggleOrderBy() {
		setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
	}

	function handleChangeSearchterm(event) {
		setSearchTerm(event.target.value);
	}

	function handleTryAgain() {
		loadContacts();
	}

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<InputSearchContainer>
				<input
					value={searchTerm}
					onChange={handleChangeSearchterm}
					type="text"
					placeholder="Pesquisar contato..."
				/>
			</InputSearchContainer>

			<Header hasError={hasError}>
				{!hasError && (
					<strong>
						{filteredContacts.length}
						{filteredContacts.length === 1 ? " contato" : " contatos"}
					</strong>
				)}
				<Link to="/new">Novo contato</Link>
			</Header>

			{hasError && (
				<ErrorContainer>
					<img src={sad} alt="sad" />

					<div className="details">
						<strong>Ocorreu um erro ao obter os seus contatos!</strong>
						<Button onClick={handleTryAgain} type="button">
							Tentar novamente
						</Button>
					</div>
				</ErrorContainer>
			)}

			{!hasError && (
				<>
					{filteredContacts.length > 0 && (
						<ListHeader orderBy={orderBy}>
							<button type="button" onClick={handleToggleOrderBy}>
								<span>Nome</span>
								<img src={arrow} alt="Ordenar lista" />
							</button>
						</ListHeader>
					)}

					{filteredContacts.map((contact) => (
						<Card key={contact.id}>
							<div className="info">
								<div className="contact-name">
									<strong>{contact.name}</strong>
									{contact.category_name && (
										<small>{contact.category_name}</small>
									)}
								</div>
								<span>{contact.email}</span>
								<span>{formatPhone(contact.phone)}</span>
							</div>

							<div className="actions">
								<Link to={`/edit/${contact.id}`}>
									<img
										src={edit}
										alt="Editar contato"
										title={`Editar ${contact.name}`}
									/>
								</Link>

								<button type="button">
									<img src={trash} alt="Deletar contato" />
								</button>
							</div>
						</Card>
					))}
				</>
			)}
		</Container>
	);
}
