import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequest';

function Items() {
//useParams will return the URL paramter and get the ID from it
//(monitoring any changes) to make the output dynamic
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    
    let Product = useAxiosGet(url)

    let content = null

    if (Product.error) {
        content = <p>There was an ERROR. Try again</p>
    }

    if (Product.loading){
        content = <Loader />
    }

    if (Product.data) {
            content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">{Product.data.name}</h1> 
                <div>
                    <img src={Product.data.images[0].imageUrl} alt={Product.name} />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {Product.data.price}
                </div>
                <div>
                    {Product.data.description}
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
