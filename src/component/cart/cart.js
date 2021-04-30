import React from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './cart.module.css';
import EmptyCart from './emptyCart/emptyCart';
import {ProductConsumer} from '../../context/context';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CartSummary from './cartSummary/cartSummary';
import {Link} from 'react-router-dom';
import SlideHeading from '../slideHeading/slideHeading';



function Cart(){
    return(
        <ProductConsumer>
            {value => {
                const {myCart, cartSubTotal, cartTotal, cartTax, coupon, delivery} = value;
                if(myCart.length > 0){
                    return(
                        <React.Fragment>
                           <SlideHeading/>
               <div className={classes.cartBody}>
               
                <Row>
                    <Col className="col-lg-8 col-md-8  col-12 ">
                    <div className={classes.myCart}>
                         <h2>Shopping Cart</h2>
                         {myCart.map((item) => {
                             return(
                                <div className={classes.myCartInfo}>
                                    <div >
                                        <div className={classes.myCartImg}>
                                            <img src={item.img} alt="logo"/>
                                        </div>
                                        <div className={classes.cartLeft}>
                                            <h5>{item.title}</h5>
                                            Variant
                                            <h6>Lorem ipsum dolor amet offal butcher quinoa sustainable</h6>
                                            <p><span>$</span>{item.price}</p>
                                        </div>
                                    </div>

                                 <div className={classes.myButton}>
                                    <div className={classes.counter}>
                                         <button >{item.count} pcs</button>
                                     </div>
                                    <div className={classes.arrow}>
                                        <button onClick={() => value.incrementHandler(item.id) }>
                                            <span><ArrowDropUpIcon/></span>
                                       </button>
                                       
                                    <button onClick={() => value.decrementHandler(item.id)}>
                                      <span><ArrowDropDownIcon/></span>  
                                    </button>
                                    </div>
                                 </div>
                               
                            </div>
                            )
                        })}
                            </div>
                            <div className={classes.tempButton}>
                                <Link to="/">
                                <button>Cancel</button>
                                </Link>
                                <Link to="/shipDetails">
                                <button>Next</button>
                                </Link>
                            </div>
                    
                    </Col>
                    <Col className="col-lg-4 col-md-4 col-12">
                        <CartSummary
                         cartSubTotal={cartSubTotal}
                         cartTotal={cartTotal}
                         cartTax={cartTax}
                         coupon={coupon}
                         delivery={delivery}
                         couponHandler={value.changeCouponHandler}
                        />
                    </Col>
                </Row>
                 
                </div>
        </React.Fragment>
                    )
                } else{
                   return  <EmptyCart/>;
                }
            }}

          
       
        </ProductConsumer>
    )
}

export default Cart;