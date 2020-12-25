import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';

import { AnimatePresence } from 'framer-motion'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
      </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
