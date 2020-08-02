import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import { Button, ButtonExcluir } from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

const BtnCat = styled.a`
  margin-left:20px;
`;

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handlerChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/videos'
      : 'https://roddieflix.herokuapp.com/videos';
    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setVideos([
        ...resposta,
      ]);
    });
  }, []);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handlerChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handlerChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handlerChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>

        <BtnCat>
          <Link to="/cadastro/categoria">
            <Button>
              Cadastrar Categoria
            </Button>
          </Link>
        </BtnCat>

      </form>

      <h2>Videos Cadastrados</h2>
      <ul>
        {videos.map((video) => (
          <li key={`${video.titulo}`}>
            {video.titulo}
            <ButtonExcluir onClick={() => {
              videosRepository.deleteVideo(video.id)
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

export default CadastroVideo;
