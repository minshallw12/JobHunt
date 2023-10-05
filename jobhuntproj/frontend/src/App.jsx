import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function App() {

  return (

      <div className="App">
        <div className='blue'>

          <div className='center' id='container'>
            <Outlet/>
          </div>

          <div>
            <Footer/>
          </div>

        </div>
      </div>
  )
}