import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import shampoo from "../../Images/shampoo.png"
import conditioner from "../../Images/conditioner.png"
import serum from "../../Images/serum.png"

import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../../Components/ProductCard'
import { getProduct } from '../../Redux/ProductReducer/action';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';


export const Hair = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const [hairItems, setHairItems] = useState([])
    const product = useSelector(store => store.productReducer.product)
    const navbar = useSelector(store => store.authReducer.navbar)
    const [showShampoo, setShampoo] = useState([])
    const [showConditioner, setConditioner] = useState([])
    const [showSerum, setSerum] = useState([])

    const [isShampoo, setIsShampoo] = useState(false)
    const [isConditioner, setIsConditioner] = useState(false)
    const [isSerum, setIsSerum] = useState(false)

    const [sortField, setSortField] = useState("")
    const [sortOrder, setSortOrder] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    const [selectedBrands, setSelectedBrands] = useState([]);

    const [shampooPage, setShampooPage] = useState(1);
const [conditionerPage, setConditionerPage] = useState(1);
const [serumPage, setSerumPage] = useState(1);
const [hairPage, setHairPage] = useState(1)
const itemsPerPage = 9;




    useEffect(() => {
        dispatch(getProduct(sortField, sortOrder))



    }, [searchParams, sortField, sortOrder])



    useEffect(() => {


        const filteredHairItems = product?.filter(item => item.category === 'hair');
        setHairItems(filteredHairItems);
        //  dispatch(getProduct(sortField,sortOrder))


    }, [product]);


    // let obj = {
    //     params:{
    //       category:searchParams.getAll("category"),
    //       type:searchParams.getAll("type"),
    //       _sort:searchParams.get("order") && "price",
    //       _order: searchParams.get("order")
    //     }
    //   }


    const handleShampoo = () => {



        const filteredShampooItems = product?.filter(item => item.type === 'shampoo');

        setShampoo(filteredShampooItems);
        setIsShampoo(true)
        setIsConditioner(false)
        setIsSerum(false)

        setShampooPage(1)
       setConditionerPage(1)
       setSerumPage(1)
       setHairPage(1)
        






    }
    const handleConditioner = () => {



        const filteredConditionerItems = product?.filter(item => item.type === 'conditioner');

        setConditioner(filteredConditionerItems);
        setIsShampoo(false)
        setIsConditioner(true)
        setIsSerum(false)

        setShampooPage(1)
       setConditionerPage(1)
       setSerumPage(1)
       setHairPage(1)
        






    }
    const handleSerum = () => {



        const filteredSerumItems = product?.filter(item => item.type === 'serum');

        setSerum(filteredSerumItems);
        setIsShampoo(false)
        setIsConditioner(false)
        setIsSerum(true)

        setShampooPage(1)
       setConditionerPage(1)
       setSerumPage(1)
       setHairPage(1)
        








    }




    const handleOptionChange = (event) => {


        setSortOrder(event.target.value);
        setSortField("price")

        // if(sortField=="price"&&sortOrder=='asc'||'desc'&&isShampoo===true){


        // }

    };

    useEffect(() => {
        const filteredShampooItems = product?.filter(item => item.type === 'shampoo');
        setShampoo(filteredShampooItems);

        const filteredConditionerItems = product?.filter(item => item.type === 'conditioner');

        setConditioner(filteredConditionerItems);

        const filteredSerumItems = product?.filter(item => item.type === 'serum');

        setSerum(filteredSerumItems);

    }, [product])




    //...........................

    const handleBrandCheckboxChange = (event) => {
        const brandName = event.target.value;
        if (event.target.checked) {
            setSelectedBrands([...selectedBrands, brandName]);
        } else {
            setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
        }
       setShampooPage(1)
       setConditionerPage(1)
       setSerumPage(1)
       setHairPage(1)
    };

    //pagination


    const indexOfLastShampooItem = shampooPage * itemsPerPage;
const indexOfFirstShampooItem = indexOfLastShampooItem - itemsPerPage;
const currentShampooItems = showShampoo
  .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
  .slice(indexOfFirstShampooItem, indexOfLastShampooItem);

const indexOfLastConditionerItem = conditionerPage * itemsPerPage;
const indexOfFirstConditionerItem = indexOfLastConditionerItem - itemsPerPage;
const currentConditionerItems = showConditioner
  .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
  .slice(indexOfFirstConditionerItem, indexOfLastConditionerItem);

