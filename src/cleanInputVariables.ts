function cleanInputVariables(vars: string[]) {
    let splitVariable = cur.split(':');
    let [varName] = splitVariable;

    let cleanVarName = varName.replace(/^\$+/, '');
}