import '../../styles/header/header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <navbar className="navbar">
            <div className="navbar-logo">
                HRnet
            </div>
            <ul className="navbar-menu">
                <li><Link className="navbar-menu-link" to="/employee-list">View Current Employees</Link></li>
            </ul>
        </navbar>
    )
}
export default Header;