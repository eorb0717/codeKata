// 26번 풀이 flag에 따라 다른 값 반환하기
function solution(a, b, flag) {
    let answer = 0;
    answer = flag ? (a + b) : (a - b);
    return answer;
}

console.log(solution(-4, 7, true)); // 3
console.log(solution(-4, 7, false)); // -11