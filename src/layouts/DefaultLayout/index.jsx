import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import { Outlet } from "react-router"

const DefaultLayout = function () {
    return <div style={{ height: '100vh' }}>
        <Header />

        <div style={{ display: 'flex', height: 'calc(100% - 65px)' }}>
            <Sidebar />
            <div style={{ width: '100%' }}>
                <Outlet />
            </div>
        </div>

        <Footer />
    </div>
}

export default DefaultLayout