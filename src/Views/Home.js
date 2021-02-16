import React from 'react'
import ItemCard from '../Components/ItemCard'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequest'

function Home() {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=5`
//calling wateva is returned from the custom HOOK request
//with an argument of the variable used for the request (i.e URL)
    let Products = useAxiosGet(url)
    
    let content = null

    if (Products.error) {
        content = <p>There was an ERROR. Try again</p>
    }

    if (Products.loading){
        content = <Loader />
    }

    if (Products.data) {
//To loop through an ARRAY, we use variable.data.map
/*This (.map) accepts 2 arguments: 
the singular name for the Data being looped through and Key(Index of the item)*/
        content = 
        Products.data.map((item) => 
            <div key={item.id}>
                <ItemCard product={item}/>
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Available Items</h1>
            {content}
        </div>
    )
}

export default Home
