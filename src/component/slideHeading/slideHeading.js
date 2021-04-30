import React from 'react';
import classes from './slideHeading.module.css';
import {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Cart from '../cart/cart';
import ShipDetail from '../cart/shipDetails/shipDetails';
import CartPayment from '../cart/cartPayment/cartPayment';


function SlideHeading(){
    const [key, setKey] = useState('home');


    return(
        <React.Fragment>
             <Tabs
                fill justify 
                className={classes.head}
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                >
                <Tab
                className={classes.tab}
                 eventKey="home" title="Shopping Cart">
                    <Cart/>
                </Tab>
                <Tab
                 className={classes.tab}
                 eventKey="profile" title="Shipping Details">
                    < ShipDetail/>
                </Tab>
                <Tab 
                 className={classes.tab}
                eventKey="contact" title="Payment Method" >
                    <CartPayment/>
                </Tab>
             </Tabs>

            
        </React.Fragment>
    )
}

export default SlideHeading;