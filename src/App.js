import './App.css';
import {Main} from './componentes/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Routes>
            <Route path="/items/"  element={<Main/>}/>
            <Route path="/items/:term"  element={<Main/>}/>
        </Routes>    
        </div>
       
    </BrowserRouter>
  );
}

export default App;
