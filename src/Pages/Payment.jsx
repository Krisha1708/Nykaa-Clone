// AddToCartPage.js
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, addToCart } from '../Redux/CartReducer/action';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';



import visa from "../Images/visa.png"
import upi from "../Images/upi.png"

// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import empty from "../Images/empty.png"
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';


export const Payment = () => {
    // Use the useSelector hook to access the cart items from the Redux store
    const cartItems = useSelector((state) => state.cartReducer.items);
    const dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate()
    const [cc, setCc] = useState(true)
    

    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
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
        setTotalPrice(calculateTotalPrice());
    }, [cartItems]);

    const handleRemoveFromCart = (itemId) => {
        // Dispatch the removeFromCart action with the itemId
        dispatch(removeFromCart(itemId));
        console.log(itemId)
    };


    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
    };


    const handleIncreaseQuantity = (itemId) => {

        const selectedItem = cartItems.find((item) => item._id === itemId);
        if (selectedItem) {
            dispatch(addToCart(selectedItem));
        }
    };


  
    useEffect(()=>{
        if(cartItems.length===0){
            navigate(-1)
        }
    },[])
  


    return (
        <DIV>
            <Navbar />
            <div className='container'>


                <div className='payment'>
                    <h1>Choose Payment Method</h1>
                    <p>Choose the payment method you prefer</p>
                    
                    <div className='paymentOptions'>
                        <div className='card'>
                        <div>
                        <div onClick={()=>setCc(true)}  className='options1'>
                            <FontAwesomeIcon style={{ marginTop: "26px",fontSize:"24px",width:"40px" }} icon={faCreditCard} />
                            <button >  Credit/Debit Card <br /> <span>Visa, Mastercard, Rupay & more</span></button>
                        </div>
                        <hr />
                        <div onClick={()=>setCc(false)} className='options1'>
                            <FontAwesomeIcon style={{ marginTop: "26px",fontSize:"24px",width:"40px" }} icon={faMobileScreenButton} />
                            <button > UPI  <br /> <span>Google Pay, PhonePe, Paytm & more</span></button>
                        </div>
                        <hr />
                        <div className='options1'>
                            <FontAwesomeIcon style={{ marginTop: "26px",fontSize:"24px",width:"40px" }} icon={faMobileScreenButton} />
                            <button >  NetBanking <br /> <span>Pay through your favourite bank</span></button>
                        </div>
                    <hr />

                        <div className='options1'>
                            <FontAwesomeIcon style={{ marginTop: "26px",fontSize:"24px",width:"40px" }} icon={faCalendarWeek} />
                            <button >  Shop now & Pay later <br /> <span>Zest money, Simpl & more</span></button>
                        </div>
                        <hr />
                        <div className='options1'>
                            <FontAwesomeIcon style={{ marginTop: "26px",fontSize:"24px",width:"40px" }} icon={faMoneyBill} />
                            <button >  Cash on delivery <br /> <span>Pay at your doorstep</span></button>
                        </div>
                        <hr />
                        <div className='options1'>
                            <FontAwesomeIcon style={{ marginTop: "26px",fontSize:"24px",width:"40px" }} icon={faWallet} />
                            <button >  Paytm Wallet <br /> <span>Link your Paytm wallet and pay</span></button>
                        </div>
                        <hr />
                        <div className='options1'>
                            <FontAwesomeIcon style={{ marginTop: "26px",fontSize:"24px",width:"40px" }} icon={faGift} />
                            <button >  Gift card <br /> <span>One card for all Nykaa apps</span></button>
                        </div>
                        <hr />
                        <div className='options1'>
                            <FontAwesomeIcon style={{ marginTop: "26px",fontSize:"24px",width:"40px" }} icon={faMoneyBillTransfer} />
                            <button >  EMI <br /> <span>Easy installments</span></button>
                        </div>
                        </div>
                        {
                            cc ?
                            <div  className='creditcard'>
                            <h1>One card for all Lumina apps</h1>
                            <hr />

                            <img src={visa} alt="" />
                            <input style={{width:"350px"}} placeholder='Card Number' type="number" />
                            <div style={{display:"flex"}}>
                            <input style={{width:"262px"}}  placeholder='Expiry (MM/YY)' type="number" />
                            <input style={{width:"80px"}} placeholder='CVV' type="number" />
                            
                            </div>
                            <button onClick={()=>navigate('/orderconfirmation')} >Pay <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faIndianRupeeSign} /> {totalPrice - 99}</button>
                        </div>
                        :
                        <div  className='creditcard'>
                        <h1>Pay with UPI</h1>
                        
                         <p>1. Select UPI App</p>
                        <img src={upi} alt="" />
                        <p>2. Enter UPI/VPA Id</p>
                         <input type="text" style={{width:"350px"}} placeholder='Enter UPI Id' />
                        <button onClick={()=>navigate('/orderconfirmation')} >Pay <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faIndianRupeeSign} /> {totalPrice - 99}</button>
                    </div>
}
                        
                        
                       
                        
                        
                        
                        </div>

                    

                    <div className='rightcart'>
                        <div className='cart'>
                            {cartItems.map((item) => (
                                <div key={item._id}>
                                    <div className='flex'>
                                        <img src={item.image} alt={item.name} />
                                        <h3>{item.name}</h3>
                                        
                                    </div>
                                    <br />


                                    <div className='below'>
                                        <div className='quantity1'>
                                            <p>Quantity: </p>
                                            <button className='inc' onClick={() => handleDecreaseQuantity(item._id)}>-</button>
                                            <p style={{ fontSize: "18px", color: "#fc2779" }}>{item.quantity}</p>
                                            <button className='inc' onClick={() => handleIncreaseQuantity(item._id)}>+</button>
                                        </div>



                                        <p>Price: <FontAwesomeIcon style={{ fontSize: "12px" }} icon={faIndianRupeeSign} />{item.price * item.quantity}</p>



                                    </div>

                                    <hr />
                                    <br />
                                </div>

                            ))}

                        </div>


                        {
                            cartItems.length !== 0
                            && <div className='details'>
                                <h1>Price Details</h1>
                                <div>
                                    <p>Bag MRP ({totalQuantity} items)</p>
                                    <p><FontAwesomeIcon style={{ fontSize: "12px" }} icon={faIndianRupeeSign} />{totalPrice}</p>
                                </div>
                                <div>
                                    <p>Bag Discount</p>
                                    <p><FontAwesomeIcon style={{ fontSize: "12px" }} icon={faIndianRupeeSign} />99</p>
                                </div>
                                <div>
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>
                                <div>
                                    <h1 style={{ marginLeft: "-10px", fontSize: "17px" }}>You Pay</h1>
                                    <h1 style={{ fontSize: "17px" }}><FontAwesomeIcon style={{ fontSize: "15px" }} icon={faIndianRupeeSign} />{totalPrice - 99}</h1>
                                </div>
                            </div>

                        }

   
                    </div>
                    </div>
                </div>
            </div>

        </DIV>
    );
};


