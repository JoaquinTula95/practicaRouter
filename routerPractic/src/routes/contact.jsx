

export default function Contact(){
    const contact = {
        first: "Tu",
        last: "Nombre",
        avatar: "https://placekitten.com/g/200/200",
        twitter:  "your_handle",
        notes: "Some notes",
        favorite: true,
    };
    return (
        <div id= "contact">
            <div>
                <img
                    key={contact.avatar}
                    src={contact.avatar || null} 
                    />
            </div>
            <div>
                <h1>
                    {contact.first || contact.last? (
                    <>
                        {contact.first} {contact.last}
                    </>
                    ): (
                        <i>no name</i>
                    )}{" "} 
                    <favorite contact={contact}/>             
                 </h1>
                        
            </div>
        </div>
    )
}