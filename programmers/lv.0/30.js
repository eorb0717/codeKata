// 30번 풀이 가위 바위 보
function solution(rsp) {
    let answer = '';
    // console.log(typeof rsp);
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === "0") {
            answer += "5"
        } else if (rsp[i] === "2") {
            answer += "0"
        } else if (rsp[i] === "5") {
            answer += "2"
        }
    }
    return answer;
}

console.log(solution("2")); // "0"
console.log(solution("205")); // "052"