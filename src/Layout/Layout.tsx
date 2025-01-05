import Navbar from '../Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Home from '../components/Pages/Home'
import About from '../components/Pages/About'
import Featured from '../components/Pages/Featured'
import About2 from '../components/Pages/About2'
import Contact from '../components/Pages/Contact'

const Layout = () => {
  return (
    <div>

        <Navbar/>
        <Home/>
        <About/>
        <Featured/>
        <About2/>
        <Contact/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Layout