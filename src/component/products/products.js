import React, { Component } from 'react';
import classes from './products.module.css';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context/context.js';


class Products extends Component{
    render(){
        return(
        <ProductConsumer>
                {value => {
        const { id, title, img, star, addToCart, price} = this.props.product;
        return(
          
                    <Col className="col-12  col-md-4 col-lg-4 mb-4 ">
                        <div className={classes.myProduct}>
                        
                            <div 
                            className={classes.productImage}
                            onClick={() => 
                            value.detailsHandler(id)
                            }
                            >
                            <Link to="/details">
                                <img src={img} alt="logo"/>
                                </Link>

                                <button disabled={addToCart ? true : false}
                                onClick={() => {
                            value.addToCartHandler(id );
                                }}
                                 > 
                                 {addToCart ? (<p disabled>In The Cart</p>):(<p>Add TO Cart</p>)}
                                 </button>
                            </div>
                           
                            <div className={classes.productInfo}>
                                <h5>{title}</h5>
                                 <div className={classes.starIcons}>
                                   {star}
                                 </div>
                                 <p><span>$</span>{price}</p>
                            </div>
                            
                        </div>
                    </Col>
        )
                }}
             </ProductConsumer>
                
        )
    }
}



    
    
export default Products;