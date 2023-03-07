import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import InputField from '../components/input/inputField'
import Layouts from '../layouts'
import Dashboard from '../pages/dashboard'
interface homeProps {
    isAdmin?:boolean
     }
    
const CustomRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeLayout isAdmin={false}/>}>
        <Route path="/" element={<Dashboard/>} />

        </Route>
        <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
function Layout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}
function HomeLayout( props:homeProps) {
    const {isAdmin} =props
    return (
        <Layouts isAdmin={isAdmin}>
            <Outlet />
        </Layouts>
            
   
    );
}
function NoMatch() {
    return (
        <div className='pt-5 grid justify-center items-center text-black h-full'>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
export default CustomRouter