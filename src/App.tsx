import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import SubmitBrand from 'modules/submitBrand';
import Navbar from 'template/Navbar';
import LoadingSpinner from 'utils/LoadingSpinner';
const LoadImage = lazy(() => import('modules/loadImage'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route exact path={routes.home} component={SubmitBrand} />
          <Route exact path={routes.optional} component={LoadImage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
