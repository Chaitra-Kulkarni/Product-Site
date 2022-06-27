import './Header.css';

function Header() {
    return(
        <div>
            <header className="header">
                <nav className="nav-bar">
                    <h2>Product Site</h2>
                    <input className="search-bar" type="search" placeholder="Search" />
                    <label>Cart: </label>
                </nav>
            </header>
        </div>
    )
}

export default Header;