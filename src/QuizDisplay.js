'use strict';
import Renderer from './lib/Renderer';
import $ from 'jquery';
import Question from './Question';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit .submit-answer': 'handleSubmit',
      // 'click .continue': 'handleContinue', //need to create a handleContinue
    };
  }

  _generateIntro() {
    return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;
  }

  _generateQuiz() {
    return `
      <div>
        <p>
          ${this.model.asked[0].text}
        </p>
        <p class="answer-list">
        <form class="submit-answer">
          ${this.generateAnswer()}
          <input type="submit" value="Submit"/>
        </form>
        </p>
      </div>
    `
  }

  generateAnswer() {
    console.log(this.model.asked);
    let answerHtml = this.model.asked[0].answers.map(answer => {
      return `
      <input class ="answer" type="radio" name="answer" value="${answer}"> ${answer}
      `
    });
    return answerHtml.join('');
    // ${'.answer-list'}.append(answerHtml.join(''));
  }

  _generateCorrect() {
    return `
      <div>
       <p>Correct Answer</p>
      </div>
    `;
  }

  _generateIncorrect() {

  }

  _generateError() {
    return `
      <div>
        <p>Must Select Answer</p>
      </div>
    `;
  }


  template() {
    let html = '';

    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    }
    else {
      if (this.model.asked[0].answerStatus() === 1) {
        html = this._generateCorrect();
      }
      else if (this.model.asked[0].answerStatus() === 0) {
        html = this._generateIncorrect();
      }
      else{
      html = this._generateQuiz();
      }
      // console.log(this.model.asked[0].answerStatus());
    }


    // else{
    //   html = this._generateError();
    // }
    // console.log(html);
    return html;
  }

  handleStart() {
    this.model.startGame();
    console.log('Quiz Started');
  }

  handleSubmit(e) {
    e.preventDefault();
    const answer = e.target.answer.value;
    if (answer === "") {
      throw ("Must select an answer");
    }
    else {
      console.log(answer);
      this.model.submitAnswer(answer);
      this.template();
    }
  }
}

export default QuizDisplay;