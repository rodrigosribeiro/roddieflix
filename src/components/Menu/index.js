import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo_flix.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink' //usar ButtonLink no liguar de Button
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Roddieflix logo "></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

        </nav>
    )
}

export default Menu