import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Content from "./components/contenido/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import Footer2 from "./components/footer2/Footer2";
import Body2 from "./components/body2/Body2.jsx";

function App() {
  return (
    <React.Fragment>
      {/*Componente Cabecera*/}
      <Header />
      {/*Componente Contenido*/}
      <Content />
      {/*Componente actualizacion*/}
       <Body2 />
      {/*Componente Footer*/}
      <Footer />
      {/*Componente Footer2*/}
      <Footer2 />
    </React.Fragment>
  );
}

export default App;
