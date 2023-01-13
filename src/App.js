
import './App.css';

import Footer from "./Footer";
import CurrentWeather from "./CurrentWeather";



function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card border-dark">
          <div className="card-body text-dark">
            <br />
            

           

            <div className="container text-center">
              
                <div>
                  <CurrentWeather defaultCity = "Toronto"/>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    
  );
}

export default App;
