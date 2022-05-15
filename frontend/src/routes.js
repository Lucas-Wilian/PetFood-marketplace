import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Cadastro } from './pages/Cadastro/Cadastro';
import { Checkout } from './pages/Checkout/Checkout';
import { PetShop } from './pages/PetShop/PetShop';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './pages/Home/Home';

import './styles/global.css';

const Routes = () => {
  return (
    <>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/petshop/:id' exact component={PetShop} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/cadastro' exact component={Cadastro} />
      </Router>
      <Sidebar />
    </>
  );
};

export default Routes;
