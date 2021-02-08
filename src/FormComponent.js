import React from "react"

function FormComponent(props) {
    return(
        <main>
           <form>
             <input 
                name="firstName"
                value={props.data.firstName} 
                placeholder="First Name" 
                onChange={props.handleChange}
                />
                <br/>
                <br/>
             <input 
                name="lastName"
                value={props.data.lastName} 
                placeholder="Last Name" 
                onChange={props.handleChange}
                />
                <br/>
                <br/>
             <input 
                name="age" 
                value={props.data.age}
                placeholder="Age"
                onChange={props.handleChange}
                />
                <br/>
            <label>
             <input 
                type="radio"
                name="gender"
                value="Male"
                checked={props.data.gender === "Male"}
                onChange={props.handleChange}
                /> Male
            </label>
             <br/>
             <label>
             <input 
                type="radio"
                name="gender"
                value="Female"
                checked={props.data.gender === "Female"}
                onChange={props.handleChange}
                /> Female
            </label>
            
            <br/>
            <select 
                value={props.data.destination}
                name="destination"
                onChange={props.handleChange}
                >
                <option value="">Choose a Destination</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="france">France</option>
                <option value="holland">Holland</option>
            </select>
            <br/>
            <label>
               <input 
                    type="checkbox" 
                    name="isVegan"
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                /> isVegan
            </label>
            <br/>
            <label>
               <input 
                    type="checkbox" 
                    name="isKosher"
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                /> isKosher
            </label>
            <br/>
            <label>
               <input 
                    type="checkbox" 
                    name="isLactoseFree"
                    onChange={props.handleChange}
                    checked={props.data.isLactoseFree}
                /> isLactoseFree
            </label>
             <br/>
             <button>Submit</button>
            </form>
            
            <hr/>
            <h2>Enter information:</h2>  
            <p>Your Name:{props.data.firstName} {props.data.lastName}</p>
            <p>Your Age:{props.data.age}</p>
            <p>Your gender: {props.data.gender} </p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary Restrictions:</p>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
        )
}

export default FormComponent

