import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import { getNodeText } from '@testing-library/react';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let verificador = 0;

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        for (let i = 0; i < dadosIniciais.length; i += 1) {
          if (!(typeof dadosIniciais[indice].videos[0] === 'undefined') && verificador === 0) {
            verificador += 1;
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[indice].videos[0].titulo}
                  url={dadosIniciais[indice].videos[0].url}
                  videoDescription={dadosIniciais[indice].videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[indice]}
                />
              </div>
            );
          }
          if (!(typeof dadosIniciais[indice].videos[0] === 'undefined')) {
            return (
              <Carousel
                key={categoria.id}
                category={categoria}
              />
            );
          }
        }
      })}

    </PageDefault>
  );
}

export default Home;
