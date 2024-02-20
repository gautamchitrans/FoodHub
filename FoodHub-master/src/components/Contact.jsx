import "./Contact.css";
import contactImg from "../assets/Contact-Us.png" ;
import {useState} from "react";
const ContactUs = ()=>{
    const[message,setMessage] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    } 
    return (
        <div className="contact-container">
            <div className="contact-left">
                <img src={contactImg}></img>
            </div>
            <div className="contact-right">
                
                <form onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                    <input placeholder="Name" type="text" required />
                    <input placeholder="Email" type="email" required />
                    <textarea placeholder="Enter your message here" required/>
                    <button >Submit</button>
                    {message && <span>Thanks for contacting FoodHub , we will reply as soon as  asap</span>}
                </form>
            </div>
        </div>
    )
}
export default ContactUs;