// 15번 풀이 짝수 홀수 개수
function solution(num_list) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < num_list.length; i++) {
        num_list[i] % 2 !==0 ? a++ : b++
    }
    return [b, a]
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));