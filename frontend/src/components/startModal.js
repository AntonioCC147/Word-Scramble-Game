import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Game from '../pages/game/game';

import './styles.css';

export default function StartModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [gameStarted, setGameStarted] = useState(false);

    const [category, setCategory] = useState("None");

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory); setGameStarted(true);
    };

    return (
        <div>
            <Modal show={show} size="lg">
                <Modal.Header>
                    <Modal.Title className="titleModal">Word Scramble Game</Modal.Title>
                    ENG / RO
                </Modal.Header>
                <Modal.Body className="body">
                    <Row>
                        <h5># Descriptions:</h5>
                        <p>
                            The Word Scramble Game is an engaging and interactive word puzzle that challenges your vocabulary and
                            problem-solving skills. In this exciting game, you'll encounter a variety of words that have been
                            cleverly scrambled, leaving you to decipher and rearrange the letters to form the correct word. It's
                            a fun and educational way to expand your word knowledge while having a great time!
                        </p>
                    </Row>
                    <Row>
                        <h5># Rules:</h5>
                        <ol style={{paddingLeft: "50px"}}>
                                <li>Objective: The objective of the Word Scramble Game is to unscramble a set of letters to form a valid word within a limited amount of time.</li>
                                <li>Game Categories: The game offers multiple categories of words to choose from. Players can select their preferred category before starting the game.</li>
                                <li>Game Start: The game begins with a countdown timer set to a specific duration, typically 30 seconds.</li>
                                <li>Refresh Word: If you're stuck or want to try a different approach, you can click the "Refresh Word" button to shuffle the letters and receive a new scrambled word.</li>
                                <li>End of Game: The game continues until the countdown timer reaches zero. At this point, the game session ends, and your performance is displayed.</li>
                        </ol>
                    </Row>
                    <Row>
                        <h5># Points:</h5>
                        Woohoo, you are reading this text in a modal!

                        Choose a category to start
                    </Row>
                    <Row>
                        <h5># Categories:</h5>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick={() => { handleCategoryChange("Geography"); handleClose(); }}>
                                Geograpghy
                            </Button>{' '}
                            <Button variant="primary" onClick={() => { handleCategoryChange("Countries"); handleClose(); }}>
                                Countries
                            </Button>{' '}
                            <Button variant="primary" onClick={() => { handleCategoryChange("Fruits"); handleClose(); }}>
                                Fruits
                            </Button>{' '}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            
            {gameStarted && <Game category={category}/>}
        </div>
    );
}
