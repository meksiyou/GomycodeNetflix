import React, {useState} from 'react'
import MovieCard from "./movieCard"
import MoviesData from './data'


const MovieList = () => {
    const [data,setData]=useState(MoviesData);
    return (
        <div>
            {data.map((el,i)=>
                <MovieCard movie={el} key={i}/>
            )}
            
        </div>
    )
}

export default MovieList
