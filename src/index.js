import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';
import Pagina404 from './pages/cadastro/Pagina404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component = {Home} exact /> {/*sem o exact ele não procura as rotas específicas*/}
      <Route path="/cadastro/video" component = {CadastroVideo} />
      <Route path="/cadastro/categoria" component = {CadastroCategoria} />
      <Route component = {Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
