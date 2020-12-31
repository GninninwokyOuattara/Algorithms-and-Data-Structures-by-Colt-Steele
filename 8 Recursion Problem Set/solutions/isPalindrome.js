const isPalindrome = (str) => {
    outStr = "";
    const reverse = (str) => {
        if (str.length == 0) return "";
        outStr = reverse(str.slice(1)) + str.slice(0, 1);
        return outStr;
    };
    outStr = reverse(str);
    return outStr == str;
};
