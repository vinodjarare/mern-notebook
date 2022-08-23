import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';


function App() {
  window.addEventListener("contextmenu", (e)=>e.preventDefault())
  return (
    <>
      <NoteState>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
