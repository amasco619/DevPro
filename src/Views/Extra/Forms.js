import React from 'react'

function Forms(props) {
    return (
        <div className="mt-7 form-container">
            <p>My name is {props.name} and I want {props.title}. Call me at {props.number}</p>
            <div>
                <button onClick={() => props.deleteItem(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Forms


/*import React, { useState } from 'react'
import About from '../About';

function Forms() {
    const [value, setValue] = useState({
        id: 1,
        name: 'Kuus',
    })

    /* const inputChange = (event) => {
        setValue((value) => ({
            ...value,
            [event.target.name]: event.target.value,
        }));
    }; */

/*  const handleSubmit = (e, value, setValue) => {
      e.preventDefault();

      setValue([...value, {
          id: 10,
          name: 'Piero',
      }])
  }

  return (
      <div className="form-container">
          <form className="register-form" onSubmit={(e) => handleSubmit(e, value, setValue)}>
              {/*Below shorthand IF statement checking if submitted is true*/
/*              <input
                    className="form-field"
                    placeholder="Name"
                    name="name"
                    value={value.name}
                    onChange={inputChange}
                />
                <input
                    className="form-field"
                    type="text"
                    placeholder="Item"
                    name="title"
                    value={value.title}
                    onChange={inputChange}
                />

                <input
                    class="form-field"
                    type="number"
                    placeholder="Number"
                    name="number"
                    value={value.number}
                    onChange={inputChange}
              /> */

/*    <button class="form-field" type="submit">
          Submit
      </button>
  </form>
  {value.map(val =>
      <About name={val.name} id={val.id} />)}
</div>
)
}

export default Forms */
