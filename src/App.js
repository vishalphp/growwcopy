import './App.css';
import './styles/shared.scss';

import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import Login  from './components/login/Login';
import LayoutWithInvestment from './layouts/LayoutWithInvestment';
import ExplorePage from './components/authPages/explore/ExplorePage';


function App() {
  return ( 
    <Routes>
         <Route path='/' element={<Layout />} >
               <Route path='login' element={<Login />} />
         </Route>
         <Route path="/stock/" element={<LayoutWithInvestment />} >
                  <Route path='explore' element={<ExplorePage />} />
          </Route>

    </Routes>     
  );
}

export default App;
