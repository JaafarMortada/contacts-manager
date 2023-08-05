import Navbar from "./components/navbar/navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import ContactCard from "./components/contactCard/contactCard";
// const API_url = 'http://127.0.0.1:8000/api/' // testing 
const Home = () => {
    const [contacts, setContacts] = useState([])

    const searchContacts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/contacts', {
            headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjkxMjU2ODk1LCJleHAiOjE2OTEyNjA0OTUsIm5iZiI6MTY5MTI1Njg5NSwianRpIjoiVnIxSkUwR0M2VDRiaXVkViIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.AzEXSs5Jg8IjecHqG4sKUVz3WtDT4JjmUyLrX7WD5BA` }
        })
        setContacts(response.data.contacts)
        console.log(response.data.contacts)
    }

    useEffect(( () => {
        searchContacts()
    }), [])
    return ( 
    <>
        <Navbar/>
        
        <div>
            <div className="cards">
                <div className='container-header'>
                    <h1>Contacts</h1>
                    <button className="add-btn">Add New</button>
                </div>
            
            {
                contacts?.length > 0
                ? ( <div className="container-cards">
                    {
                        contacts.map((contact)=>(
                            <ContactCard key={contact.id} contact={contact}/>
                        ))
                    }
                </div> 
                ) :
                (
                    <div className="empty">
                        <h2>No contacts found</h2>
                    </div>
                )
            }
            
        </div>
        </div>
        
    </>
    );
}

export default Home;