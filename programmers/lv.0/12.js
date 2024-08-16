// 12번 문제 배열 뒤집기
function solution(num_list) {
    let answer = [];
    answer = num_list.reverse()
    return answer;
}

// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1, 1, 1, 1, 1, 2]));
// console.log(solution([1, 0, 1, 1, 1, 3, 5]));

/*
    다른 풀이
    1. function solution(num_list) {
    let answer = [];
    let j = num_list.length
    for(let i = 1; i <= j; i++){
        answer.push(num_list[j-i])
    }
    return answer;
    }
    // 메소드를 이용하지 않고 for문을 이용한 풀이이다.
    // j변수를 선언해주고 num_list배열의 길이만큼을 할당시켜준다
    // 초기값 1부터 시작하여 배열의 길이인 j만큼까지 반복하고 반복이 끝나면 i값은 증가한다
    // push메소드를 사용하여 num_list배열의 제일 끝 index넘버를 가진 원소부터 answer배열에 할당시켜준다.
*/