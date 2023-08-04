import './App.css'
import {Routes, Route,} from "react-router-dom"
import { Home, Login, Signup, Dashboard, CreatePin, Budgeting, ActivateCard, Privacy } from './pages'
import { Layout } from './components'

function App() {

  return (
    <>
     <Routes>
      <Route element={<Layout/>}>
       <Route index path='/' element={<Home/>}/>
       <Route  path='/budgeting' element={<Budgeting/>}/>
       <Route  path='/privacy' element={<Privacy/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/activatecard' element={<ActivateCard/>}/>
      <Route path='/dashboard/*' element={<Dashboard/>}/>
      <Route path='/createpin/:id/*' element={<CreatePin/>}/>
     </Routes>
    </>
  )
}

export default App
