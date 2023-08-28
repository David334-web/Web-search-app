function webapp(){
    let inputtext = document.querySelector('.inputtext').value;
    return window.location = 'https://www.google.com/search?q=' + 
    inputtext;
}