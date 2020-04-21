function calculateAge(birthYear ) {
    const currentYear = 2020;
    let yourBirthYear = birthYear;
     return (currentYear - yourBirthYear);


 return (currentYear - birthYear);
}

                                                       

function fullInfo (name , birthYear) {
    const getAge = calculateAge(birthYear);
    let anyName = name;
    const message = "My name is " + anyName + "and i'm " + getAge + "years old";
}
console.log(fullInfo (Shahd,26));
