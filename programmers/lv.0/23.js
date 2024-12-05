// 23번 풀이 배열 자르기
function solution(numbers, num1, num2) {
    let answer = 0;
    answer = numbers.splice(num1, num2 - num1 + 1)
    // answer = numbers.slice(num1, num2 + 1);
    return answer
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));
console.log(solution([1, 3, 5], 1, 2));

/*
    다른 풀이

    1. function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i < num2+1; i++) {
        answer.push(numbers[i])
    }

    return answer;
    }
    // for 반복문과 배열 메소드 push를 이용한 풀이 방법
    // 반복문의 초기값을 num1로 두고 반복의 끝을 num2 + 1값으로 설정 해준다.
    // num2 + 1을 해준 이유는 num2는 인덱스 이기 떄문에 우리가 원하는 값을 얻기 위해서는 +1을 해주어서 반복이 계속되게 해주어야 한다.
    // 그렇게 나온 실행값을 push 메소드를 사용하여 빈배열 answer에 할당 시켜주면 된다.

    2. function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
    }
    // 배열 메소드 splice를 사용한 풀이 방법
    // splice() 메소드는 첫 번째 인자값으로 실행을 시작할 숫자를 넣어주고 두 번째 인자값으로 시작한 숫자에서 부터 제거하고자 하는 요소 개수를 넣어주면 된다. 그 외에 추가로 원하는 요소를 추가할 수 있는데 이번 풀이에서는 필요 없다.
    //
*/