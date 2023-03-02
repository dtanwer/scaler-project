
import Details from './comp/Details/Details';
import RoomBooking from './comp/RoomBooking';
import HomePage from './comp/home/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/book' element={<RoomBooking/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
