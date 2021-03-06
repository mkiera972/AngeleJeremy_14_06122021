import '../../styles/header/header.css';
import profilImg from '../../assets/img/profil.webp';
import PropTypes from 'prop-types';
/**
 * @function Header
 * @param {object} props setStyle function
 * @returns jsx header
 */
const Header = (props) => {
    const { setStyle } = props; 

    /**
     * @function openNav
     * set state new style property
     */
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
            </div>
            <ul className="navbar-menu">
                <li className="onhover-dropdown">
                    <div className="notification-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <span className="badge badge-pill badge-secondary">2</span>
                    </div>
                </li>
                <li className="onhover-dropdown">
                    <div className="notification-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span className="badge badge-pill badge-secondary">5</span>
                    </div>
                </li>
                <li className="profile-nav onhover-dropdown p-0">
                <div className="media profile-media">
                        <img className="b-r-50" src={profilImg} alt=""/>
                </div>
                </li>
            </ul>
        </nav>
    )
}

Header.propTypes = {
    setStyle : PropTypes.func.isRequired,
};
export default Header;