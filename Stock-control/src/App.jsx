import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

function App() {

  const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate()
  const { pathname } = useLocation()



  return (
    <div>
          <div>
            <NavBar></NavBar>
              <Routes>
                {/* Cliente */}
                <Route path={Helpers.HomeCustomerView} element={<Home />} />
                <Route path={Helpers.ConnectionsCustomerView} element={<ConnectionsCustomerView />} />
                <Route path={Helpers.ReportsCustomerView} element={<ReportsCustomerView />} />
                <Route path={Helpers.ProfileCustomerView} element={<ProfileProviderView />} />
                <Route path={Helpers.UserDetail} element={<UsersDetail/>}></Route>
                <Route path={Helpers.FAQs} element={<FAQs />} />
                <Route path={Helpers.ConsultReport} element={<ConsultReport />} />
                <Route path='*' element={<NotFound />}></Route>
              </Routes>
            <Footer />
          </div>
          :
          <div>
            <NavBar></NavBar>
            <Routes>
              <Route exact path={Helpers.Landing} element={<Landing />} />
              <Route path={Helpers.AccessAccount} element={<AccessAccount />} />
              <Route path={Helpers.FAQs} element={<FAQs />} />
              <Route path={Helpers.ConsultReport} element={<ConsultReport />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
    </div>
  )
}

export default App
