import {Link} from "react-router-dom";   
import profilImg from '../../assets/img/profil.webp';
import PropTypes from 'prop-types';
/**
 * @function Sidebar
 * @param {object} props setStyle function
 * @returns jsx sidebar
 */
const Sidebar = (props) => {
    const { setStyle } = props; 
    const closeNav = () => {
        setStyle((state) => ({
            ...state,
            mySidenav: "0px",
            main: "0px",
        }));     
    }
    return (
        <div id="mySidenav" className="sidenav" style={{width:props.style.mySidenav}}>
            <span href="#" className="closebtn" onClick={closeNav}>&times;</span>
            <div className="mySidenav-entete">
                <span className="copyrigth-logo">HRNet</span>
                <span className="line"></span>
            </div>
            <div className="mySidenav-profile">
                <img className="b-r-50" src={profilImg} alt=""/>
                <div className="mySidenav-profile-body">
                    <span>Emay Walter</span>
                </div>
            </div>
            <Link className="mySidenav-link" to="/">
                <i className="fas fa-user-plus"></i>
                <span>New Employee</span>
            </Link>
            <Link className="mySidenav-link" to="/employee-list">
                <i className="fas fa-users"></i>
                <span>Employees List</span>
            </Link>
            <div className="copyrigth">
                <span className="copyrigth-logo">HRNet</span>
                <span className="copyrigth-mention">© 2022 All right reserved.</span>
            </div>
        </div>
    )
}
Sidebar.propTypes = {
    setStyle : PropTypes.func.isRequired,
};
export default Sidebar;