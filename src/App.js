import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/UI/Navigation'
import Footer from './components/UI/Footer'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        
        <Route exact path='/' component={HomePage} />
          
        
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
