// import Images from "../Images/maskedGroup1.png
import {Component} from "react"
import {TailSpin} from "react-loader-spinner"

import "./index.css"
import ProductCard from "../ProductCard"

// const Products = () =>{

    // let  style = {
    //     backgroundImage : `url(".././maskedGroup1.png")`,
    //     backgroundSize: "cover",
    //     height: "240px",
    //     width : "200px"
    // }

    // let  style2 = {
    //     backgroundImage : `url(".././product2.png")`,
    //     backgroundSize: "cover",
    //     height: "240px",
    //     width : "200px"
    // }

    // let  style3 = {
    //     backgroundImage : `url(".././product3.png")`,
    //     backgroundSize: "cover",
    //     height: "240px",
    //     width : "200px"
    // }

    // let  style4 = {
    //     backgroundImage : `url(".././product4.png")`,
    //     backgroundSize: "cover",
    //     height: "240px",
    //     width : "200px"
    // }

    // let  styleForShoppingBag = {
    //     backgroundImage : `url("../.././shoppingBag.png")`,
    //     backgroundSize: "cover",
    //     height: "20px",
    //     width : "20px"
    // }

    
    // const productCountAndBagsAndBackPacksText = () =>(
    //     <div className="bags-and-back-pack-and-products-count-send-icon-main-container">
    //         <img src="../.././bagsAndBackPacksText.png" alt="bagsAndBackPacksText"/>
    //         <div className="product-count-and-send-icon-container">
    //             <p>13 Products</p>
    //             <img src="../.././sendIcon.png" alt="sendIcon"/>  
    //         </div>
    //     </div>
    // )

//     // write your code from products function create cards

//     const products = () =>(
//         <div>
            
//         <div className="top-part-cards">
//             <div className="card-main-container">
//                 <div style={style} className="product-image-and-book-mark-container" >
//                     <div className="book-mark-container">
//                        <img src="../.././bookmark.png" alt="bookMark"/>  
//                     </div>
                   
                    
//                 </div>
//                 <div className="price-and-all-tags-container">
//                     <p>The Brown Metro Movers</p>
//                     <div className="rupeeSign-and-discount-price-shopping-bag-container">
//                         <img src="../.././rupeeSign.png" alt="rupeeSign"/>
//                         <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>  
//                         <div style={styleForShoppingBag} className="shopping-bag-main-container">
//                             {/* <img src="../.././shoppingBagIcon.png" alt="shoppingBagWithPlusIcon"/> */}
                           
//                               <p className="plus-sign-text">+</p>   
                           
                            
                           
                         
//                         </div>
                    
//                     </div>
             

//                 </div>
//             </div>

//             <div className="card-main-container">
//                 <div style={style2} className="product-image-and-book-mark-container" >
//                     <div className="book-mark-container">
//                        <img src="../.././bookmark.png" alt="bookMark"/>  
//                     </div>
                   
                    
//                 </div>
//                 <div className="price-and-all-tags-container">
//                     <p>The Metro Movers Black</p>
//                     <div className="rupeeSign-and-discount-price-shopping-bag-container">
//                         <img src="../.././rupeeSign.png" alt="rupeeSign"/>
//                         <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>  
//                         <div style={styleForShoppingBag} className="shopping-bag-main-container">
                           
//                               <p className="plus-sign-text">+</p>   
                           
                            
                           
                         
//                         </div>
                    
//                     </div>
             

//                 </div>
//             </div>

//             <div className="card-main-container">
//                 <div style={style3} className="product-image-and-book-mark-container" >
//                     <div className="book-mark-container">
//                        <img src="../.././bookmark.png" alt="bookMark"/>  
//                     </div>
                   
                    
//                 </div>
//                 <div className="price-and-all-tags-container">
//                     <p>The Metro Movers Black</p>
//                     <div className="rupeeSign-and-discount-price-shopping-bag-container">
//                         <img src="../.././rupeeSign.png" alt="rupeeSign"/>
//                         <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>  
//                         <div style={styleForShoppingBag} className="shopping-bag-main-container">
                           
//                               <p className="plus-sign-text">+</p>   
                           
                            
                           
                         
//                         </div>
                    
//                     </div>
             

//                 </div>
//             </div>

//             <div className="card-main-container">
//                 <div style={style4} className="product-image-and-book-mark-container" >
//                     <div className="book-mark-container">
//                        <img src="../.././bookmark.png" alt="bookMark"/>  
//                     </div>
                   
                    
//                 </div>
//                 <div className="price-and-all-tags-container">
//                     <p>The Metro Movers Black</p>
//                     <div className="rupeeSign-and-discount-price-shopping-bag-container">
//                         <img src="../.././rupeeSign.png" alt="rupeeSign"/>
//                         <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>  
//                         <div style={styleForShoppingBag} className="shopping-bag-main-container">
                           
//                               <p className="plus-sign-text">+</p>   
                           
                            
                           
                         
//                         </div>
                    
//                     </div>
             

//                 </div>
//             </div>

            
//         </div>
//         <div className="bottom-part-cards">
//             <div className="card-main-container">
//                 <div style={style} className="product-image-and-book-mark-container" >
//                     <div className="book-mark-container">
//                        <img src="../.././bookmark.png" alt="bookMark"/>  
//                     </div>
                   
                    
//                 </div>
//                 <div className="price-and-all-tags-container">
//                     <p>The Brown Metro Movers</p>
//                     <div className="rupeeSign-and-discount-price-shopping-bag-container">
//                         <img src="../.././rupeeSign.png" alt="rupeeSign"/>
//                         <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>  
//                         <div style={styleForShoppingBag} className="shopping-bag-main-container">
                           
