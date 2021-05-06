import  React from 'react';
// import {Table} from 'react-bootstrap';
import { ProductConsumer } from '../../context/context';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import classes from './infoTable.module.css';

function InfoTable(){
    return(
        <ProductConsumer>
            {value => {
                const {myCart,  cartTotal, coupon, delivery, fName, lName, address1, address2, city,  phone} = value;
                return(
                    <React.Fragment>
                        <div className={classes.body}>
                        <div className={classes.heading}>
                            <h2>Order Summary</h2>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Mode of Payment</th>
                                    <th scope="col">Shipping Address</th>
                                    <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                {myCart.map(item => {
                                    return(
                                        <tbody>
                                    <tr>
                                    <td className={classes.image}><img src={item.img}  alt="logo"/></td>
                                    <td>{item.title}</td>
                                    <td>{item.total}</td>
                                    <td>{item.count}</td>
                                    <td>Credit Card</td>
                                    <td>{fName} {lName}, {address1}, {address2}, {city},  {phone} </td>
                                    <td>Confirmed <CheckCircleOutlineRoundedIcon className={classes.myIcon}/></td>
                                    </tr>
                                         </tbody>

                                    )
                                })}
                            </table>
                            <hr className={classes.line}></hr>
                            <div className={classes.total}>
                                <h3>Tax: 10%</h3>
                                <h3>ship:${delivery}</h3>
                                <h3>Coupon Discount: ${coupon}</h3>
                                <h3>Total price: <span>${cartTotal}</span> </h3>
                            </div>
                        </div>
                        </div>
        </React.Fragment>

                )}}
        
        </ProductConsumer>
    )
}

export default InfoTable;