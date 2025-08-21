import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header style={{ borderBottom: '1px solid #eee' }}>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', padding: '0 10px', gap: '10px' }}>
            <li>
              <Link to='/'>Shop</Link>
            </li>
            <li>
              <Link to='/cart'>Cart (2)</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
