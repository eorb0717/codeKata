// 22번 풀이 아이스 아메리카노
function solution(money) {
    let answer = [];
    let coffee = Math.trunc(money / 5500);
    let change = Math.trunc(money - coffee * 5500);
    answer.push(coffee) && answer.push(change);
    return answer;
}

console.log(solution(5500));
console.log(solution(15000));

/*
    다른 풀이
    1. function solution(money) {
        return [Math.floor(money / 5500), money % 5500];
    }

    // 바로 배열을 return 하는 방식을 사용

    2. function solution(money) {
    let count = 0;
    while (money >= 5500) {
        money -= 5500;
        count++
    }
        return [count, money]
    }

    // while 반복문을 활용한 풀이
    // money 매개변수가 조건문에 참일 경우인 까지 실행을 반복한다.
*/