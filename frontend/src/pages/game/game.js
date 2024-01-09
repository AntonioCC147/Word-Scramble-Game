//importam tot ce avem nevoie pentru aplicatie (container, linii, coloane, butoane, formular) toate din bootstrap
import React, { useState, useEffect, useCallback } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//importam stopModal
import StopModal from '../../components/modals/stopModal';

//importam totii vectorii de cuvinte din words.js
import { geographyENG, geographyRO, countriesENG, countriesRO, careersENG, careersRO, animalsENG, animalsRO, fruitsENG, fruitsRO } from '../../components/words';

//importam games.css
import './game.css';

//functia primeste props, props reprezentand informatii (ca niste parametrii) la chemarea functiei
export default function Game(props) {
    //category si language sunt informatiile primite prin intermediul lui props
    const { category, language } = props;

    //setam punctele ca fiind initiale 0
    const [points, setPoints] = useState(0);

    //setam timpul initial (inainte de inceperea jocului) ca fiind de 3 secunde
    const [timeLeft, setTimeLeft] = useState(3);
    const [verifyTime, setVerifyTime] = useState(0);
    const [words, setWords] = useState([]);

    //inainte de inceperea jocului, in cele 3 secunde de asteptare, in loc de un cuvant random se da display la cele 3 puncte
    const [displayWord, setDisplayWord] = useState(". . .");
    const [correctWord, setCorrectWord] = useState(". . .");
    const [inputValue, setInputValue] = useState("");

    const [isDisable, setIsDisable] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const [inputIsCorrect, setInputIsCorrect] = useState(true);

    //aici construim un algoritm care genereaza automat un cuvant din vectorul de cuvinte si il spatiaza
    //exemplu: daca cuvantul era: "padure", aceasta functie il face sa fie: "p a d u r e" pentru o vizibilitate mai usoara
    const shuffleWord = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setCorrectWord(words[randomIndex]);

        const wordArray = words[randomIndex].split('');

        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }

        const shuffledWord = wordArray.join('');

        return shuffledWord;
    }, [words]);

    //in functie de ce categorie selecteaza utilizatorul, se modifica setWords cu categoria specifica
    //folosim asta pentru a stii de unde sa luam cuvinte random (din ce categorie specifica)
    useEffect(() => {
        if(category === "GeographyENG") setWords(geographyENG);
        else if(category === "GeographyRO") setWords(geographyRO);
        else if(category === "CountriesENG") setWords(countriesENG);
        else if(category === "CountriesRO") setWords(countriesRO);
        else if(category === "CareersENG") setWords(careersENG);
        else if(category === "CareersRO") setWords(careersRO);
        else if(category === "AnimalsENG") setWords(animalsENG);
        else if(category === "AnimalsRO") setWords(animalsRO);
        else if(category === "FruitsENG") setWords(fruitsENG);
        else if(category === "FruitsRO") setWords(fruitsRO);

        const timerId = setInterval(countdown, 1000);

        //functie pentru countdown
        function countdown() {
            //daca trec cele 3 secunde de la inceput, inseamna ca dam drumul la joc
            //luam un cuvant random cu setDisplayWord si setam timpul disponibil la 30 de secunde
            if(timeLeft === 0 && verifyTime === 0){
                clearInterval(timerId);
                setDisplayWord(shuffleWord().split("").join(" "));
                setTimeLeft(30);
                setVerifyTime(verifyTime + 1);
                setIsDisable(false);
            }
            //daca au trecut cele 30 de secunde, inseamna ca jocul se opreste si deci modalul dispare
            else if(timeLeft === 0 && verifyTime === 1)
                setShowModal(true);
            //timpul se scade cu -1 secunda o data la o secunda
            //acest useEffect asta face, se executa in timp real si deci asa putem sa avem 30-1 secunde, 29-1 secunde,
            //etc, pana ajungem la 0 secunde
            else setTimeLeft(timeLeft - 1);
        }

        return () => {
            clearInterval(timerId);
        };
    }, [timeLeft, category, verifyTime, shuffleWord]);

    //functia pentru butonul de refresh word
    function handleRefreshClick() {
        //setam punctele cu -10
        setPoints(points - 10);
        //setam timpul cu -2 secunde
        setTimeLeft(timeLeft - 2);
        //consideram inputul corect
        setInputIsCorrect(true);

        //daca atunci cand setam timpul cu -2 secunde ajungem la o valoare negativa, atunci oprim jocul
        const whatIsTime = timeLeft - 2;
        if(whatIsTime <= 0)
            setShowModal(true);

        //mi se genereaza automat alt cuvant (caci de aceea am dat refresh)
        setDisplayWord(shuffleWord().split("").join(" "));
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    //functia pentru submit la un cuvant
    function handleSubmitClick() {
        //daca inputul meu este acelasi cu cuvantul random
        if(inputValue === correctWord){
            //setez punctele cu +50
            setPoints(points + 50);
            //generez alt cuvant
            setDisplayWord(shuffleWord().split("").join(" "));
            //se sterge chat-ul pe care am scris
            setInputValue("");
            //adaug +5 secunde la timp
            setTimeLeft(timeLeft + 5);
            //setez inputul ca fiind corect
            setInputIsCorrect(true); 
        }
        //altfel, daca cuvantul nu coincide
        else{
            //setez punctele cu -30
            setPoints(points - 30);
            //timpul scade cu -2 secunde
            setTimeLeft(timeLeft - 2);
            //setez inputul ca fiind gresit
            setInputIsCorrect(false);

            //daca atunci cand setam timpul cu -2 secunde ajungem la o valoare negativa, atunci oprim jocul
            const whatIsTime = timeLeft - 2;
            if(whatIsTime <= 0)
                setShowModal(true);
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault(); // prevenim comportamentul implicit de trimitere a formularelor
        handleSubmitClick(); // apelam functia de trimitere când este trimis formularul
    }

    return (
        //creez un container
        <Container fluid className="root-container">
            {!showModal && (
                <Row className="points">
                    Points: {points}
                </Row>
            )}
            {!showModal && (
                <div className="container" style={{backgroundColor: "white"}}>
                    {/*creez un rand in care scriem categoria aleasa*/}
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
                            {/*dam display la cuvant*/}
                            <h4>{displayWord}</h4>
                            {/*creez un formular pentru inputul utilizatorului si verificare
                            formularul se creeaza cu ajutorul Form din bootstrap*/}
                            <form onSubmit={handleFormSubmit}>
                                <div className="answerContainer">
                                    <Form.Control style={{ width: "65%" }} type="text" id="answer"
                                        value={inputValue} onChange={handleInputChange} isInvalid={!inputIsCorrect} disabled={isDisable}
                                    />
                                    {!inputIsCorrect && (
                                        <div className="answerContainer">
                                            <Form.Control.Feedback type="invalid" style={{ width: "65%" }}/>
                                        </div>
                                    )}
                                </div>
                            </form>
                            <hr/>
                        </Col>
                    </Row>
                    {/*afisam timpul ramas*/}
                    <Row>
                        {language === "ENG" && ( <h6>Time left: {timeLeft} seconds remaining...</h6> )}
                        {language === "RO" && ( <h6>Timp rămas: {timeLeft} secunde rămase...</h6> )}
                    </Row>
                    {/*afisam butonul de refresh care odata apasat apeleaza "handleRefreshClick"*/}
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
                        {/*afisam butonul de trimite care apeleaza "handleSubmitClick" si verifica daca inputul utilizatorului
                        este acela cu cuvantul generat random*/}
                        <Col sm={6} className="text-center">
                            {language === "ENG" && (
                                <Button variant="success" onClick={handleSubmitClick} disabled={isDisable} id="myButton" size="lg">
                                    Submit Answer
                                </Button>
                            )}{' '}
                            {language === "RO" && (
                                <Button variant="success" onClick={handleSubmitClick} disabled={isDisable} id="myButton" size="lg">
                                    Trimite Răspunsul
                                </Button>
                            )}{' '}
                            
                        </Col>
                    </Row>
                </div>
            )}

            {/*in cazul in care timpul s-a sfarsit, se aflseaza modalul de stop trimitand ca parametrii punctele si limba
            (limba) o trimitem ca sa stim, evident, in ce limba afisam modalul*/}
            {showModal && <StopModal points={points} language={language}/>}
        </Container>
    );
}