import { Fragment } from 'react';
import classes from './Header.module.css'
import { useNavigate } from 'react-router-dom';
const Header = () => {

    let navigate = useNavigate();
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Polaverse</h1>
                <div>
                    <ul className={classes['header-links']}>
                        <li onClick={()=> navigate('/')}>HOME</li>
                        <li onClick={()=> navigate('/search')}>SEARCH</li>
                    </ul>
                </div>
            </header>
            <div>
                <p>some shjt</p>
            </div>
        </Fragment>
    )
}


export default Header;