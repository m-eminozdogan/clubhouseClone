import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>

      <PlanLayout>
        <Routes
          exact path={[
            "/",
            "/invite",
            "/code_confirm",
            "/allow_notification"
          ]}
        >

          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/invite' element={<PhoneConfirmation />} />
          <Route exact path='/code_confirm' element={<CodeConfirm />} />
          <Route exact path='/allow_notification' element={<AllowNotification />} />

        </Routes>
      </PlanLayout>
      <AppLayout>
        
        <Routes
           path={[
            "/home"
          ]}>

          <Route  path='/home' element={<Home />} />
        </Routes>
      </AppLayout>

    </BrowserRouter>
  );
}

export default App;
