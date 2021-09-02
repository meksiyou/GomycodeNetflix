import React, {useState} from 'react'
import MovieCard from "./movieCard"
import MoviesData from './data'
import AddMovie from './AddMovie'

const MovieList = () => {
    const [data,setData]=useState(MoviesData);
    return (
        <div>
            {data.map((el,i)=>
                <MovieCard movie={el} key={i}/>
            )}
             {data.map((el,i)=>
                <AddMovie movie={el} key={i}/>
            )}
           

        </div>
    )
}

export default MovieList
