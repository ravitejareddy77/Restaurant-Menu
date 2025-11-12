import React from 'react'
import Card from './Card'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const Section = () => {
  return (
    <section>
    {/* <Card pizzaObj={pizzaData[0]}/>
    <Card  pizzaObj={pizzaData[1]}/>
    <Card  pizzaObj={pizzaData[2]}/>
    <Card  pizzaObj={pizzaData[3]}/>
    <Card  pizzaObj={pizzaData[4]}/>
    // <Card  pizzaObj={pizzaData[5]}/> */}


    {
      pizzaData.map((element,index)=>{
        return <Card pizzaObj={element} key={index}/>
      })
    }
</section>

  )
}

export default Section