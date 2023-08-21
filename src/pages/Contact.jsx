import React from "react";

function Contact(){
    return(
        <div className="contact">
            <h2>צור קשר</h2>
            <form action="">
                <label>: שם</label><br />
                <input type="text" placeholder="שם מלא" /><br />
                <label>: פלא</label><br />
                <input type="number" placeholder="'מספר פלא" /><br /><br />
                <button type="submit">שלח</button><br />
            </form>
        </div>
    )
}

export default Contact;