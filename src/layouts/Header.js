// import { Fragment } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className={classes.header}>
        <div><h1 className={classes.brand} onClick={() => navigate('/')} aria-hidden="true">Polaverse</h1></div>
        <div>
          <ul className={classes['header-links']}>
            <Link to="/"><li>HOME</li></Link>
            {/* <li onClick={() => navigate('/')}>HOME</li> */}
            <Link to="/search"><li>SEARCH</li></Link>
            {/* <li onClick={() => navigate('/search')}>SEARCH</li> */}
          </ul>
        </div>
      </header>
      {/* <div>
                <p>some shjt</p>
            </div> */}
    </>
  );
}

export default Header;
