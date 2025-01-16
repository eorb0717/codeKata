// 34번 풀이 가장 큰 수찾기
function solution(array) {
    let answer = [];
    let maxNum = 0;
    let indexNum = 0;
    for (let i = 0; i < array.length; i++) {
        maxNum < array[i] ? maxNum = array[i] : maxNum;
    }
    indexNum = array.indexOf(maxNum)
    answer.push(maxNum)
    answer.push(indexNum);
    return answer
}


console.log(solution([1, 8, 3])); // [8, 1]
console.log(solution([9, 10, 11, 8])); // [11, 2]

/*
    다른 풀이
    1. function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
    }

    // 최댓값을 구하는 숫자 메소드인 Math.max를 활용한 풀이 방법
    // 전개연산을 사용한 배열 array를 Math.max의 매개변수로 넣어줘서 그 배열의 숫자들중 가장 큰 수를 찾는다.
    // 그 후 return 값으로 최댓값과 배열에서의 인덱스 값을 찾는 indexOf를 사용하여 최댓값의 인덱스 넘버를 찾아준다.
*/