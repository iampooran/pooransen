import React, { useEffect, useState } from "react";
import "../style.css";
import cv from "./cv.pdf";
export default function Home() {

  const [openingMessage,setOpeningMessage] = useState("no event triggered");

  useEffect(() => {
    window.addEventListener("message", (eventData) => {
      let parsedEventData = JSON.parse(eventData.data);

      console.log("eventData::React2::", parsedEventData);
      if(parsedEventData.event_code==="welcome-screen"){
        setOpeningMessage("welcome screen called!");
      }
      
    });
  }, []);

  const handleLogOut = () => {
    console.log("handleLogOut");

    window.parent.postMessage(
      JSON.stringify({
        event_code: "help",
        data: {},
      }),
      "*"
    );
  };

  return (
    <div style={{height:'100%', display:'flex', justifyContent:'center', marginTop:'150px'}}>
      {openingMessage}
    </div>
  );
}
