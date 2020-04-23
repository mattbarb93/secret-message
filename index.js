document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    //Setting variable for the user's original input
    const input = document.querySelector
    ('#message-input');

    //Input for the Base64 Conversion function
    const encrypted = btoa(input.value)

    //Setting the shareable link equal to the message link after conversion
    document.querySelector('#link-input').value = encrypted

    
})