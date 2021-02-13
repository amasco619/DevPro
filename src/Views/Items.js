import React, { useEffect, useState } from 'react'
import axios from "axios";

function Items() {
    const url = 'https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/3'
    const [Product, setProduct] = useState(null)

    let content

//The hook takes a function of code to run.
//Second, a variiable to monitor for any change to rerun the function code
    useEffect(() => {
        axios.get(url).then(Response => {setProduct(Response.data)})
    }, [url])

    if (Product) {
            content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">{Product.name}</h1> 
                <div>
                    <img src={Product.images[0].imageUrl} alt={Product.name} />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {Product.price}
                </div>
                <div>
                    {Product.description}
                </div>
            </div>
    }
    return (
        <div>
           {content}
        </div>
    )
}

export default Items
