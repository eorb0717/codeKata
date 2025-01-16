// 35번 풀이 n의 배수 고르기
function solution(n, numList) {
    let answer = [];
    for (let i = 0; i < numList.length; i++) {
        numList[i] % n === 0 ? answer.push(numList[i]) : answer.push()
    }
    return answer;
}


console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
console.log(solution(5, [1, 9, 3, 10, 13, 5])); // [10, 5]
console.log(solution(12, [2, 100, 120, 600, 12, 12])); // [120, 600, 12, 12]

/*
    다른 풀이
    1. function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
    }

    // 배열 메소드 filter를 사용한 풀이 방법
    // filter 메소드는 콜백함수를 실행하여 실행조건 값만으로 새로운 배열을 생성한다.
*/