function prefixOption(prefix, vars) {
    const result = vars.map(function (variable) {
        return `${prefix}-${variable}`;
    });
    return result;
}
export default prefixOption;
