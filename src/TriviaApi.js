'use strict';

class TriviaApi {
  
  static BASE_URL = 'https://opentdb.com/api.php?amount=5';

  getQuestions(){
    return fetch(`${TriviaApi.BASE_URL}`)
      .then(res => 
      { 
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default TriviaApi;
