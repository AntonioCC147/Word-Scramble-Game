import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function StopModal(props) {
    const { points } = props;

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const handleRefreshClick = () => {
        window.location.reload();
    };
  
    return (
      <div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
            <Modal.Header>
                <Modal.Title>You just finish the Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Ai terminat jocul, bla bla bla
                <br/>
                Total Points: {points}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleRefreshClick}>Restart Game</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
}