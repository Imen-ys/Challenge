import { TheFirstPage , Events } from './Components/index';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App flex">
      <Router>
        <Routes>
          <Route path='/' element={<TheFirstPage />}/>
          <Route path='/events' element={<Events />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
