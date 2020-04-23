const {hash} = window.location;

//Set the message variable to the logic used to decode the secret message
const message = atob(hash.replace('#', ' '));


//If there is a message to be decoded, display the decoded secret message, and hide the form to create one
if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    

    


    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector
        ('#message-input');

    
    const encrypted = btoa(input.value)


    const linkInput = document.querySelector('#link-input');
    
    linkInput.value = `${window.location}#${encrypted}`;

    linkInput.select();


})