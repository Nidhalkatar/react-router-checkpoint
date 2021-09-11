import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({movieList,search,ratingSearch}) {
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',marginBottom:'20px'}}>
            {
            movieList
            .filter(film=> film.title.toLowerCase().includes(search.toLowerCase().trim())&&film.rate>=ratingSearch)
            
            .map( film =>  <MovieCard  film ={film} key={film.id}  /> )
        }
        
        </div>
    )
}