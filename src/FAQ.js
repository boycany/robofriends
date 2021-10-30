import React, {Fragment} from "react";
//因為react一定要回傳一個前後包住的tag，所以以往都會加了一個div包起來。
//但為了解決產生不必要的div之類的等等問題，新增了<Fragment>這個tag來代替以前用的<div>
//如果沒有import {Fragment}, 下面就要寫成<React.Fragment>


function FAQ() {
    return (
        <>
            <p>Q. What is RoboFriends?</p>
            <p>A. It's an app let your friends become robots.</p>
            <p>Q. How do I contact with them?</p>
            <p>A. Email. Robots use email too.</p>
        </>
    );
}

export default FAQ