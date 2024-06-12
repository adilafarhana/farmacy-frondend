import logo from './logo.svg';
import './App.css';
import AppPharmacy from './component/AppPharmacy';
import SearchPharmacy from './component/SearchPharmacy';
import ViewAll from './component/ViewAll';

function App() {
  return (
    <div className="App">
      <h5><AppPharmacy/></h5>
      <h5><SearchPharmacy/></h5>
      <h5><ViewAll/></h5>
    </div>
  );
}


export default App;
