import { Button, Form } from "react-bootstrap"
import { useState } from "react"

const Formulario = ({ setAlert }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const validateMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    const validateForm = (e) => {
        e.preventDefault()
        if (password !== confPassword) {
            setAlert({
                error: true,
                msg: "Las contraseñas no coinciden !",
                color: "warning",
            })
            return
        }
        if (name === '' || email === '' || password === '' || confPassword === '') {
            setAlert({
                error: true,
                msg: "Completa todos los campos !",
                color: "danger",
            })
            return
        }
        if (!validateMail.test(email)) {
            setAlert({
                error: true,
                msg: "El email debe tener un formato válido !",
                color: "danger",
            })
            return
        }
        setAlert({
            error: false,
            msg: "Cuenta creada existosamente!",
            color: "success"
        })
        setName('')
        setEmail('')
        setPassword('')
        setConfPassword('')
    }

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
                    id="ConfPassword"
                    onChange={(e) => setConfPassword(e.target.value)}
                    value={confPassword}
                    placeholder="Confirma tu contraseña"
                />
                <Button type="submit" variant="success">Registrarse</Button>
            </Form>
        </>
    )
}
export default Formulario