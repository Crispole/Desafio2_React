import { Button, Form } from "react-bootstrap"
import { useState } from "react"

const Formulario = ({ setAlert }) => {
	const [name, setName] = useState("")
    const [password, setPassword] = useState("")
	const [repassword, setRePassword] = useState("")
	const validateMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    const validateForm = (e) => {
		e.preventDefault()
		if (password !== repassword) {
			setAlert({
				error: true,
				msg: "Las contraseñas no coinciden !",
				color: "warning",
			})