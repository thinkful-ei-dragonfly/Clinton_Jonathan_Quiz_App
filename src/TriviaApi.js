'use strict';
const BASE_URL = 'https://opentdb.com/api.php?amount=5';

class TriviaApi {
  
  getQuestions(){
    return fetch(BASE_URL)
    .then(res => res.json());
  }
}

export default TriviaApi;
