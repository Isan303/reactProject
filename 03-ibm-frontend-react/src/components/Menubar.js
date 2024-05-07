import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menubar = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus) {
        return (
            <>
                <ul>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/emp'}>Employee</Link> </li>
                    <li> <Link to={'/parent'}>Parent</Link> </li>
                    <li> <Link to={'/logout'}>Logout</Link> </li>
                    <li> <Link to={'/get-emp-by-id'}>FindEmployeeById</Link> </li>
                    <li> <Link to={'/get-emp-by-name'}>FindEmployeeByName</Link> </li>
                    <li> <Link to={'/add-emp'}>AddEmployee</Link> </li>
                    
                </ul>
            </>
        );
    }
    else {
        return (
            <>
                <ul>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/register'}>Register</Link> </li>
                    <li> <Link to={'/login'}>Login</Link> </li>
                </ul>
            </>
        );
    }
};

export default Menubar;
