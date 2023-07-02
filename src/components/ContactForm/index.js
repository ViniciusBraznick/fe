import React, { useState } from "react";
import PropTypes from "prop-types";

import isEmailValid from "../../utils/isEmailValid";
import useErrors from "../../hooks/useErrors";
import formatPhone from "../../utils/formatPhone";
import CategoriesService from "../../services/CategoriesService";

import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import { useEffect } from "react";
import Spinner from "../Spinner";

export default function ContactForm({ buttonLabel, onSubmit }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [categories, setCategories] = useState([]);
	const [isLoadingCategories, setIsLoadingCategories] = useState(true);
	const [isSubmiting, setIsSubmiting] = useState(false);

	const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

	const isFormValid = name && errors.length === 0;

	useEffect(() => {
		async function loadCategories() {
			try {
				const categories = await CategoriesService.listCategories();
				setCategories(categories);
			} catch {} finally{
				setIsLoadingCategories(false)
			}
		}

		loadCategories()
	}, [])


	function handleNameChange(event) {
		setName(event.target.value);

		if (!event.target.value.trim()) {
			setError({ field: "name", message: "Nome é obrigatório." });
		} else {
			removeError("name");
		}
	}

	function handleEmailChange(event) {
		setEmail(event.target.value);

		if (event.target.value.trim() && !isEmailValid(event.target.value)) {
			setError({ field: "email", message: "E-mail inválido." });
		} else {
			removeError("email");
		}
	}

	function handlePhoneChange(event) {
		setPhone(formatPhone(event.target.value));
	}

	async function handleSubmit(event) {
		event.preventDefault();

		setIsSubmiting(true);

		await onSubmit({
			name, email, phone, categoryId
		});

		setIsSubmiting(false);
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup error={getErrorMessageByFieldName("name")}>
				<Input
					error={getErrorMessageByFieldName("name")}
					placeholder="Nome *"
					value={name}
					onChange={handleNameChange}
					disabled={isSubmiting}
				/>
			</FormGroup>

			<FormGroup error={getErrorMessageByFieldName("email")}>
				<Input
					type="email"
					error={getErrorMessageByFieldName("email")}
					placeholder="E-mail"
					value={email}
					onChange={handleEmailChange}
					disabled={isSubmiting}
				/>
			</FormGroup>

			<FormGroup>
				<Input
					placeholder="Telefone"
					value={phone}
					maxLength="16"
					onChange={handlePhoneChange}
					disabled={isSubmiting}
				/>
			</FormGroup>

			<FormGroup isLoading={isLoadingCategories}>
				<Select
					value={categoryId}
					onChange={(event) => setCategoryId(event.target.value)}
					disabled={isLoadingCategories || isSubmiting}
				>
					<option value="">Sem Categoria</option>
					{categories.map(({id, name}) => (
						<option key={id} value={id}>{name}</option>
					))}
				</Select>
			</FormGroup>

			<ButtonContainer>
				<Button disabled={!isFormValid || isSubmiting} type="submit">
					{!isSubmiting && buttonLabel}
					{isSubmiting && <Spinner size={16} />}
				</Button>
			</ButtonContainer>
		</Form>
	);
}

ContactForm.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
};
