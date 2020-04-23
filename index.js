document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    //Setting variable for the user's original input
    const input = document.querySelector
        ('#message-input');

    //Input for the Base64 Conversion function
    const encrypted = btoa(input.value)

    //Setting the shareable link equal to the message link after conversion

    /*Now, we'll update the code to generate the new URL. 
    
    Window.location allows us to get the current URL of the user (by putting it under `${window.location}`)
    
    Call that, and the encrypted message

    */

    const linkInput = document.querySelector('#link-input');
    
    linkInput.value = `${window.location}#${encrypted}`;

    //new URL is instantly selected, so the user can just copy
    linkInput.select();


})