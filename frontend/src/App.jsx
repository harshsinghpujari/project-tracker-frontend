import {Routes, Route, Link} from 'react-router-dom'
import Login from "./pages/auth/Login.jsx";
import Register from './pages/auth/Register.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';


function App() {

  return (
    <>
    <div className='bg-black text-white px-7'>
      <Link to="/Login">Go to Login</Link>
      <Link to="/Register">Go to register</Link>
      
    </div>

    {/* <Routes>
     <Route element={<AuthLayout/>}>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Route>
    </Routes> */}
        

    <Routes>
      <Route path="/login" element={ <AuthLayout><Login /></AuthLayout> } />
      <Route path="/register" element={ <AuthLayout><Register /></AuthLayout> } /> 
    </Routes>

      
    </>
  );
}

export default App;

