import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Second from './Pages/Second'
import First from './Pages/First'
import Main from './Pages/Main'
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/first" element={<First/>}/>
          <Route path='/Main' element={<Main/>} />
          <Route path="/second" element={<Second/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
