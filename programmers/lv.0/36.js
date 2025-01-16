// 36번 풀이 정수 부분
function solution(flo) {
    let answer = 0;
    answer += Math.floor(flo)
    return answer;
}

console.log(solution(1.42));
console.log(solution(69.32));
// Math.floor는 소수점을 내림처리 한다.

/*
    다른 풀이
    1. const solution = flo => ~~flo;
    // ~~ 연산자를 활용한 풀이 방법
    // ~~ 연산자는 Math.floor()와 parseInt와 같은 기능을 하는데 속도 측면에서 좀 더 빠르다

    2. function solution(flo) {
    var answer = Math.trunc(flo);   
    return answer;
    }

    // Math.trunc 메소들 활용한 풀이
    // 주어진 숫자의 소수 부분을 제거하고 숫자의 정수부분을 반환
    // 단순히 소수 부분만 제거한다.
*/
