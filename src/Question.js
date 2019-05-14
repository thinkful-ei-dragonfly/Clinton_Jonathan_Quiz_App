import Model from './lib/Model' //imported model

class Question extends Model { //extended from model
    constructor(questionData){
        super();
        this.text = questionData.question;
        this.answers = [questionData.correct_answer, ...questionData.incorrect_answers];
        this.correctAnswer = questionData.correct_answer;
        this.userAnswer = null;  //added super and refactored data inputs
    }

    submitAnswer(a){
        this.userAnswer = a;
    }

    answerStatus(){
        if (this.userAnswer && this.userAnswer === this.correctAnswer) {
            return 1;
          } else if (this.userAnswer && this.userAnswer !== this.correctAnswer) {
            return 0;
          } else {
            return -1;
          }
    }
}

export default Question;
