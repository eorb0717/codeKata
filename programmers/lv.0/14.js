// 14번 풀이 특정 문자 제거하기
function solution(my_string, letter) {
    let answer = '';
    answer += my_string.split("").filter((splitItem) => {
        return splitItem !== letter
    }).join("");
    return answer;
}

console.log(solution("abcdef", "f"));
console.log(solution("BCBdbe", "B"));

// let str = "abcdef";
// let splitStr = str.split("").filter((split) => {
//     return split !== "f"
// })
// let wholeStr = splitStr.join("");

// console.log(typeof wholeStr);

/*
    다른 풀이
    1. function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
    }
    // 문자열 메소드인 split과 배열 메소드인 join을 이용한 풀이
    // my_string문자를 split메소드를 사용하여 문자열"f" 기준으로 나눠주고
    // 그렇게 생긴 배열 ["a", "b", "c", "d", "e"]를 join메소드를 사용하여 ("") 빈문자열 기준으로 하나의 문자열로 만들어준다.

    2.function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
    }

    // 문자열 메소드인 replaceAll을 사용한 풀이 방식이다
    //  replaceAll()안에는 두가지 매개변수가 들어가는데 첫 번째는 변경할 문자열 두 번째는 변경될 문자열이다.
    // 따라서 이 문제에서는 my_string인 "abcdef"에서 letter인 문자열 "f"를 "" 빈문자열로 변경해준 것이다.
    // 이와 비슷한 메소드인 replace를 사용할 때는 주의해야한다. replace()의 첫 번째 매개변수는 정규식이 들어오고 두 번째 매개변수는 변경될 문자열을 넣어준다.
    // 두 메소드의 차이점은 replace는 정규식으로 찾게된 첫 번째 문자열만 변경해주는 것이고 replaceAll은 찾게되는 모든 문자열을 변경해주는 방식이다.

    3. function solution(my_string, letter) {
    let str = "";
    const arr = my_string.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== letter) str += arr[i];
    }
    return str;
    }
    // 문자열 메소드인 split과 for문을 이용한 풀이
    // str 변수는 빈 문자열을 할당하고 arr은 my_string을 빈 문자열 기준으로 나누어준 배열을 할당해준다 (["a", "b", "c", "d", "e", "f"])
    // for문을 사용한 연산 방식은 i가 0부터 반복을 시작하여 배열 arr의 길이인 6까지 반복하며 반복이 끝날때마다 i를 증가 시켜주는 방식이다.
    // for의 콜백 함수로는 if문을 사용했는데 if의 조건은 배열 arr의 원소가 문자열 letter "f"와 일치하지 않다면 변수 str에 그 원소를 할당하도록 해주었다.
    // 따라서 arr[0], arr[1], arr[2]와 같은 방식으로 연산해주고 마지막인 arr[5]는 "f"이므로 
    // "f"를 제외한 "abcde"만 str에 할당되어 결과값을 얻을 수 있다.
*/ 