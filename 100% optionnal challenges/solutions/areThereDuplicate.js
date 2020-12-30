const areThereDuplicates = (...args) => {
    let frequency = {};
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (frequency[arg]) {
            return true;
        }
        frequency[arg] = 1;
    }
    return false;
};
