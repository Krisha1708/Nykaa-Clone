import styled from "@emotion/styled";
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartReducer/action';

export const ProductCard = ({_id,image,name,price,brand,category,type}) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => {
    setIsHovered(false);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({_id,image,name,price,brand,category,type}));
    setAddedToCart(true);
  };

  return (
    <DIV onMouseLeave={handleLeave} onMouseEnter={handleHover}>
      <div key={_id} className="product-card">
        <img className="product-image" src={image} alt={name} />
        <h3 className="product-name">{name}</h3>
        <h3 className="product-price">
          <span style={{opacity: "0.5"}}>MRP:</span> 
          <FontAwesomeIcon style={{fontSize: "14.5px", opacity: "0.7"}} icon={faIndianRupeeSign} /> {price}
        </h3>
        {isHovered && addedToCart ? (
          <div className="addedtocart">
            <button>Added to Bag</button>
          </div>
        ) : isHovered && (
          <div className="addtocart">
            <FontAwesomeIcon icon={farHeart} beat style={{padding: "22px", color: "#e80071"}} />
            <button onClick={handleAddToCart}>Add to Bag</button>
          </div>
        )}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  width: 300px;
  height: 493px;
  padding: 20px;
  text-align: center;
  position: relative;
  margin: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    padding: 10px;
  }

  img {
    padding: 10px;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }

  .addtocart,
  .addedtocart {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    z-index: 2;
    padding: 10px;
  }

  .addtocart button,
  .addedtocart button {
    background-color: #e80071;
    padding: 12px 0;
    color: white;
    font-weight: 600;
    width: 100%;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  .addtocart button:hover,
  .addedtocart button:hover {
    background-color: #a10450;
    transform: scale(1.05);
  }

  .addtocart button:active,
  .addedtocart button:active {
    transform: scale(0.95);
  }

  .product-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 60px; /* To avoid overlap with button */
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;

    .addtocart,
    .addedtocart {
      padding: 5px;
      bottom: 5px;
    }

    .addtocart button,
    .addedtocart button {
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;

    .addtocart button,
    .addedtocart button {
      padding: 8px;
      font-size: 14px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;
