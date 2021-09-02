// Creates an object that holds both the scss and css3 variable
function createGroupedVariablesObject(inputArr, prefix) {
    const cloneArr = [...inputArr];
    return cloneArr.reduce((acc, cur, index) => {
        // split variable into the var name and its value
        let splitVariable = cur.split(':');
        let [varName, varValue] = splitVariable;
        // Remove prefix dollar signs if any and add custom prefix or ''
        let cleanVarName = varName.replace(/^\$+/, '');
        let addPrefix = cleanVarName.replace(/^/, `${prefix ? prefix + '-' : ''}`);
        // then we create 2 objects 'scss' and 'css'
        let variableObj = {
            scss: `$${addPrefix}: ${varValue.trim()} !default;`,
            css: `--${addPrefix}: #{$${addPrefix.trim()}};`
        };
        acc[index] = variableObj;
        return acc;
    }, []);
}
export default createGroupedVariablesObject;
