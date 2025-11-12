import React from 'react'

const Card = ({pizzaObj}) => {
  let{name,ingredients,photoName,price,soldOut}=pizzaObj
  return (
    <article className='card_container'>
      <aside className='card_one'>
        <img src={photoName} alt={name} className='image_pic' />
      </aside>
      <aside className='card_two'>
        <h4 className='card_title'>{name}</h4>
        <p className='card_desc'>{ingredients}</p>
        <p className='card_price'>{price}</p>
      </aside>

    </article>
  )
}

export default Card