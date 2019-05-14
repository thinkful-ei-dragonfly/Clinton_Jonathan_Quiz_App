'use strict';

import Quiz from './Quiz';

class TriviaApi {
  
  static BASE_URL = 'https://opentdb.com/api.php?amount=5';

  getQuestions(){
    const url = new URL(TriviaApi.BASE_URL);
    return fetch(url)
    .then(res => res.json())
    .then(res => res.results);
  }
}

export default TriviaApi;
