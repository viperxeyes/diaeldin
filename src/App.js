import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
