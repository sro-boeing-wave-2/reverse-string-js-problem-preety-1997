// The intent of this file is to reverse the string using iterators (for, foreach)
function reverse(str) {
    var n = str.length;
    var reversestring = "";
    for (var z = n; z >= 0; z--) {
        reversestring += str.charAt(z);
    }
    return reversestring;
}

module.exports = reverse;
