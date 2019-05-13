
class Question {
    constructor(){
        this.text = '',
        this.answers = [],
        this.correctAnswer = '',
        this.userAnswer = '';
    }

    submitAnswer(answer){
        this.userAnswer = answer;
    }

    answerStatus(){
        if (this.userAnswer === this.correctAnswer){
            return true;
        }else {
            return false;
        }
    }

}

export default Question;
