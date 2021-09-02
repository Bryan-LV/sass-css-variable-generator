function parseInputVariables(input: string) {
    // split by sections ending with ";" that also may be proceeded by a line break.
    let regex = /;\s*\n?/g;
    return input.split(regex);
}

export default parseInputVariables;
