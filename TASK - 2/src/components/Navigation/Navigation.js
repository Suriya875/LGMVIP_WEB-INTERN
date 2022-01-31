import React from 'react';
import classes from './Navbar.module.css';

const Navigation = ({onButtonSubmit}) => {

            return(

                <nav className={classes.navbar}>
                    <h3 className={classes.brand}>MARKET</h3>
                    <div className={classes.navlinks}>
                        <button className={classes.btns} onClick={onButtonSubmit}>
                            Get Clients
                        </button>
                    </div>
                </nav>
            );
        }


export default Navigation;
