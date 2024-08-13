// 7번 문제 두 수의 냐눗셈
function solution(num1, num2) {
    let answer = 0;
    answer += Math.floor((num1 / num2) * 1000)
    return answer;
}

// console.log(solution(3, 2));
// console.log(solution(7, 3));
// console.log(solution(1, 16));

/*
    다른 풀이
    1. function solution(num1, num2) {
    return Math.trunc(num1 / num2 * 1000);
    }
    // 정수 값을 return하는 또 다른 메서드 Math.trunc을 이용한 풀이
*/

