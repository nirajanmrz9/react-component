
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layouts from './layouts';

function App() {
  return (
   <>
   <Routes>
   
    <Route path="/" element={<Layouts />} />
   </Routes>
   </>
  );
}

export default App;
