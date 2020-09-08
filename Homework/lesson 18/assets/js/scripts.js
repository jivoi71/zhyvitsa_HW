/*Ask */
   let userLastName = prompt('Ваша фамилия');
   let userFirstName = prompt('Ваше имя');
   let userBirthYear = prompt('Ваш год рождения');
/*Ask/ */

/*Age */
   const currentYear = 2020;
   let userAge = (currentYear - userBirthYear);
   
   console.log(userAge);
/*Age/ */

/*Values into table */
   let doc = document;
   doc.getElementById('user-last-name').innerText = userLastName;
   doc.getElementById('user-first-name').innerText = userFirstName;
   doc.getElementById('user-age').innerText = userAge;
/*Values into table/ */