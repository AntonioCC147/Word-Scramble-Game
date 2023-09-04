import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Game from '../../pages/game/game';

import { TitleENG, TitleRO, DescriptionENG, DescriptionRO, RulesENG, RulesRO, PointsENG, PointsRO } from '../modals/languageModal';

import roIcon from '../../assets/icons/ro.png';
import ukIcon from '../../assets/icons/uk.png';

import '../styles.css';

export default function StartModal() {
    const [language, setLanguage] = useState("ENG");

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [gameStarted, setGameStarted] = useState(false);

    const [category, setCategory] = useState("None");
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory); setGameStarted(true);
    };

    return (
        <div>
            <Modal show={show} size="lg" style={{backgroundColor: "#0093E9", backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}}>
                <div className="modal-content-container">
                    <Modal.Header>
                        {language === "ENG" && ( <TitleENG/> )}
                        {language === "RO" && ( <TitleRO/> )}

                        {language === "ENG" && ( <Button variant="outline-dark" onClick={() => setLanguage("RO")}>
                            <img src={roIcon} style={{width: "20px"}} alt="RO"/>{' '}RO</Button> 
                        )}
                        {language === "RO" && ( <Button variant="outline-dark" onClick={() => setLanguage("ENG")}>
                            <img src={ukIcon} style={{width: "20px"}} alt="UK"/>{' '}ENG</Button>
                        )}
                    </Modal.Header>
                    <Modal.Body className="body">
                        {language === "ENG" && ( <DescriptionENG/> )}
                        {language === "RO" && ( <DescriptionRO/> )}

                        {language === "ENG" && ( <RulesENG/> )}
                        {language === "RO" && ( <RulesRO/> )}

                        {language === "ENG" && ( <PointsENG/> )}
                        {language === "RO" && ( <PointsRO/> )}

                        {language === "ENG" && ( <Row><h5># Categories: </h5></Row> )}
                        {language === "RO" && ( <Row><h5># Categorii: </h5></Row> )}
        
                        {language === "ENG" && (  
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={() => { handleCategoryChange("GeographyENG"); handleClose(); }}>
                                        Geograpghy
                                    </Button>{' '}
                                    <Button variant="danger" onClick={() => { handleCategoryChange("CountriesENG"); handleClose(); }}>
                                        Countries
                                    </Button>{' '}
                                    <Button variant="success" onClick={() => { handleCategoryChange("CareersENG"); handleClose(); }}>
                                        Careers
                                    </Button>{' '}
                                    <Button variant="secondary" onClick={() => { handleCategoryChange("AnimalsENG"); handleClose(); }}>
                                        Animals
                                    </Button>{' '}
                                    <Button variant="warning" onClick={() => { handleCategoryChange("FruitsENG"); handleClose(); }}>
                                        Fruits
                                    </Button>
                                </Col>
                            </Row>
                        )}
                        {language === "RO" && (  
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={() => { handleCategoryChange("GeographyRO"); handleClose(); }}>
                                        Geografie
                                    </Button>{' '}
                                    <Button variant="danger" onClick={() => { handleCategoryChange("CountriesRO"); handleClose(); }}>
                                        Țări
                                    </Button>{' '}
                                    <Button variant="success" onClick={() => { handleCategoryChange("CareersRO"); handleClose(); }}>
                                        Cariere
                                    </Button>{' '}
                                    <Button variant="secondary" onClick={() => { handleCategoryChange("AnimalsRO"); handleClose(); }}>
                                        Animale
                                    </Button>{' '}
                                    <Button variant="warning" onClick={() => { handleCategoryChange("FruitsRO"); handleClose(); }}>
                                        Fructe
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Modal.Body>
                </div>
            </Modal>
            
            {gameStarted && <Game category={category} language={language}/>}
        </div>
    );
}
