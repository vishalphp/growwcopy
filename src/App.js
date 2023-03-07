import './App.css';
import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import Login  from './components/login/Login';
import './styles/shared.scss'

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
