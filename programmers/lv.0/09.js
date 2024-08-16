// 9번 문제 각도기
function solution(angle) {
    if ( 0 < angle && angle < 90) {
        return 1
    } else if ( angle === 90) {
        return 2
    } else if ( 90 < angle && angle < 180) {
        return 3
    } else {
        return 4
    }
}

// console.log(solution(70));
// console.log(solution(91));
// console.log(solution(180));

/*
    다른 풀이
    1. function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
    }
    // 배열의 filter 메서드를 활용한 풀이
    // 배열 안에 각각의 각도 조건에 적합한 숫자들을 넣고 콜백함수를 통해 조건에 부합하는 원소를 재배열한다
    // 그 후, 그 배열의 길이를 구해주면 원하는 결과값을 도출할 수 있다.
    // ex) angle=70일때 70>=0 (o), 70>=90 (x), 70>=91 (x), 70>=180 (x) [0].length ==> 1
    // ex) angle=91일때 91>=0 (o), 91>=90 (o), 91>=91 (o), 91>=180 (x) [0, 90, 91].length ===> 3
    // ex) angle=180일때 180>=0 (o), 180>=90 (o), 180>=91 (o), 180>=180 (o) [0, 90, 91, 180].length ==> 4

    2. function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
    }
    // 삼항 연산자를 활용한 풀이
*/