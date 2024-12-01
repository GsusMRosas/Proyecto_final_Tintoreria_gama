import Navbar from "../components/navbar";
import Appname from "../components/appname";
import Pie from "../components/pie";
import Signin from '../components/signin';

export default function SigninPage() {
  return (
    <div>
      <Navbar />
      <Appname />
      <Signin />
      <Pie />
    </div>
  );
}