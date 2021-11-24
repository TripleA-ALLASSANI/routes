import { render } from "react-dom";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from "./App";
import Movie from "./components/Movie";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/movie/:id" element={<Movie />}/>
      </Routes>
  </BrowserRouter>,
  rootElement
);
