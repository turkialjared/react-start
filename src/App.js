import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";
import "./App.css";
import { Ui } from "./border";
import { JO, Tshirt } from "./products";

function App() {
  return (
    <div className="App d-flix justify-content-center">
      <div className="App-header">
        <Ui title=" This is Test" desc="Test I Said!!!" />
      </div>
      <div>
        <img
          className="logo"
          src="https://www.arsenalpics.com/templates/printstore/31/images/crest.jpg"
        />
      </div>
      <div className="d-flex flex-direction-row">
        {Tshirt.map((items) => (
          <>
            <div className="d-flex flex-direction-row">
              <img src={items.link} />
              <h1>{items.label}</h1>
              <h3>{items.price}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
