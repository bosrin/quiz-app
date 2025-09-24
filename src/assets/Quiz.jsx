import React, { useState } from 'react';
import './Quiz.css'
import { data } from './data';

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);  
    let [score, setScore] = useState(0);   // সঠিক উত্তর গোনার জন্য

    const chekAns = (e, ansIndex) => {
        if (lock) return;

        if (question.ans === ansIndex) {
            e.target.classList.add("correct");
            setScore(score + 1);  // সঠিক উত্তর হলে স্কোর বাড়বে
        } else {
            e.target.classList.add("wrong");
        }
        setLock(true);
    }

    const nextQuestion = () => {
        if (index + 1 < data.length) {
            setIndex(index + 1);
            setQuestion(data[index + 1]);
            setLock(false);

            // আগের class clear
            let options = document.querySelectorAll("li");
            options.forEach((option) => {
                option.classList.remove("correct");
                option.classList.remove("wrong");
            });
        }
    }

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>{index + 1}. {question.question}</h2>
            <ul>
                <li onClick={(e) => chekAns(e, 1)}>{question.option1}</li>
                <li onClick={(e) => chekAns(e, 2)}>{question.option2}</li>
                <li onClick={(e) => chekAns(e, 3)}>{question.option3}</li>
                <li onClick={(e) => chekAns(e, 4)}>{question.option4}</li>
            </ul>
            <button onClick={nextQuestion}>Next</button>
            <div className="index">
                {index + 1} of {data.length} questions
            </div>
            <div className="score">
                Score: {score}
            </div>
        </div>
    );
};

export default Quiz;
