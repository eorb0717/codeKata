// 16번 풀이 머쓱이보다 키 큰 사람
function solution(array, height) {
    let answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) {
            answer++
        }
    }
    // array.filter((num) => {
    //     if (num > height) {
    //         answer++
    //     }
    // })
    return answer;
}

console.log(solution([149, 180, 192, 170], 167)); 
console.log(solution([180, 120, 140], 190));