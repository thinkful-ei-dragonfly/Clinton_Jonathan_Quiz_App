import Question from './Question';
import * as TriviaApi from './TriviaApi';

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
    console.log('starting');
    console.log(TriviaApi);
    TriviaApi.getQuestions()
    .then(res => this.unasked.push(res));
  }
 
}

export default Quiz;
