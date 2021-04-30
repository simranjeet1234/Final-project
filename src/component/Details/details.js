import React, { Component,  } from 'react';
import {ProductConsumer} from '../../context/context';
import {Row, Col} from 'react-bootstrap';
import classes from './details.module.css';
import {Link} from 'react-router-dom';
import Review from './review/review';

class Details extends Component{
    render(){
        return(
            <ProductConsumer>
                {value => {
                    const {id, img, title, price, star, info, review, variant, addToCart } =
                    value.Details;
                    return (
                        <React.Fragment>
                        <div className={classes.details}>
                            <Row>
                                <Col className="col-lg-6 col-md-6 col-12">
                                    <div className={classes.detailImage}>
                                    <img src={img} alt="logo"/>
                                    </div>
                                </Col>
                                <Col className="col-lg-6 col-md-6 col-12">
                                    <div className={classes.detailInfo}>
                                        <div className={classes.detailsHeading}>
                                            <h2>{title}</h2>
                                            <div>
                                                <span>{star}</span>
                                                <p>{Object.keys(review).length} reviews</p>
                                            </div>
                                        </div>
                                        <div className={classes.detailPrice}>
                                            <p><span>$</span>{price}</p>
                                            <select className="ml-auto">
                                                {variant.map(item => (
                                                    <option key={item.key} value={item.value}>
                                                        {item.value}
                                                    </option>
                                                ))}
                                            </select>
                                            
                                        </div>
                                        <div className={classes.detailPara}>
                                            <p>
                                                {info}
                                            </p>
                                        </div>
                                        <Link to="/cart">
                                        <button disabled={addToCart ? true : false}
                                                onClick={() => {
                                            value.addToCartHandler(id );
                                                }}
                                                > 
                                                {addToCart ? (<p disabled>In The Cart</p>):(<p>Add TO Cart</p>)}
                                         </button>
                                        </Link>
                                    </div>
                                </Col>

                            </Row>
                                      
                        </div>
                         <Review 
                         review={review}
                         star={star}
                         /> 
                         </React.Fragment>
                    );
                }}
            </ProductConsumer>

        
        );
    }
}

export default Details;