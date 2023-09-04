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
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
            <Modal.Header>
                {language === "ENG" && (
                    <Modal.Title>You just failed the Game</Modal.Title>
                )}
                {language === "RO" && (
                    <Modal.Title>Tocmai ai terminat Jocul</Modal.Title>
                )}
            </Modal.Header>
            <Modal.Body>
                Ai terminat jocul, bla bla bla
                <br/>
                Total Points: {points}
            </Modal.Body>
            <Modal.Footer>
                {language === "ENG" && (
                    <Button variant="primary" onClick={handleRefreshClick}>Restart Game</Button>
                )}
                {language === "RO" && (
                    <Button variant="primary" onClick={handleRefreshClick}>Restartează Jocul</Button>
                )}
            </Modal.Footer>
        </Modal>
      </div>
    );
}