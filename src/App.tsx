import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import SubmitBrand from 'modules/submitBrand';
import LoadImage from 'modules/loadImage';
import Navbar from 'template/Navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={routes.home} component={SubmitBrand} />
        <Route exact path={routes.optional} component={LoadImage} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
