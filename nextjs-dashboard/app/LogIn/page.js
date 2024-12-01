import Navbar from "../components/navbar";
import Appname from "../components/appname";
import Pie from '../components/pie';
import Login from "../components/login.js";

export default function LogIn(){
    return (
        <div className="Login"> 
            <Navbar />
            <Appname />
            <Login /> 
            <Pie />
        </div>
    );
}