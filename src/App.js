import React, { useState } from 'react';
import './App.css';

const App = () => {
  const questions =[
    {
      question:'The total set of carbon emissions caused by an individual',
      answers: [
        {answertext:'carbon handprint' ,isCorrect:false},
        {answertext:'carbon footprint' ,isCorrect:true},
        {answertext:'carbon summary' ,isCorrect:false},
        {answertext:'carbon cycle' ,isCorrect:false},
      ],
    },
    {
      question:' What gas is increasing in large amounts due to human activities?',
      answers: [
        {answertext:'Oxygen' ,isCorrect:false},
        {answertext:'Water vapour' ,isCorrect:false},
        {answertext:'Carbon dioxide' ,isCorrect:true},
        {answertext:'Gasoline' ,isCorrect:false},
      ],
    },
    {
      question:'What is the Greek word for ecology?',
      answers: [
        {answertext:'ethology' ,isCorrect:false},
        {answertext:'oekology' ,isCorrect:true},
        {answertext:'hexicology' ,isCorrect:false},
        {answertext:'synecology' ,isCorrect:false},
      ],
    },
    {
      question:'According to Central Pollution Control Board (CPCB), which particulate size in diameter (in micrometers) of the air pollutants is responsible for greatest harm to human health?',
      answers: [
        {answertext:'2.5 or less' ,isCorrect:true},
        {answertext:'2 - 2.5' ,isCorrect:false},
        {answertext:'1.5 or less' ,isCorrect:false},
        {answertext:'1.0 or less' ,isCorrect:false},
      ],
    },
    {
      question:'How much have global average temperatures increased in the last century?',
      answers: [
        {answertext:'1 degrees Fahrenheit' ,isCorrect:false},
        {answertext:'6 degrees Fahrenheit' ,isCorrect:false},
        {answertext:'4.3 degrees Fahrenheit' ,isCorrect:false},
        {answertext:'1.4 degrees Fahrenheit' ,isCorrect:true},
      ],
    },
    {
      question:'Which of these is considered a critical threshold for carbon dioxide levels in the atmosphere?',
      answers: [
        {answertext:'43 parts per million' ,isCorrect:false},
        {answertext:'120 parts per million' ,isCorrect:false},
        {answertext:'200 parts per million' ,isCorrect:false},
        {answertext:'400 parts per million' ,isCorrect:true},
      ],
    },
    {
      question:'Which of the following mentioned GHGs has the highest atmospheric lifetime?',
      answers: [
        {answertext:'Carbon tetrafluoride' ,isCorrect:true},
        {answertext:'Nitrous Oxide' ,isCorrect:false},
        {answertext:'CFC' ,isCorrect:false},
        {answertext:'Methane' ,isCorrect:false},
      ],
    },
    {
      question:'Which of the following is a sink for carbon?',
      answers: [
        {answertext:'Wetlands' ,isCorrect:false},
        {answertext:'Old oil fields' ,isCorrect:false},
        {answertext:'Saline waterbodies' ,isCorrect:false},
        {answertext:'All of the mentioned' ,isCorrect:true},
      ],
    },
    {
      question:'United Nations (UN) decade of education for sustainable development is from',
      answers: [
        {answertext:'2002-11' ,isCorrect:false},
        {answertext:'2005-14' ,isCorrect:true},
        {answertext:'2003-12' ,isCorrect:false},
        {answertext:'2004-13' ,isCorrect:false},
      ],
    },
    {
      question:'The criterion for corporate sustainability',
      answers: [
        {answertext:'eco-efficiency' ,isCorrect:false},
        {answertext:'socio-efficiency' ,isCorrect:false},
        {answertext:'both (A) and (B)' ,isCorrect:true},
        {answertext:'none of the above' ,isCorrect:false},
      ],
    },
  ];

  const [currentQuestion , setCurrenQuestion] = useState(0);

  const [showScore , setShowScore] =  useState(false);

  const [score ,setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {

    if(isCorrect===true){
      setScore(score+10);
    }

    const nextQuestion = currentQuestion+1;
    if(nextQuestion<questions.length){
      setCurrenQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  function restart(){
    window.location.reload(false);
  }

  return ( 
    <div className="container">
    {}
    {showScore ? (
      <React.Fragment>
      <i class="fa fa-list-alt" aria-hidden="true"></i>
      <div className="score-section">You scored {score} out of {questions.length * 10 }</div>
      <button onClick={restart} className="btn btn-outline-primary btn-large mt-4">Restart</button>
      </React.Fragment>
    ) : (
        <div className=" row quiz">
          <div className=" col-md-12 question-box">
          <h4 className="question">{questions[currentQuestion].question}</h4>
          <span><i className="fa fa-question-circle"></i> Question {currentQuestion+1}</span>/{questions.length}
          </div>
          {questions[currentQuestion].answers.map((answer)=><button onClick={()=>handleAnswerButtonClick(answer.isCorrect)} className="btn btn-outline-success op1 option col-md-6">{answer.answertext}</button>)}
        </div>
    )}
      </div>
   );
}
 
export default App;
