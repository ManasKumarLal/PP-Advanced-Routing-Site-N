import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className='flex flex-col h-screen'>
        <Header />
        <Outlet />
        <div className='mt-auto'>
        <Footer />
        </div>
      </div>
    </>
  )
}

export default App
