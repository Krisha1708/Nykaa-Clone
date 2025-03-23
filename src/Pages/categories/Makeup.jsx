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
    max-width: 1200px;
    margin: auto;
}

/* Header Text */
.container h1 {
    font-size: 2rem;
    font-weight: 600;
    padding-left: 20px;
    opacity: 0.85;
    color: #333;
}

.container p {
    padding-left: 20px;
    opacity: 0.6;
    color: #555;
}

/* Makeup Category Images */
.makeup {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    padding-top: 20px;
    padding-left: 20px;
    flex-wrap: wrap;
}

.makeup img {
    width: 100px;
    transition: transform 0.2s;
    cursor: pointer;
    border-radius: 15px;
    border: 2px solid #f1f1f1;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 15px;
}

.makeup img:active {
    transform: scale(1.2);
}

/* Category Box */
.category {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
    margin: 20px;
    width: 100%;
    max-width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
}

.category h1 {
    font-size: 1.2rem;
    text-align: center;
    padding-bottom: 10px;
    color: #333;
    font-weight: bold;
}

label {
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: #555;
    font-size: 1rem;
}

/* Custom Checkbox */
.white-checkbox {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #d6dade;
    background-color: #e6e9ec;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.2s ease;
}

.white-checkbox:checked {
    background-color: #e80071;
    border: none;
    box-shadow: 0 0 10px rgba(232, 0, 113, 0.2);
}

/* Layout Box */
.box {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
}

/* Product Grid */
.product {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

/* Pagination */
.pagination {
    text-align: center;
    padding: 30px;
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
    border: none;
    cursor: pointer;
    transition: 0.2s ease;
    margin: 0 10px;
}

.pagination button:hover {
    background-color: #e80071;
    color: white;
}

.pagination button:disabled {
    background-color: #f2f2f2;
    color: #bbb;
    cursor: not-allowed;
}

.pagination span {
    width: 50px;
    height: 50px;
    color: #e80071;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 50%;
    margin: 0 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

/* Responsive Design */
@media (max-width: 768px) {
    .makeup {
        justify-content: center;
    }
    .box {
        flex-direction: column;
        align-items: center;
    }
    .category {
        max-width: 90%;
    }
    .product {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
}

@media (max-width: 480px) {
    .container h1 {
        font-size: 1.5rem;
    }
    .container p {
        font-size: 0.9rem;
    }
    .makeup img {
        width: 80px;
    }
    .category {
        height: auto;
        padding: 15px;
    }
    .pagination button {
        width: 35px;
        height: 35px;
        font-size: 18px;
    }
    .pagination span {
        font-size: 1rem;
    }
}
`;
