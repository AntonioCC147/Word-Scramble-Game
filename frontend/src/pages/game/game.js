import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import StopModal from '../../components/modals/stopModal';

import { geographyENG, geographyRO, countriesENG, countriesRO, fruitsENG, fruitsRO } from '../../components/words';

import './game.css';

export default function Game(props) {
    const { category, language } = props;

    const [points, setPoints] = useState(0);

    const [timeLeft, setTimeLeft] = useState(3);
    const [verifyTime, setVerifyTime] = useState(0);
    const [words, setWords] = useState([]);

    const [displayWord, setDisplayWord] = useState("The Game will start soon...");
    const [correctWord, setCorrectWord] = useState("The Game will start soon...");
    const [inputValue, setInputValue] = useState("");

    const [isDisable, setIsDisable] = useState(true);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(category === "GeographyENG") setWords(geographyENG);
        else if(category === "GeographyRO") setWords(geographyRO);
        else if(category === "CountriesENG") setWords(countriesENG);
        else if(category === "CountriesRO") setWords(countriesRO);
        else if(category === "FruitsENG") setWords(fruitsENG);
        else if(category === "FruitsRO") setWords(fruitsRO);

        const timerId = setInterval(countdown, 1000);

        function countdown() {
            if(timeLeft === 0 && verifyTime === 0){
                clearInterval(timerId);
                setDisplayWord(shuffleWord());
                setTimeLeft(30); ////////////////////////////////////// seteaza 2 daca vrei aici sa treraca mai rpd
                setVerifyTime(verifyTime + 1);
                setIsDisable(false);
            }
            else if(timeLeft === 0 && verifyTime === 1){
                setShowModal(true);
            }
            else setTimeLeft(timeLeft - 1);
        }

        return () => {
            clearInterval(timerId);
        };
    }, [timeLeft, category]);

    function shuffleWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        setCorrectWord(words[randomIndex]);

        const wordArray = words[randomIndex].split('');

        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }

        const shuffledWord = wordArray.join('');

        return shuffledWord;
    }

    function handleRefreshClick() {
        setPoints(points - 50);
        setTimeLeft(timeLeft - 3); //refresh? -3

        const whatIsTime = timeLeft - 3;
        if(whatIsTime <= 0)
            setShowModal(true);

        setDisplayWord(shuffleWord());
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmitClick() {
        if(inputValue === correctWord){
            setPoints(points + 100);
            setDisplayWord(shuffleWord());
            setInputValue("");
            setTimeLeft(timeLeft + 5); //corect? +5
        }
        else{
            setPoints(points - 30);
            setTimeLeft(timeLeft - 3); //ai gresit? -3
        }
    }

    return (
        <Container fluid>
            {!showModal && (
                <Row className="points">
                    Points: {points}
                </Row>
            )}
            {!showModal && (
                <div className="container">
                    <Row>
                        <Col className="text-center">
                            {language === "ENG" && ( 
                                <div>
                                    <p className="titleGame">Word Scramble Game</p>
                                    <h3>Category: {category}</h3>
                                </div>
                            )}
                            {language === "RO" && ( 
                                <div>
                                    <p className="titleGame">Jocul Cuvintelor Încâlcite</p>
                                    <h3>Categorie: {category}</h3>
                                </div>
                            )}
                            <hr/>
                            <h4>{displayWord}<br/></h4>
                            <hr/>
                            <input type="text" id="answer" value={inputValue} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row>
                        {language === "ENG" && ( <h6>Time left: {timeLeft} seconds remaining...</h6> )}
                        {language === "RO" && ( <h6>Timp rămas: {timeLeft} secunde rămase...</h6> )}
                    </Row>
                    <Row>
                        <Col sm={6} className="text-center">
                            {language === "ENG" && (
                                <Button variant="danger" onClick={handleRefreshClick} disabled={isDisable} size="lg">
                                    Refresh Word
                                </Button>
                            )}{' '}
                            {language === "RO" && (
                                <Button variant="danger" onClick={handleRefreshClick} disabled={isDisable} size="lg">
                                    Reîncarcă Cuvântul
                                </Button>
                            )}{' '}
                        </Col>
                        <Col sm={6} className="text-center">
                            {language === "ENG" && (
                                <Button variant="success" onClick={handleSubmitClick} disabled={isDisable} size="lg">
                                    Submit Answer
                                </Button>
                            )}{' '}
                            {language === "RO" && (
                                <Button variant="success" onClick={handleSubmitClick} disabled={isDisable} size="lg">
                                    Trimite Răspunsul
                                </Button>
                            )}{' '}
                        </Col>
                    </Row>
                </div>
            )}
            {showModal && <StopModal points={points} language={language}/>}
        </Container>
    );
}
