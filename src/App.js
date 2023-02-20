import logo from "./logo.png";
import quran from "./quran.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header text-center">
          <img src={logo} className="App-logo my-4" alt="logo" />
          <div className="input-group my-3 search  mx-auto">
            <span className="input-group-text bg-success text-white">
              Surah
            </span>
            <div className="form-floating">
              <input
                type="text"
                className="form-control searchInput"
                placeholder="Search in Quran"
              />
              <label>Search in Quran </label>
            </div>
            <span className="input-group-text bg-transparent border-0  text-success">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </header>
        <main className="App-main">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-2">
                <div className="card shadow-sm border my-4  my-md-4 bg-body-tertiary rounded border-0">
                  <div className="card-head">
                    <img
                      src={quran}
                      alt=""
                      className="img-fluid object-fit-cover border rounded"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between">
                      <h5 className="card-title">title</h5>
                      <p className="card-title">Ayahs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="card shadow-sm border my-4  my-md-4 bg-body-tertiary rounded border-0">
                  <div className="card-head">
                    <img
                      src={quran}
                      alt=""
                      className="img-fluid object-fit-cover border rounded"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between">
                      <h5 className="card-title">title</h5>
                      <p className="card-title">Ayahs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="card shadow-sm border my-4  my-md-4 bg-body-tertiary rounded border-0">
                  <div className="card-head">
                    <img
                      src={quran}
                      alt=""
                      className="img-fluid object-fit-cover border rounded"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between">
                      <h5 className="card-title">title</h5>
                      <p className="card-title">Ayahs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="card shadow-sm border my-4  my-md-4 bg-body-tertiary rounded border-0">
                  <div className="card-head">
                    <img
                      src={quran}
                      alt=""
                      className="img-fluid object-fit-cover border rounded"
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between">
                      <h5 className="card-title">title</h5>
                      <p className="card-title">Ayahs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
