import styled from '@emotion/styled'


import lipstick from "../../Images/lipstick.png"
import foundation from "../../Images/foundation.png"
import nailpolish from "../../Images/nailpolish.png"

import { getProduct } from '../../Redux/ProductReducer/action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from "react-router-dom";
import { ProductCard } from '../../Components/ProductCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'


export const Makeup = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const [makeupItems, setMakeupItems] = useState([])
    const product = useSelector(store => store.productReducer.product)
    const [isNail, setNail] = useState(true)

    const [showLipstick, setLipstick] = useState([])
    const [showFoundation, setFoundation] = useState([])
    const [showNailpolish, setNailpolish] = useState([])

    const [isLipstick, setIsLipstick] = useState(false)
    const [isFoundation, setIsFoundation] = useState(false)
    const [isNailpolish, setIsNailpolish] = useState(false)

    const [sortField, setSortField] = useState("")
    const [sortOrder, setSortOrder] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    const [selectedBrands, setSelectedBrands] = useState([]);
    const navbar = useSelector(store => store.authReducer.navbar)

    const [lipstickPage, setLipstickPage] = useState(1);
    const [foundationPage, setFoundationPage] = useState(1);
    const [nailpolishPage, setNailpolishPage] = useState(1);
    const [makeupPage, setMakeupPage] = useState(1)
    const itemsPerPage = 9;

    
    useEffect(() => {
        dispatch(getProduct(sortField,sortOrder))
       
        
        
      }, [searchParams,sortField,sortOrder])


      useEffect(() => {
       
         
         const filteredMakeupItems = product?.filter(item => item.category === 'makeup');
         setMakeupItems(filteredMakeupItems);
        
        
      }, [product]);
      


      const handleLipstick = ()=>{
        
    
         
        const filteredLipstickItems = makeupItems?.filter(item => item.type === 'lipstick');
        
        setLipstick(filteredLipstickItems);
        setIsLipstick(true)
        setIsFoundation(false)
        setIsNailpolish(false)
        
        setNail(true)

        setLipstickPage(1)
       setFoundationPage(1)
       setNailpolishPage(1)
       setMakeupPage(1)
        
        
       
       
     
  }
  const handleFoundation = ()=>{
    

     
    const filteredConditionerItems = makeupItems?.filter(item => item.type === 'foundation');
    
    setFoundation(filteredConditionerItems);
    setIsLipstick(false)
    setIsFoundation(true)
    setIsNailpolish(false)

    setNail(true)

    setLipstickPage(1)
       setFoundationPage(1)
       setNailpolishPage(1)
       setMakeupPage(1)
    
    
    
   
   
 
}
const handleNailpolish = ()=>{
    

     
const filteredSerumItems = makeupItems?.filter(item => item.type === 'nailpolish');

setNailpolish(filteredSerumItems);
setIsLipstick(false)
setIsFoundation(false)
setIsNailpolish(true)

setNail(false)

setLipstickPage(1)
       setFoundationPage(1)
       setNailpolishPage(1)
       setMakeupPage(1)








}




const handleOptionChange = (event) => {


setSortOrder(event.target.value);
setSortField("price")

// if(sortField=="price"&&sortOrder=='asc'||'desc'&&isShampoo===true){
    
        
// }

};

