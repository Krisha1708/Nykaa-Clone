import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from '@emotion/styled';

import alternative from "../Images/alternative.png"
import img2 from "../Images/image3.png"
import img3 from "../Images/image4.png"
import img4 from "../Images/image5.png"
import img5 from "../Images/image6.png"
import img6 from "../Images/hair.png"

import offer1 from "../Images/offer1.png"
import offer2 from "../Images/offer2.png"
import offer3 from "../Images/offer4.png"

import brand1 from "../Images/brand1.png"
import brand2 from "../Images/brand2.png"
import brand3 from "../Images/brand3.png"
import brand4 from "../Images/brand4.png"
import brand5 from "../Images/brand5.png"
import brand6 from "../Images/brand6.png"
import brand7 from "../Images/brand7.png"

import perfume1 from "../Images/perfume1.png"
import dior from "../Images/dior.png"

import day1 from "../Images/day1.png"
import day2 from "../Images/day2.png"
import day3 from "../Images/day3.png"
import day4 from "../Images/day4.png"
import day5 from "../Images/day5.png"

import a1 from "../Images/a1.avif"
import a2 from "../Images/a2.avif"
import a3 from "../Images/a3.avif"
import a4 from "../Images/a4.avif"

import trend1 from "../Images/trend1.png"
import trend2 from "../Images/trend2.png"
import trend3 from "../Images/trend3.png"
import trend4 from "../Images/trend4.png"

import fe1 from "../Images/fe1.png"
import fe2 from "../Images/fe2.png"
import fe3 from "../Images/fe3.png"
import fe4 from "../Images/fe4.png"
import fe5 from "../Images/fe5.png"
import fe6 from "../Images/fe6.png"
import fe7 from "../Images/fe7.png"
import fe8 from "../Images/fe8.png"
import fe9 from "../Images/fe9.png"
import fe10 from "../Images/fe10.png"
import { Navbar } from './Navbar';

import catty from "../Images/catty.png"
import cat1 from "../Images/cat1.avif"
import cat2 from "../Images/cat2.avif"
import cat3 from "../Images/cat3.avif"
import cat4 from "../Images/cat4.avif"
import cat5 from "../Images/cat5.avif"
import cat6 from "../Images/cat6.avif"

import br1 from "../Images/br1.png"
import br2 from "../Images/br2.png"
import br3 from "../Images/br3.png"
import br4 from "../Images/br4.png"

import b1 from "../Images/b1.png"
import b2 from "../Images/b2.png"
import b3 from "../Images/b3.png"
import b4 from "../Images/b4.png"
import b5 from "../Images/b5.png"
import b6 from "../Images/b6.png"
import b7 from "../Images/b7.png"
import b8 from "../Images/b8.png"
import b9 from "../Images/b9.png"

import p1 from "../Images/p1.png"
import p2 from "../Images/p2.png"

import l1 from "../Images/l1.png"
import l2 from "../Images/l2.png"
import l3 from "../Images/l3.png"
import l4 from "../Images/l4.png"
import l5 from "../Images/l5.png"
import l6 from "../Images/l6.png"
import l7 from "../Images/l7.png"

import last from "../Images/last.png"
import { Footer } from './Footer';
import { AllProducts } from './categories/AllProducts';
import { Link } from 'react-router-dom';





