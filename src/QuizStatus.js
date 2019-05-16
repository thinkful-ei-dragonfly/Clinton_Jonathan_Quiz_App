'use strict';

import Renderer from './lib/Renderer'

class QuizStatus extends Renderer {
  template() {
    // return some HTML here, utilizing `this.model`

    return `
      <div>
      <p>Score: ${this.model.score}</p>
      </div>
      <div>
      <p>High Score: ${this.model.highestScore}</p>
      </div>
      <div>
      <p>Progress: ${this.model.asked.length} of 5</p>
    `;
  }

}

export default QuizStatus;
