import Question from './Question';
import TriviaApi from './TriviaApi';

class Quiz {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score = 0;
    this.scoreHistory = [];

    // TASK: Add more props here per the exercise

  }

  // Example method:
  startGame() {
    this.active = true;
  }
  
  start(){
    const trivia = new TriviaApi();
    trivia.getQuestions()
    .then(res => res.results)
    .then(res => res.forEach(question =>{
      this.unasked.push(question);
    }));
  }

  nextQuestion(){
    this.asked.push(this.unasked.shift());
  }

  // submitAnswer(answer) {
  //   question.userAnswer = answer;
  // }
 
}

export default Quiz;
