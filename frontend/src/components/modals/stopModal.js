import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function StopModal(props) {
    const { points, language } = props;

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const handleRefreshClick = () => {
        window.location.reload();
    };
  
    return (
      <div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" style={{backgroundColor: "#0093E9", backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}}>
            <Modal.Header>
                {language === "ENG" && (
                    <Modal.Title>You just failed the Game!</Modal.Title>
                )}
                {language === "RO" && (
                    <Modal.Title>Tocmai ai terminat Jocul!</Modal.Title>
                )}
            </Modal.Header>
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