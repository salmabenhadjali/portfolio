import React from "react"
import './Form.css'

function Form() {
    const [formData, setFormData] = React.useState({
        login: "",
        password: "",
        passwordConfirm: "",
        newsletterSubscription: false,
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    function signUp(event) {
        event.preventDefault()
        const {login, password, passwordConfirm, newsletterSubscription} = formData
        if (!password || !passwordConfirm || !login) {
            console.log('Please fill all the data of the form')
            return
        }
        
        if (password && password === passwordConfirm) {
            console.log('Succesfully signed up')
        } else if (password && passwordConfirm) {
            console.log('passwords do not match')
            return
        }

        if (newsletterSubscription) {
            console.log('Thanks for signing up for our newsletter!')
        }
    }

    return(
        <>
            <form className="form-signup" onSubmit={signUp}>
                <input 
                    type="text" 
                    name="login" 
                    value={formData.login}
                    placeholder="Login" 
                    onChange={handleChange} 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password}
                    placeholder="Password" 
                    onChange={handleChange}  
                />
                <input 
                    type="text" 
                    name="passwordConfirm" 
                    value={formData.passwordConfirm}
                    placeholder="Confirm password" 
                    onChange={handleChange} 
                />
                <div>
                    <input 
                        id="subscription"
                        type="checkbox" 
                        name="newsletterSubscription" 
                        checked={formData.newsletterSubscription}
                        onChange={handleChange} 
                    />
                    <label htmlFor="subscription"> I want to join the newsleter</label>
                </div>
                <button>Sign up</button>
            </form>
        </>
    );
}

export default Form;