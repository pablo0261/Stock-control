import { Routes, Route, useLocation} from 'react-router-dom'
import helpers from './helpers/routesFront'
import HomeView from './views/homeView/homeView'
import './App.module.sass'
import Landing from './views/landing/Landing'
import LogIn from './views/logIn/LogIn'
import SignIn from './views/signIn/SignIn'
// import DashboardLayout from "layout
import { useEffect } from 'react'

function App() {
  const { pathname } = useLocation()



  useEffect(()=>{
    if (pathname === "/") {
      document.body.className = "access";
   }
    if (pathname === "/logIn") {
      document.body.className = "access";
   }
   if (pathname === "/signIn") {
    document.body.className = "access";
 }
  },[pathname])

  return (
    <>
      <div>
      {/* <NavBar></NavBar> */}
        <main>
          <Routes>
            <Route path={helpers.Landing} element={<Landing />} />
            <Route path={helpers.homeView} element={<HomeView/>}/> {/* agregar footer */}
            <Route path={helpers.logIn} element={<LogIn />}/>
            <Route path={helpers.signIn} element={<SignIn />}/>
            {/* <Route path={helpers.dailyFlow} element={<dailyFlow/>} />
            <Route path={helpers.dasboardView} element={<dasboardView/>}/>
            <Route path={helpers.FAQs} element={<FAQs />} /> */}
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App

