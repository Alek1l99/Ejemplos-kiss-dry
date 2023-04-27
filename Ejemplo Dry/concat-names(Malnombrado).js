// Ejemplo de código con malas prácticas DRY
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  
  function logFullName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    console.log(fullName);
  }
  
