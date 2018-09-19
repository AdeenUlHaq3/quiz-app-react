import React, { Component } from 'react';
import './App.css';
import Auth from './screens/Auth/Auth';
import QuizList from './screens/QuizList/QuizList';
import QuizSubCategory from './screens/QuizSubCategory/QuizSubCategory';
import QuizInfo from './screens/QuizInfo/QuizInfo';
import Quizzes from './screens/Quizzes/Quizzes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isQuizStart: false,
      quizzes: [{ 
          name: 'Javacsript',
          noOfQuestions: 50, 
          Quiz1: { 
            name: 'Quiz 1',
            questions: [{ 
              question: 'Inside which HTML element do we put the JavaScript?',
              options: [ '<scripting>', '<js>', '<script>', '<javascript>' ], 
              correctAnswer: '<script>'
            },
            { 
              question: 'Javascript is a',
              options: [ 'programming language', 'markup language', 'fruit', 'vagetable' ], 
              correctAnswer: 'programming language'
            },
            { 
              question: 'What is javascript file extension',
              options: [ '.ts', '.ps', '.js', '.cs' ],
              correctAnswer: '.js'
            },
            { 
              question: 'Javascript is',
              options: [ 'multi-threaded', 'double-threaded', 'single-threaded', 'tripple-threaded' ],
              correctAnswer: 'single-threaded'
            }
          ]},
          Quiz2: { 
            name: 'Quiz 2',
            questions: [{ 
              question: 'typeof array',
              options: [ 'object', 'array', 'arguments', 'undefined' ], 
              correctAnswer: 'object'
            },
            { 
              question: 'false === 0',
              options: [ 'true', 'undeined', 'false', '0' ], 
              correctAnswer: 'true'
            },
            { 
              question: 'What method use for conversion of string to integer?',
              options: [ 'toString()', 'parseFloat()', 'parseInt()', 'strToInt()' ],
              correctAnswer: 'parseInt()'
            },
            { 
              question: 'Javascript interprets',
              options: [ 'from right to left', 'from left to right', 'from top to botttom', 'from bottom to top' ],
              correctAnswer: 'from left to right'
            }
          ]},
          Quiz3: { 
            name: 'Quiz 3',
            questions: [{ 
              question: "Anonymous function doesn't have a",
              options: [ 'block body', 'curly braces', 'function name', 'round brackets' ], 
              correctAnswer: 'function name'
            },
            { 
              question: 'Javascript latest version is',
              options: [ 'ES5', 'ES6', 'ES7', 'None of the above' ], 
              correctAnswer: 'ES7'
            },
            { 
              question: 'Is Javascript multilingual?',
              options: [ 'true', 'false', 'maybe', 'none of the  above' ],
              correctAnswer: 'false'
            },
            { 
              question: 'Which of the following is the server-side of javascript?',
              options: [ 'MongoDB', 'React', 'Typescript', 'Node' ],
              correctAnswer: 'Node'
            }
          ]}
        }, 
        { 
          name: 'React',
          noOfQuestions: 50, 
          Quiz1: { 
            name: 'Quiz 1',
            questions: [{ 
              question: 'Inside which HTML element do we put the JavaScript?',
              options: [ '<scripting>', '<js>', '<script>', '<javascript>' ], 
              correctAnswer: '<script>'
            },
            { 
              question: 'Javascript is a',
              options: [ 'programming language', 'markup language', 'fruit', 'vagetable' ], 
              correctAnswer: 'programming language'
            },
            { 
              question: 'What is javascript file extension',
              options: [ '.ts', '.ps', '.js', '.cs' ],
              correctAnswer: '.js'
            },
            { 
              question: 'Javascript is',
              options: [ 'multi-threaded', 'double-threaded', 'single-threaded', 'tripple-threaded' ],
              correctAnswer: 'single-threaded'
            }
          ]},
          Quiz2: { 
            name: 'Quiz 2',
            questions: [{ 
              question: 'typeof array',
              options: [ 'object', 'array', 'arguments', 'undefined' ], 
              correctAnswer: 'object'
            },
            { 
              question: 'false === 0',
              options: [ 'true', 'undeined', 'false', '0' ], 
              correctAnswer: 'true'
            },
            { 
              question: 'What method use for conversion of string to integer?',
              options: [ 'toString()', 'parseFloat()', 'parseInt()', 'strToInt()' ],
              correctAnswer: 'parseInt()'
            },
            { 
              question: 'Javascript interprets',
              options: [ 'from right to left', 'from left to right', 'from top to botttom', 'from bottom to top' ],
              correctAnswer: 'from left to right'
            }
          ]},
          Quiz3: { 
            name: 'Quiz 3',
            questions: [{ 
              question: "Anonymous function doesn't have a",
              options: [ 'block body', 'curly braces', 'function name', 'round brackets' ], 
              correctAnswer: 'function name'
            },
            { 
              question: 'Javascript latest version is',
              options: [ 'ES5', 'ES6', 'ES7', 'None of the above' ], 
              correctAnswer: 'ES7'
            },
            { 
              question: 'Is Javascript multilingual?',
              options: [ 'true', 'false', 'maybe', 'none of the  above' ],
              correctAnswer: 'false'
            },
            { 
              question: 'Which of the following is the server-side of javascript?',
              options: [ 'MongoDB', 'React', 'Typescript', 'Node' ],
              correctAnswer: 'Node'
            }
          ]}
        },  
        { 
          name: 'Angular',
          noOfQuestions: 50, 
          Quiz1: { 
            name: 'Quiz 1',
            questions: [{ 
              question: 'Inside which HTML element do we put the JavaScript?',
              options: [ '<scripting>', '<js>', '<script>', '<javascript>' ], 
              correctAnswer: '<script>'
            },
            { 
              question: 'Javascript is a',
              options: [ 'programming language', 'markup language', 'fruit', 'vagetable' ], 
              correctAnswer: 'programming language'
            },
            { 
              question: 'What is javascript file extension',
              options: [ '.ts', '.ps', '.js', '.cs' ],
              correctAnswer: '.js'
            },
            { 
              question: 'Javascript is',
              options: [ 'multi-threaded', 'double-threaded', 'single-threaded', 'tripple-threaded' ],
              correctAnswer: 'single-threaded'
            }
          ]},
          Quiz2: { 
            name: 'Quiz 2',
            questions: [{ 
              question: 'typeof array',
              options: [ 'object', 'array', 'arguments', 'undefined' ], 
              correctAnswer: 'object'
            },
            { 
              question: 'false === 0',
              options: [ 'true', 'undeined', 'false', '0' ], 
              correctAnswer: 'true'
            },
            { 
              question: 'What method use for conversion of string to integer?',
              options: [ 'toString()', 'parseFloat()', 'parseInt()', 'strToInt()' ],
              correctAnswer: 'parseInt()'
            },
            { 
              question: 'Javascript interprets',
              options: [ 'from right to left', 'from left to right', 'from top to botttom', 'from bottom to top' ],
              correctAnswer: 'from left to right'
            }
          ]},
          Quiz3: { 
            name: 'Quiz 3',
            questions: [{ 
              question: "Anonymous function doesn't have a",
              options: [ 'block body', 'curly braces', 'function name', 'round brackets' ], 
              correctAnswer: 'function name'
            },
            { 
              question: 'Javascript latest version is',
              options: [ 'ES5', 'ES6', 'ES7', 'None of the above' ], 
              correctAnswer: 'ES7'
            },
            { 
              question: 'Is Javascript multilingual?',
              options: [ 'true', 'false', 'maybe', 'none of the  above' ],
              correctAnswer: 'false'
            },
            { 
              question: 'Which of the following is the server-side of javascript?',
              options: [ 'MongoDB', 'React', 'Typescript', 'Node' ],
              correctAnswer: 'Node'
            }
          ]}
        },  
        { 
          name: 'Vue',
          noOfQuestions: 50, 
          Quiz1: { 
            name: 'Quiz 1',
            questions: [{ 
              question: 'Inside which HTML element do we put the JavaScript?',
              options: [ '<scripting>', '<js>', '<script>', '<javascript>' ], 
              correctAnswer: '<script>'
            },
            { 
              question: 'Javascript is a',
              options: [ 'programming language', 'markup language', 'fruit', 'vagetable' ], 
              correctAnswer: 'programming language'
            },
            { 
              question: 'What is javascript file extension',
              options: [ '.ts', '.ps', '.js', '.cs' ],
              correctAnswer: '.js'
            },
            { 
              question: 'Javascript is',
              options: [ 'multi-threaded', 'double-threaded', 'single-threaded', 'tripple-threaded' ],
              correctAnswer: 'single-threaded'
            }
          ]},
          Quiz2: { 
            name: 'Quiz 2',
            questions: [{ 
              question: 'typeof array',
              options: [ 'object', 'array', 'arguments', 'undefined' ], 
              correctAnswer: 'object'
            },
            { 
              question: 'false === 0',
              options: [ 'true', 'undeined', 'false', '0' ], 
              correctAnswer: 'true'
            },
            { 
              question: 'What method use for conversion of string to integer?',
              options: [ 'toString()', 'parseFloat()', 'parseInt()', 'strToInt()' ],
              correctAnswer: 'parseInt()'
            },
            { 
              question: 'Javascript interprets',
              options: [ 'from right to left', 'from left to right', 'from top to botttom', 'from bottom to top' ],
              correctAnswer: 'from left to right'
            }
          ]},
          Quiz3: { 
            name: 'Quiz 3',
            questions: [{ 
              question: "Anonymous function doesn't have a",
              options: [ 'block body', 'curly braces', 'function name', 'round brackets' ], 
              correctAnswer: 'function name'
            },
            { 
              question: 'Javascript latest version is',
              options: [ 'ES5', 'ES6', 'ES7', 'None of the above' ], 
              correctAnswer: 'ES7'
            },
            { 
              question: 'Is Javascript multilingual?',
              options: [ 'true', 'false', 'maybe', 'none of the  above' ],
              correctAnswer: 'false'
            },
            { 
              question: 'Which of the following is the server-side of javascript?',
              options: [ 'MongoDB', 'React', 'Typescript', 'Node' ],
              correctAnswer: 'Node'
            }
          ]}
        }
      ],
      quizList: false,
      quizInfo: false,
      signIn: true,
      isUser: false,
      selectedQuiz: '',
      selectedExam: '',
      isProctored: false
    }
  this.quizSubCategory = this.quizSubCategory.bind(this);
  this.toggleSignInAndUp = this.toggleSignInAndUp.bind(this);
  this.UserLog = this.UserLog.bind(this);
  this.selectQuiz = this.selectQuiz.bind(this);
  this.enterExam = this.enterExam.bind(this);
  this.isProctor = this.isProctor.bind(this);
  }
  UserLog(bool) {
    this.setState({
      isUser: bool,
      quizList: bool
    })
  }
  toggleSignInAndUp() {
    const { signIn } = this.state;
    this.setState({
      signIn: !signIn
    })
  }
  quizSubCategory(index) {
    const { quizzes } = this.state;
    this.setState({
      quizList: false,
      selectedExamIndex: index,
      selectedExam: quizzes[index].name
    })
  }
  selectQuiz(selectedQuiz) {
    this.setState({
      quizInfo: true,
      selectedQuiz
    })
  }
  enterExam() {
    this.setState({
      isQuizStart: true,
      quizInfo: false
    })
  }
  isProctor(procKey, selectedExamIndex) {
    const { quizzes, selectedQuiz } = this.state;
    if(procKey === 'abcd'){
      this.setState({
        isProctored: true,
        startedQuiz: quizzes[selectedExamIndex][selectedQuiz].questions
      })
    }
  }
  render() {
    const { 
      quizList,
      quizzes,
      selectedExamIndex,
      selectedExam,
      signIn,
      isUser,
      quizInfo,
      selectedQuiz,
      isQuizStart,
      isProctored,
      startedQuiz
    } = this.state;

    const { 
      toggleSignInAndUp,
      UserLog,
      isProctor,
      quizSubCategory,
      selectQuiz,
      enterExam
    } = this;
    
    return (
      <div className="App">
        {
          !isQuizStart && !quizInfo && !quizList && !isUser
          ?
          <Auth Auth={{ toggleSignInAndUp, signIn, UserLog }} />
          :
          !isQuizStart && !quizInfo && quizList && isUser
          ?
          <QuizList QuizList={{ UserLog, quizzes,quizSubCategory }} /> 
          :
          !isQuizStart && !quizInfo && !quizList && isUser
          ?
          <QuizSubCategory QuizSubCategory={{ selectQuiz, selectedExam, quizList:  () => this.setState({ quizList: true })}} />
          :
          !isQuizStart && quizInfo && isUser && !quizList
          ?
          <QuizInfo QuizInfo={{ enterExam, selectedExam, selectedQuiz }} />
          :
          !quizList && isUser && !quizInfo && isQuizStart
          ?
          <Quizzes Quizzes={{ selectedExamIndex, selectedExam, selectedQuiz, isProctored, isProctor, startedQuiz }} />
          :
          ''
        }
      </div>
    );
  }
}

export default App;