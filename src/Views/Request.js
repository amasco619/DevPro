import React, { useState } from 'react'
import Forms from './Extra/Forms'

function Request() {
    const handleSubmit = (e, items, setItems, input, setInput) => {
        e.preventDefault();
        const id = (items.length) ? items[items.length - 1].id + 1 : 0
        setItems([...items, {
            id: id,
            name: input.name,
            title: input.title,
            number: input.number,
        }])
        setInput({
            name: '',
            title: '',
            number: '',
        })
    }
    const deleteItem = (id, items, setItems) => {
        setItems(items.filter(item => item.id !== id))
    }
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Kuss',
            title: 'Self-con',
            number: '08045612378'
        }
    ])
    const [input, setInput] = useState('')

    const inputChange = (e) => setInput((val) => ({
        ...val,
        [e.target.name]: e.target.value,
    }))

    return (
        <div>
            <form className="form-container register-form" onSubmit={(e) => handleSubmit(e, items, setItems, input, setInput)}>
                <input
                    className="form-field"
                    placeholder="Name"
                    name="name"
                    value={input.name}
                    onChange={inputChange}
                />
                <input
                    className="form-field"
                    type="text"
                    placeholder="Item"
                    name="title"
                    value={input.title}
                    onChange={inputChange}
                />
                <input
                    class="form-field"
                    type="number"
                    placeholder="Phone Number"
                    name="number"
                    value={input.number}
                    onChange={inputChange}
                />

                <button class="form-field" type="submit">
                    Submit
                </button>
            </form>
            {items.map(item => (
                <Forms id={item.id} name={item.name} title={item.title} number={item.number} deleteItem={(id) => deleteItem(id, items, setItems)} />
            ))}
        </div>
    )
}

export default Request
