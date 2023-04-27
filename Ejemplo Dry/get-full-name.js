// Ejemplo de código con buenas prácticas DRY
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  
  function logFullName(firstName, lastName) {
    const fullName = getFullName(firstName, lastName);
    console.log(fullName);
  }
  
