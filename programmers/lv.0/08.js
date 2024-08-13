// 8번 문제 배열의 평균값
function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i]
    }
    answer = answer / numbers.length;
    return answer;
}

// console.log(solution([1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]));
// console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));


/*
    다른 풀이
    1. function solution(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
    }
    // 배열의 reduce 메서드를 활용한 풀이 
    ex) 초기값: 0 첫 번째 반복: 0(누적값) + 1(현재값) = 1 
    두 번째 반복: 1(누적값) + 2(현재값) = 3 
    세 번째 반복: 3(누적값) + 3(현재값) = 6 
    네 번째 반복: 6(누적값) + 4(현재값) = 10 
    최종 반환값: 10
*/