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
    <div style={{height:'100%', display:'flex', justifyContent:'center'}}>
      {openingMessage!=="welcome screen called!" ? <div style={{display:'flex',flexDirection:'column', background:'#f0efed'}}><img style={{height:'500px', width:'100%', maxWidth:'100%'}} src="https://cdn.yellowmessenger.com/QVPQxiJfdYa61698977050260.jpg"/>
      <p>Este site destina-se a ser utilizado exclusivamente por profissionais de saúde que trabalham em farmácias. Ao entrar neste site, está a confirmar que é um profissional de saúde em Portugal. Este site não foi projetado para notificar suspeitas de acontecimentos adversos ou informações de segurança. Para notificar um caso de suspeita de acontecimento adverso ou informação de segurança, contactar o Departamento Médico da GSK: - Telefone: 214129500 - Email: Lis.nucleo-farmacovigilancia@gsk.com © 2024 empresas do grupo GSK ou sob licença. As Marcas Registadas são propriedade ou licenças das empresas do grupo GlaxoSmithKline, Produtos Farmacêuticos, Lda. Pessoa Colectiva n.º 500139962. Rua Dr. António Loureiro Borges, n.º 3 Arquiparque, Miraflores 1495-131 Algés</p>
      </div> : openingMessage}

      
    </div>
  );
}
