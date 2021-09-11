
import React from "react";
import { Link, useParams } from "react-router-dom";


const Trailer = ({movieList}) => { 
    const {ID}=useParams();
       return (
        <div className='Trailer'>
           
               <div className='Trailer'>
               <Link to='/'><button> Home page</button></Link> 
            <div className='TrailerImg'>
                <img src={(movieList.find(movie=> movie.id==ID)).img}/>
            </div>
            <div className='TrailerDetails'>
                <h2 style={{color:'white', marginBottom:'5%'}}>{(movieList.find(movie=> movie.id==ID)).title}</h2>
                <p style={{color:'white',  marginBottom:'5%'}}>{(movieList.find(movie=> movie.id==ID)).Description}</p>
                <span>{(movieList.find(movie=> movie.id==ID)).trailer}</span>
                
            </div>   
            
        </div>
            
        </div>
    )

}  


export default Trailer