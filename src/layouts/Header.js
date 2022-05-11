// import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.brand} onClick={() => navigate('/')}>Polaverse</h1>
        <div>
          <ul className={classes['header-links']}>
            <li onClick={() => navigate('/')}>HOME</li>
            <li onClick={() => navigate('/search')}>SEARCH</li>
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
