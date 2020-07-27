import React from 'react'
import Logo from '../../assets/img/logo_flix.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink' //usar ButtonLink no liguar de Button
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Roddieflix logo "></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    )
}

export default Menu