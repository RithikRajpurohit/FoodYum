import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Food = ({handlecount}) => {
  const myData = [
    {
      id: 5,
      name: 'cheeseless pizza',
      category: 'pizza',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672324456/NetflixApp/cheeseless_pizza_bkuecz.jpg',
      price: '$200',
    },
    {
      id: 6,
      name: 'Supreme Pizza',
      category: 'pizza',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672324455/NetflixApp/Supreme_Pizza_jtvkj8.jpg',
      price: '$300',
    },
    {
      id: 7,
      name: 'pepperoni pizza',
      category: 'pizza',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672324456/NetflixApp/pepperoni_pizza_axwdat.jpg',
      price: '$100',
    },
    {
      id: 8,
      name: 'Cheese Pizza',
      category: 'pizza',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672324456/NetflixApp/chinese_pizza_kgnbo1.jpg',
      price: '$140',
    },
    {
      id: 8,
      name: 'African Salad',
      category: 'Salad',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323870/NetflixApp/African_Salad_s7vgxn.png',
      price: '$140',
    },
    {
      id: 9,
      name: 'Kale Salad',
      category: 'salad',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323860/NetflixApp/kale_salad_ogune3.jpg',
      price: '$300',
    },
    {
      id: 10,
      name: 'Ceasar Salad',
      category: 'salad',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323859/NetflixApp/caesar-salad-with-tuna-30216-1_noflfd.jpg',
      price: '$300',
    },
    {
      id: 11,
      name: 'Loaded Salad',
      category: 'salad',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323860/NetflixApp/loaded_salad_qq5jup.jpg',
      price: '$200',
    },
    {
      id: 12,
      name: 'chiken_shawarma',
      category: 'chiken',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323737/NetflixApp/chiken_shawarma_c0ysna.jpg',
      price: '$100',
    },
    {
      id: 13,
      name: 'Wings',
      category: 'chicken',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672322922/NetflixApp/chicken-wings_lv3zc9.jpg',
      price: '$100',
    },
    {
      id: 14,
      name: 'Roasted Chicken',
      category: 'chicken',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672322922/NetflixApp/roast-chicken_nrc6r8.jpg',
      price: '$300',
    },
    {
      id: 15,
      name: 'Chicken Tenders',
      category: 'chicken',
      image:
        'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672322923/NetflixApp/chicken_tenders_quel6y.jpg',
      price: '$100',
    },
  
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  
  return (
    <div className='w-[90%] mx-auto' >
      <div className='py-20'>
      <Slider {...settings}>
        {myData.map((item)=>{
          return (
            <div className='bg-[white] rounded-md ' key={item.id} >
                <div className='flex justify-center items-center rounded-t-xl'>
                <img 
                src={item.image}
                alt=''
                className='w-[200px] h-[200px] rounded-full object-cover'/>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <h2 className='text-xl font-semibold uppercase'>{item.name}</h2>
                    <button className='w-[100px]  py-[10px] text-[15px] hover:text-[#fbc531] bg-black text-[white] font-bold rounded-lg ' onClick={handlecount}>Add to Cart</button>
                </div>
            </div>
          )
        })}
          </Slider>
           
        

      </div>
    </div>
  )
}

export default Food
