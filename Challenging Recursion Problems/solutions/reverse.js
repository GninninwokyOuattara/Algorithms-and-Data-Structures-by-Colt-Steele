const reverse = (str) => {
    let outStr = "";
    if (str.length == 0) return "";
    outStr = reverse(str.slice(1)) + str.slice(0, 1);
    return outStr;
};
