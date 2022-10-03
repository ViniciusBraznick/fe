import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Button from "../Button";
import { Overlay, Container, Footer } from "./style";

export default function Modal({ danger }) {
	return ReactDOM.createPortal(
		<Overlay>
			<Container danger={danger}>
				<h1>Título do modal</h1>
				<p>Corpo do modal</p>

				<Footer>
					<button className="cancel-button" type="button">
						Cancelar
					</button>
					<Button danger={danger}>Deletar</Button>
				</Footer>
			</Container>
		</Overlay>,
		document.getElementById('fullscreen-root')
	);
}

Modal.propTypes = {
	danger: PropTypes.bool,
};

Modal.defaulProps = {
	danger: false,
};
