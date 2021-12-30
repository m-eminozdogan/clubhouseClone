import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PlanLayout>
          <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/invite' element={<PhoneConfirmation/>} />
            <Route path='/code_confirm' element={<CodeConfirm/>} />
            <Route path='/allow_notification' element={<AllowNotification/>} />

          </Routes>
        </PlanLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
