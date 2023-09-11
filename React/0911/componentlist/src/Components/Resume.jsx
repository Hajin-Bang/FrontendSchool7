import React, { useState } from 'react'
//React라는 객체는 export default 문법을 통해서 반환될 것이고, useState는 export 키워드만 붙어서 밖으로 빠질 것이다


function Resume(props) {

    // let like = 0;

    // console.log('useState:', useState(0));
    let [like, setLike] = useState("");

    function clickLike() {
        // like += 1;
        // console.log(like)
        if(like === "") {
            setLike("like");
        } else {
            setLike("");
        }
    }

    return (
        <>
            <div style={{ border: "1px solid black" }}>
                <h1>{props.name} 자기소개서</h1>
                <h2>{props.hello}</h2>
                <h3>취미 : {props.hobby}</h3>
                <h4>좋아하는 음식 : {props.food}</h4>
                <h5>좋아하는 색 : <span style={{ color: props.color }}>{props.color}</span></h5>
                <button onClick={clickLike}>like</button><span>{like}</span>
            </div>
        </>
    )
}

export default Resume