jQuery(document ).ready(function($) {
	'use strict'

  // Check buttons

  const doc = document; 

  doc.getElementById('save').addEventListener('click', function () {
      /*var */
         const userEmail = $('#userEmail').val();
      /*var/ */

     /*add email in localStorage*/
      if (doc.getElementById('userEmail').value == '') {
          alert('Field is empty');
          return false;
      } else { 
          localStorage.setItem('userEmail', userEmail);
        }
     /*add email in localStorage/ */  
  });

   /*clear email from localStorage */
    doc.getElementById('clear').addEventListener('click', function () {
        localStorage.clear('userEmail');
    });
  /*clear email from localStorage/ */

   doc.getElementById('addInDiv').addEventListener('click', function () {
       doc.write(localStorage.getItem('userEmail'));      
   });

});
