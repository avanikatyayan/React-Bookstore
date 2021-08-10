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
const Title = () => <h1 style={{color:'Navy', fontSize:'0.95', marginTop:'0.25rem'}}>IKIGAI</h1>
const Author = () => <h3 style={{color:'#617d98', fontSize:'0.75', marginTop:'0.25rem'}}>Hector Gracia</h3>

export default Bookstore
