import { Outlet } from "react-router-dom"
import Navbar from "../componnents/Navbar"
import Sidebar from "../componnents/Sidebar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="main">
                <Sidebar />
                <Outlet />
            </main>            
        </>
    )
}

export default Layout