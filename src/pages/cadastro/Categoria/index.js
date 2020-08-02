import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Button, ButtonExcluir } from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

const Container = styled.div`
  text-align: end;
`;

const LinkStyled = styled.a`
  margin-left: calc(100vw - 35vw);
`;

function CadastroCategoria() {
  const history = useHistory();

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handlerChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://roddieflix.herokuapp.com/categorias';
    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        values,
      ]);
    }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handlerSubmit(infoEvento) {
        infoEvento.preventDefault();

        categoriasRepository.create({
          titulo: values.nome,
          cor: values.cor,
          descricao: values.descricao,
          link_extra: {
            text: '',
            url: '',
          },
        })
          .then(() => {
            history.push('/');
          });
        /*  setCategorias([
          ...categorias,
          values,
        ]);
        clearForm(); */
      }}
      >

        <FormField
          label="Nome da categoria  "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handlerChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handlerChange}
        />

        <Container>
          <LinkStyled>
            <Link to="/">
              Ir para home
            </Link>
          </LinkStyled>
        </Container>

        <Button>Cadastrar</Button>

      </form>
      <h2>Categorias Cadastrados</h2>
      {categorias.length === 0 && (
        <div>
          {/* Carregando */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
            <ButtonExcluir onClick={() => {
              categoriasRepository.deleteCategoria(categoria.id)
                .then(() => {
                  history.push('/');
                });
            }}
            >
              Excluir
            </ButtonExcluir>
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
