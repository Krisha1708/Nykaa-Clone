import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Navbarch from './Navbarch'
// import { Navigate } from 'react-router-dom'
import { Makeup } from './categories/Makeup'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux'
import { setUserLogin } from '../Redux/AuthReducer/action'
import { AddToCart } from './AddToCart'
import { Hair } from './categories/Hair'


import { setUserNavbar } from '../Redux/AuthReducer/action';







// import { MdOutlineSignalCellularAlt1Bar } from "react-icons/md"
// import { SlLocationPin } from "react-icons/sl"
// import { MdCardGiftcard } from "react-icons/md"
// import { MdHelpOutline } from "react-icons/md"







export const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false)
    const userLogin = useSelector(store => store.authReducer.login)
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cartReducer.items);
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()
    const navbar = useSelector(store => store.authReducer.navbar)



    const [display, setDisplay] = useState('hidden')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }



    const handleKeyDown = (e) => {


        if (e.key === 'Enter') {
            if (inputValue == 'shampoo' || inputValue == 'conditioner' || inputValue == 'serum' || inputValue == 'Shampoo' || inputValue == 'Conditioner' || inputValue == 'Serum' || inputValue == 'SHAMPOO' || inputValue == 'CONDITIONER' || inputValue == 'SERUM' || inputValue == 'HAIR' || inputValue == 'hair' || inputValue == 'Hair' || inputValue == 'HAIR SERUM' || inputValue == 'hair serum' || inputValue == 'Hair Serum' || inputValue == 'HAIRSERUM' || inputValue == 'hairserum' || inputValue == 'Hairserum' || inputValue == 'Hair serumm') {
                // Redirect to the home page when Enter is pressed

                dispatch(setUserNavbar(true))
                navigate('/haircare')
            }
            else if (inputValue == 'lipstick' || inputValue == 'foundation' || inputValue == 'nailpolish' || inputValue == 'Lipstick' || inputValue == 'Foundation' || inputValue == 'Nailpolish' || inputValue == 'nail polish' || inputValue == 'Nail polish' || inputValue == 'Nail Polish' || inputValue == 'LIPSTICK' || inputValue == 'FOUNDATION' || inputValue == 'NAILPOLISH' || inputValue == 'NAIL POLISH' || inputValue == 'NailPolish' || inputValue == 'makeup' || inputValue == 'Makeup' || inputValue == 'MAKEUP' || inputValue == 'MAKE UP' || inputValue == 'make up' || inputValue == 'Make up' || inputValue == 'Make Up' || inputValue == 'MakeUp') {
                // Redirect to the home page when Enter is pressed
                dispatch(setUserNavbar(true))
                navigate('/makeup')

            }
            else if (inputValue == 'facewash' || inputValue == 'mosturizer' || inputValue == 'serum' || inputValue == 'Facewash' || inputValue == 'Mosturizer' || inputValue == 'Serum' || inputValue == 'Face wash' || inputValue == 'Face Wash' || inputValue == 'FACEWASH' || inputValue == 'MOSTURIZER' || inputValue == 'SERUM' || inputValue == 'FACE WASH' || inputValue == 'cream' || inputValue == 'face cream' || inputValue == 'Face Cream' || inputValue == 'CREAM' || inputValue == 'FACE CREAM' || inputValue == 'Face cream' || inputValue == 'Cream' || inputValue == 'facecare' || inputValue == 'face care' || inputValue == 'face products' || inputValue == 'Face products' || inputValue == 'Face Products' || inputValue == 'FACE PRODUCTS' || inputValue == 'FACEPRODUCTS' || inputValue == 'faceserum' || inputValue == 'face serum' || inputValue == 'Faceserum' || inputValue == 'FACESERUM' || inputValue == 'FACE SERUM' || inputValue == 'Face Serum' || inputValue == 'Face serum') {
                // Redirect to the home page when Enter is pressed
                dispatch(setUserNavbar(true))

                navigate('/facecare')
            } else {
                alert('Enter valid product')
            }
        }


    };



    const calculateTotalQuantity = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };

    const totalQuantity = calculateTotalQuantity();



    useEffect(() => {
        let hoverTimeout;

        if (isHovered) {
            hoverTimeout = setTimeout(() => {
                setIsHovered(false);
            }, 10000); // 10 seconds
        }

        return () => {
            clearTimeout(hoverTimeout);
        };
    }, [isHovered]);

    const handleHover = () => {
        setIsHovered(true)
    }



    const handleBag = () => {
        userLogin ? setDisplay('visible') : alert("Please Login First")

    }



    return (
        <DIV>



            <div className='upperNav'>
                <div>
                    <p className='animated-text'>
                        <span>Sale is Live - Upto 50% Off On Your Favorite Brands!</span>
                    </p>
                </div>

                <div className='uprnavbtn'>
                    <a href='https://www.nykaa.com/installApp'><i class='bx bx-mobile-alt' ></i> Get App </a>
                    <a>|</a>
                    <a href='https://www.nykaa.com/stores-n-events-desktop'><i class='bx bx-current-location'></i> Store & Events </a>
                    <a>|</a>
                    <a href='https://www.nykaa.com/giftcard/list'><i class='bx bx-gift' ></i> Gift Card </a>
                    <a>|</a>
                    <a href='https://www.nykaa.com/help-center?dl_type=help_center'><i class='bx bx-help-circle' ></i> Help</a>


                </div>
            </div>

            {/* <Navbarch /> */}

            <nav>
                <div className='wrapper'>

                    <div className='logo'>
                    <a style={{ fontSize: "40px", fontWeight: "800", color: "#fc2779" }} onClick={() => navigate('/')} className='logo' href="#">NYKAA</a>
                    </div>


                    <div className='navlinks'>
                        <ul className='navlinks'>

                            <li
                                className="hover-button"
                                onMouseEnter={handleHover}
                            >
                                <a onClick={() => navigate('/allproducts')} href="#">Categories</a>
                            </li>

                            <li>
                                <a className='brand' href="#">Brands</a>
                                <div className="mega-box">
                                    <div className="content">

                                        <div className="row">
                                            <header>Top Brands</header>
                                            <ul class="mega-links">
                                                <li><img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png" alt="" /></li>
                                                <li><img src="https://adn-static2.nykaa.com/media/wysiwyg/lakme_mega_menu_header.png" alt="" /></li>
                                                <li><img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png" alt="" /></li>
                                                <li><img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/mac.png" alt="" /></li>
                                                <li><img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Biotique_new.png" alt="" /></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li><a href="#">Luxe</a></li>
                            <li><a href="#">Nykaa Fashion</a></li>
                            <li><a href="#">Beauty Advice</a></li>
                        </ul>
                    </div>

                    <div className='inputSection'>
                        <div className='searchDiv'>
                            <i class='bx bx-search-alt-2' ></i>
                            <input onKeyDown={handleKeyDown} onChange={handleInputChange} className='search' placeholder='Search on Nykaa' type="text" />

                        </div>

                        <div className='signup'>
                            {
                                !userLogin ? <div>
                                    <button className='signIn'  onClick={() => navigate('/login')}><FontAwesomeIcon icon={faUser}  /> Login</button>
                                    {/* <div className="mega-box2">
                                        <div className="content">

                                            <div className="row">
                                                <header style={{ textAlign: "center" }}>Login / Create Account</header>
                                                <div>
                                                    <p style={{ opacity: "0.6" }}>Register now and get 2000 Nykaa reward points</p>
                                                    <button onClick={() => navigate('/login')}>Sign In</button>

                                                </div>
                                                <br />
                                                <div>
                                                    <button>Sign in with Google</button>
                                                </div>


                                            </div>
                                        </div>
                                    </div> */}
                                </div> :
                                    <div className='btn'>
                                        <button className='logout' onClick={() => dispatch(setUserLogin(false))}  ><FontAwesomeIcon icon={faPowerOff} /> Logout</button>
                                        {/* <div className="mega-box3">
                                            <div className="content">

                                                <div >

                                                    


                                                </div>
                                            </div>
                                        </div> */}
                                    </div>


                            }

                        </div>
                        <div className='addtocart'>
                            <button onClick={handleBag} style={{ fontSize: "25px" }} class='bx bx-shopping-bag' ></button>
                            <div style={{ visibility: `${display}` }} className="mega-box4">
                                <div className='upper'>
                                    <h2 className='upperPart'><FontAwesomeIcon onClick={() => setDisplay('hidden')} style={{ marginRight: "13px", cursor: "pointer" }} icon={faArrowLeft} /> Bag</h2><p className='quantity'>{totalQuantity} items</p>
                                </div>

                                <AddToCart />

                            </div>
                        </div>

                    </div>


                </div>
            </nav>







        </DIV>

    )
}

