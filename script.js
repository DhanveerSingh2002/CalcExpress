let textAreaString = "";

let buttons = document.querySelectorAll('.buttons');
let textArea = document.getElementById('textArea');
let evaluate = document.getElementById('evaluate');
let clear = document.getElementById('clear');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        textAreaString += e.target.innerHTML;
        textArea.value = textAreaString;
    })
})

evaluate.addEventListener('click', () => {
    try 
    {
        if(textAreaString === "")
        {
            textArea.style.color = '#d8ff10'
            textArea.value = "No value";
            setTimeout( () => {
                textArea.value = "";
                textAreaString = "";
                textArea.style.color = 'black';
            }, 2000)
        }
        else
        {
            textArea.value = eval(textAreaString).toFixed(2);
        }
    } 
    catch (error) 
    {
        textArea.style.color = 'red';
        textArea.value = 'Error';
        setTimeout( () => {
            textArea.value = "";
            textAreaString = "";
            textArea.style.color = 'black';
        }, 2000)
    }
})

clear.addEventListener('click', () => {
    textArea.value = "";
    textAreaString = "";
})

