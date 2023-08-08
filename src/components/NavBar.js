import{Link} from "react-router-dom"

export default function NavBar(){
    return(
        <div className= "nav">
            <Link to="/">
              <div>Home</div>
              </Link>  
              <Link to="/about">
                <div>About</div>
              </Link>
              <Link to="/stocks">
                <div>DashBoard</div>
              </Link>
        </div>
    )
}