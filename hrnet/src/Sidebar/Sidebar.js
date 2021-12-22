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
            <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    )
}

export default Sidebar;