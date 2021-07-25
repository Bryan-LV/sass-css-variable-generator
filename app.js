function parseVariables(input) {
    // split by sections ending with ";" that are then proceeded by a line break.
    let regex = /;\s*\n?/g;
    return input.split(regex);
}

function createObj(inputArr) {
    const cloneArr = [...inputArr];
    return cloneArr.reduce( (acc, cur, index) => {
        // split variable into the var name and its value
        let splitVariable = cur.split(':');
        let [varName, varValue] = splitVariable;
        // then we create 2 objects 'scss' and 'css'
        let variableObj = {
            scss: `$${varName}: ${varValue.trim()} !default;`,
            css: `--${varName}: #{${varName.trim()}};`
        }

        acc[index] = variableObj;
        return acc;
    }, []);
}

window.onload = function() {
    let textInput = document.querySelector('#input');
    let button = document.querySelector('#button');

    button.addEventListener('click', (e) => {
        // split up variables
        const vars = parseVariables(textInput.value);
        // FIXME: trim last off array as it's always an empty string
        vars.pop();
        // turn split variables into objects holding scss and css vars
        const modData = createObj(vars);
        console.log(modData);

    })
}