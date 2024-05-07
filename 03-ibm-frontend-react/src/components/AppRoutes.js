import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./user/Login";
import Parent from "./Parent";
import Employee from './Employee';
import Home from "./Home";
import Page404 from './Page404';
import Menubar from "./Menubar";
import Register from './user/Register';
import Profile from "./user/Profile";
import Logout from './user/Logout';
import { useSelector } from "react-redux";
import FindEmployeeById from "./FindEmployeeById";
import FindEmployeeByName from "./FindEmployeeByName";
import AddEmployee from "./AddEmployee";

const AppRoutes = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus) {
        return (
            <>
                <BrowserRouter>
                    <Menubar />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="emp" element={<Employee />} />
                        <Route path="parent" element={<Parent />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="get-emp-by-id" element={<FindEmployeeById />} />
                        <Route path="get-emp-by-name" element={<FindEmployeeByName />} />
                        <Route path="add-emp" element={<AddEmployee />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
    else {
        return (
            <>
                <BrowserRouter>
                    <Menubar />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
};

export default AppRoutes;

