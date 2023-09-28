import Footer from './components/Footer';
import Header from './components/Header'
import { Outlet } from "react-router-dom";

function App() {
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

export default App
