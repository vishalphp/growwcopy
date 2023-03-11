import './App.css';
import './styles/shared.scss';

import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import Login  from './components/login/Login';


function App() {
  return ( 
    <Routes>
         <Route path='/' element={<Layout />} >
               <Route path='login' element={<Login />} />
         </Route>
    </Routes>     
  );
}

export default App;
