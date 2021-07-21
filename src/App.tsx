import { GlobalStyle } from './components/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductsMain } from './pages/ProductMain';
import { ProductDetail } from './pages/ProductDetail';
import { Error404 } from './pages/Error404';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductProvider } from './context/ProductContext';
import { LoadingProvider } from './components/Context/Loading';

function App() {
  return (
    <>
      <ProductProvider>
        <LoadingProvider>
          <GlobalStyle />
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <ProductsMain />
              </Route>
              <Route path="/products/:id">
                <ProductDetail />
              </Route>
              <Route>
                <Error404 />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </LoadingProvider>
      </ProductProvider>
    </>
  );
}

export default App;
