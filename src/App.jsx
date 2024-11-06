import './App.css'
import MainContent from './components/MainContent'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <div className='min-h-screen min-w-screen font-dm-sans'>
        <div className='w-11/12 mx-auto h-20'> 
          <Navbar/>
        </div>

        <div className='w-11/12 mt-3 mx-auto h-full flex'>
          <div className='w-[20%] h-full '> 
          <Menu/>
          </div>

          <div className='w-[80%] mb-4 h-full flex justify-center items-center'>
            <MainContent/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
