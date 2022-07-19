import Navbar from './Component/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import Electronics from './Component/Electronics';
import Fashion from './Component/Fashion';
import Women from './Component/Women';
import Jewellery from './Component/Jewellery';
function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/electronics">
            <Electronics/>
          </Route>
          <Route exact path="/fashion">
            <Fashion />
          </Route>
          <Route exact path="/jewel">
            <Jewellery/>
          </Route>
          <Route exact path="/women">
            <Women/>
          </Route>
    </Switch>
        </Router>
   </>
  );
}

export default App;