useEffect(()=>{
    const filteredLipstickItems = makeupItems?.filter(item => item.type === 'lipstick');
        
    setLipstick(filteredLipstickItems);

    const filteredConditionerItems = makeupItems?.filter(item => item.type === 'foundation');
    
    setFoundation(filteredConditionerItems);

    const filteredSerumItems = makeupItems?.filter(item => item.type === 'nailpolish');

    setNailpolish(filteredSerumItems);

},[product,makeupItems])




   //...........................

   const handleBrandCheckboxChange = (event) => {
    const brandName = event.target.value;
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, brandName]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    }
       setLipstickPage(1)
       setFoundationPage(1)
       setNailpolishPage(1)
       setMakeupPage(1)
  };



  const indexOfLastLipstickItem = lipstickPage * itemsPerPage;
  const indexOfFirstLipstickItem = indexOfLastLipstickItem - itemsPerPage;
  const currentLipstickItems = showLipstick
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstLipstickItem, indexOfLastLipstickItem);
  
  const indexOfLastFoundationItem = foundationPage * itemsPerPage;
  const indexOfFirstFoundationItem = indexOfLastFoundationItem - itemsPerPage;
  const currentFoundationItems = showFoundation
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstFoundationItem, indexOfLastFoundationItem);
  
  const indexOfLastNailpolishItem = nailpolishPage * itemsPerPage;
  const indexOfFirstNailpolishItem = indexOfLastNailpolishItem - itemsPerPage;
  const currentNailpolishItems = showNailpolish
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstNailpolishItem, indexOfLastNailpolishItem);
  
    const indexOfLastMakeupItem = makeupPage * itemsPerPage;
  const indexOfFirstMakeupItem = indexOfLastMakeupItem - itemsPerPage;
  const currentMakeupItems = makeupItems
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstMakeupItem, indexOfLastMakeupItem);


    
  return (
    <DIV>
      {
        navbar && <Navbar />
      }

        <div className='container'>
            <h1>The Makeup Store</h1>
            <p>Discover a limitless range of makeup</p>
            <div className='makeup'>
                <img onClick={handleLipstick} src={lipstick} alt="" />
                <img onClick={handleFoundation} src={foundation} alt="" />
                <img onClick={handleNailpolish} src={nailpolish} alt="" />
            </div>
        </div>
        <div className='box'>
            <div>
         <div className='category'>
            <h1>Sort By :</h1>
            <label>
        <input
          type="radio"
          name="options"
          value="asc"
          className='white-checkbox'
          checked={sortOrder === 'asc'}
          onChange={handleOptionChange}
        />
        Price : Low to High
      </label>
            <br />
            <label>
        <input
          type="radio"
          name="options"
          value="desc"
          className='white-checkbox'
          checked={sortOrder === 'desc'}
          onChange={handleOptionChange}
        />
        Price : High to Low
      </label>
          </div>


          <div className='category'>
            <h1>Select Any Brand</h1>
            <label><input className='white-checkbox' type="checkbox" value="myglamm"
            onChange={handleBrandCheckboxChange} />MyGlamm</label>
            <br />
           {
            
         isNail &&   <label><input className='white-checkbox' type="checkbox" value="maybelline"
            onChange={handleBrandCheckboxChange} />Maybelline New York</label>
            
            } 
            {
                isNail && <br />
            }
            
            <label><input className='white-checkbox' type="checkbox" value="swissbeauty"
            onChange={handleBrandCheckboxChange} />Swiss Beauty</label>
            <br />
          {
           isNail && <label><input className='white-checkbox' type="checkbox" value="mac"
            onChange={handleBrandCheckboxChange} />M.A.C</label>
          }
          {
            isNail && <br />
          }
            
            <label><input className='white-checkbox' type="checkbox" value="lakme"
            onChange={handleBrandCheckboxChange} />Lakme</label>
          </div>
           
          </div>

          <div  className="product" >
          {
        isLipstick?
        showLipstick
        .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
        .map((el) => <ProductCard key={el._id} {...el} />)
        .slice(indexOfFirstLipstickItem, indexOfLastLipstickItem)

        : isFoundation? showFoundation
        .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
        .map((el) => <ProductCard key={el._id} {...el} />)
        .slice(indexOfFirstFoundationItem, indexOfLastFoundationItem)

        :isNailpolish? showNailpolish
        .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
        .map((el) => <ProductCard key={el._id} {...el} />)
        .slice(indexOfFirstNailpolishItem, indexOfLastNailpolishItem)
        : makeupItems
        .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
        .map((el) => <ProductCard key={el._id} {...el} />)
        .slice(indexOfFirstMakeupItem, indexOfLastMakeupItem)
        }
        </div>
           
        </div>


        {
                isLipstick && <div className="pagination">
                <button onClick={() => setLipstickPage(lipstickPage - 1)} disabled={lipstickPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{lipstickPage}</span>
                <button
                  onClick={() => setLipstickPage(lipstickPage + 1)}
                  disabled={currentLipstickItems.length < itemsPerPage}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            }

            {
                isFoundation && <div className="pagination">
                <button onClick={() => setFoundationPage(foundationPage - 1)} disabled={foundationPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{foundationPage}</span>
                <button
                  onClick={() => setFoundationPage(foundationPage + 1)}
                  disabled={currentFoundationItems.length < itemsPerPage}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            }


            {
                isNailpolish && <div className="pagination">
                <button onClick={() => setNailpolishPage(nailpolishPage - 1)} disabled={nailpolishPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{nailpolishPage}</span>
                <button
                  onClick={() => setNailpolishPage(nailpolishPage + 1)}
                  disabled={currentNailpolishItems.length < itemsPerPage}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            }

           {
                !isLipstick && !isFoundation && !isNailpolish && <div className="pagination">
                <button onClick={() => setMakeupPage(makeupPage - 1)} disabled={makeupPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{makeupPage}</span>
                <button
                onClick={() => setMakeupPage(makeupPage + 1)}
                disabled={currentMakeupItems.length < itemsPerPage}
                >
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            }


      {
        navbar && <Footer  />
      }

            
    </DIV>
  )
}

const DIV = styled.div`

/* Global Container */
.container {
    padding: 40px;
    width: 100%;
}

/* Header Text */
.container h1 {
    font-size: 30px;
    font-weight: 600;
    padding-left: 27px;
    opacity: 0.8;
}

.container p {
    padding-left: 27px;
    opacity: 0.6;
}

/* Makeup Category Images */
.makeup {
    display: flex;
    justify-content: left;
    gap: 20px;
    padding-top: 20px;
    padding-left: 20px;
}

.makeup img {
    width: 10%;
    transition: transform 0.2s;
}

.makeup img:active {
    transform: scale(1.2);
}

/* Category Box */
.category {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
    margin: 20px;
    width: 300px;
    height: 200px;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin-left: 60px;
    position: relative:
    text-align: left;
}

.category h1 {
    font-size: 17px;
    text-align: center;
    padding: 10px;
}

label {
    text-align: left;
}

/* Custom Checkbox */
.white-checkbox {
    appearance: none;
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid #d6dade;
    background-color: #e6e9ec;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    right: 10px;
    margin-top: 3px;
}

.white-checkbox:checked {
    background-color: #e80071;
    border: none;
}

/* Layout Box */
.box {
    display: flex;
}

/* Product Grid */
.product {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.product-card {
        position: relative;
        background-color: #fff;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product-card img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .product-details {
        margin-top: 10px;
    }

    .product-details h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .product-details p {
        font-size: 14px;
        color: #72717f;
    }

    .add-to-cart {
        margin-top: 15px;
        padding: 10px;
    }

    .add-to-cart button {
        width: 100%;
        padding: 12px;
        background-color: #e80071;
        color: white;
        font-weight: 600;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    .add-to-cart button:hover {
        background-color: #a10450;
        transform: scale(1.05);
    }

    .add-to-cart button:active {
        transform: scale(0.95);
    }

/* Pagination */
.pagination {
    text-align: center;
    padding: 50px;
    margin-left: 360px;
}

.pagination button {
        background-color: white;
        width: 45px;
        height: 45px;
        color: #e80071;
        font-weight: 600;
        font-size: 20px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 50%;
    }

    .pagination span {
        width: 50px;
        height: 50px;
        color: #e80071;
        font-weight: 600;
        font-size: 17px;
        border-radius: 50%;
        margin: 0px 10px 0px 10px;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
        .product {
            grid-template-columns: repeat(3, 1fr);
        }

        .add-to-cart button {
            padding: 10px;
        }
    }

    @media (max-width: 480px) {
        .product {
            grid-template-columns: repeat(2, 1fr);
        }

        .add-to-cart button {
            padding: 8px;
            font-size: 14px;
        }
    }
`;
