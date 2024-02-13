import React from "react";

function  About(prop){
    return <aside>
        <img src={prop.image ? prop.image : "https://via.placeholder.com/215"} alt="blog logo" ></img>
        <p>{prop.about}</p>
    </aside>
}


export default About;