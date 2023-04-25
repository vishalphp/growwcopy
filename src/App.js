import {lazy, Suspense} from 'react'
import './App.css';
import './styles/shared.scss';

import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import Login  from './components/login/Login';
import LayoutWithInvestment from './layouts/LayoutWithInvestment';
import Spinner from './layouts/Spinner';

//import ExplorePage from './components/authPages/explore/ExplorePage';
//import RequiredAuth from './components/login/RequiredAuth';
//import MutualFunds from './components/authPages/mutualfunds/MutualFunds';

const RequiredAuth = lazy(()=> import('./components/login/RequiredAuth'));
const ExplorePage = lazy(()=> import('./components/authPages/explore/ExplorePage')); 
const MutualFunds = lazy(()=> import('./components/authPages/mutualfunds/MutualFunds'));
const UsersList = lazy(()=> import('./components/authPages/users/UsersList'));

function App() {
  return ( 
    <Routes>
         <Route path='/' element={<Layout />} >
               <Route index element={<Login />} />
               <Route path='login' element={<Login />} />
         </Route>
        
         <Route element={<Suspense fallback={<Spinner />} ><RequiredAuth /></Suspense>} >
            <Route path="/explore/" element={<LayoutWithInvestment />} >
                      <Route path='stock' element={<Suspense fallback={<Spinner />} ><ExplorePage /></Suspense>} />
              </Route>
              <Route path="/explore/" element={<LayoutWithInvestment />} >
                      <Route path='mutual-funds' element={<Suspense fallback={<Spinner />} ><MutualFunds /></Suspense>} />
              </Route>
              <Route path="/users/" element={<LayoutWithInvestment />} >
                      <Route path='list' element={<Suspense fallback={<Spinner />} ><UsersList /></Suspense>} />
              </Route>
          </Route>

    </Routes>     
  );
}

export default App;
