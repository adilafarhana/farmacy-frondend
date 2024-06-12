import logo from './logo.svg';
import './App.css';
import AppPharmacy from './component/AppPharmacy';
import SearchPharmacy from './component/SearchPharmacy';
import ViewAll from './component/ViewAll';
import DeletePharmacy from './component/DeletePharmacy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AppPharmacy/>}/>
    <Route path='/search' element={<SearchPharmacy/>}/>
    <Route path='/delete' element={<DeletePharmacy/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}


export default App;
