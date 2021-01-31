import React,{useState} from 'react';
import "../scss/Questions.scss";
import {Link} from 'react-router-dom';
import QuestionsList from "../questions.json";

const Questions = () => {

    const [currentQuestion, setQuestion] = useState(0);

    const checkAnswer = (questionNumber, index)=> {
        
            let indexOfTheCorrectAnswer = null;

            if( QuestionsList[questionNumber].correct_answer === "A"){
                indexOfTheCorrectAnswer = 0;
            }
            else if (QuestionsList[questionNumber].correct_answer === "B"){
                indexOfTheCorrectAnswer = 1;
            }
            else if(QuestionsList[questionNumber].correct_answer === "C"){
                indexOfTheCorrectAnswer = 2;
            }
            else if(QuestionsList[questionNumber].correct_answer === "D"){
                indexOfTheCorrectAnswer = 3;
            }
      

        let setGreen = function(e){
            e.target.classList.add("green")
            window.removeEventListener("click", setGreen)
        }

        let setRed = function(e){
            e.target.classList.add("red")
            window.removeEventListener("click", setRed)
        }

        if (index === indexOfTheCorrectAnswer){
            window.addEventListener("click", setGreen)
            
            
        }
        else{
            window.addEventListener("click", setRed) 
            
        }
    }

    const clearAnswerButtonsColors = ()=> {
        const buttons = document.querySelectorAll(".answerButton");
        buttons.forEach(button => {button.classList.remove("red"); button.classList.remove("green")})
    }

    return (
        <>
        <div className="questionsWrapper">

            <div className="questionsNavigation">
                <button onClick={()=> {setQuestion(currentQuestion - 1); if(currentQuestion === 0){setQuestion(0)} clearAnswerButtonsColors()}}><i class="fas fa-arrow-left"></i></button>
                
                <button onClick={()=> {setQuestion(currentQuestion + 1); if(currentQuestion === QuestionsList.length - 1){setQuestion(0)} clearAnswerButtonsColors()}}><i class="fas fa-arrow-right"></i></button>
            </div>

            <section className="progressSection">
    <p>Pytanie <span>{currentQuestion + 1}</span>/<span>{QuestionsList.length}</span></p>
            </section>

        <section className="questionSection">
            {QuestionsList[currentQuestion].content}
        </section>
        <section className="answerSection">
            {QuestionsList[currentQuestion].answers.map((answer, index)=>{
                return <button className="answerButton" onClick={()=> checkAnswer(currentQuestion,index)}>{answer}</button>
            })}
        </section>

        </div>
        </>
    );
}
 
export default Questions;