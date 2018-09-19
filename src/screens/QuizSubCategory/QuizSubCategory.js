import React from 'react';

const QuizSubCategory = (props) => {
    const {
        selectedExam, 
        selectQuiz, 
        quizList 
    } = props.QuizSubCategory;
    return (
        <div>
            <h1>{selectedExam}</h1>
            <div className='sub-categroy' onClick={() => selectQuiz('Quiz1')}>Quiz 1</div>
            <div className='sub-categroy' onClick={() => selectQuiz('Quiz2')}>Quiz 2</div>
            <div className='sub-categroy' onClick={() => selectQuiz('Quiz3')}>Quiz 3</div>
            <input className='btn btn-primary' type='button' value='Back to quiz list' onClick={quizList}/>
        </div>
    );
}


export default QuizSubCategory;