//importam din bootstrap modalul si liniile
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/esm/Row';

//importam styles.css
import '../../components/styles.css';

//componenta titlului in limga engleza
//PS: De acum inainte, toate tagurile cu verde sunt 100% din bootstrap (<Modal>, <Modal.Title>, <Row>, <Col>, etc)
const TitleENG = () => {
    return (
        <Modal.Title className="titleModal">
            Word Scramble Game
        </Modal.Title>
    )
}

//componenta titlului in limba romana
const TitleRO = () => {
    return (
        <Modal.Title className="titleModal">
            Jocul Cuvintelor Încâlcite
        </Modal.Title>
    )
}

//componenta de descriere in limba engleza
const DescriptionENG = () => {
    return (
        <Row>
            <h5># Descriptions:</h5>
            <p>
                The Word Scramble Game is an engaging and interactive word puzzle that challenges your vocabulary and
                problem-solving skills. In this exciting game, you'll encounter a variety of words that have been
                cleverly scrambled, leaving you to decipher and rearrange the letters to form the correct word. It's
                a fun and educational way to expand your word knowledge while having a great time!
            </p>
        </Row>
    )
}

//componenta de descriere in limba romana
const DescriptionRO = () => {
    return (
        <Row>
            <h5># Descriere:</h5>
            <p>
                Jocul Cuvintelor Încâlcite este un puzzle de cuvinte captivant și interactiv care vă provoacă vocabularul și
                abilități de rezolvare a problemelor. În acest joc captivant, vei întâlni o varietate de cuvinte care au fost
                amestecat inteligent, lăsându-vă să descifrați și să rearanjați literele pentru a forma cuvântul corect. Este
                o modalitate distractivă de a vă extinde cunoștințele despre cuvinte, în timp ce vă distrați!
            </p>
        </Row>
    )
}

//componenta regulilor in limba engleza
const RulesENG = () => {
    return (
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
    )
}

//componenta regulilor in limba romana
const RulesRO = () => {
    return (
        <Row>
            <h5># Reguli:</h5>
            <ol style={{paddingLeft: "50px"}}>
                <li>Obiectiv: Scopul jocului cuvintelor încâlcite este de a descifra un set de litere pentru a forma un cuvânt valid într-un interval de timp limitat.</li>
                <li>Categorii de joc: Jocul oferă mai multe categorii de cuvinte din care puteți alege. Jucătorii pot selecta categoria preferată înainte de a începe jocul.</li>
                <li>Începutul jocului: Jocul începe cu un cronometru care este setat la o durată specifică, de obicei 30 de secunde.</li>
                <li>Reîmprospătarea cuvântului: Dacă vă aflați în impas sau doriți să încercați o altă abordare, puteți apăsa butonul "Reîncarcă Cuvântul" pentru a amesteca literele și a primi un cuvânt nou.</li>
                <li>Sfârșitul jocului: Jocul continuă până când cronometrul ajunge la zero. În acest moment, sesiunea de joc se încheie, iar performanța dumneavoastră este afișată.</li>
            </ol>
        </Row>
    )
}

//componenta punctelor in limba engleza
const PointsENG = () => {
    return (
        <Row>
            <h5># Points and Seconds:</h5>
            <ol style={{paddingLeft: "50px"}}>
                <li>Guessing a Word: +50 points and +5 seconds</li>
                <li>Get wrong a Word: -30 points and -3 seconds</li>
                <li>Refresh a Word: -10 points and -2 seconds</li>
            </ol>
        </Row>
    )
}

//componenta punctelor in limba romana
const PointsRO = () => {
    return (
        <Row>
            <h5># Puncte și Secunde:</h5>
            <ol style={{paddingLeft: "50px"}}>
                <li>Ghicirea unui Cuvânt: +50 puncte și +5 secunde</li>
                <li>Greșirea unui Cuvânt: -30 puncte și -3 secunde</li>
                <li>Reîncărcarea unui Cuvânt: -10 puncte și -2 secunde</li>
            </ol>
        </Row>
    )
}

//exportam toate aceste componente pentru a le putea utiliza mai tarziu
export { TitleENG, TitleRO, DescriptionENG, DescriptionRO, RulesENG, RulesRO, PointsENG, PointsRO };