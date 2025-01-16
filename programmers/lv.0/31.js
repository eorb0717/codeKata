// 31번 풀이 n의 배수
function solution(num, n) {
    let answer = 0;
    if (num % n === 0) {
        answer += 1;
    } else if (num % n !== 0) {
        answer = 0;
    }
    return answer;
}

console.log(solution(98, 2)); // 1
console.log(solution(34, 3)); // 0

/*
    다른 풀이
    1. function solution(num, n) {
    return num % n === 0 ? 1 : 0;
    }
    // 삼항 연산자를 이용한 풀이 방법
*/