import { useEffect, useState } from 'react';
import './App.css'
import conf from './conf/config';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userdata) => {
      if(userdata){
        dispatch(login({userdata}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  })

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         
        </main>
        <Footer />
      </div>
    </div>
  ): null
}

export default App
