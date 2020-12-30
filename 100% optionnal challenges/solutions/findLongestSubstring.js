const findLongestSubstring = (str) => {
    if (!str) return 0;
    longest = 0;
    let subStr = "";
    for (i = 0; i < str.length; i++) {
        for (j = i; j < str.length; j++) {
            if (subStr.includes(str[j])) {
                longest = Math.max(longest, subStr.length);
                subStr = "";
                break;
            }
            subStr += str[j];
        }
    }
    return longest;
};
