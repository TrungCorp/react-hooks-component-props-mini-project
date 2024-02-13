import React from "react";
import Article from "./Article";

function ArticleList(prop){
    console.log(prop.posts)
    
    const articleItems = prop.posts.map((postData)=>{
        console.log(postData)
        return <Article  key= {postData.id}title= {postData.title} date={postData.date} preview={postData.preview} minutes={postData.minutes} ></Article>
    }) 

    return <main>
        {articleItems}
    </main>
}


export default ArticleList;