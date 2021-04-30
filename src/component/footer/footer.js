import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import classes from './footer.module.css';

function Footer() {
    return(
        <footer className={classes.footer}>
            <div className={classes.footerlinks}>
                <a href="#home">Home</a>
                <a href="#home">About</a>
                <a href="#home">Shop</a>
                <a href="#home">Help</a>
            </div>
            <div className={classes.copyright}>
                <CopyrightIcon className={classes.icon}/>
                <h6>Company Name</h6>
            </div>
        </footer>
    )
}


export default Footer;