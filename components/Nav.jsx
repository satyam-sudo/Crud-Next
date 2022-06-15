import { NavLink } from '.';

export { Nav };

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>
    );
}