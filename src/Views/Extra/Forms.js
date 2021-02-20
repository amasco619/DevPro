import React, { useState } from 'react'

function Forms() {
    const [value, setValue] = useState({
        name: '',
        title: '',
        number: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)

    const inputChange = (event) => {
        setValue((value) => ({
            ...value,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.name && value.title && value.number) {
            setValid(true)
        }
        setSubmitted(true)
        setValue({
            name: ' ',
            title: ' ',
            number: ' '
        })
    }

    return (
        <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                {/*Below shorthand IF statement checking if submitted is true*/}
                {submitted && valid ? <div className='success-message'>Success! Your request has been submitted.</div> : null}
                <input
                    className="form-field"
                    placeholder="Name"
                    name="name"
                    value={value.name}
                    onChange={inputChange}
                />
                {submitted && !value.name ? <span>Please enter your name</span> : null}
                <input
                    className="form-field"
                    type="text"
                    placeholder="Item Required"
                    name="title"
                    value={value.title}
                    onChange={inputChange}
                />
                {submitted && !value.title ? <span>Please enter name of the Item</span> : null}
                <input
                    class="form-field"
                    type="number"
                    placeholder="Phone Number"
                    name="number"
                    value={value.number}
                    onChange={inputChange}
                />
                {submitted && !value.number ? <span>Please enter your phone number</span> : null}
                <button class="form-field" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Forms
