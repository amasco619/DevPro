import React from 'react'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (evt, e) => {
        console.log(evt)
        e.target.reset()
    }

    return (
        <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-field"
                    type="text"
                    placeholder="Name"
                    name="name"
                    ref={register}
                />
                <input
                    className="form-field"
                    type="text"
                    placeholder="Item Required"
                    name="title"
                    ref={register}
                />
                <input
                    class="form-field"
                    type="number"
                    placeholder="Phone Number"
                    name="number"
                    ref={register({ required: "Phone number is required", minLength: { value: 11, message: "Please input a valid phone number" } })}
                />
                {errors.number && <span>{errors.number.message}</span>}
                <button class="form-field" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login
