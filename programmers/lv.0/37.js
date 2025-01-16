// 37번 풀이 공백으로 구분하기1
function solution(my_string) {
    let answer = [];
    let splitString = my_string.split(" ")
    answer = splitString;
    return splitString;
}

console.log(solution("i love you")); // ["i", "love", "you"]
console.log(solution("programmers")); // ["programmers"]