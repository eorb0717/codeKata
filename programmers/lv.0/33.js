// 33번 풀이 대문자와 소문자
function solution(my_string) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            answer += my_string[i].toLowerCase();
        } else {
            answer += my_string[i].toUpperCase()
        }
    }

    return answer
}

console.log(solution("cccCCC")); // "CCCccc"
console.log(solution("abCdEfghIJ")); //"ABcDeFGHij"

/*
    다른 풀이
    1. function solution(my_string) {
    var answer = '';
    for (let c of my_string) {
        answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    }
    return answer;
    }
    // for ...of 반복문을 활용한 풀이 방법
    // 매개변수인 문자열 my_string의 각각 요소들을 대상으로 콜백함수를 실행한다.
    // 콜백함수로는 변수 answer에 각각 요소 c를 삼항연산자를 조건을 통해 더하기 할당을 해준다.
    // 반복 실행되는 요소 c가 소문자라면 c를 대문자로 변경 c가 대문자라면 소문자로 변경하면 된다.

    2. function solution(my_string) {
    return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('')
    }

    // 위와 비슷한 방법이며 spilt 메소드와 map 메소드를 활용한 방법.
*/