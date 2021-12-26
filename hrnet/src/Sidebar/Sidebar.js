import {Link} from "react-router-dom";   
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
            <Link className="mySidenav-link" to="/">
                <i class="fas fa-user-plus"></i>
                <span>New Employee</span>
            </Link>
            <Link className="mySidenav-link" to="/">
                <i class="fas fa-users"></i>
                <span>Employees List</span>
            </Link>
            <div className="copyrigth">
                <span className="copyrigth-logo">HRNet</span>
                <span className="copyrigth-mention">© 2021 All right reserved.</span>
            </div>
        </div>
    )
}

export default Sidebar;