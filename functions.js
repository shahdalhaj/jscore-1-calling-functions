function calculateAge(age) {

    const getAge = 2020 - age ;
     return getAge;
}

                                                       

function getFullInfo (name , age) {
    const getAge = calculateAge(age);
    const message = "Hello, my name is " + name + " and i was born in " + getAge + ".";
    return message;
}
console.log(getFullInfo("Shahd", 26));
