import React from 'react';
import classes from './label.module.css';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

function Mylabel(){
    return(
        <div className={classes.label}>
            <h1>A few clicks is all it takes</h1>
            <div className={classes.searchBar}>
                <SearchSharpIcon className={classes.searchIcon}/>
               <input type="text" placeholder="Search"></input>
            </div>
        </div>
    )
}


export default Mylabel;