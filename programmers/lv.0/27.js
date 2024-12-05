// 27번 문제 풀이 문자열 곱하기
function solution(my_string, k) {
    let answer = '';
    answer += my_string.repeat(k);
    return answer
}

console.log(solution("string", 3)); // "stringstringstring"
console.log(solution("love", 10)); // "lovelovelovelovelovelovelovelovelovelove"