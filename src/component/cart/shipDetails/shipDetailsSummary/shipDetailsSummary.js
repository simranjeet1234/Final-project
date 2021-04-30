import React from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './shipDetailsSummary.module.css';
import {ProductConsumer} from '../../../../context/context';

 function ShipDetailsSummary(){
    return(
        <ProductConsumer>
          {value => {
                const {myCart, cartSubTotal, cartTotal, coupon, delivery} = value;
                return(
                    <React.Fragment>
                        <div className={classes.cartSummary}>
                            <h2>Summary</h2>
                            {myCart.map((item) => {
                                return (
                                    <div>
                                    <div className={classes.summaryInfo}>
                                    <div className={classes.summarytImg}>
                                            <img src={item.img} alt="logo"/>
                                        </div>
                                        <div className={classes.summaryLeft}>
                                            <h5>{item.title}</h5>
                                            <h6>Lorem ipsum dolor amet offal butcher quinoa sustainable</h6>
                                            <p><span>$</span>{item.price}</p>
                                        </div>
                                </div>
                                
                                </div>
                                )
                            })}
                            <div className={classes.cal}>
                                    <Row>
                                        <Col className="col-lg-6  col-6  mt-2">
                                            <p>SUBTOTAL</p>
                                        </Col>
                                        <Col className="col-lg-6  col-6  mt-2">
                                            <p><span>${cartSubTotal}</span></p>
                                        </Col>
                                        <Col className="col-lg-6  col-6 ">
                                            <p>SHIPPING</p>
                                        </Col>
                                        <Col className="col-lg-6  col-6 ">
                                            <p>${delivery}</p>
                                        </Col>
                                        <Col className="col-lg-6  col-6 ">
                                            <p>TAXES</p>
                                        </Col>
                                        <Col className="col-lg-6  col-6 ">
                                            <p>10%</p>
                                        </Col>
                                        <Col className="col-lg-6  col-6 ">
                                        <p>DISCOUNT</p>
                                        </Col>
                                        <Col className="col-lg-6  col-6 ">
                                            <p>${coupon}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={classes.total}>
                                <Row>
                                        <Col className="col-lg-6">
                                            <p>TOTAL</p>
                                        </Col>
                                        <Col className="col-lg-6">
                                            <p><span>$</span>{cartTotal}</p>
                                        </Col>
                                </Row>       
                                </div>
                        

                        </div>
                    </React.Fragment>
                )
          }}
        
        </ProductConsumer>
    )
}

export default ShipDetailsSummary;