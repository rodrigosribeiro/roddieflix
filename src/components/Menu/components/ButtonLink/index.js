import React from 'react'

function ButtonLink(props) {
    //props => { className:"xxxx", href:"/" } // objeto que pode ser acessado
    //onsole.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink