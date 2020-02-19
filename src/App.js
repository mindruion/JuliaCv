import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import iulia from './iulia.jpg';
import {useSpring, animated} from 'react-spring'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBaby, faEnvelope, faFlag, faGlobeAmericas, faRing} from '@fortawesome/free-solid-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import SplitText from 'react-pose-text';
import {faHandPointRight} from "@fortawesome/free-regular-svg-icons";


const charPoses = {
    exit: {opacity: 0, y: 20},
    enter: {
        opacity: 1,
        y: 0,
        delay: ({charIndex}) => charIndex * 100
    }
};

const charPoses2 = {
    exit2: {y: 20, opacity: 0},
    enter2: {
        y: 0,
        opacity: 1,
        transition: ({charInWordIndex}) => ({
            delay: charInWordIndex * 160,
        })
    }
};

const calc = (x, y) => [-(y - window.innerHeight / 4) / 20, (x - window.innerWidth / 4) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


function App() {
    const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 5, tension: 350, friction: 40}}));
    return (
        <div className="App">
            <div className="cv-frame">
                <div className="cv-background">
                    <header className="App-header row">
                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2" style={{paddingBottom: 15}}>
                            <div className="avatar">
                                <animated.img
                                    src={iulia} alt="" className="avatarcv"
                                    onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                                    onMouseLeave={() => set({xys: [0, 0, 1]})}
                                    style={{transform: props.xys.interpolate(trans)}}
                                />
                            </div>
                        </div>
                        <div className="name col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div className="title ">
                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                    Iulia Ghieș
                                </SplitText>
                                <div className="boarder-right slow" />
                                <div className="subtitle">
                                    <SplitText initialPose="exit2" pose="enter2" charPoses={charPoses2}>
                                        Director
                                    </SplitText>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" style={{paddingRight: 5 + '%'}}>
                            <div className="bar intermediate-advance" data-skill="Mitarbeiterführung" />
                            <div className="bar intermediate" data-skill="Eigeninitiative" />
                            <div className="bar advanced" data-skill="Zielorientierung" />
                            <div className="bar advanced" data-skill="Durchsetzungskraft" />
                        </div>
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        {/*<p>In curind aici va fi cv-ul tau, Iulicica</p>*/}
                    </header>
                    <div className="row">
                        <div className="left-bar col-4" style={{paddingRight: 5 + '%'}}>
                            <div className="category-title">
                                Kontakte
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row">
                                <FontAwesomeIcon className="icon col-2" icon={faBaby} />
                                <div className="category-description col-10">
                                    07.03.1999 / Chisinau, Republik Moldau
                                </div>
                            </div>
                            <div className="category-field row">
                                <FontAwesomeIcon className="icon col-2" icon={faRing} />
                                <div className="category-description col-10">
                                    Ledig
                                </div>
                            </div>
                            <div className="category-field row">
                                <FontAwesomeIcon className="icon col-2" icon={faFlag} />
                                <div className="category-description col-10">
                                    Moldawisch und Rumänisch
                                </div>
                            </div>
                            <div className="category-field row">
                                <FontAwesomeIcon className="icon col-2" icon={faGlobeAmericas} />
                                <div className="category-description col-10">
                                    Ackerstraße 13, 68169 Mannheim
                                </div>
                            </div>
                            <div className="category-field row">
                                <FontAwesomeIcon className="icon col-2" icon={faMobile} />
                                <div className="category-description col-10">
                                    +491779141636
                                </div>
                            </div>
                            <div className="category-field row">
                                <FontAwesomeIcon className="icon col-2" icon={faEnvelope} />
                                <div className="category-description col-10">
                                    ighies@uni-mannheim.de
                                </div>
                            </div>
                        </div>
                        <div className="right-bar col-8">
                            <div className="category-title">
                                ÜBER MICH
                            </div>
                            <div className="boarder-right" />
                            <div className="category-description">
                                <div className="row">
                                    <FontAwesomeIcon className="list-point col-1" icon={faHandPointRight} />
                                    <div className="point col-11">Motivierte und hoch engagierte Persönlichkeit.
                                        Verantwortlich,
                                        analytisch und angemessen kommunikativ. Aktuell bin DAAD
                                        Stipendiatin (Deutscher Akademischer Austauschdienst).
                                    </div>
                                    <FontAwesomeIcon className="list-point col-1" icon={faHandPointRight} />
                                    <div className="point col-11">Besitze auch PC-Kenntnisse, wie Microsoft Power-Point,
                                        Microsoft
                                        Word und grundsätzliche Microsoft Excel und HTML Kenntnisse.
                                    </div>
                                    <FontAwesomeIcon className="list-point col-1" icon={faHandPointRight} />
                                    <div className="point col-11">Mein Ziel für das nächste Jahr ist mein Abschluss in
                                        Wirtschaftspädagogik an der Uni Mannheim zu erwerben und mich
                                        weiter zu bilden.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left-bar col-4" style={{paddingRight: 5 + '%'}}>
                            <div className="category-title">
                                AUSBILDUNG
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <div className="col-4" style={{paddingLeft: 'unset', paddingRight: 'unset'}}>
                                    September 2018
                                </div>
                                <div className="col-8" style={{paddingRight: 'unset'}}>
                                    <div className="left-title col-12" style={{paddingRight: 'unset'}}>
                                        Laufend Universität Mannheim
                                    </div>
                                    <div className="category-description">
                                        Bachelor of Science, Fakultät BWL,
                                        Studiengang Wirtschaftspädagogik
                                    </div>
                                </div>
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <div className="col-4" style={{paddingLeft: 'unset', paddingRight: 'unset'}}>
                                    09.2015 – 05.2018
                                </div>
                                <div className="col-8" style={{paddingRight: 'unset'}}>
                                    <div className="left-title col-12" style={{paddingRight: 'unset'}}>
                                        Realistisches (matematisches) Profil
                                    </div>
                                    <div className="category-description">
                                        Theoretisches Lyzeum “Mihail
                                        Kogalniceanu”, Chisinau
                                    </div>
                                </div>
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <div className="col-4" style={{paddingLeft: 'unset', paddingRight: 'unset'}}>
                                    09.2010 – 05.2015
                                </div>
                                <div className="col-8" style={{paddingRight: 'unset'}}>
                                    <div className="left-title col-12" style={{paddingRight: 'unset'}}>
                                        Theoretisches Lyzeum “Mihail
                                        Kogalniceanu”, Chisinau
                                    </div>
                                    <div className="category-description">
                                        Gymnasium
                                    </div>
                                </div>
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <div className="col-4" style={{paddingLeft: 'unset', paddingRight: 'unset'}}>
                                    09.2006 – 05.2010
                                </div>
                                <div className="col-8" style={{paddingRight: 'unset'}}>
                                    <div className="left-title col-12" style={{paddingRight: 'unset'}}>
                                        Theoretisches Lyzeum “Mihail
                                        Kogalniceanu”, Chisinau
                                    </div>
                                    <div className="category-description">
                                        Gymnasium
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-bar col-8">
                            <div className="category-title">
                                BERUFLICHE ERFAHRUNG
                            </div>
                            <div className="boarder-right" />
                            <div className="right-title">
                                merge
                            </div>
                            <div className="right-subtitle">
                                merge
                            </div>
                            <div className="category-description">
                                ginta latina 11 ap 103
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href={iulia} download="malisca">
                <div className="pulse-button">
                    Download PDF
                </div>
            </a>
        </div>
    );
}

export default App;
