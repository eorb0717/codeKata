// 13번 문제 배열 원소의 길이
function solution(strlist) {
    let answer = [];
    let j = strlist.length;
    for (let i = 0; i <= j-1; i++) {
        answer.push(strlist[i].length)
    }
    return answer;
}

// console.log(solution(["We", "are", "the", "world!"]));
// console.log(solution(["I", "Love", "Programmers."]));

/*
    다른 풀이
    1. function solution(strlist) {
    return strlist.map((el) => el.length)
    }
    // 배열의 map메소드를 이용한 문제 풀이 방법
    // 기존의 배열에서 새로운 배열을 생성하는 map메소드를 이용하여 strlist배열의 원소(문자열) 
    // 각각의 길이를 원소로 하는 새로운 배열을 생성했다.

    2. function solution(strlist) {
    var answer = [];
    for(let i=0; i < strlist.length; i++) {
        let strCnt = 0;
        const strArr = strlist[i].split('')
        for(let j = 0; j < strArr.length; j++) {
            strCnt++
        }
        answer.push(strCnt)
    }
    return answer;
    }
    // 이중 for문을 사용한 풀이 방법
    // 가장 큰 for문은 strlist배열의 길이보다 적게 반복하여 answer배열에 문자열의 길이들을 추가 해주는 연산이다.
    // strCnt변수를 선언해주어 문자열의 길이를 할당할 준비를 한다.
    // strArr를 선언하여 strlist의 원소(문자열) 각각의 길이를 할당할 준비를 하고 split메소드를 사용하여 문자열의 길이를 구해준다.
    // 두 번째 for문은 strArr의 길이만큼 반복하여 strCnt를 증가시켜 결론적으로 문자열의 길이를 구하여 준다.
    // push메소드를 사용하여 answer배열에 문자열 길이들을 각각 추가해준다.

*/


