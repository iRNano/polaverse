import { Fragment } from 'react';
import classes from './Header.module.css'
const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Polaverse</h1>
                <div>
                    <ul className={classes['header-links']}>
                        <li>HOME</li>
                        <li>SEARCH</li>
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