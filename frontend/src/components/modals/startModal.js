//importam tot ce avem nevoie pentru aplicatie (modal, linii, coloane, butoane) toate din bootstrap
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Game from '../../pages/game/game';

//import componentele create in languageModal.js
import { TitleENG, TitleRO, DescriptionENG, DescriptionRO, RulesENG, RulesRO, PointsENG, PointsRO } from '../modals/languageModal';

//import iconitele din folderul de imagini (assets)
import roIcon from '../../assets/icons/ro.png';
import ukIcon from '../../assets/icons/uk.png';

//import styles.css
import '../styles.css';

export default function StartModal() {
    /*mai jos vom folosi de foarte multe ori useState-uri.
    un useState este useState este un React Hook care permite sa adaugam o variabila de stare la componenta
    const [state, setState] = useState(initialState);
    */
    //setam limba principala ca fiind ENG
    const [language, setLanguage] = useState("ENG");

    //modalul initial este vizibil
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    //modalul de joc initial NU este vizibil, din motive evidente (el se activeaza la apasarea unui buton)
    const [gameStarted, setGameStarted] = useState(false);

    //categoria momentan nu este setata (utilizatorul o seteaza prin alegerea acesteia)
    const [category, setCategory] = useState("None");
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory); setGameStarted(true);
    };

    return (
        <div>
            {/*creez modalul care va contine, in functie de limba setata (variabila language) diferitele componente
            pe care le-am importat anterior*/}
            <Modal show={show} size="lg" style={{backgroundColor: "#0093E9", backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}}>
                <div className="modal-content-container">
                    {/*header-ul contine titlul si butonul aferent schimbarii limbii din RO in ENG*/}
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
                    {/*body-ul contine descrierea, regulile, punctele si categoriile*/}
                    <Modal.Body className="body">
                        {language === "ENG" && ( <DescriptionENG/> )}
                        {language === "RO" && ( <DescriptionRO/> )}

                        {language === "ENG" && ( <RulesENG/> )}
                        {language === "RO" && ( <RulesRO/> )}

                        {language === "ENG" && ( <PointsENG/> )}
                        {language === "RO" && ( <PointsRO/> )}

                        {language === "ENG" && ( <Row><h5># Categories: </h5></Row> )}
                        {language === "RO" && ( <Row><h5># Categorii: </h5></Row> )}
        
                        {/*in cazul in care limba este ENG, punem categoriile in limba engleza si apelam
                        "handleCategoryChange" cu numele categoriei specifice. Acest "handleCategoryChange" seteaza
                        categoria specifica si da drumul la joc activand modalul de joc*/}
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
                        {/*in cazul in care limba este RO, punem categoriile in limba romana si apelam
                        "handleCategoryChange" cu numele categoriei specifice. Acest "handleCategoryChange" seteaza
                        categoria specifica si da drumul la joc activand modalul de joc*/}
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
            {/*linia de mai jos face referire la faptul ca daca gameStarted == true, inseamna ca dam display (afisam)
            modalul de joc.*/}
            {gameStarted && <Game category={category} language={language}/>}
        </div>
    );
}
