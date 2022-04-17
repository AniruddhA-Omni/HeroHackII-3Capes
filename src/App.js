
import './App.css';
import Container from './Container';
import Header from './Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Services from './Services';
import Blood_donation from './Blood_donation';
import Bed from './Bed';
import Contributor from './Contributor';
function App() {
  return (
     <BrowserRouter>
     <div className="App">
       <Header/>
       <Switch>
         <Route path='/services'>
          <Services/>
         </Route>
         <Route path='/blooddonation'>
          <Blood_donation/>
         </Route>
         <Route path='/bed'>
          <Bed/>
         </Route>
         <Route path='/contributors'>
          <Contributor/>
         </Route>
         <Route path="/">
           <Container/>
         </Route>
         
       </Switch>
      </div>
      
     </BrowserRouter>
  );
}

export default App;
