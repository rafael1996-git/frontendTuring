
import './App.css';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import { InicioLogin } from './conponents/InicioLogin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<InicioLogin/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
