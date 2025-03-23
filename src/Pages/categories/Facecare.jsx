import styled from '@emotion/styled'


import facewash from "../../Images/facewash.png"
import facecream from "../../Images/facecream.png"
import faceserum from "../../Images/faceserum.png"

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

export const Facecare = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const [faceItems, setFaceItems] = useState([])
    const product = useSelector(store => store.productReducer.product)
   
    const [showFacewash, setFacewash] = useState([])
    const [showMosturizer, setMosturizer] = useState([])
    const [showSerum, setSerum] = useState([])

    const [isFacewash, setIsFacewash] = useState(false)
    const [isMosturizer, setIsMosturizer] = useState(false)
    const [isSerum, setIsSerum] = useState(false)

    const [sortField, setSortField] = useState("")
    const [sortOrder, setSortOrder] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    const [selectedBrands, setSelectedBrands] = useState([]);
    const navbar = useSelector(store => store.authReducer.navbar)


    const [facewashPage, setFacewashPage] = useState(1);
const [mosturizerPage, setMosturizerPage] = useState(1);
const [serumPage, setSerumPage] = useState(1);
const [facePage, setFacePage] = useState(1)
const itemsPerPage = 9;


    
    useEffect(() => {
        dispatch(getProduct(sortField,sortOrder))
       
        
        
      }, [searchParams,sortField,sortOrder])


      useEffect(() => {
       
         
         const filteredFaceItems = product?.filter(item => item.category === 'face');
         setFaceItems(filteredFaceItems);
        
        
      }, [product]);


      const handleFacewash = ()=>{
        
    
         
        const filteredFacewashItems = faceItems?.filter(item => item.type === 'facewash');
        
        setFacewash(filteredFacewashItems);
        setIsFacewash(true)
        setIsMosturizer(false)
        setIsSerum(false)

        setFacewashPage(1)
        setMosturizerPage(1)
        setSerumPage(1)
        setFacePage(1)
       
        
        
       
       
     
  }
  const handleMosturizer= ()=>{
    

     
    const filteredMosturizerItems = faceItems?.filter(item => item.type === 'mosturizer');
    
    setMosturizer(filteredMosturizerItems);
    setIsFacewash(false)
    setIsMosturizer(true)
    setIsSerum(false)

    setFacewashPage(1)
    setMosturizerPage(1)
    setSerumPage(1)
    setFacePage(1)
    
    
    
   
   
 
}
const handleSerum = ()=>{
    

     
const filteredSerumItems = faceItems?.filter(item => item.type === 'serum');

setSerum(filteredSerumItems);
setIsFacewash(false)
setIsMosturizer(false)
setIsSerum(true)

setFacewashPage(1)
setMosturizerPage(1)
setSerumPage(1)
setFacePage(1)








}




const handleOptionChange = (event) => {


setSortOrder(event.target.value);
setSortField("price")

// if(sortField=="price"&&sortOrder=='asc'||'desc'&&isShampoo===true){
    
        
// }

};