export const Home = () => {



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (

        <DIV className='Container'>
            <Navbar />
            <div className='bodyContainer'>
            <div className='slide'>
                <Carousel responsive={responsive}>
                    <div>
                        <Link to="/AllProducts">
                            <img src={alternative} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/AllProducts">
                            <img src={img2} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/AllProducts">
                            <img src={img3} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/AllProducts">
                            <img src={img4} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/AllProducts">
                            <img src={img5} alt="" />
                        </Link>
                    </div>
                </Carousel>

            </div>

            <div>
                <img style={{ width: "97%", margin: "auto", borderRadius: "5px" }} src={img6} alt="" />
            </div>


            <div className='slide2'>
                <h1>First Purchase App Offers</h1>
                <Carousel responsive={responsive1}>
                    <div>
                        <img src={offer1} alt="" />
                    </div>
                    <div>
                        <img src={offer2} alt="" />
                    </div>
                    <div>
                        <img src={offer3} alt="" />
                    </div>
                    <div>
                        <img src={offer3} alt="" />
                    </div>

                </Carousel>
            </div>

            <div className='brands'>
                <h1>Top Brands</h1>
                <div className='topBrands'>
                    <Link to="/AllProducts">
                        <img src={brand1} alt="Brand 1" />
                    </Link>
                    <Link to="/AllProducts">
                        <img src={brand6} alt="Brand 6" />
                    </Link>
                    <Link to="/AllProducts">
                        <img src={brand3} alt="Brand 3" />
                    </Link>
                    <Link to="/AllProducts">
                        <img src={brand4} alt="Brand 4" />
                    </Link>
                    <Link to="/AllProducts">
                        <img src={brand5} alt="Brand 5" />
                    </Link>
                    <Link to="/AllProducts">
                        <img src={brand7} alt="Brand 7" />
                    </Link>
                </div>
            </div>

            <div>
                <Link to="/AllProducts">
                    <img style={{ width: "97%", margin: "auto", border: "0.1px solid #e0e2e4", borderRadius: "10px" }} src={perfume1} alt="" />
                </Link>
            </div>

            <div className='slide3'>
                <h1>Brands of The Day</h1>
                <Carousel responsive={responsive}>
                    <div><Link to="/AllProducts"><img src={day1} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={day2} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={day3} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={day4} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={day5} alt="" /></Link></div>
                </Carousel>
            </div>

            <div className='slide4'>
                <h1>Best of Luxury</h1>
                <Carousel responsive={responsive1}>
                    <div><Link to="/AllProducts"><img src={a1} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={a2} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={a3} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={a4} alt="" /></Link></div>
                </Carousel>
                <Link to="/AllProducts"><img src={dior} alt="" /></Link>
            </div>

            <div className='slide5'>
                <h1>Biggest Beauty Trends</h1>
                <Carousel responsive={responsive}>
                    <div><Link to="/AllProducts"><img src={trend1} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={trend2} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={trend3} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={trend4} alt="" /></Link></div>
                </Carousel>
            </div>

            <div className='brands'>
                <h1>Top Brands</h1>
                <div className='topBrands2'>
                    <Link to="/AllProducts"><img src={fe1} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe2} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe3} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe4} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe5} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe6} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe7} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe8} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe9} alt="" /></Link>
                    <Link to="/AllProducts"><img src={fe10} alt="" /></Link>
                </div>
            </div>

            <div className='focus'>
                <h1>Category In Focus</h1>
                <div className='focus1'>
                    <Link to="/AllProducts">
                        <img style={{ width: "97%", margin: "auto", border: "0.1px solid #e0e2e4", borderRadius: "10px" }} src={catty} alt="" />
                    </Link>
                </div>
                <div className='focus2'>
                    <div><Link to="/AllProducts"><img src={cat6} alt="" /><p>Lingerie</p></Link></div>
                    <div><Link to="/AllProducts"><img src={cat5} alt="" /><p>Jewellery</p></Link></div>
                    <div><Link to="/AllProducts"><img src={cat4} alt="" /><p>Bags</p></Link></div>
                    <div><Link to="/AllProducts"><img src={cat3} alt="" /><p>Footwear</p></Link></div>
                    <div><Link to="/AllProducts"><img src={cat2} alt="" /><p>Watches</p></Link></div>
                    <div><Link to="/AllProducts"><img src={cat1} alt="" /><p>House of Nykaa Fashion</p></Link></div>
                </div>
            </div>

            <div className='brands'>
                <h1>Brands You Can't Miss</h1>
                <div className='topBrands4'>
                    <Link to="/AllProducts"><img src={br1} alt="" /></Link>
                    <Link to="/AllProducts"><img src={br2} alt="" /></Link>
                    <Link to="/AllProducts"><img src={br3} alt="" /></Link>
                    <Link to="/AllProducts"><img src={br4} alt="" /></Link>
                </div>
            </div>

            <div className='slide2'>
                <h1>First Purchase App Offers</h1>
                <Carousel responsive={responsive}>
                    <div><Link to="/AllProducts"><img src={b1} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={b2} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={b3} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={b4} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={b5} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={b6} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={b7} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={b8} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={b9} alt="" /></Link></div>
                </Carousel>
            </div>

            <div className='brands'>
                <h1>Pop-Up</h1>
                <p>By Nykaa Fashion</p>
                <div className='topBrands5'>
                    <Link to="/AllProducts"><img src={p1} alt="" /></Link>
                    <Link to="/AllProducts"><img src={p2} alt="" /></Link>
                </div>
            </div>

            <div className='slide6'>
                <Carousel responsive={responsive2}>
                    <div><Link to="/AllProducts"><img src={l1} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={l2} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={l3} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={l4} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={l5} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={l6} alt="" /></Link></div>
                    <div><Link to="/AllProducts"><img src={l7} alt="" /></Link></div>
                </Carousel>
            </div>


            <div className='focus1'>
                <img style={{ width: "90%", margin: "auto", border: "0.1px solid #e0e2e4", borderRadius: "10px" }} src={last} alt="" />
            </div>

            <br />
            </div>
            <Footer />
        </DIV>
    )
}


