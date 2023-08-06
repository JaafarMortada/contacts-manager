import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";

const MyMap = ({ currentcards }) => {
    const myMarker = new Icon({
        iconUrl: "https://img.icons8.com/?size=512&id=PZTTDl8ML4vy&format=png",
        iconSize: [38, 38]})
    return ( 

        <MapContainer center={[33.89, 35.50]} zoom={3}>
                <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    currentcards.map((contact)=>(
                        <Marker position={[contact.latitude, contact.longitude]} icon={myMarker} key={contact.id}>
                            <Popup className="map-popup">
                            {contact.name}<br/>{contact.phone_number}
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
     );
}
 
export default MyMap;