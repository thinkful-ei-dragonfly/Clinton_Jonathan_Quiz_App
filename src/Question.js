import Model from './lib/Model' //imported model

class Question extends Model { //extended from model
    constructor(questionData){
        super();
        this.text = questionData.question;
        this.answers = [questionData.correct_answer, ...questionData.incorrect_answers];
        this.correctAnswer = questionData.correct_answer;
        this.userAnswer = null;  //added super and refactored data inputs
        this._randomize(this.answers);
    }

    _randomize(arr){
      let currentIndex = arr.length
      let tempVal
      let ranIn

      while (currentIndex !== 0){
        ranIn = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        tempVal = arr[currentIndex];
        arr[currentIndex] = arr[ranIn];
        arr[ranIn] = tempVal;
      }
      return arr;
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
