//  Day 1 — JavaScript Problem Solving (Solutions)
// 1. Palindrome Check
// Concept: String manipulation, toLowerCase(), replace(), split(), reverse().


function isPalindrome(str){
    const cleaned = str 
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
console.log(isPalindrome("Madam")); 
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("wake up to reality"));