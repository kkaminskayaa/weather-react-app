
import './App.css';

import Footer from "./Footer";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card border-dark mb-3">
          <div className="card-body text-dark">
            <br />
            

           

            <div className="container text-center">
              <div className="row">
                <div className="col-6">
                  <CurrentWeather defaultCity = "Toronto"/>
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
