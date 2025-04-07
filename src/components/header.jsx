import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="header">
      <h1>Colour Site</h1>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/grouped">Groups</NavLink>
      </nav>
    </header>
  );
}
