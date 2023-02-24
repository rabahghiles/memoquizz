import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endQuizz } from '../../redux/actions/quizz.actions';
import './styles/quizz.css';

// const Quizz = ({quizz}) => {

//     const dispatch = useDispatch();

//     const [questionNumber, setQuestionNumber] = useState(0);
//     const [score, setScore] = useState(0);
//     const [currentQuestion, setCurrentQuestion] = useState({});


//     // useEffect(() => {
//     //     setCurrentQuestion(quizzQuestions[questionNumber]);
//     // }, [questionNumber])

//     // const handleAnswerClick = (id) => {
//     //     const answers = currentQuestion.answers.map( answer => answer.id === id ? {...answer, checked: true} : {...answer, checked: false} )
//     //     setCurrentQuestion((prev) => ({...prev, answers}))
//     // }

//     const handleValidateAnswer = () => {

//         if ( questionNumber === quizzQuestions.length - 1 ) {
//             dispatch(endQuizz());
//             return
//         }

//         setTimeout(() => {
//             setQuestionNumber(prevNumber => prevNumber + 1)
//         }, 600)

//         // const {id} = currentQuestion.answers.find( answer => !!answer.checked );
//         // let answers = [];
//         // if (id === currentQuestion.correctAnswer) {
//         //     setScore(prevScore => prevScore + 1);
//         //     answers = currentQuestion.answers.map( answer => answer.id === id ? {...answer, status: true} : answer )
//         // }else {
//         //     answers = currentQuestion.answers.map( answer => answer.id === currentQuestion.correctAnswer ? {...answer, status: true} : answer.id === id ? {...answer, status: false} : answer )
//         // }

//         // setCurrentQuestion((prev) => ({...prev, answers}))

//         // if ( questionNumber + 1 === quizz.length ) {
//         //     console.log("END GAME, SCORE");
//         //     dispatch(endQuizz());
//         //     return
//         // }

//         // setTimeout(() => {
//         //     setQuestionNumber(prevNumber => prevNumber + 1)
//         // }, 600)

//     }

//     return (
//         // <div className={`quizz ${ !!quizz ? "quizz__showed" : ""}`}>
//         //     <div className="quizz-inner">
//         //         <div className="quizz-content">
//         //             <span className='quizz-question-number'>{`${questionNumber+1}/${quizz.length}`}</span>
//         //             <p className='quizz-question'>{currentQuestion.question}</p>
//         //         </div>
//         //         <div className="quizz-form">
//         //             <div className="quizz-form-questions">
//         //                 {
//         //                     currentQuestion.id
//         //                     && currentQuestion.answers.map( a => <button
//         //                             key={a.id}
//         //                             className={`
//         //                                 quizz-form-checkbox ${!!a.checked ? "quizz-form-checkbox__active" : ""}
//         //                                 ${ a.status === true ? "quizz-form-checkbox__correct" : a.status === false ? "quizz-form-checkbox__false" : ""}
//         //                             `}
//         //                             onClick={() => handleAnswerClick(a.id)}
//         //                         >
//         //                             {a.answer}
//         //                         </button>)
//         //                 }
//         //             </div>
//         //             <button
//         //                 className="quizz-form-button"
//         //                 onClick={handleValidateAnswer}
//         //             >
//         //                 Valider
//         //             </button>
//         //         </div>
//         //     </div>
//         // </div>

//         <div className={`quizz ${ !!quizz ? "quizz__showed" : ""}`}>
//             <div className="quizz-inner">
//                 <div className="quizz-content">
//                     <span className='quizz-question-number'>{`1/3`}</span>
//                     <p className='quizz-question'>{"HEELLO WORD"}</p>
//                 </div>
//                 <div className="quizz-form">
//                     <div className="quizz-form-questions">
//                         <button className="quizz-form-checkbox">Choix</button>
//                         <button className="quizz-form-checkbox">Choix</button>
//                         <button className="quizz-form-checkbox">Choix</button>
//                         <button className="quizz-form-checkbox">Choix</button>
//                     </div>
//                     <button className="quizz-form-button" onClick={handleValidateAnswer}>Valider</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

const Quizz = ({quizz}) => {

    const {id, name, questions, selectedQuestion, selectedAnswer} = useSelector(state => state.quizzReducer);
    const [question, setQuestion] = useState({});

    useEffect(() => {
        setQuestion( questions.find( q => q.id === selectedQuestion ) )
    }, [selectedQuestion, questions])

    return (
        <div className={`quizz ${ !!quizz ? "quizz__showed" : ""}`}>
            {
                !!quizz && question.id &&
                <div className="quizz-inner">
                    <div className="quizz-content">
                        <span className='quizz-question-number'>{`${question.id}/${questions.length}`}</span>
                        <h2 className='quizz-name'>{name}</h2>
                        <p className='quizz-question'>{question.title}</p>
                    </div>
                    <div className="quizz-form">
                    <div className="quizz-form-answers">
                        {
                            question.answers.map( a => <button
                                key={a.id}
                                className={`quizz-form-checkbox ${a.id  === selectedAnswer ? "quizz-form-checkbox__active" : ""}`}
                            >
                                {a.text}
                            </button>)
                        }
                    </div>
                    <button className="quizz-form-button">Valider</button>
                </div>
                </div>
            }
        </div>
    )
}

export default Quizz;