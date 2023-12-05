/*
JavaScript: 重構
問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
    let formattedName = '';

    if (firstName) {
        formattedName += firstName;
    }

    if (lastName) {
        formattedName += ' ' + lastName;
    }

    return formattedName;
}
*/

function formatName(firstName, lastName) {
    // checking if both inputs are type of string
    if (typeof (firstName) !== "string" || typeof (lastName) !== "string") return "Error: invalid input type!";

    // to turn first char of name into upper case, and others into lower case
    // Ex: toFirstCapital("jason") = "Jason";
    // Ex: toFirstCapital("JASON") = "Jason";
    const toFirstCapital = (name) => {
        if (typeof (name) !== "string") return
        const temp1 = name[0].toUpperCase()
        const temp2 = name.slice(1).toLowerCase()
        return temp1 + temp2
    }

    // to avoid name string including space 
    // Ex: toValidName("  Jas on ") = "Jason";
    const toValidName = (name) => {
        if (typeof (name) !== "string") return
        return name.replace(/([^a-z]+)/gi, '');
    }

    let formattedName = '';

    if (firstName) {
        const validName = toValidName(firstName);
        formattedName += toFirstCapital(validName);
    }
    // name cannot be empty
    else return "Error: first name is empty"

    if (lastName) {
        const validName = toValidName(lastName);
        formattedName += ' ' + toFirstCapital(validName);
    }
    // name cannot be empty
    else return "Error: last name is empty"

    return formattedName;
}


export default formatName