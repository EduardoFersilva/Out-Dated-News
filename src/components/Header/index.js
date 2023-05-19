import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/anos70">Anos70</Link>
            <Link to="/anos80">Anos80</Link>
        </header>
    )
}



export default Header;

