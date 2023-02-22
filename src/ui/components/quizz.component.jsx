import { useEffect, useState } from 'react';
import './styles/quizz.css';

const quizz = [
    {
        id: "AZS1123",
        question : "Laquelle de ces plantes est aquatique ?",
        answers : [
            {id: 1, answer: "Le jasmin d'hiver", checked: false, status: null},
            {id: 2, answer: "L'hibiscus", checked: false, status: null},
            {id: 3, answer: "La pivoine", checked: false, status: null},
            {id: 4, answer: "Le lotus", checked: false, status: null}
        ],
        correctAnswer : 4,
    },
    {
        id: "ASDRT1223",
        question : "Quelle est la signification du A dans le sigle ANPE en France ?",
        answers : [
            {id: 1, answer: "Agence", checked: false, status: null},
            {id: 2, answer: "Activité", checked: false, status: null},
            {id: 3, answer: "Accés", checked: false, status: null},
            {id: 4, answer: "Amicale", checked: false, status: null}
        ],
        correctAnswer : 1,
    },
    {
        id: "AZS1123",
        question : "Selon l'expression, que dit-on quand on change de sujet sans transition, “on passe du coq à ___” ?",
        answers : [
            {id: 1, answer: "La poule", checked: false, status: null},
            {id: 2, answer: "L'oeuf", checked: false, status: null},
            {id: 3, answer: "L'âne", checked: false, status: null},
            {id: 4, answer: "L'orange", checked: false, status: null}
        ],
        correctAnswer : 3,
    }
]

const Quizz = () => {

    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState({});

    useEffect(() => {
        setCurrentQuestion(quizz[questionNumber]);
    }, [questionNumber])

    const handleAnswerClick = (id) => {
        const answers = currentQuestion.answers.map( answer => answer.id === id ? {...answer, checked: true} : {...answer, checked: false} )
        setCurrentQuestion((prev) => ({...prev, answers}))
    }

    const handleValidateAnswer = () => {
        const {id} = currentQuestion.answers.find( answer => !!answer.checked );
        let answers = [];
        if (id === currentQuestion.correctAnswer) {
            setScore(prevScore => prevScore + 1);
            answers = currentQuestion.answers.map( answer => answer.id === id ? {...answer, status: true} : answer )
        }else {
            answers = currentQuestion.answers.map( answer => answer.id === currentQuestion.correctAnswer ? {...answer, status: true} : answer.id === id ? {...answer, status: false} : answer )
        }

        setCurrentQuestion((prev) => ({...prev, answers}))
        
        if ( questionNumber + 1 === quizz.length ) {
            console.log("END GAME, SCORE");
            return
        }

        setTimeout(() => {
            setQuestionNumber(prevNumber => prevNumber + 1)
        }, 600)

    }

    return (
        <div className="quizz">
            <div className="quizz-inner">
                <div className="quizz-content">
                    <span className='quizz-question-number'>{`${questionNumber+1}/${quizz.length}`}</span>
                    <p className='quizz-question'>{currentQuestion.question}</p>
                </div>
                <div className="quizz-form">
                    <div className="quizz-form-questions">
                        {
                            currentQuestion.id
                            && currentQuestion.answers.map( a => <button
                                    key={a.id}
                                    className={`
                                        quizz-form-checkbox ${!!a.checked ? "quizz-form-checkbox__active" : ""}
                                        ${ a.status === true ? "quizz-form-checkbox__correct" : a.status === false ? "quizz-form-checkbox__false" : ""}
                                    `}
                                    onClick={() => handleAnswerClick(a.id)}
                                >
                                    {a.answer}
                                </button>)
                        }
                    </div>
                    <button
                        className="quizz-form-button"
                        onClick={handleValidateAnswer}
                    >
                        Valider
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quizz;