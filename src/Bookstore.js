import React from 'react'
import './index.css'

function Bookstore() {
    return (
        <section className ="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            
        </section>
    )
}
const Book = () =>{
    return <article>
        <Img />
        <Title />
        <Author />
        
    </article>
}
const Img = () => <img src = "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" alt="IKIGAI"></img>
const Title = () => <h3>IKIGAI</h3>
const Author = () => <h1>Hector Gracia</h1>

export default Bookstore
