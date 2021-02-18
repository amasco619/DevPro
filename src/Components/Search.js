import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Search() {
    const url = 'https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10'
    const [search, setSearch] = useState(null)
    const [Avail, setAvail] = useState("")

    let content = null

    useEffect(() => {
        axios.get(url).then(response => { setSearch(response.data) })
    }, [url])

    if (search) {
        content = search.filter((val) => {
            if (Avail === "") {
                return val
            } else if (val.name.toLowerCase().includes(Avail.toLowerCase())) {
                return val
            }
        }).map((val, key) =>
            <div key={key}>
                <p>{val.name}</p>
            </div>)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    setAvail(event.target.value)
                }} />
            { content}
        </div>
    )
}

export default Search