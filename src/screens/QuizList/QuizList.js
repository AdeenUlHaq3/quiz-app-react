import React from 'react';

const QuizList = (props) =>{
    const { UserLog, quizzes, quizSubCategory } = props.QuizList;
    return (
     <div>
        <input type='button' className='btn btn-danger' value='Logout' onClick={() => UserLog(false)}/>
        {
            quizzes.map((quiz, index) => {
                return <div>
                            <div className='quiz-category'>{quiz.name}</div>
                            <input className='btn btn-primary' type='button' value='Enter Exam' onClick={() => quizSubCategory(index)}/>
                        </div>;
            })   
        } 
    </div>
    );
}

export default QuizList;