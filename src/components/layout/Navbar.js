import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/Home">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li class={styles.item}>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Projects">Projeto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Company">Empresa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar