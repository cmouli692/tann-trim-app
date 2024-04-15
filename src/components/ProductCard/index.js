
import "./index.css"

const ProductCard = (props) =>{

    const {eachProduct} = props

    const {title,image,price} = eachProduct


    let  style = {
        backgroundImage : `url("${image}")`,
        // backgroundImage : `url(".././maskedGroup1.png")`,
        backgroundSize: "cover",
        height: "240px",
        width : "200px"
    }

    let  styleForShoppingBag = {
        backgroundImage : `url("../.././shoppingBag.png")`,
        backgroundSize: "cover",
        height: "20px",
        width : "20px"
    }

    return(
        <li className="product-card-container">
            <div className="top-part-cards">
                <div className="card-main-container">
                    <div style={style} className="product-image-and-book-mark-container" >
                        <div className="book-mark-container">
                            <img src="../.././bookmark.png" alt="bookMark"/>  
                        </div>
                               
                                
                        </div>
                        <div className="price-and-all-tags-container">
                            <p className="product-title-text">{title}</p>
                            <div className="rupeeSign-and-discount-price-shopping-bag-container">
                                <img src="../.././rupeeSign.png" alt="rupeeSign"/>
                                <p>{price}</p>
                                {/* <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>   */}
                                <div style={styleForShoppingBag} className="shopping-bag-main-container">
                                    {/* <img src="../.././shoppingBagIcon.png" alt="shoppingBagWithPlusIcon"/> */}
                                       
                                    <p className="plus-sign-text">+</p>   
                                       
                                        
                                       
                                     
                            </div>
                                
                        </div>
                         
            
                    </div>
                </div>
            </div>
        </li>
    )


}



export default ProductCard