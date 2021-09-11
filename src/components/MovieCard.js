import React from 'react'
import { Link } from "react-router-dom";
export default function MoviCard({film}) {

const rate=[]
const rest=[]
rate.length=film.rate
rest.length=5-film.rate
    return (
        <Link to= {`/Trailer/${film.id}`} key={film.id}>
        <div className='card'>
        <img style={{width:'200px',height:'400px'}} src= {film.img} alt='poster'/>
        <div className='card1' >
        <h2>  {film.title} </h2>
        {rate.fill(<span>★</span>).concat (rest.fill (<span>☆</span>)) }
    
    <h4> {film.Description} </h4>
    <h5>{film.type}</h5>
    </div>
        </div>
        
        </Link>  
    )
}