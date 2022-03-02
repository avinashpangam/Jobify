
import { Landing } from './pages/Landing';
import styled from 'styled-components'
// const Button=styled.button`
// background:red;
// color:white;
// font-size:1rem;
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import {Dashboard,Error,Register} from './pages'

function App() {
  return (
  
    <BrowserRouter>
      <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/Register'>Register</Link>
        <Link to='/landing'>Landing</Link>
        <Link to='/error'>Error</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='*' element={<Error/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
