import '../styles/globals.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Index from './index';
import Login from './login';
import Admin from './admin';
import Search from './search';

function MyApp({ Component, pageProps }) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default MyApp;
