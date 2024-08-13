// 6번 문제 몫 구하기
function solution(num1, num2) {
    let answer = 0;
    answer += parseInt(num1 / num2) // 정수 변환 메서드
    return answer;
}

// console.log(solution(10, 5));
// console.log(solution(7, 2));

// 큰 수에서는 type number에 string이 들어가는 경우도 있기 때문에, 소수점 이하를 절삭하여 정수 값을 return하려는 목적으로 Math.floor 대신에 parseInt를 사용해서는 안된다.

/*
    다른 풀이

    1. const solution = (num1, num2) => Math.floor(num1 / num2)
    // 화살표 함수와 정수 변환 Math.floor 메서드를 활용한 풀이

*/