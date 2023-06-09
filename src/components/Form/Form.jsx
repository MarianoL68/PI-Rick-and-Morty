import { useState } from "react";
import validation from "./validation";


const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })


    const handleChange= (event) => {
        setUserData({
           ...userData,
           [event.target.name]: event.target.value
        })

        setErrors (validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

       }

       const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
       }

    return(
      <form onSubmit={handleSubmit}>
       <label htmlFor="email">Email:</label>
       <input type="email" name="email" placeholder="Ingresa tu email" value={userData.email} onChange={handleChange}/>
       {errors.email && <p>{errors.email}</p>}
       <br />
       <label htmlFor="password">Password:</label>
       <input type="password" name="password" placeholder="Ingresa  tu password" value={userData.password} onChange={handleChange}/>

       <button>Submit</button>
      </form>
    
    )

}

export default Form;