'use strict';
import Renderer from './lib/Renderer';
import $ from 'jquery';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'click .submit-answer': 'handleSubmit',
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

  _generateQuiz(){
    return `
      <div>
        <p>
          ${this.model.asked[0].text}
        </p>
        <p class="answer-list">
          ${this.generateAnswer()}
        </p>
      </div>
      <button type="button" class="submit-answer">Submit</button>
    `
  }

  generateAnswer(){
    console.log(this.model.asked);
    let answerHtml = this.model.asked[0].answers.map(answer => {
      return `
      <input type="radio" name="answer" value="${answer}"> ${answer}
      `
    });
    return answerHtml.join('');
    // ${'.answer-list'}.append(answerHtml.join(''));
  }

  template() {
    let html = '';
    
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    }
    else{
      html = this._generateQuiz()
    }
    
    return html;
  }

  handleStart() {
      this.model.startGame();
      console.log('Quiz Started');
  }

  handleSubmit(){
    this.model.submitAnswer();
  }
}

export default QuizDisplay;
