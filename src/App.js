import React from 'react';
import './App.css';
import iulia from './iulia.jpg';
import {useSpring, animated} from 'react-spring'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBaby, faEnvelope, faFlag, faGlobeAmericas, faRing} from '@fortawesome/free-solid-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import SplitText from 'react-pose-text';
import 'bootstrap-4-grid/css/grid.min.css';
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
                        <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2" style={{paddingBottom: 15}}>
                            <div className="avatar">
                                <animated.img
                                    src={require(iulia)} alt="" className="avatarcv"
                                    onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                                    onMouseLeave={() => set({xys: [0, 0, 1]})}
                                    style={{transform: props.xys.interpolate(trans)}}
                                />
                            </div>
                        </div>
                        <div className="name col-8 col-md-8 col-lg-6 col-xl-6">
                            <div className="title-front ">
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
                        <div className="col-12 col-md-12 col-lg-4 col-xl-4" style={{paddingRight: 5 + '%'}}>
                            <div className="bar intermediate-advance" data-skill="Mitarbeiterführung" />
                            <div className="bar intermediate" data-skill="Eigeninitiative" />
                            <div className="bar advanced" data-skill="Zielorientierung" />
                            <div className="bar advanced" data-skill="Durchsetzungskraft" />
                        </div>
                    </header>
                    <div className="row body-cv">
                        <div className="left-bar col-12 col-md-12 col-lg-4 col-xl-4" style={{paddingRight: 5 + '%'}}>
                            <div className="category-title">
                                Kontakte
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <FontAwesomeIcon className="icon col-2" icon={faBaby} />
                                <div className="category-description col-10">
                                    07.03.1999 / Chisinau, Republik Moldau
                                </div>
                            </div>
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <FontAwesomeIcon className="icon col-2" icon={faRing} />
                                <div className="category-description col-10">
                                    Ledig
                                </div>
                            </div>
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <FontAwesomeIcon className="icon col-2" icon={faFlag} />
                                <div className="category-description col-10">
                                    Moldawisch und Rumänisch
                                </div>
                            </div>
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <FontAwesomeIcon className="icon col-2" icon={faGlobeAmericas} />
                                <div className="category-description col-10">
                                    Ackerstraße 13, 68169 Mannheim
                                </div>
                            </div>
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <FontAwesomeIcon className="icon col-2" icon={faMobile} />
                                <div className="category-description col-10">
                                    +491779141636
                                </div>
                            </div>
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <FontAwesomeIcon className="icon col-2" icon={faEnvelope} />
                                <div className="category-description col-10">
                                    ighies@uni-mannheim.de
                                </div>
                            </div>
                        </div>
                        <div className="right-bar col-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="category-title">
                                ÜBER MICH
                            </div>
                            <div className="boarder-right" />
                            <div className="category-description">
                                <div className="row">
                                    <FontAwesomeIcon className="list-point col-md-2 col-lg-1 col-xl-1 col-2 "
                                                     icon={faHandPointRight} />
                                    <div className="point col-md-10 col-lg-11 col-xl-11 col-10 ">Motivierte und hoch
                                        engagierte Persönlichkeit.
                                        Verantwortlich,
                                        analytisch und angemessen kommunikativ. Aktuell bin DAAD
                                        Stipendiatin (Deutscher Akademischer Austauschdienst).
                                    </div>
                                    <FontAwesomeIcon className="list-point col-md-2 col-lg-1 col-xl-1 col-2 "
                                                     icon={faHandPointRight} />
                                    <div className="point col-md-10 col-lg-11 col-xl-11 col-10">Besitze auch
                                        PC-Kenntnisse, wie Microsoft Power-Point,
                                        Microsoft
                                        Word und grundsätzliche Microsoft Excel und HTML Kenntnisse.
                                    </div>
                                    <FontAwesomeIcon className="list-point col-md-2 col-lg-1 col-xl-1 col-2 "
                                                     icon={faHandPointRight} />
                                    <div className="point col-md-10 col-lg-11 col-xl-11 col-10">Mein Ziel für das
                                        nächste Jahr ist mein Abschluss in
                                        Wirtschaftspädagogik an der Uni Mannheim zu erwerben und mich
                                        weiter zu bilden.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}>
                        <div className="left-bar col-12 col-md-12 col-lg-4 col-xl-4" style={{paddingRight: 5 + '%'}}>
                            <div className="category-title">
                                AUSBILDUNG
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <div className="col-8" style={{paddingLeft: 'unset'}}>
                                    <div className="left-title col-12" style={{paddingLeft: 'unset'}}>
                                        Laufend Universität Mannheim
                                    </div>
                                    <div className="category-description-carier">
                                        Bachelor of Science, Fakultät BWL,
                                        Studiengang Wirtschaftspädagogik
                                    </div>
                                </div>
                                <div className="col-4" style={{
                                    paddingLeft: 'unset',
                                    fontFamily: 'Courier',
                                    fontWeight: 'bold',
                                    fontSize: 80 + '%',
                                    paddingRight: 'unset'
                                }}>
                                    September 2018
                                </div>
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <div className="col-8" style={{paddingLeft: 'unset'}}>
                                    <div className="left-title col-12" style={{paddingLeft: 'unset'}}>
                                        Realistisches (matematisches) Profil
                                    </div>
                                    <div className="category-description-carier">
                                        Theoretisches Lyzeum “Mihail
                                        Kogalniceanu”, Chisinau
                                    </div>
                                </div>
                                <div className="col-4" style={{
                                    paddingLeft: 'unset',
                                    fontFamily: 'Courier',
                                    fontWeight: 'bold',
                                    fontSize: 80 + '%',
                                    paddingRight: 'unset'
                                }}>
                                    09.2015 – 05.2018
                                </div>
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <div className="col-8" style={{paddingLeft: 'unset'}}>
                                    <div className="left-title col-12" style={{paddingLeft: 'unset'}}>
                                        Theoretisches Lyzeum “Mihail
                                        Kogalniceanu”, Chisinau
                                    </div>
                                    <div className="category-description-carier">
                                        Gymnasium
                                    </div>
                                </div>
                                <div className="col-4" style={{
                                    paddingLeft: 'unset',
                                    fontFamily: 'Courier',
                                    fontWeight: 'bold',
                                    fontSize: 80 + '%',
                                    paddingRight: 'unset'
                                }}>
                                    09.2010 – 05.2015
                                </div>
                            </div>
                            <div className="boarder-left" />
                            <div className="category-field row" style={{marginLeft: 'unset'}}>
                                <div className="col-8" style={{paddingLeft: 'unset'}}>
                                    <div className="left-title col-12" style={{paddingLeft: 'unset'}}>
                                        Theoretisches Lyzeum “Mihail
                                        Kogalniceanu”, Chisinau
                                    </div>
                                    <div className="category-description-carier">
                                        Gymnasium
                                    </div>
                                </div>
                                <div className="col-4" style={{
                                    paddingLeft: 'unset',
                                    fontFamily: 'Courier',
                                    fontWeight: 'bold',
                                    fontSize: 80 + '%',
                                    paddingRight: 'unset'
                                }}>
                                    09.2006 – 05.2010
                                </div>
                            </div>
                        </div>
                        <div className="right-bar col-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="category-title">
                                BERUFLICHE ERFAHRUNG
                            </div>
                            <div className="boarder-right" />
                            <div className="right-title row">
                                <div className="col-4 component-title">PR und Social Media Manager</div>
                                <div className="component-title col-4">Debate Academy ONG, Chisinau</div>
                                <div className="component-title col-4">2016-2017</div>
                            </div>
                            <div className="category-description">
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Pflege der Facebook-Seite der Organisation.</div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Schreiben von Artikeln für den Blog der Organisation.</div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Verfassung von Pressemitteilungen bezüglich der die von Unternehmen
                                        organisierten Veranstaltungen</div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Aufzeichnung der Personen, die sich für unternehmerische Kurse angemeldet
                                        haben.</div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field"> Mentoring</div>
                                </div>
                            </div>
                            <div className="boarder-right" />

                            <div className="right-title row">
                                <div className="col-4 component-title">Trainer</div>
                                <div className="component-title col-4">Hanns Seidel Stiftung, Chisinau</div>
                                <div className="component-title col-4">November – Dezember 2017</div>
                            </div>
                            <div className="category-description">
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Lehrerin der akademischen Debatten im Rahmen des Projektes “Mit
                                        Jugendlichen entwickeln wir die Gesellschaft”
                                    </div>
                                </div>
                            </div>
                            <div className="boarder-right" />

                            <div className="right-title row">
                                <div className="col-4 component-title">Vorsitzender</div>
                                <div className="component-title col-4">Debate Academy ONG, Chisinau</div>
                                <div className="component-title col-4">2017-2019</div>
                            </div>
                            <div className="category-description">
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Leiterin von 4 regionalen Projekten der
                                        non-formalen Erziehung durch Debatten
                                    </div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Assistentin im Rahmen des Projektes “Moldau
                                        Debattiert ” – im Partnerschaft mit
                                        US-Regierung in Republik Moldau
                                    </div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Vertretung der Organisation vor öffentlichen
                                        Behörden und Wirtschaftssubjekten
                                    </div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Abschluss von Verträgen mit externen Partnern
                                    </div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Überprüfung, ob das Budget des Vereins zweckmäßig
                                        verteilt wurde
                                    </div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Conflict Management</div>
                                </div>
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field">Verfassund von Tagesordnungen der Sitzungen des
                                        Exekutivausschuses und der
                                        generellen Versammlung
                                    </div>
                                </div>
                            </div>
                            <div className="boarder-right" />
                            <div className="right-title row">
                                <div className="col-4 component-title">Mitglied der Marketing Abteilung</div>
                                <div className="component-title col-4">Studentische Initiative AIESEC, Mannheim</div>
                                <div className="component-title col-4">April – September 2019</div>
                            </div>
                            <div className="category-description">
                                <div className="description-container">
                                    <div className="point-list" />
                                    <div className="description-field"> Online und offline Marketing (insbesondere Social Media Marketing Tätigkeiten)</div>
                                </div>
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
