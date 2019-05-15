import Question from './Question';
import TriviaApi from './TriviaApi';
import Model from './lib/Model';

class Quiz extends Model {

  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    //This line calls the superclass' constructor first
    super();
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score = 0;
    this.scoreHistory = [];
    this.highestScore = 0;

    // TASK: Add more props here per the exercise

  }

  // Example method:
  startGame() {
    this.asked = [];
    this.active = true;
    this.score = 0;
    const trivia = new TriviaApi();
    trivia.getQuestions()
    .then(res => {
        res.results.forEach(item => {
          let question = new Question(item); //refactored results
          // question.text = item.question;
          // question.answers = [item.correct_answer, ...item.incorrect_answers];
          // question.correctAnswer = item.correct_answer;
          // question.userAnswer = '';

          this.unasked.push(question);
        });
        this.nextQuestion();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  getCurrentQuestion(){
    return this.asked[0];
  }

  submitAnswer(a){
    this.asked[0].submitAnswer(a);
    this.update();
  }


  nextQuestion(){
    this.asked.unshift(this.unasked.shift());
    this.update();
  }

  updateScoreHistory(){
    if (this.asked.length === 5) {
      this.scoreHistory.push(this.score);
      this.update();
    }
  }

  updateHighestScore(arr){
    let highest;
    if(arr.length === 0){
      highest = 0;
    }
    else{
      highest = Math.max(...arr)
    }
    this.highestScore = highest;
    this.update();
  }

  endgame(){
    this.active = false;
    // this.score = 0;
    this.update();
  }

  updateScore(){
    if (this.asked[0].userAnswer === this.asked[0].correctAnswer) {
      this.score ++;
      this.update();
  } 
}
}

export default Quiz;