const DIV = styled.div`

/* Container */
.container {
    width: 80%;
    margin: 20px auto;
}

/* Right Cart */
.rightcart {
    width: 300px;
}

/* Payment Section */
.payment h1 {
    font-size: clamp(28px, 3vw, 34px);
    font-weight: 600;
    opacity: 0.9;
}
.payment p {
    font-size: 15px;
    opacity: 0.8;
    margin-bottom: 10px;
}

/* Payment Options */
.paymentOptions {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

/* Card */
.card {
    border: 0.1px solid grey;
    display: flex;
    padding: 10px;
    border-radius: 10px;
}

/* Options */
.options1 {
    display: flex;
    gap: 10px;
    width: 350px;
    padding-left: 10px;
    cursor: pointer;
}
.options1:active {
    background-color: #bdbdbd;
    border-radius: 10px;
}
.options1 button {
    text-align: left;
    padding: 10px 30px 10px 10px;
    width: 100%;
}
.options1 span {
    font-size: 14px;
    opacity: 0.9;
}

/* Credit Card Section */
.creditcard {
    max-width: 400px;
    min-width: 280px;
    height: auto;
    border-left: 0.1px solid grey;
    padding: 20px;
    margin-left: 10px;
}
.creditcard h1 {
    font-size: 20px;
    font-weight: 600;
    opacity: 0.9;
    margin: 5px;
}
.creditcard img {
    width: 60%;
    margin: 5px;
}
.creditcard input {
    background-color: #f3f4f5;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    border: none;
}
.creditcard input::placeholder {
    color: #6e7983;
}
.creditcard button {
    background-color: #e80071;
    text-align: center;
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
    margin: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
}
.creditcard button:hover {
    background-color: #c2035f;
}

/* Upper Part */
.upperPart {
    font-size: 20px;
    display: inline;
}

/* Quantity */
.quantity {
    display: inline;
    margin-left: 20px;
    opacity: 0.7;
}

/* Cart Section */
.cart {
    border: 0.1px solid grey;
    border-radius: 10px;
}

/* Cart Image */
.cart img {
    width: 90px;
    height: 90px;
}

/* Flex Container */
.flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
}
.flex h3 {
    line-height: 16px;
    color: #393939;
    font-weight: 400;
}

/* Remove Button */
.remove {
    margin-top: -65px;
    font-size: 20px;
    opacity: 0.7;
}

/* Below Flex */
.below {
    display: flex;
    justify-content: space-between;
    margin-top: -40px;
    padding: 10px;
}

/* Increment Buttons */
.inc {
    font-size: 18px;
    margin: 0 5px;
}

/* Quantity Display */
.quantity1 p {
    display: inline;
    color: #343434;
    font-weight: 500;
    font-size: 16px;
}

/* Details Section */
.details {
    max-width: 300px;
    height: auto;
    border: 0.1px solid grey;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
    line-height: 20px;
}
.details div {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
}
.details > h1 {
    font-size: 17px;
}
.details p {
    font-weight: 500;
    color: #343434;
    font-size: 13px;
}

/* Place Order Section */
.place {
    display: flex;
    justify-content: space-between;
    padding: 17px;
    position: sticky;
    bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 0px 0px inset;
    margin: 20px -20px 0 -20px;
    background-color: white;
}
.place p {
    font-weight: 400;
    opacity: 0.8;
    margin-top: -20px;
}
.place button {
    padding: 5px 30px;
    background-color: #e80071;
    font-size: 16px;
    color: white;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.place button:active {
    background-color: #c2035f;
}

/* No Items Section */
.noitem {
    margin: auto;
    text-align: center;
    width: 300px;
    line-height: 23px;
    height: 500px;
}
.noitem h1 {
    font-size: 20px;
    margin-bottom: 10px;
}
.noitem p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
}
.noitem button {
    padding: 15px 50px;
    background-color: #e80071;
    color: white;
    font-weight: 700;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        width: 90%;
    }
    .paymentOptions {
        flex-direction: column;
    }
    .creditcard {
        width: 100%;
        border-left: none;
        margin-left: 0;
    }
    .rightcart {
        width: 100%;
    }
    .place {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .details {
        width: 100%;
    }
}
`;
