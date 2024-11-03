import './Navigation.css';
import earthLogo from '../../assets/earth.png'

function Navigation() {
  return (
    <nav className="header-navigation">
      <img src={earthLogo} alt="logo" height="50" width="50"/>
      <h1>My Travel Journal</h1>
    </nav>
  )
}

export default Navigation;
