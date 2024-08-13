// 3번 문제 숫자 비교하기
function solution(num1, num2) {
    if (num1 === num2) {
        return 1;
    } else {
        return -1;
    }
}

// console.log(solution(2, 3));
// console.log(solution(11, 11));
// console.log(solution(7, 99));

/*
    다른 풀이
    1. function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
    }
    // 삼항 연산자를 이용한 문제 풀이

    2. function solution(num1, num2) {
    return ((num1 == num2)-0.5)*2;
    }

    // num1과 num2가 동등하다면 true이므로 1을 반환 
    그렇지 않다면 false로 0을 반환 
*/