useEffect(()=>{
    const filteredFacewashItems = faceItems?.filter(item => item.type === 'facewash');
        
    setFacewash(filteredFacewashItems);

    const filteredMosturizerItems = faceItems?.filter(item => item.type === 'mosturizer');
    
    setMosturizer(filteredMosturizerItems);

    const filteredSerumItems = faceItems?.filter(item => item.type === 'serum');

    setSerum(filteredSerumItems);

},[product,faceItems])




   //...........................

   const handleBrandCheckboxChange = (event) => {
    const brandName = event.target.value;
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, brandName]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    }
    setFacewashPage(1)
       setMosturizerPage(1)
       setSerumPage(1)
       setFacePage(1)
  };



  //pagination


  const indexOfLastFacewashItem = facewashPage * itemsPerPage;
  const indexOfFirstFacewashItem = indexOfLastFacewashItem - itemsPerPage;
  const currentFacewashItems = showFacewash
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstFacewashItem, indexOfLastFacewashItem);
  
  const indexOfLastMosturizerItem = mosturizerPage * itemsPerPage;
  const indexOfFirstMosturizerItem = indexOfLastMosturizerItem - itemsPerPage;
  const currentMosturizerItems = showMosturizer
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstMosturizerItem, indexOfLastMosturizerItem);
  
  const indexOfLastSerumItem = serumPage * itemsPerPage;
  const indexOfFirstSerumItem = indexOfLastSerumItem - itemsPerPage;
  const currentSerumItems = showSerum
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstSerumItem, indexOfLastSerumItem);
  
    const indexOfLastFaceItem = facePage * itemsPerPage;
  const indexOfFirstFaceItem = indexOfLastFaceItem - itemsPerPage;
  const currentFaceItems = faceItems
    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    .slice(indexOfFirstFaceItem, indexOfLastFaceItem);
  


      

      
  return (
    <DIV>
      {
        navbar && <Navbar />
      }
        <div className='container'>
            <h1>The Skincare Store</h1>
            <p>Discover a limitless range of skincare</p>
            <div className='Facecare'>
                <img onClick={handleFacewash} src={facewash} alt="" />
                <img onClick={handleMosturizer} src={facecream} alt="" />
                <img onClick={handleSerum} src={faceserum} alt="" />
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
            <label><input className='white-checkbox' type="checkbox" value="mamaearth"
            onChange={handleBrandCheckboxChange} />Mamaearth</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="wow"
            onChange={handleBrandCheckboxChange} />WOW</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="mcaffeine"
            onChange={handleBrandCheckboxChange} />MCaffeine</label>
            <br />
            <label><input className='white-checkbox' type="checkbox" value="biotique"
            onChange={handleBrandCheckboxChange} />Biotique</label>
          </div>
           
          </div>

          <div className="product" >
         
          

          {
            isFacewash?
            showFacewash
            .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
            .map((el) => <ProductCard key={el._id} {...el} />)
            .slice(indexOfFirstFacewashItem, indexOfLastFacewashItem)
    
            : isMosturizer? showMosturizer
            .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
            .map((el) => <ProductCard key={el._id} {...el} />)
            .slice(indexOfFirstMosturizerItem, indexOfLastMosturizerItem)
    
            :isSerum? showSerum
            .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
            .map((el) => <ProductCard key={el._id} {...el} />)
            .slice(indexOfFirstSerumItem, indexOfLastSerumItem)
            : faceItems
            .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
            .map((el) => <ProductCard key={el._id} {...el} />)
            .slice(indexOfFirstFaceItem, indexOfLastFaceItem)
            }



         
        </div>
           
        </div>

        {
                isFacewash && <div className="pagination">
                <button onClick={() => setFacewashPage(facewashPage - 1)} disabled={facewashPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{facewashPage}</span>
                <button
                  onClick={() => setFacewashPage(facewashPage + 1)}
                  disabled={currentFacewashItems.length < itemsPerPage}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            }

            {
                isMosturizer && <div className="pagination">
                <button onClick={() => setMosturizerPage(mosturizerPage - 1)} disabled={mosturizerPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{mosturizerPage}</span>
                <button
                  onClick={() => setMosturizerPage(mosturizerPage + 1)}
                  disabled={currentMosturizerItems.length < itemsPerPage}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            }


            {
                isSerum && <div className="pagination">
                <button onClick={() => setSerumPage(serumPage - 1)} disabled={serumPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{serumPage}</span>
                <button
                  onClick={() => setSerumPage(serumPage + 1)}
                  disabled={currentSerumItems.length < itemsPerPage}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            }





            {
                !isFacewash && !isMosturizer && !isSerum && <div className="pagination">
                <button onClick={() => setFacePage(facePage - 1)} disabled={facePage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{facePage}</span>
                <button
                onClick={() => setFacePage(facePage + 1)}
                disabled={currentFaceItems.length < itemsPerPage}
                >
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            }

      {
        navbar && <Footer />
      }
  
    </DIV>
  )
}

const DIV = styled.div`
  
    .container {
        padding: 40px;
        width: 100%;
    }

    .Facecare {
        display: flex;
        justify-content: left;
        gap: 20px;
        padding-top: 20px;
        padding-left: 30px;
    }

    .Facecare img {
        width: 10%;
        transition: transform 0.2s;
    }

    .Facecare img:active {
        transform: scale(1.2);
    }

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

    .category {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin: 20px;
        width: 300px;
        height: 200px;
        align-items: center;
        text-align: center;
        padding: 10px;
        margin-left: 60px;
        position: relative;
        text-align: left;
    }

    label {
        text-align: left;
    }

    .category h1 {
        font-size: 17px;
        text-align: center;
        padding: 10px;
    }

    .white-checkbox {
        appearance: none;
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border: 2px solid #d6dade;
        background-color: #e6e9ec;
        border-radius: 50%;
        outline: none;
        position: absolute;
        cursor: pointer;
        right: 10px;
        margin-top: 3px;
    }

    .white-checkbox:checked {
        background-color: #e80071;
        border: none;
    }

    .box {
        display: flex;
    }

    .product {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2px;
    }

    .product-card {
        position: relative;
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .addtocart {
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
        z-index: 2;
        padding: 10px;
    }

    .addtocart button {
        background-color: #e80071;
        padding: 12px 0;
        color: white;
        font-weight: 600;
        width: 100%;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s ease;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    .addtocart button:hover {
        background-color: #a10450;
        transform: scale(1.05);
    }

    .addtocart button:active {
        transform: scale(0.95);
    }

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

        .addtocart {
            padding: 5px;
        }

        .addtocart button {
            padding: 10px;
        }
    }

    @media (max-width: 480px) {
        .product {
            grid-template-columns: repeat(2, 1fr);
        }

        .addtocart button {
            padding: 8px;
            font-size: 14px;
        }
    }
`;
