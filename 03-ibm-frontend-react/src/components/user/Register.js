import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";
// import { checkUserExists } from '../../../services/user.service'; 

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

   

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerData);
       
        UserService.registerUser(registerData)
            .then((response) => {
                console.log(response);
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                
                    setAfterRegisterMessage(`Registration failed! user already exists.`);
                
                //setAfterRegisterMessage(`Invalid credentials!`);
            });
    

    };

    return (
        <div className="container mt-3">
            <h1 className="display-4">Register Component</h1>
            <p className="lead">Register here</p>
            <div className="col-4">
            <form className="form form-group mx-2 py-2 my-2 py-2" onSubmit={handleRegisterSubmit}>
                <input className="form-control" type="text" name="username" value={registerData.username} placeholder="username"
                    onChange={handleChange} autoFocus required />
                <br />
                <input className="form-control" type="password" name="password" value={registerData.password} placeholder="password"
                    onChange={handleChange} required />
                <br />
                <input  className="form-control btn btn-outline-light" type="submit"  value="Register" />
            </form>
            <>
                <p>{afterRegisterMessage && afterRegisterMessage} </p>
            </>
            <p>Already registered? <Link to={'/login'}>Login</Link> </p>
            </div>

        </div>
    );
};
export default Register;