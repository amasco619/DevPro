import React, { useState } from 'react'
import ItemCard from '../Components/ItemCard'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequest'

function Home() {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=5`
    //calling wateva is returned from the custom HOOK request
    //with an argument of the variable used for the request (i.e URL)
    const [searchTerm, setSearchTerm] = useState('')
    let Products = useAxiosGet(url)

    let content = null

    if (Products.error) {
        content = <p>There was an ERROR. Try again</p>
    }

    if (Products.loading) {
        content = <Loader />
    }

    if (Products.data) {
        //To loop through an ARRAY, we use variable.data.map
        /*This (.map) accepts 2 arguments: 
the singular name for the Data being looped through and Key(Index of the item)*/
        content =
            Products.data.filter((item) => {
                if (searchTerm === "") {
                    return item
                } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item
                }
            }).map((item) =>
                <div key={item.id}>
                    <ItemCard product={item} />
                </div>
            )
    }

    return (
        <div>
            <header className="flex justify-between items-center mb-3">
                <h1 className="font-bold text-2xl">
                    Available Items
                </h1>
                <input
                    className="w-72 pl-2 border rounded overflow-hidden"
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }} />
            </header>

            {content}
        </div>
    )
}

export default Home
