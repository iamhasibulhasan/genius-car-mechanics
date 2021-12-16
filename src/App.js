import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>




    </div>
  );
}

export default App;
