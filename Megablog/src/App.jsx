
import './App.css'
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
     
    }).finally(()=>{
      setLoading(false);
    })
  }, [])


  return !loading?(
      <div className='min-h-screen flex flex-wrap
       content-between bg-yellow-500'>
        <div
        className='w-full '>
          <Header/>
          <main className='w-full py-72'>
          <Outlet/>
          </main>

           
          <Footer/>
        </div>
       </div>
  ):null
   
  
}

export default App
