import { NavLink } from "react-router-dom";

const TopNav = () =>{

    return (
        <>
           <NavLink to="/explore" >Explore</NavLink>
           <NavLink to="/investmenst" >Investments</NavLink>
        </>
    );

}
export default TopNav;