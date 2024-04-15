import { IoIosSearch } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";

import  "./index.css"

const Header = () =>{

   const brandNameAndControlIcons = () =>(
        <div className ="header-and-search-logos-container">
           <div>
            <img src="../.././tanTrimLogo.png" alt="tanTrimLogo"/>
             {/* <h1 className="brand-name">TANN TRIM</h1> */}
           </div> 
           <div className="header-icons-container">
             {/* <IoIosSearch color="#e3e8e8"/> */}
             <img src="../.././searchIcon.png" alt="searchIcon"/>
             <img src="../.././userIcon.png" alt="searchIcon"/>
             {/* <BsFillPersonFill color="#e3e8e8"/> */}
             <img src="../.././bookMarkIcon.png" alt="searchIcon"/>
             {/* <BsBookmark color="#e3e8e8"/> */}

             <img src="../.././shoppingBagIcon.png" alt="shoppingBagIcon"/>
             {/* <MdShoppingBag   color="#e3e8e8"/> */}
           </div>
        </div>

    )

    const menubar =() =>(
        <div className="menu-bar-main-container">
            <div className="menu-bar-container">
                <p>Bags</p>
                <p>Travel</p>
                <p>Accesories</p>
                <p>Gifting</p>
                <p>Jewelery</p>
            </div>  
        </div>
       
    )


return(
    <div className="header-main-container">

        {brandNameAndControlIcons()}
        {menubar()}
        
        
    </div>
)}


export default Header