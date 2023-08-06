import Navbar from "./components/navbar/navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import ContactCard from "./components/contactCard/contactCard";
import { useNavigate } from "react-router-dom"
import Pagination from "./pagination";
import MyMap from "./components/map/mapContainer";
const Home = () => {
    
    const [contacts, setContacts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(10)

    const searchContacts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/contacts'
        // , {
        //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        // }
        )
        setContacts(response.data.contacts)
    }

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage

    const currentCards = contacts.slice(firstCardIndex, lastCardIndex)

    useEffect(( () => {
        searchContacts()
    }), [])
    const navigate = useNavigate();
    const goToAddForm = () => {
        navigate('/AddContact')
    }

    return ( 
    <>
        <Navbar/>

        <div>
            <div className="cards">
                <div className='container-header'>
                    <h1>Contacts</h1>
                    <Pagination 
                    totalCards={contacts.length} 
                    cardsPerPage={cardsPerPage} 
                    setCurrentPage={setCurrentPage} 
                    currentPage={currentPage}
                    />
                    <button className="add-btn" onClick={goToAddForm}>Add New</button>
                </div>
            <MyMap currentcards = {currentCards}/> 
            {
                contacts?.length > 0
                ? ( <div className="container-cards">
                    {
                        currentCards.map((contact)=>(
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
            <Pagination 
                    totalCards={contacts.length} 
                    cardsPerPage={cardsPerPage} 
                    setCurrentPage={setCurrentPage} 
                    currentPage={currentPage}
                    />
        </div>
        </div>
    </>
    );
}

export default Home;