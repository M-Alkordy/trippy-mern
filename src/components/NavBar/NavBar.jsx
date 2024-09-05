import { Link, NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { useState } from 'react';

const NavBar = () => {
    /* const [state, setstate] = useState(); */
    const navigate = useNavigate()
    const show = () => {
        const menu = document.querySelector(".nav-menu")
        menu.classList.toggle("active")
    }

    function fun() {
        navigate("/login")
    }

    return (
        <>
            <nav>
                <h1 className="logo">Trippy</h1>
                <div className="items">
                    <ul>
                        {/* <li><Link to="/" onClick={()=>{setnumber(0)}} className={(number==0)? "active" : ""}><i className="fa-solid fa-house-user"></i>Home</Link></li>
                        <li><Link to="/about" onClick={()=>{setnumber(1)}} className={(number==1)? "active" : ""}><i className="fa-solid fa-circle-info"></i> About</Link></li>
                        <li><Link to="/services" onClick={()=>{setnumber(2)}} className={(number==2)? "active" : ""}><i className="fa-solid fa-briefcase"></i>Service</Link></li>
                        <li><Link to="/contact" onClick={()=>{setnumber(3)}} className={(number==3)? "active" : ""}><i className="fa-solid fa-address-book"></i>Contact</Link></li> */}
                        <li><NavLink to="/" className={({ isActive }) =>
                            isActive ? "active" : ""}><i className="fa-solid fa-house-user"></i>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) =>
                            isActive ? "active" : ""}><i className="fa-solid fa-circle-info"></i> About</NavLink></li>
                        <li><NavLink to="/services" className={({ isActive }) =>
                            isActive ? "active" : ""}><i className="fa-solid fa-briefcase"></i>Service</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "active" : ""}><i className="fa-solid fa-address-book"></i>Contact</NavLink></li>
                    </ul>
                    <button onClick={fun}>Log in</button>
                </div>
                <button className='menu-btn' onClick={() => show()}><i className='fas fa-bars'></i></button>
            </nav>
            <div className="nav-menu">
                <ul>
                    <li><Link to="/"><i className="fa-solid fa-house-user"></i>Home</Link></li>
                    <li><Link to="/about"><i className="fa-solid fa-circle-info"></i> About</Link></li>
                    <li><Link to="/services"><i className="fa-solid fa-briefcase"></i>Service</Link></li>
                    <li><Link to="/contact"><i className="fa-solid fa-address-book"></i>Contact</Link></li>
                </ul>
                <button><Link to="/login">Log in</Link></button>
            </div>
        </>
    )
}

export default NavBar