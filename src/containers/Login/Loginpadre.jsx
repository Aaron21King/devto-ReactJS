import Navigation from "../../components/Nabvar";
import Login from "../../Pages/Login";
import { useState } from "react";

export default function LoginContainer() {
    const [mobileMenu, setmobileMenu] = useState(false);
    const toggle = () => {
      setmobileMenu(!mobileMenu);
    };
    return (
      <div className="App-container">
        <Navigation openMenu={toggle} />
        <main className="main-container">
            <Login />
         
        </main>
       
      </div>
    );
  }