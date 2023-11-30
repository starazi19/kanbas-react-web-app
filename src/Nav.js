import { Link } from "react-router-dom";


function Nav() {
 return (
  <div>
   <nav className="nav nav-tabs">
     <Link className="nav-link" to="/Labs/a3">A3</Link>
     <Link className="nav-link" to="/Labs/a4">A4</Link>
     <Link className="nav-link" to="/Labs/a5">A5</Link>
     <Link className="nav-link" to="/hello">Hello</Link>
     <Link className="nav-link" to="/Kanbas">Kanbas</Link>
     <Link className="nav-link" to="/Kanbas/signin">Signin</Link>
     <Link className="nav-link" to="/Kanbas/account">Account</Link>
     <Link className="nav-link" to="/Kanbas/admin/users">Users List</Link>
    </nav>
  </div>
 );
}


export default Nav;