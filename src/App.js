
import './App.css';
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";
import Forecast from "./Forecast";
import CurrentTemperature from "./CurrentTemperature";
import axios from "axios"; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card border-dark mb-3">
          <div className="card-body text-dark">
            <br />
            <SearchEngine />

            <br />

            <div className="container text-center">
              <div className="row">
                <div className="col-6">
                  <CurrentTemperature />
                </div>
                <div className="col-6">
                  <Forecast />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
