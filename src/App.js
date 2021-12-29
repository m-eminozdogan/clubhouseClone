import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <PlanLayout>
        <Welcome />
      </PlanLayout>
    </div>
  );
}

export default App;
