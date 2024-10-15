import Logo from '../../assets/troll-face.png';
import './Header.css';

function Header(contact) {
    return(
        <header className="header">
            <img className="header--image" src={Logo} alt="Logo test" width="50" height="50"/>
            <h1 className="header--title">
                Meme Generator
            </h1>
            <h2 className="header--project">React Course - project 3 </h2>
        </header>
    );
}

export default Header;