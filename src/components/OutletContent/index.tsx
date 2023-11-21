import { Outlet } from 'react-router-dom'
import Header from '../Header'

const OutletContent = () => {
  return (
    <>
      <Header/>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default OutletContent