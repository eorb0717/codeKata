// 18번 풀이 중앙값 구하기
function solution(array) {
    array.sort(function (a, b) {
        return a - b;
    })
    return array[Math.floor(array.length / 2)]
    // return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));