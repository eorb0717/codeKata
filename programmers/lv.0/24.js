// 24번 풀이 문자 반복 출력하기
function solution(my_string, n) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        answer += my_string[i].repeat(n);
    }
    return answer;
}

console.log(solution("hello", 3)) // "hhheeellllllooo"

/*
    다른 풀이
    1. function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
    }
    // 전개 연산을 이용한 풀이 방법
    // 문자 데이터인 my_string을 전개 연산자를 활용하여 빈 배열에 각각의 요소들을 개별 분리하고 할당 시켜주었다.
    // 배열 메소드인 map을 사용하여 각각의 요소들인 문자 데이터들을 문자 메소드인 repeat을 사용하여 n만큼 반복해주고
    // 그렇게 새롭게 탄생한 배열을 join 메소드를 활용해서 다시 문자 데이터로 변환 해주었다.
*/

