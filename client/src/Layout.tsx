import { Outlet } from "react-router-dom"
import Footer from "./components/shared/ui/Footer"
import Header from "./components/shared/ui/Header"


const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout