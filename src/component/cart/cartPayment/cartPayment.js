import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Col, Row, InputGroup, FormControl, Form} from 'react-bootstrap';
import classes from './cartPayment.module.css';
import ShipDetailsSummary from '../shipDetails/shipDetailsSummary/shipDetailsSummary';
import {Link} from 'react-router-dom';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SlideHeading from '../../slideHeading/slideHeading';



function CartPayment(){
    const [errorMessage, setErrorMessage] = useState('');
    const [cvvMessage, setCvvMessage] = useState('');
    const history = useHistory();
   

    const submitHandler = (e) => {
        e.preventDefault();
       history.push("/orderPlaced");
     };

     

    const validateCreditCard = (value) => {
        if (value.length === 16) {
          setErrorMessage("");
        } else {
          setErrorMessage('Enter valid Credit Card Number!');
        }
      };

    const validateCvv = (value) => {
        if (value.length === 3) {
            setCvvMessage("");
        } else {
            setCvvMessage('Enter valid Credit Card Number!');
        }
      };
    
     

    return(
        <React.Fragment>
            <SlideHeading/>
        <div className={classes.PaymentBody}>
           <Row>
          
               <Col className="col-lg-8 col-md-8  col-12 ">
               <Form onSubmit={submitHandler}>
               <div className={classes.PaymentHeading}>
                    <h2>Payment method</h2>
                </div>    
                <div className={classes.creditCard} >
                   <div className={classes.cardHeading}>
                       <div className={classes.radioButton}>
                            <input type="radio" name="payment" checked/>
                       </div>
                       <div>
                           <h6>Credit Card</h6>
                           <p>Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub</p>
                       </div>
                   </div>
                   <div className={classes.creditCardInfo}>
                            <Row className="py-3">
                                <Col className="col-md-6 col-12">
                                <InputGroup className="mb-3">
                                        <FormControl
                                         className={classes.input} 
                                         onChange={(e) => validateCreditCard(e.target.value)}
                                         type="number"
                                          placeholder="0000 0000 0000 0000 " 
                                          required/>
                                        <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2"><CreditCardIcon/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                                <Col className="col-md-3 col-6">
                                    <FormControl  className={classes.monthInput} type="text" placeholder="MM/YY"  maxLength="5" required/>
                                </Col>
                                <Col className="col-md-3 col-6">
                                    <InputGroup className="mb-3">
                                             <FormControl 
                                              className={classes.input}
                                              onChange={(e) => validateCvv(e.target.value)}
                                              type="password"
                                             placeholder="CVV" 
                                             required/>    
                                    </InputGroup>
                                    <span style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    }}>{cvvMessage}</span>
                                </Col>
                            </Row>
                            <span style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    }}>{errorMessage}</span>
                            <Row>
                                <Col className="col-md-12">
                                <FormControl  className={classes.input} type="text" placeholder="Card Holder Name"  required/>
                                </Col>
                            </Row>
                       </div>

                </div>
                <div className={classes.cardBorder}>
                <div className={classes.paypal}>
                <div className={classes.paypalHeading}>
                       <div className={classes.paypalButton}>
                            <input type="radio" name="payment" disabled/>
                       </div>
                       <div>
                           <h6>Paypal</h6>
                           <p>Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub</p>
                       </div>
                   </div>
                   <div className={classes.paypalLogo}>
                       <AccountBalanceWalletIcon className={classes.firstLogo}/>
                           
                       </div>
                   </div>
                </div>


                <div className={classes.tempButton}>
                            <Link to="shipDetails">
                            <button>Back</button>
                            </Link>
                              <button>Pay Now</button>
                        
                        </div>
                        </Form>        
               </Col>
              
               <Col className="col-lg-4 col-md-4 col-12">
                  <ShipDetailsSummary/>
               </Col>
           </Row>
           </div>
    </React.Fragment>

    )
}

export default CartPayment;