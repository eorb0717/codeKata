// 20번 풀이 피자 나눠 먹기
function solution(n) {
    if ( n === 1) {
        return 1;
    } else if (n % 7 === 0) {
        return n / 7;
    } else if (n % 7 !== 0) {
        return Math.trunc(n / 7) + 1;
    }
}

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));

/*
    다른 풀이
    1. function solution(n) {
    return Math.ceil(n / 7)
    }

    // Math.ceil()은 정적 메소드로 안의 숫자를 언제나 올림하여 크거나 같은 가장 작은 정수를 반환한다.
*/
