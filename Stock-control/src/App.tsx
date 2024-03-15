import { Routes, Route } from 'react-router-dom'
import helpers from './helpers/routesFront'
import HomeView from './views/homeView/homeView'
import './App.sass'

function App() {

  return (
    <>
      <div>
      {/* <NavBar></NavBar> */}
        <main>
          <h1>Hola mundo soy App!</h1>
          <Routes>
          {/* <Route exact path={helpers.Landing} element={<Landing />} /> */}
            <Route path={helpers.homeView} element={<HomeView/>}/> {/* agregar footer */}
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
