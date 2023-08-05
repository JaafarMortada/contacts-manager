import Navbar from "./components/navbar/navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import ContactCard from "./components/contactCard/contactCard";
const API_url = 'http://www.omdbapi.com?apikey=36621c78' // testing 
const Home = () => {
    const [contacts, setContacts] = useState([])

    const searchContacts = async (title) => {
        const response = await axios.get(`${API_url}&s=${title}`)
        setContacts(response.data.Search)
    }

    useEffect(( () => {
        searchContacts('batman')
    }), [])
    return ( 
    <>
        <Navbar/>
        
        <div>
            <div className="cards">
                <div class='container-header'>
                    <h1>Contacts</h1>
                    <button className="add-btn">Add New</button>
                </div>
            
            {
                contacts?.length > 0
                ? ( <div className="container-cards">
                    {
                        contacts.map((contact)=>(
                            <ContactCard contact={contact}/>
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