const indexOfLastSerumItem = serumPage * itemsPerPage;
const indexOfFirstSerumItem = indexOfLastSerumItem - itemsPerPage;
const currentSerumItems = showSerum
  .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
  .slice(indexOfFirstSerumItem, indexOfLastSerumItem);

  const indexOfLastHairItem = hairPage * itemsPerPage;
const indexOfFirstHairItem = indexOfLastHairItem - itemsPerPage;
const currentHairItems = hairItems
  .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
  .slice(indexOfFirstHairItem, indexOfLastHairItem);





    return (
        <DIV>
            {
        navbar && <Navbar />
           }
            <div className='container'>
                <h1>The Hair Care & Styling Store</h1>
                <p>Discover a limitless range of haircare</p>
                <div className='hair'>
                    <img onClick={handleShampoo} src={shampoo} alt="" />
                    <img onClick={handleConditioner} src={conditioner} alt="" />
                    <img onClick={handleSerum} src={serum} alt="" />
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
                        <label><input className='white-checkbox' type="checkbox" value="wow"
                            onChange={handleBrandCheckboxChange} />WOW</label>
                        <br />
                        <label><input className='white-checkbox' type="checkbox" value="loreal"
                            onChange={handleBrandCheckboxChange} />L'Oreal Paris</label>
                        <br />
                        <label><input className='white-checkbox' type="checkbox" value="dove"
                            onChange={handleBrandCheckboxChange} />Dove</label>
                        <br />
                        <label><input className='white-checkbox' type="checkbox" value="biotique"
                            onChange={handleBrandCheckboxChange} />Biotique</label>
                    </div>





                </div>



                <div className="product" >




                    {/* 
         {
            showShampoo.length===0? 
          hairItems?.map((el)=>
          <ProductCard key={el.id} {...el} />
          ):
          
         } */}

                    {
                        isShampoo ?
                        showShampoo
                            .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
                            .map((el) => <ProductCard key={el._id} {...el} />)
                            .slice(indexOfFirstShampooItem, indexOfLastShampooItem)

                            : isConditioner ? showConditioner
                            .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
                            .map((el) => <ProductCard key={el._id} {...el} />)
                            .slice(indexOfFirstConditionerItem, indexOfLastConditionerItem)

                                : isSerum ? showSerum
                                .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
                                .map((el) => <ProductCard key={el._id} {...el} />)
                                .slice(indexOfFirstSerumItem, indexOfLastSerumItem)

                                    :   hairItems
                                    .filter((item) => selectedBrands.length === 0 || selectedBrands.includes(item.brand))
                                    .map((el) => <ProductCard key={el._id} {...el} />)
                                    .slice(indexOfFirstHairItem, indexOfLastHairItem)
                    }















                </div>
             
            </div>
            {
                isShampoo && <div className="pagination">
                <button onClick={() => setShampooPage(shampooPage - 1)} disabled={shampooPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{shampooPage}</span>
                <button
                  onClick={() => setShampooPage(shampooPage + 1)}
                  disabled={currentShampooItems.length < itemsPerPage}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            }

            {
                isConditioner && <div className="pagination">
                <button onClick={() => setConditionerPage(conditionerPage - 1)} disabled={conditionerPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{conditionerPage}</span>
                <button
                  onClick={() => setConditionerPage(conditionerPage + 1)}
                  disabled={currentConditionerItems.length < itemsPerPage}
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
                !isShampoo && !isConditioner && !isSerum && <div className="pagination">
                <button onClick={() => setHairPage(hairPage - 1)} disabled={hairPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{hairPage}</span>
                <button
                onClick={() => setHairPage(hairPage + 1)}
                disabled={currentHairItems.length < itemsPerPage}
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

    .hair {
        display: flex;
        justify-content: left;
        gap: 20px;
        padding-top: 20px;
        padding-left: 20px;
    }

    .hair img {
        width: 10%;
        transition: transform 0.2s;
    }

    .hair img:active {
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
        grid-template-columns: repeat(3, 1fr);
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
            grid-template-columns: repeat(2, 1fr);
        }

        .add-to-cart button {
            padding: 10px;
        }
    }

    @media (max-width: 480px) {
        .product {
            grid-template-columns: 1fr;
        }

        .add-to-cart button {
            padding: 8px;
            font-size: 14px;
        }
    }
`;
