const ContactCard = ({ contact }) => {
    // const deleteContact = () => {
    //     axios.get(`http://127.0.0.1:8000/api/delete_contact/${contact.id}`,
    //         {
    //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    //         })
    //     .then(response=>{
    //         if (response.data.success){
    //             window.location.reload(); // there should be a better way
    //         }
    //     })
    //     .catch(e=>console.log(e))
    // }

    return (
        <div className="contact">

            <div>
                <img src={'https://s3-alpha-sig.figma.com/img/04f8/cd2f/46f869f3c746f0e245e75691810fa42f?Expires=1691971200&Signature=CFOwxTqPvrJsphNrxe5e5FAy~8b~yrzq9DtuNb1dMmu2aoBSVOsxtGe4hh-n098DaRXL0jxkaOT5a5XSyO077QjfUtNNwcL43STrqaf-TBzlx1RI0H-1K3~jyUBO3ZXJgl4EwSEubWrIhqejSj0WoGh1TTgiewo7h42n1voF2ILi8bft3cMZkvOiY-PYD61mnI~eZgn92Kq~rOXZn2O0b5rPr-YWNpgvrUEe-2IK4Su-hoJk6ogkyhw7iSXwnDaQwETyGeZdX6M3QcH92VNp772VqMqwrdz7sW0XXdW2qhdKb9tq5IV9BmJymy1KFQKE0bIegvD4w02NdbJDooerSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} alt={contact.name}/>
                <p>Delete</p>
            </div>

            <div>
                <h3> &#x1F464;: {contact.name}</h3>
                <h3> &#9742;: {contact.phone_number} </h3>
                <h3 className="location">🗺️ lat:{contact.latitude}, lng:{contact.longitude} </h3>
            </div>
            
            
        </div>
    )
}

export default ContactCard