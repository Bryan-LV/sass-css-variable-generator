// Creates an object that holds both the scss and css3 variable
function createGroupedVariablesObject(inputArr) {
    const cloneArr = [...inputArr];
    return cloneArr.reduce((acc, cur, index) => {
        // split variable into the var name and its value
        let splitVariable = cur.split(':');
        let [varName, varValue] = splitVariable;
        // Remove prefix dollar signs if any
        let cleanVarName = varName.replace(/^\$+/, '');
        // then we create 2 objects 'scss' and 'css'
        let variableObj = {
            scss: `$${cleanVarName}: ${varValue.trim()} !default;`,
            css: `--${cleanVarName}: #{$${cleanVarName.trim()}};`
        };
        acc[index] = variableObj;
        return acc;
    }, []);
}
export default createGroupedVariablesObject;
