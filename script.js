let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
            try {
                // Handle percentage calculation
                if (string.includes('%')) {
                    string = makePercentageExpression(string);
                }
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string; 
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});

function makePercentageExpression(expression) {
    const checker = /(\d+)%(\d+)/;
    const match = expression.match(checker);
    if (match) {
        const percentage = parseFloat(match[1]);
        const value = parseFloat(match[2]);
        const result = (percentage / 100) * value;
        expression = expression.replace(checker, result);
    }
    return expression;
}