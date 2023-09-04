import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartModal from './components/modals/startModal';

import './App.css';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<StartModal/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;