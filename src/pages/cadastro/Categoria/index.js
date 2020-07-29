import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormCat from '../../../components/FormCat'

function CadastroCategoria() {

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <FormCat />

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>)
}

export default CadastroCategoria