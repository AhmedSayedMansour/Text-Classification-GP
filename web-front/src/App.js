import './App.css';
import Dashboard  from './components/Dashboard/Dashboard.js';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";



function App() {
  return (
  <Router>
    <div className="App">
    <Route  path="/">
        <Dashboard/>
    </Route>
    </div>
  </Router>

  );
}

export default App;
