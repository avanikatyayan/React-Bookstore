import React from 'react'
import './index.css'
const FirstBook={
    title :"IKIGAI",
    author :"Hector Gracia",
    img :"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
}
const SecondBook={
    title :"The Psychology of Money",
    author :"Morgan Housel",
    img :"https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg"
}
const ThirdBook={
    title :"The Alchemist",
    author :"Paulo Coelho",
    img :"https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
}


function Bookstore() {
    return (
        <section className ="booklist">
        <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author} />
        <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author} />  
        <Book img={ThirdBook.img} title={ThirdBook.title} author={ThirdBook.author} />
        </section>
    )
}
const Book = (props) =>{
    return <article className='book'>
        <img src={props.img} />
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        
    </article>
}
 

export default Bookstore
