// 25번 풀이 점의 위치 구하기
function solution(dot) {
    if (dot[0] > 0 && dot[1] > 0) {
        return 1
    } else if (dot[0] < 0 && dot[1] > 0) {
        return 2
    } else if (dot[0] < 0 && dot[1] < 0) {
        return 3
    } else if (dot[0] > 0 && dot[1] < 0) {
        return 4
    }
    return answer;
}

console.log(solution([2, 4])); // 1
console.log(solution([-7, 9])); // 2

/*
    다른 풀이
    1. function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
    }   
    // 구조 분해 할당과 삼항 연산자를 이용한 풀이
    // 삼항 연산자의 조건을 확인 했을때 num의 값에 따라서 
    // 양수인 경우는 1분면과 4분면에 해당하고 아닌경우 2분면 또는 3분면에 해당하게 된다.
    // num의 값에 따라서 또 다시한번 삼항 연산자를 활용했는데
    // 이 경우에는 num과 num2를 곱셈 연산 했을때 양수인지 아닌지에 따라 분면을 나누었다.

    2. function solution(dot) { 
    return dot[0] > 0 
        ? (dot[1] > 0 ? 1 : 4) 
        : (dot[1] > 0 ? 2 : 3);
    }
    // 똑같은 삼항 연산자를 활용한 문제 풀이
    // dot 배열의 인데스 0번 값의 조건에 따라 두가지 삼항 연산자로 나누어 줬다.
*/
