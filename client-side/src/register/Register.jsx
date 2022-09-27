import "./Register.css";
import axios from "axios";
import { useRef } from "react";
//import {Link} from "react-router-dom";

export default function Register() {

    const full_name = useRef();
    const email = useRef();
    const phone_no = useRef();

    const api = axios.create({baseURL: `http://localhost:3000/`})
    
    const handleClick = async (e) => {
        e.preventDefault();
        const user = {
            full_name: full_name.current.value,
            email: email.current.value,
            phone_no: phone_no.current.value
          };
          try 
          {
            const response = await api.post("/api/data", user);
            alert(response.data.message);
            full_name.current.value = "";
            email.current.value = "";
            phone_no.current.value = "";
          } 
          catch (err) 
          {
            console.log(err);
          }
    };

    return (
        
                <div className="wrapper">
                    <section className="form signup">
                        <header>Appointment Form</header>
                        <form onSubmit={handleClick}>
                            <div className="field input">
                                <label>Name</label>
                                <input type="string" name="full_name" placeholder="Enter your name" ref={full_name} required/>
                            </div>
                            <div className="field input">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="Enter your email" ref={email} required/>
                            </div>
                            <div className="field input">
                                <label>Phone Number</label>
                                <input type="tel" name="phone_no" placeholder="Enter your phone number" pattern="[0-9]{10}" ref={phone_no} required/>
                            </div>
                            <div className="field button">
                                <button type="submit" name="submit">Submit Data</button>
                            </div>
                        </form>
                    </section>
                </div>
            
  );
}