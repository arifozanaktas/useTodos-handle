import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/addItem';
import Todos from './components/Todos';


function App() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<AddItem />} />
      <Route path="/products" element={<Todos />} />
    
    </Routes>
    </>
  );
}

export default App;
