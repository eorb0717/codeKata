// 14번 풀이 특정 문자 제거하기
function solution(my_string, letter) {
    let answer = '';
    answer += my_string.split("").filter((splitItem) => {
        return splitItem !== letter
    }).join("");
    return answer;
}

console.log(solution("abcdef", "f"));
console.log(solution("BCBdbe", "B"));
// let str = "abcdef";
// let splitStr = str.split("").filter((split) => {
//     return split !== "f"
// })
// let wholeStr = splitStr.join("");

// console.log(typeof wholeStr);