function prefixOption(prefix: string, vars: string[]): string[] {

    const result = vars.map(function (variable) {
        return `${prefix}-${variable}`;
    });

    return result;
}

export default prefixOption;