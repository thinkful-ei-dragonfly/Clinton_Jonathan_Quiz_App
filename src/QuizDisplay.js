'use strict';
import Renderer from './lib/Renderer';
import $ from 'jquery';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
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
    $('.buttons').on('click', '.start-quiz', res => {
      this.model.startGame();
      this.model.nextQuestion();
    });
  }
}

export default QuizDisplay;
