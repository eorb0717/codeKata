// 29번 풀이 개미 군단
function solution(hp) {
    let answer = 0;
    answer += Math.trunc(hp / 5) + Math.trunc((hp % 5) / 3) + Math.trunc(((hp % 5) % 3) / 1)
    return answer;
}

console.log(solution(23)); // 5
console.log(solution(24)); // 6
console.log(solution(999)); // 201
