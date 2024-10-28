
import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'

import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
     
   
    <Navbar/>
    {/* <DaisyNav/> */}
    <h2>React Router</h2>
    <PriceOptions/>
    <LineChart/>
    </>
  )
}

export default App
