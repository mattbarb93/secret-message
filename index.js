const {hash} = window.location;

//Display the message by running the A to B function, instead of B to A. The coded message can be found on the new URL, and can be selected by looking inside the "hash" property of the  window.location object. Replacing the # with an empty string will display all we need.
console.log(atob(hash.replace('#', ' ')));

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