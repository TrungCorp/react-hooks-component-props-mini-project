import React from "react";

function Article(prop){
  
   
    return <article  >
        <h3>{prop.title}</h3>
        <small>{prop.date ? prop.date : "January 1, 1970"}- {prop.minutes} min read</small>
        <p>{prop.preview}</p>
    </article>
}



export default Article;