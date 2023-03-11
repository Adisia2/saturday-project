import {
  BrowserRouter, 
  Route, 
  Routes,} from "react-router-dom";

import Home from './components/home/Home';
import Hotel from "./components/hotel/Hotel";
import List from './components/list/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/hotels" element={<List/>} />
        <Route path= "/hotels/:id" element={<Hotel/>} />
        <Route path= "/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
