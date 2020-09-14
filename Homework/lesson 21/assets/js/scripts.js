/*Question */


/*function question() {
    let name = prompt('Как вас зовут?');
    let age = prompt('Сколько вам лет?');
   alert('Здравствуйте, ' + name + ' ' + 'вам ' + age + ' ' + 'лет.')
    
};*/

function question() {
    let UserName = prompt('Как вас зовут?');
    alert('Ваш ответ: ' + UserName);

    let UserCity = prompt('В каком городе вы живёте?');
    alert('Ваш ответ: ' + UserCity);

    let UserAge = prompt('Сколько вам лет?');
    alert('Ваш ответ: ' + UserAge + ' лет.');
}

 question();

/*Question/ */


/*Person */
const person = {
    name: 'Павел',
    age: 17,
    arrowFunc: null,
    my_func: function () {
        this.arrowFunc = () => {
            console.log('Здравствуйте, ' + this.name + '. ' + 'Вам ' + this.age + ' лет.');
        }
        
    }
}

person.my_func();
person.arrowFunc();

/*Person/ */

/*askList */

let askQuestion = () => {

   const askList = [
       'Как вас зовут?',
       'Сколько вам лет?',
       'Вы женаты/замужем?',
       'Кем вы работаете?',
       'Какая у вас ЗП?',
       'Где вы были послений раз за границей?',
   ];

   const answers = {
      name: null,
      age: null,
      family: null,
      job: null,
      salery: null,
      abroad: null,
   };

   let counter = 0;

   for(let key in answers){

       
       let ask = prompt(askList[counter]);
       answers[key] = ask;
       counter++; 
   }

   return console.log(answers);
}
askQuestion();

/*askList/ */