const DIV = styled.div`

    .Container{
        margin-top: 200px;
    }

    .bodyContainer{
        margin-top: 40px;
    }
    .slide {
        padding: 13px;
        position: relative;
        z-index: 900;
    }
    .slide img {
        padding: 10px;
        border-radius: 20px;
    }
    .slide2 {
        width: 100%;
        padding: 12px;
        position: relative;
        z-index: 900;
    }
    .slide2 h1 {
        padding: 12px;
        font-size: 23px;
        font-weight: 600;
    }
    .slide2 img {
        padding: 10px;
        border-radius: 20px;
    }
    .topBrands {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 10px;
        gap: 20px;
    }
    .topBrands img {
        border-radius: 10px;
        border: 0.1px solid #e0e2e4;
    }
    .brands {
        width: 100%;
        padding: 12px;
    }
    .brands h1 {
        padding: 12px;
        font-size: 23px;
        font-weight: 600;
    }

    .slide3 {
        width: 100%;
        padding: 22px;
        position: relative;
        z-index: 900;
    }
    .slide3 img {
        border-radius: 10px;
        width: 92%;
        border: 0.1px solid #e0e2e4;
    }
    .slide3 h1 {
        padding: 12px 12px 12px 0px;
        font-size: 23px;
        font-weight: 600;
    }

    .slide4 {
        width: 100%;
        padding: 22px;
        background-color: #f3f4f6;
        position: relative;
        z-index: 900;
    }
    .slide4 img {
        border-radius: 10px;
        width: 100%;
        border: 0.1px solid #e0e2e4;
    }
    .slide4 h1 {
        padding: 12px 12px 12px 0px;
        font-size: 23px;
        font-weight: 600;
    }

    .slide5 {
        width: 100%;
        padding: 13px;
        background-color: #f3f4f6;
        position: relative;
        z-index: 900;
    }
    .slide5 img {
        border-radius: 20px;
        padding: 10px;
    }
    .slide5 h1 {
        padding: 12px;
        font-size: 23px;
        font-weight: 600;
    }

    .topBrands2 {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        padding: 10px;
        gap: 20px;
    }
    .topBrands2 img {
        border-radius: 10px;
        border: 0.1px solid #e0e2e4;
    }

    .focus h1 {
        padding: 22px;
        font-size: 23px;
        font-weight: 600;
    }
    .focus2 {
        display: flex;
        width: 100%;
        text-align: center;
        padding: 12px;
    }
    .focus2 img {
        width: 185px;
        padding: 12px;
    }

    .topBrands4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 10px;
        gap: 20px;
    }
    .topBrands4 img {
        border-radius: 10px;
    }

    .topBrands5 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 10px;
        gap: 20px;
    }
    .brands p {
        padding: 12px;
        font-size: 16px;
        font-weight: 500;
        padding-top: 0;
    }

    .slide6 {
        width: 100%;
        padding: 12px;
        position: relative;
        z-index: 900;
    }
    .slide6 img {
        margin: 10px;
        width: 92%;
        border: 0.1px solid #e0e2e4;
        border-radius: 10px;
    }

    /* ✅ Responsive Media Queries */
    @media (max-width: 1024px) {
        .topBrands2 {
            grid-template-columns: repeat(3, 1fr);
        }

        .slide img{
            padding-left: 30px;
        }
        .topBrands4 {
            grid-template-columns: repeat(3, 1fr);
        }
        .focus2 img {
            width: 160px;
        }
    }

    @media (max-width: 768px) {
        .topBrands,
        .topBrands2,
        .topBrands4 {
            grid-template-columns: repeat(2, 1fr);
        }
        .focus2 img {
            width: 150px;
        }

    }

    @media (max-width: 480px) {
        .topBrands,
        .topBrands2,
        .topBrands4,
        .topBrands5 {
            grid-template-columns: repeat(2, 1fr);
        }
        .focus2 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
        .focus2 img {
            width: 100%;
        }
    }
`;
