// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'
// import { getGifts } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifts(category);

    console.log(loading);

    // useEffect( () => {
    //     getGifts( category )
    //       .then( imgs => setImages( imgs) ) //El helper devuelve las imgs y las cargo con el useSate()
    // }, [ category ]); 


    // getGifts();

    return (
        <>
            <h3>{ category }</h3>
            {loading &&  <p className="animate__animated animate__bounce animate__flash">Loading...</p> }
            <div className="card-grid" >
                {
                    images.map(  img =>
                        <GifGridItem  
                            key= { img.id }
                            { ...img } 
                        />
                    )
                /* <ol> 
                    {
                        // images.map( img => <li key={img.id}>{img.title}</li>) 
                        // images.map( ({id, title}) =>  <li key={id}> { title } </li> )
                    }
                </ol> */
                }
            </div>
        </>
    )
}
