import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Game from '../../pages/game/game';

import { TitleENG, TitleRO, DescriptionENG, DescriptionRO, RulesENG, RulesRO, PointsENG, PointsRO } from '../modals/languageModal';

import '../styles.css';

export default function StartModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [gameStarted, setGameStarted] = useState(false);

    const [category, setCategory] = useState("None");
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory); setGameStarted(true);
    };

    const [language, setLanguage] = useState("ENG");

    return (
        <div>
            <Modal show={show} size="lg">
                <Modal.Header>
                    {language === "ENG" && ( <TitleENG/> )}
                    {language === "RO" && ( <TitleRO/> )}

                    {language === "ENG" && ( <Button onClick={() => setLanguage("RO")}>RO</Button> )}
                    {language === "RO" && ( <Button onClick={() => setLanguage("ENG")}>ENG</Button> )}
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
                                <Button variant="primary" onClick={() => { handleCategoryChange("CountriesENG"); handleClose(); }}>
                                    Countries
                                </Button>{' '}
                                <Button variant="primary" onClick={() => { handleCategoryChange("FruitsENG"); handleClose(); }}>
                                    Fruits
                                </Button>{' '}
                            </Col>
                        </Row>
                    )}
                    {language === "RO" && (  
                        <Row>
                            <Col>
                                <Button variant="primary" onClick={() => { handleCategoryChange("GeographyRO"); handleClose(); }}>
                                    Geografie
                                </Button>{' '}
                                <Button variant="primary" onClick={() => { handleCategoryChange("CountriesRO"); handleClose(); }}>
                                    Țări
                                </Button>{' '}
                                <Button variant="primary" onClick={() => { handleCategoryChange("FruitsRO"); handleClose(); }}>
                                    Fructe
                                </Button>{' '}
                            </Col>
                        </Row>
                    )}
                </Modal.Body>
            </Modal>
            
            {gameStarted && <Game category={category} language={language}/>}
        </div>
    );
}