//                               <p className="plus-sign-text">+</p>   
                           
                            
                           
                         
//                         </div>
                    
//                     </div>
             

//                 </div>
//             </div>

//             <div className="card-main-container">
//                 <div style={style2} className="product-image-and-book-mark-container" >
//                     <div className="book-mark-container">
//                        <img src="../.././bookmark.png" alt="bookMark"/>  
//                     </div>
                   
                    
//                 </div>
//                 <div className="price-and-all-tags-container">
//                     <p>The Metro Movers Black</p>
//                     <div className="rupeeSign-and-discount-price-shopping-bag-container">
//                         <img src="../.././rupeeSign.png" alt="rupeeSign"/>
//                         <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>  
//                         <div style={styleForShoppingBag} className="shopping-bag-main-container">
                           
//                               <p className="plus-sign-text">+</p>   
                           
                            
                           
                         
//                         </div>
                    
//                     </div>
             

//                 </div>
//             </div>

//             <div className="card-main-container">
//                 <div style={style3} className="product-image-and-book-mark-container" >
//                     <div className="book-mark-container">
//                        <img src="../.././bookmark.png" alt="bookMark"/>  
//                     </div>
                   
                    
//                 </div>
//                 <div className="price-and-all-tags-container">
//                     <p>The Metro Movers Black</p>
//                     <div className="rupeeSign-and-discount-price-shopping-bag-container">
//                         <img src="../.././rupeeSign.png" alt="rupeeSign"/>
//                         <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>  
//                         <div style={styleForShoppingBag} className="shopping-bag-main-container">
                           
//                               <p className="plus-sign-text">+</p>   
                           
                            
                           
                         
//                         </div>
                    
//                     </div>
             

//                 </div>
//             </div>

//             <div className="card-main-container">
//                 <div style={style4} className="product-image-and-book-mark-container" >
//                     <div className="book-mark-container">
//                        <img src="../.././bookmark.png" alt="bookMark"/>  
//                     </div>
                   
                    
//                 </div>
//                 <div className="price-and-all-tags-container">
//                     <p>The Metro Movers Black</p>
//                     <div className="rupeeSign-and-discount-price-shopping-bag-container">
//                         <img src="../.././rupeeSign.png" alt="rupeeSign"/>
//                         <img src="../.././rupeeAndDiscountPrice.png" alt="rupeeAndDiscountPrice"/>  
//                         <div style={styleForShoppingBag} className="shopping-bag-main-container">
                           
//                               <p className="plus-sign-text">+</p>   
                           
                            
                           
                         
//                         </div>
                    
//                     </div>
             

//                 </div>
//             </div>

            
//         </div>

//         </div>
    

        

//     )

// return(


//     <div className="products-main-container" >
//         {productCountAndBagsAndBackPacksText()}  
//         {products()}
//     </div>
// )
// }

class Products extends Component {

    state = {productsDataList : [], isLoading: true,count: 0}

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async() =>{
        const url = "https://fakestoreapi.com/products"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

       this.setState({productsDataList : data,count : data.length})
       this.setState({isLoading : false})

       
    }

     productCountAndBagsAndBackPacksText = () =>{
        const {count} = this.state
     return(
        <div className="bags-and-back-pack-and-products-count-send-icon-main-container">
            <img src="../.././bagsAndBackPacksText.png" alt="bagsAndBackPacksText"/>
            <div className="product-count-and-send-icon-container">
                <p>{count} Products</p>
                <img src="../.././sendIcon.png" alt="sendIcon"/>  
            </div>
        </div>
    )}

    loadingIcon = () =>(
        <div>
                <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
        />
        </div>
    )

    renderProductsList = () =>{
        const {productsDataList} = this.state
    
    return(

        
       
           
                 <ul className="products-container">
                     {productsDataList.map((eachProduct) =>{
                        const {id} = eachProduct
                         
                             return(
                                 <ProductCard key={id} eachProduct = {eachProduct}/>  
                                 )
                             })}
                             
                     </ul> )}
          

    

   products = () =>{

    const {isLoading} = this.state

    //     let  style = {
    //     backgroundImage : `url(".././maskedGroup1.png")`,
    //     backgroundSize: "cover",
    //     height: "240px",
    //     width : "200px"
    // }

    // let  style2 = {
    //     backgroundImage : `url(".././product2.png")`,
    //     backgroundSize: "cover",
    //     height: "240px",
    //     width : "200px"
    // }

    // let  style3 = {
    //     backgroundImage : `url(".././product3.png")`,
    //     backgroundSize: "cover",
    //     height: "240px",
    //     width : "200px"
    // }

    // let  style4 = {
    //     backgroundImage : `url(".././product4.png")`,
    //     backgroundSize: "cover",
    //     height: "240px",
    //     width : "200px"
    // }

    // let  styleForShoppingBag = {
    //     backgroundImage : `url("../.././shoppingBag.png")`,
    //     backgroundSize: "cover",
    //     height: "20px",
    //     width : "20px"
    // }
   
   return(
    isLoading ? this.loadingIcon() : this.renderProductsList()
      
)}
                
    render(){
        return(
            <div className="products-main-container" >        
                {this.productCountAndBagsAndBackPacksText()}          
                {this.products()}    
            </div>
        )
    }
}



export default Products