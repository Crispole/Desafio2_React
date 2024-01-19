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

        }

//FALTA VALIDAR LOS INPUTS

        return (
            <>
                <Form onSubmit={validateForm} noValidate>
                    <Form.Control
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Nombre"
                    />
                    <Form.Control
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="tuemail@ejemplo.com"
                    />
                    <Form.Control
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Contraseña"
                    />
                    <Form.Control
                        type="password"
                        id="repassword"
                        onChange={(e) => setRePassword(e.target.value)}
                        value={repassword}
                        placeholder="Confirma tu contraseña"
                    />
                    <Button type="submit" variant="success">Registrarse</Button>
                </Form>
            </>
        )
    }
    export default Formulario