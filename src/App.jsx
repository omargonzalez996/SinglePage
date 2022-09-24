import "./App.style.scss";
import logo from "./assets/Logo.png";
import peje from "./assets/qpeje.png";
function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <div className="content">
        <div className="photocontainer">
          <img src={peje} alt="" />
        </div>
      </div>
      <h3 id="titulo">
        Dios salve <strong>al Peje</strong>
      </h3>

      <div className="contenedor-info">
        <p>info</p>
      </div>

      <div className="footer">
        <p>All Rights Reserved GonzDev 2022</p>
      </div>
    </div>
  );
}

export default App;
