import React, { Component } from 'react';
import swal from 'sweetalert';

class Quizzes extends Component { 
    constructor() {
        super();
        this.state = {
            procKey: '',
            optionIndex: 0,
            correctOptions: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    nextOption(correctAnswer) {
        const { optionIndex, selectedOption } = this.state;
        var correctOptions = JSON.parse(localStorage.getItem('correctOptions'));
        if(selectedOption === correctAnswer) {
            if(localStorage.getItem('correctOptions'))
                localStorage.setItem('correctOptions', JSON.stringify(correctOptions+1));
            else
                localStorage.setItem('correctOptions', JSON.stringify(1));
        }
        correctOptions = JSON.parse(localStorage.getItem('correctOptions')); 
        this.setState({
            optionIndex: 1+optionIndex,
            correctOptions
        })
        for(var i = 0; i < document.querySelectorAll('.radio').length; i++) {
            document.querySelectorAll('.radio')[i].checked = false;
        }
    }

    handleChange(e) {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    render() {
        const { procKey, optionIndex, correctOptions } = this.state;
        const { 
            isProctor,
            isProctored,
            selectedExamIndex,
            selectedQuiz,
            startedQuiz
        } = this.props.Quizzes;
        return(
            isProctored
            ?
            optionIndex !== startedQuiz.length
            ?
            <div>
                <h1>Quiz Start</h1><br />
                <p>Q. { startedQuiz[optionIndex].question }</p>
                { 
                    startedQuiz[optionIndex].options.map(option => 
                        <div className='quiz'>
                            <input type='radio' className='radio' name='option' onClick={ () => this.setState({ selectedOption: option }) } />&nbsp;&nbsp;
                            <span>{ option }</span>
                        </div>
                    )
                }
                <input type='button' className='btn btn-danger' onClick={ () => this.nextOption(startedQuiz[optionIndex].correctAnswer) } value='Next'/>
            </div>
            :
            <div>
                { localStorage.removeItem('correctOptions') }
                <h1>Result</h1>
                {   
                    (correctOptions/optionIndex)*100 > 70
                    ?
                    swal("Congratulations", `Your are pass You got ${ (correctOptions/optionIndex)*100 }% Marks`, "success")
                    :
                    swal("Sorry", `Your are fail You got ${ (correctOptions/optionIndex)*100 }% Marks`, "warning")
                }
                <br/ ><i>You got { `${ (correctOptions/optionIndex)*100 }% Marks` }</i>
            </div>
            :
            <div>
                <h3>Enter Proctoring Key</h3>
                <input className='form-control' name='procKey' value={ procKey } type='password' onChange={this.handleChange} placeholder='Enter Key' />
                <input className='btn btn-primary' type='button' onClick={() => isProctor(procKey, selectedExamIndex, selectedQuiz)} value='Submit' />
            </div>          
        );
    } 
}
export default Quizzes;