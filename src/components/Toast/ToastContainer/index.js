import React from 'react'
import { Container } from './styles'
import ToastMessage from '../ToastMessage'
import { useState } from 'react'

export default function ToastContainer() {
	const [messages] = useState([
		{id: Math.random(), type: 'default', text: 'Default text'},
		{id: Math.random(), type: 'danger', text: 'Danger text'},
		{id: Math.random(), type: 'success', text: 'Success text'},
	]);

	return (
		<Container>
			{messages.map((toast) => (
			<ToastMessage
				key={toast.id}
				text={toast.text}
				type={toast.type}/>
			))}
		</Container>
	)
}
