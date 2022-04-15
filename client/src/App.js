
import { Landing } from './pages/Landing.js';
import styled from 'styled-components'
// const Button=styled.button`
// background:red;
// color:white;
// font-size:1rem;
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {AddJob,AllJobs,SharedLayout,Stats,Profile} from './pages/dashboard/index.js'
import {Error,Register} from './pages'

function App() {
  return (
  
    <BrowserRouter>
    
      <Routes>
        <Route path='/'>
        <Route path="stats" element={<Stats/>}/>
        <Route path="Add-Job" element={<AddJob/>}/>
        <Route path="AllJobs" element={<AllJobs/>}/>
        <Route path="Profile" element={<Profile/>}/>
      
        
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='*' element={<Error/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
