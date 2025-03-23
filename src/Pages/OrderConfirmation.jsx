import styled from '@emotion/styled'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';

export const OrderConfirmation = () => {
    const navigate = useNavigate()
  return (
    <DIV>
        <Navbar />
        <div className='order'>
        <h2>Nykaa will never contact you to offer products, cash or free prizes, etc. Please do not respond, make payment or share your personal information like CVV, PIN or passwords via a call, WhatsApp or other links</h2>
        <FontAwesomeIcon style={{color:"green",fontSize:"50px",textAlign:"center"}} icon={faCircleCheck} />
        <h1>Order Confirmed</h1>
        <p>We are pleased to confirm your order no. #LUM-{Math.floor(Math.random() * 10000000000) + 1}-{Math.floor(Math.random() * 10000000000) + 1}</p>
        <button onClick={()=>navigate('/allproducts')}>Continue Shopping <FontAwesomeIcon style={{fontSize:"18px"}} icon={faAngleRight} /></button>
        <h3>You will recieve updates on your registered Email or Mobile Number </h3>
        </div>
    </DIV>
  )
}

const DIV = styled.div`
  .order {
    display: grid;
    place-items: center;
    padding: 50px;
    gap: 15px;
  }

  .order h2 {
    font-size: clamp(12px, 2vw, 14px); /* Responsive font size */
    padding: 10px;
    border: 0.1px solid #7db3ea;
    border-radius: 10px;
    background-color: #cae1f6;
    margin: 10px;
    margin-bottom: 50px;
    text-align: center;
  }

  .order h3 {
    margin-top: 100px;
    border: 1px solid #bfbcbd;
    padding: 10px 40px;
    border-radius: 5px;
    font-size: clamp(14px, 2vw, 18px);
  }

  .order h1 {
    font-size: clamp(26px, 3vw, 30px);
    margin: 10px;
  }

  .order p {
    width: 340px;
    text-align: center;
    font-size: clamp(12px, 1.8vw, 14px);
  }

  .order button {
    color: #fc2779;
    font-size: clamp(16px, 2vw, 18px);
    margin: 5px;
    padding: 8px 16px;
    border: 1px solid #fc2779;
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .order button:hover {
    background-color: #fc2779;
    color: white;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .order {
      padding: 30px;
    }
    .order p {
      width: 280px;
    }
    .order h3 {
      margin-top: 50px;
      padding: 10px 20px;
    }
  }
`;
