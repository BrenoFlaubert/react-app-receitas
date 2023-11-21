import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

const OutletContent = () => {
  return (
    <>
      <Header/>
      <div id="detail">
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default OutletContent