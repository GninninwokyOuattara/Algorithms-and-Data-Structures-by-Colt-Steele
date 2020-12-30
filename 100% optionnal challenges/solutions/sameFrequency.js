const sameFrequency = (int1, int2) => {
    [int1, int2] = [int1.toString(), int2.toString()];
    let frequency = {};
    for (let i = 0; i < int1.length; i++) {
        let val = parseInt(int1[i]);
        frequency[val] = (frequency[val] || 0) + 1;
    }
    for (let i = 0; i < int2.length; i++) {
        val = parseInt(int2[i]);
        if (val in frequency && frequency[val] > 0) {
            frequency[val]--;
        } else {
            return false;
        }
    }
    return true;
};
