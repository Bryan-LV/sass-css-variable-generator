function parseVariables(input) {
    // split by sections ending with ";" that are then proceeded by a line break.
    let regex = /;\s*\n?/g;
    return input.split(regex);
}

// turn split variables into objects holding scss and css vars
function createObj(inputArr) {
    const cloneArr = [...inputArr];
    return cloneArr.reduce( (acc, cur, index) => {

        // split variable into the var name and its value
        let splitVariable = cur.split(':');
        let [varName, varValue] = splitVariable;

        // Remove prefix dollar signs if any
        let cleanVarName = varName.replace(/^\$+/, '');

        // then we create 2 objects 'scss' and 'css'
        let variableObj = {
            scss: `$${cleanVarName}: ${varValue.trim()} !default;`,
            css: `--${cleanVarName}: #{$${cleanVarName.trim()}};`
        }

        acc[index] = variableObj;
        return acc;
    }, []);
}

window.onload = function() {
    let textInput = document.querySelector('#input');
    const form = document.querySelector('#form');
    const output = document.querySelector('#output .output-text');
    const copyBtn = document.querySelector('#copy-btn');

    form.addEventListener('submit', (e) => {

        e.preventDefault();
        // split up variables
        const vars = parseVariables(textInput.value);
        
        // FIXME: trim last item off array as it's always an empty string
        vars.pop();

        // returns array of objects containing scss & css3 variables
        const modData = createObj(vars);

        // clear out before next run
        output.innerHTML = '';
        modData.forEach(obj => {
            output.innerHTML += `<p class="scss-var output-var">${obj.scss}</p>`;
        })

        modData.forEach(obj => {
            output.innerHTML += `<p class="css-var output-var">${obj.css}</p>`;
        })
    })

    copyBtn.addEventListener('click', function() {

        const variables = Array.from(document.querySelectorAll('.output-var'));

        const textToCopy = variables.reduce( function(accumulator, currentItem){
            accumulator += `${currentItem.textContent}\n`;
            return accumulator;
        }, ``);

        window.navigator.clipboard.writeText(textToCopy);
    })
}