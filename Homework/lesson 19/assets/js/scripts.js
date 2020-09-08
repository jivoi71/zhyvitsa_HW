console.log('Hi, teacher:)');
console.log("----------------------------");
/*Names */
   const names = ['Вася','Петя','Жора','Лена','Вика','Аня','Саша','Женя','Даня','Олег'];
   console.log(names);
/*Names/ */

console.log("----------------------------");

/*Recording names in console */
   names.forEach(names => {
       console.log(names);
   })
/*Recording names in console/ */

console.log("----------------------------");

/*Cycles*/
//for

console.log('Cycle for >>>>>>>>>>>>');
for (let i = 0; i < names.length; names[i++]) {
    
    console.log('[' +i+ ']' + names[i]);
    
}



//while

console.log('Cycle while>>>>>>>>>>>>');
let i = 0;

while (i < names.length) {
    
    console.log('[' +i+ ']' + names[i])
    i++

}
/*Cycles/*/

console.log("----------------------------");