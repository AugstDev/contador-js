const text = document.getElementById("text");
const char = document.getElementById('chars');
const word = document.getElementById('words');
const line = document.getElementById('lines');

text.addEventListener('input', function(){

    
    const trimmedText = text.value.trim();
    let multipleSpaceRemoval = trimmedText.replace(/\s\s+/g, ' ').replace('\n', ' ')
    console.log(trimmedText, '\n', multipleSpaceRemoval);
    
    if(trimmedText == ''){
        char.textContent = '0';
        word.textContent = '0';
        line.textContent = '0';
    }else{
        char.textContent = trimmedText.length;
        word.textContent = multipleSpaceRemoval.split(' ').length;
        line.textContent = trimmedText.split('\n').length;
    }
    
})