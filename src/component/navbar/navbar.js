import React from 'react';
import { Navbar, Nav, Button  } from 'react-bootstrap';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import classes from './navbar.module.css';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context/context';


function MyNavbar() {
    return(  
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-5">
                        <Nav.Link className={classes.links} href="/">Home</Nav.Link>
                        <Nav.Link className={classes.links} href="#about">About</Nav.Link>
                        <Nav.Link className={classes.links} href="#shop">Shop</Nav.Link>
                        <Nav.Link className=" mr-5" href="#help">Help</Nav.Link>
                         <Link to="/cart">
                            <Button variant="warning"> 
                                <ShoppingCartSharpIcon/> Your Cart   
                                <ProductConsumer>
                                    {value => {
                                        const {myCart} = value;  
                                        if(myCart.length > 0){
                                            return(
                                                <span class="badge badge-light">{myCart.length}</span> 
                                             ) ;
                                        }
                                    }}
                                     
                                    </ProductConsumer>         
                            </Button>
                        </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
        
    
    )
}

export default MyNavbar ;