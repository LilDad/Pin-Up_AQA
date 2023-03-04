let userLogin = prompt('');

if (userLogin == 'Admin') {
    userPassword = prompt('');

    if (userPassword == 'TheMaster') {
        console.log('Welcome!');
    } else if (userPassword == '' || userPassword == null) {
        console.log('Canceled');
    } else {
        console.log('Wrong password');
    }
} else if (userLogin == '' || userLogin == null) {
    console.log('Canceled');
} else {
    console.log('I don\'t know you');
}
