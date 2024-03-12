import { QUESTIONSDATA } from "./dataQustion";
import { useState } from "react";

export default function Intiligence({ chosenIntilligence, backToScreen }) {
    const [ifBack, setIfBack] = useState(false)
    var myIntilligance = [];
    for (let i = 0; i < QUESTIONSDATA.length; i++) {
        if (QUESTIONSDATA[i].kind === chosenIntilligence) {
            myIntilligance = QUESTIONSDATA[i];
            console.log(myIntilligance.text[1])
        }
    }
    var circleStyle = {
        backgroundColor: myIntilligance.color,
        boxShadow: `0px 0px 20px ${myIntilligance.color}, 0px 0px 5px #614ad3`,
        animation: "circleAnimation 2s"
    }

    function handleBackButton() {
        setIfBack(true);
        setTimeout(() => {
            backToScreen();
        }, 2000);

    }
    return <>
        {/* <span class="blueFrameBig"></span>
        <span className="circleChosenIntilligance" style={circleStyle}></span>
        <h5>{`${myIntilligance.kind} - ${myIntilligance.text[0]}`}</h5>

        <ul className="text" style={{ animation: "inside1 3s 1s forwards" }}>
            {myIntilligance.text[1].map((sentece1, i) =>
                <li><p className="sentence" style={i === 0 ? { textDecoration: "underline" } : null}>{sentece1}</p></li>)}
        </ul>
        <ul className="text" style={{ animation: "inside2 3s 4s forwards" }}>
            {myIntilligance.text[2].map((sentece2, j) =>
                <li><p className="sentence" style={j === 0 ? { textDecoration: "underline"  } : null}>{sentece2}</p></li>)}
        </ul> */}
        <span style={ifBack ? { animation: "blueFrameSmaller 2s  alternate" } : { animation: "blueFrameBiger 2s  alternate" }} class="blueFrameBigFront"></span>
        <img className="intiliiganceBackground"
        style={ifBack ? { animation: "lowOpacity 1.5s forwards" } : {  animation: "highOpacity 1.5s forwards"}}
        src={require(`../assets/screens/${myIntilligance.number}.png`)} /> 
        {/* {/* <div className="intiliiganceBackground" style={{backgroundImage : `url("./assets/screens/${myIntilligance.number}.png")`}}></div> */}
        <button id="btntoIntiligence" onClick={handleBackButton}>חזור</button>
    </>
}