import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Auth from "./components/Auth/Auth";
import OurLists from "./components/OurLists/OurLists";
import Movies from "./components/Movies/Movies";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/our-lists" exact component={OurLists} />
        <Route path="/movies" exact component={Movies} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
