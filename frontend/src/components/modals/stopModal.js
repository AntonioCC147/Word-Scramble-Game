//importam tot ce avem nevoie pentru aplicatie (modal, butoane) toate din bootstrap
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//functia primeste props, props reprezentand informatii (ca niste parametrii) la chemarea functiei
export default function StopModal(props) {
    //points si language sunt informatiile primite prin intermediul lui props
    const { points, language } = props;

    //constante pentru modal
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    //folosit pentru a reseta toata pagina la reload (refresh)
    const handleRefreshClick = () => {
        window.location.reload();
    };
  
    return (
      <div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" style={{backgroundColor: "#0093E9", backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}}>
            {/*header-ul care contine un mesaj de confirmare a terminarii jocului*/}
            <Modal.Header>
                {language === "ENG" && (
                    <Modal.Title>You just finish the Game!</Modal.Title>
                )}
                {language === "RO" && (
                    <Modal.Title>Tocmai ai terminat Jocul!</Modal.Title>
                )}
            </Modal.Header>
            {/*body-ul care contine un mesaj de multumire si afisarea punctelor acumulate*/}
            <Modal.Body>
                {language === "ENG" && (
                    <div>
                        <h6>Thank you for playing this game!</h6>
                        <br/>
                        <h3>Total Points: {points}</h3>
                    </div>
                )}
                {language === "RO" && (
                    <div>
                        <h6>Mulțumim că ai jucat acest joc!</h6>
                        <br/>
                        <h3>Total Puncte: {points}</h3>
                    </div>
                )}
            </Modal.Body>
            {/*footer-ul care contine un buton de resetare. La apasare, se da "refresh" la toata pagina si ajungem
            la inceput, acolo unde aveam modalul principal*/}
            <Modal.Footer>
                {language === "ENG" && (
                    <Button variant="dark" onClick={handleRefreshClick}>Restart Game</Button>
                )}
                {language === "RO" && (
                    <Button variant="dark" onClick={handleRefreshClick}>Restartează Jocul</Button>
                )}
            </Modal.Footer>
        </Modal>
      </div>
    );
}