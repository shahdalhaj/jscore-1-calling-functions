function calculateAge(birthYear ) {

    let yourBirthYear = birthYear;
     return (yourBirthYear);


 
}

                                                       

function fullInfo (name , birthYear) {
    const getAge = calculateAge(birthYear);
    const message = "Hello, my name is " + name + " and i'm " + getAge + " years old";
    return message;
}
console.log(fullInfo("Shahd", 26));
