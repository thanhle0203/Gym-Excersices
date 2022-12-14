
import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';
import { Route, Routes} from 'react-router-dom'
import ExerciseList from './components/ExerciseList';
import ExerciseDetail from './components/ExerciseDetail';
import Exercise from './components/Exercise';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<ExerciseList />} />
        <Route path="/exercises/:id" element={<Exercise />} /> 
        {/*<Route path="/exercises/:id" element={<ExerciseDetail />} /> */}
      </Routes>
      
    </div>
    
  );
}

export default App;
