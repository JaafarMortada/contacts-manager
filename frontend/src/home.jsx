import Navbar from "./components/navbar/navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import ContactCard from "./components/contactCard/contactCard";
// const API_url = 'http://127.0.0.1:8000/api/' // testing 
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";
import { useNavigate } from "react-router-dom"
const Home = () => {
    const myMarker = new Icon({
        iconUrl: "https://img.icons8.com/?size=512&id=PZTTDl8ML4vy&format=png",
        iconSize: [38, 38]})
    const [contacts, setContacts] = useState([])

    const searchContacts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/contacts', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        setContacts(response.data.contacts)
    }

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
                    <button className="add-btn" onClick={goToAddForm}>Add New</button>
                </div>
                {/* <TheMap/> */}
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
            <MapContainer center={[50, -1]} zoom={13}>
                <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    contacts.map((contact)=>(
                        <Marker position={[contact.latitude, contact.longitude]} icon={myMarker} key={contact.id}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ))
                }
                
            </MapContainer>
        </div>
        </div>
        
    </>
    );
}

export default Home;