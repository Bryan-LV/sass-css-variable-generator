import parseInputVariables from './parseInputVariables.js'
import createGroupedVariablesObject from "./createGroupedVariablesObject.js";
import copyToClipboard from './copyToClipboard.js';
import prefixOption from './prefixOption.js';

window.onload = function () {
    const textInput = <HTMLInputElement>document.querySelector('#input');
    const form = <HTMLFormElement>document.querySelector('#form');
    const output = <HTMLUListElement>document.querySelector('#output .output-text');
    const copyBtn = <HTMLButtonElement>document.querySelector('#copy-btn');
    const prefix  = <HTMLInputElement>document.querySelector('#prefix');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Parsing Action //
        const parseVariables = parseInputVariables(textInput.value.trim());

        // FIXME: trim last item off array as it's always an empty string
        parseVariables.pop();

        let isPrefixed: string = prefix.value !== '' ? prefix.value : '';
        
        // returns array of objects containing scss & css3 variables
        const modData = createGroupedVariablesObject(parseVariables, isPrefixed);
        
        // Writing Action //
        // clear text before next write
        output.innerHTML = '';

        modData.forEach(obj => {
            output.innerHTML += `<p class="scss-var output-var">${obj.scss}</p>`;
        })

        modData.forEach(obj => {
            output.innerHTML += `<p class="css-var output-var">${obj.css}</p>`;
        })
    })

    // Copy Actions //
    copyBtn.addEventListener('click', copyToClipboard);
    output.addEventListener('click', copyToClipboard);
}
