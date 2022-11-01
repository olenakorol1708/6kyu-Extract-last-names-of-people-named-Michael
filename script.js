//6kyu Extract last names of people named Michael
//Notes:

//First name will always be Michael with upper case 'M'.
//There will always be a space character between 'Michael' and last name.
//Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
//There will always be at least one 'Micheal' with a valid last name in the input text.


const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

function getMichaelLastName(inputText){
    let re = /Michael(\s[A-Z]\w+)/g;
    let str = inputText.match(re).join(' ');
    let re1 = /Michael\s/g;
    return str.replace(re1,'').split(' ')
    
    } 
console.log(getMichaelLastName(inputText))
//[ 'Jordan', 'Johnson', 'Green', 'Wood' ]