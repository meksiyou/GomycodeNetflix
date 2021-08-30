import React from 'react'
import Item from "../Components/item"
import {Products} from '../Products'

function itemList() {
    return (
        <div >
            <h1>list items</h1>
           <div id="list">
           
          {Products.map(product=>
            <Item product={product}/>
            )}
           </div>
        </div>
    )
}

export default itemList
