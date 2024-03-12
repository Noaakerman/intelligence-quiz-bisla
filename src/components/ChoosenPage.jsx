import { useState } from "react";

export default function ChoosenPage({ changePage }) {
    const highOpacity = { animation: "highOpacity 2s" };
    function handleClickBtn(event) {
        if (event.target.id === "toMain") {
            changePage(2)
        }
        else if (event.target.id === "toIntiligence") {
            changePage(4)
        }
    }
    return <>
        <span className="blueFrameBig"></span>
        <div style={highOpacity}>
            <span className="orangeDeco"></span>
            <span className="pinkDeco"></span>
            <h2>במה תרצי/ה להתחיל?</h2>
            <div className="chossenbtnsConatiner" onClick={handleClickBtn}>
                <button id="toMain">לשאלון</button>
                <button id="toIntiligence">לאינטיליגנציות</button>
            </div></div>
    </>
}