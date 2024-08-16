// 10번 문제 짝수의 합
function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            answer += i
        }
    }
    return answer;
}

// console.log(solution(10));
// console.log(solution(4));

/*
    다른 풀이
    1. function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
    }
    // 등차수열을 이용한 풀이라고 한다.

    2. function solution(n) {
    var answer = 0;

    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    return answer;
    }
    // for문의 초기값을 2로 설정하고 증가값을 2로 설정해주면 반복횟수도 줄이며 매개변수까지의 숫자중 2의배수만을 골라낼 수 있다.

*/