import './App.css';
import './styles/shared.scss';

import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import Login  from './components/login/Login';
import LayoutWithInvestment from './layouts/LayoutWithInvestment';
import ExplorePage from './components/authPages/explore/ExplorePage';
import RequiredAuth from './components/login/RequiredAuth';


function App() {
  return ( 
    <Routes>
         <Route path='/' element={<Layout />} >
               <Route index element={<Login />} />
               <Route path='login' element={<Login />} />
         </Route>
         <Route element={<RequiredAuth />} >
            <Route path="/stock/" element={<LayoutWithInvestment />} >
                      <Route path='explore' element={<ExplorePage />} />
              </Route>
          </Route>

    </Routes>     
  );
}

export default App;