const DIV = styled.div`

    position: sticky;
    top: 0;
    z-index: 1000;


    .hr {
        border: 0.1px solid #ece6e6;
        opacity: 0.8;
        margin-top: -2px;
    }

    .upperNav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 40px;
        background: rgb(216, 124, 139);
        background: linear-gradient(90deg, rgb(216, 124, 139));
        position: sticky;
        top: 0;
        left: 0;
        z-index: 100;
    }

    .upperNav a {
        margin-right: 15px;
        border: none;
        font-size: 16px;
        background-color: transparent;
        padding: 5px;
        text-decoration: none;
        color: black;
    }

    .upperNav a:hover,
    .upperNav p:hover {
        color: black;
    }

    .upperNav p {
        font-size: 16px;
        font-weight: 600;
        color: black;
    }

    .animated-text {
        animation: fadeInOut 3s infinite;
        opacity: 0;
    }

    @keyframes fadeInOut {
        0%, 100% {
            opacity: 0;
        }
        100% {
            opacity: 0.8;
        }
    }

    /* Main Navbar Styling */
    nav {
        background-color: #fff;
        width: 100%;
        z-index: 999;
        height: 65px;
        line-height: 40px;
    }

    .search {
        color: black;
        background-color: #f4f4f4;
        border: none;
        width: 100%;
        max-width: 150px
        padding: 5px 15px;
        font-size: 14px;
    }

    .search:focus {
        outline: none;
        border: none;
    }

    .searchDiv {
        border: 0.1px solid grey;
        background-color: #f4f4f4;
        border-radius: 5px;
        display: flex;
        padding-right: 5px;
        align-items: center;
    }

    .searchDiv i {
        font-size: 26px;
        text-align: center;
        opacity: 0.5;
        margin-left: 5px;
    }

    .search::placeholder {
        color: #989898;
    }

    .inputSection {
        display: flex;
        font-size: 14px;
        gap: 20px;
        align-items: center;
        font-weight: 600;
    }

    .signIn {
        background-color: #e80071;
        color: white;
        padding: 0.5px 14px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
    }

    .inputSection > i {
        font-size: 26px;
        opacity: 0.8;
    }

    .wrapper {
        position: relative;
        width: auto;
        padding: 10px 30px;
        display: flex;
        justify-content: space-evenly;
    }

    .navlinks li a {
        letter-spacing: 0.2px;
        text-decoration: none;
        list-style: none;
        font-size: 14px;
        font-weight: 600;
        padding: 9px 15px;
        color: #333246;
    }

    .navlinks li {
        list-style: none;
    }

    .logo {
        font-style: oblique 40deg;
    }

    .wrapper .navlinks {
        display: inline-flex;
    }

    .mega-box,
    .mega-box2,
    .mega-box3,
    .mega-box4 {
        position: absolute;
        top: 65px;
        opacity: 0;
        visibility: hidden;
        z-index: 100;
        transition: all 0.3s ease;
        background-color: #f3f3f3;
    }

    .mega-box {
        width: 40%;
        height: 300px;
        left: 0;
    }

    .mega-box2 {
        width: 30%;
        height: 300px;
        left: 900px;
    }

    .mega-box3 {
        width: 15%;
        height: 90px;
        left: 1060px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px;
    }

    .mega-box4 {
        padding: 0px 20px;
        width: 30%;
        height: 699px;
        left: 960px;
        overflow-y: auto;
    }

    .signup:hover .mega-box2,
    .btn:hover .mega-box3 {
        opacity: 1;
        visibility: visible;
        transition: all 1s ease;
    }

    .mega-box3 button {
        width: 100px;
        margin: auto;
        color: #fc2779;
        border: 0.1px solid grey;
        border-radius: 10px;
    }

    .mega-box3 button:hover {
        background-color: #e1e1e2;
    }

    .mega-box .content,
    .mega-box2 .content,
    .mega-box3 .content {
        padding: 25px 20px;
        display: flex;
        justify-content: space-around;
    }

    .row button {
        border: 0.1px solid grey;
        width: 300px;
        border-radius: 10px;
        margin-left: 20px;
        color: #fc2779;
        font-weight: 600;
    }

    .row button:hover {
        background-color: #eeeeee;
    }

    li:hover .mega-box {
        opacity: 1;
        visibility: visible;
        transition: all 0.9s ease;
    }

    #lowerNav button {
        color: #72717f;
        font-size: 14px;
        margin-right: 50px;
    }

    #lowerNav button:hover {
        color: #fc2779;
    }

    #lowerNav {
        text-align: center;
        background-color: white;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    }

    /* Hide mega-box after 1200px */
    @media (max-width: 1200px) {
        .mega-box,
        .mega-box2,
        .mega-box3,
        .mega-box4 {
            display: none !important;
        }
    }

    @media (max-width: 768px) {
    .navlinks {
        display: none !important;
    }

    .wrapper {
        padding-left: 20px;
        padding-right: 20px;
        justify-content: space-between;
    }

    .mega-box,
    .mega-box2,
    .mega-box3,
    .mega-box4 {
        display: none !important;
    }
}

@media (max-width: 680px) {

    position: sticky;
    z-index: 1000;
    
    .navlinks {
        display: none !important;
    }

    .upperNav {
        display: none !important;
    }

    .logo  {
        height: 40px;
        fontSize: 20px;
    }

    .wrapper {
        position: sticky;
        width: auto;
        padding: 10px 30px;
        height: 120px;
        align-items: center;
        margin-top: 0;
        margin-bottom: 25px;
        padding-bottom: 25px;
        background-color: white;
    
    }

    .searchDiv {
        width: auto;
        max-width: 180px;
        position: sticky;
        top: 40px; /* Provide margin from logo */
        background: white;
    }

    .mega-box,
    .mega-box2,
    .mega-box3,
    .mega-box4 {
        display: none !important;
    }
}

@media (max-width: 572px) {
    .logo {
        font-size: 20px;
    }

    .wrapper{
        flex-direction: column;
    }
}

/* Additional specificity for <ul> inside .navlinks */
.navlinks ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

/* Hide <li> specifically */
@media (max-width: 1038px) {
    .navlinks ul li {
        display: none !important;
    }
}

`;
