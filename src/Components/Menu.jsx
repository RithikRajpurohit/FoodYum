import React from 'react'

const Menu = ({handlecount}) => {
const categories=[  {
    id: 1,
    title: 'shawarma',
    price: '$850',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323737/NetflixApp/chiken_shawarma_c0ysna.jpg'
  },
  {
    id: 2,
    title: 'fruite juice',
    price: '$900',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672329939/NetflixApp/fruite_juice_du7uqy.jpg',
  },
  {
    id: 3,
    title: 'yogurt parfaite',
    price: '$450',
    img: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672329944/NetflixApp/yogurt_parfait_kt8b5f.jpg"
  },
  {
    id: 4,
    title: 'orange juice',
    price: '$420',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672329938/NetflixApp/orangejuice_s4mdbi.webp'
  },
  {
    id: 5,
    title: 'egg & plantain',
    price: '$700',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672331290/NetflixApp/edd_and_plantain_rey7l4.jpg',
  },
  {
    id: 6,
    title: 'tilapia fish',
    price: '$900',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672331305/NetflixApp/tilapia_fish_g0ozkn.jpg'
  },
  {
    id: 7,
    title: 'jollof rice',
    price: '$150',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672332323/NetflixApp/jollof_rice_gbzosf.webp',
  },
  {
    id: 12,
    title: 'African Salad',
    price: '$200',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323870/NetflixApp/African_Salad_s7vgxn.png',
  },
  {
    id: 8,
    title: 'chiken burger',
    price: '$300',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672332323/NetflixApp/chiken_burger_ncsmeh.webp',
  },
  {
    id: 9,
    title: 'egg and plantain',
    price: '$500',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672331290/NetflixApp/edd_and_plantain_rey7l4.jpg',
  },
  {
    id: 10,
    title: 'African Salad',
    price: '$200',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323870/NetflixApp/African_Salad_s7vgxn.png',
  },
  {
    id: 11,
    title: 'chinese pizza',
    price: '$900',
    img: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672324456/NetflixApp/chinese_pizza_kgnbo1.jpg',
  },
];




  return (
    <div className='w-[full] mx-auto ml-9 mt-28 '>
        <div className='text-center font-bold text-4xl py-9 '>
          <h1>Our Food</h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-7 px-15 '>
          {
            categories.map((prod)=>(
              <div key={prod.id}>
                <img
                src={prod.img}
                alt=''
                className='w-[280px] h-[200px] object-cover'/>
                <div className='flex flex-col justify-center items-center gap-3 mr-12 mb-5'>
                  <h2 className='text-xl font-semibold uppercase'>{prod.title}</h2>
                  <h2 className='text-xl font-semibold uppercase' >{prod.price}</h2>
                  <button className='w-[100px]  py-[10px] text-[15px] hover:text-[#fbc531] bg-black text-[white] font-bold rounded-lg ' onClick={handlecount}>Add to Cart</button>
                </div>
              </div>

            ))
          }
        </div>
      
    </div>
  )
}

export default Menu
