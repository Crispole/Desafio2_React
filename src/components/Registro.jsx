import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"

const Registro = ({ message, setAlert }) => {
	return (
			<section>
				<h1>Crea una cuenta</h1>
				<div className="social">
					<SocialButton icon={faFacebook} />
					<SocialButton icon={faGithub} />
					<SocialButton icon={faLinkedinIn} />
				</div>
				<h3>O usa tu email para registrarte</h3>
				<Formulario setAlert={setAlert} />
				<Alert color={message.color} msg={message.msg} />
			</section>
	)
}
export default Registro