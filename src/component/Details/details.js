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
                    const {id, img, img2, img3, title, price, star, info, review, variant, addToCart } =
                    value.Details;
                    return (
                        <React.Fragment>
                        <div className={classes.details}>
                            <Row>
                                <Col className="col-lg-6 col-md-6 col-12">
                                    <div className={classes.detailImage}>
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                                                    <img src={img} alt="logo"/>
                                                </li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                                    <img src={img2}  alt="logo"/>
                                                </li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                                    <img src={img3}  alt="logo"/>
                                                </li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img class="d-block " src={img} alt="First slide"/>
                                                </div>
                                                <div class="carousel-item">
                                                <img class="d-block "src={img2} alt="Second slide"/>
                                                </div>
                                                <div class="carousel-item">
                                                <img class="d-block "src={img3} alt="Third slide"/>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next d-none" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                            </div>
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
                                            <select  
                                            onChange={(e) => {value.variantHandler(e.target.value)}}
                                            className="ml-auto">
                                                {variant.map(item => (
                                                    <option 
                                                   
                                                    key={item.key}
                                                    value={item.value}
                                                    >
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