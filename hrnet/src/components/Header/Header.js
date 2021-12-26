import '../../styles/header/header.css';
import {Link} from "react-router-dom";

const Header = (props) => {
    const { setStyle } = props; 
    const openNav = () => {
        setStyle((state) => ({
            ...state,
            mySidenav: "250px",
            main: "250px",
        }));
    }
      
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <span style={{fontSize:"30px", cursor:"pointer"}} onClick={openNav}>&#9776;</span>
                <li><Link className="navbar-logo-link" to="/">HRnet</Link></li>
            </div>
            <ul className="navbar-menu">
                <li><Link className="navbar-menu-link" to="/employee-list">View Current Employees</Link></li>
            </ul>
        </nav>
    )
}
export default Header;