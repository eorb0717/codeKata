// 32번 풀이 이어 붙인 수
function solution(num_list) {
    let answer = 0;
    let evenNum = [];
    let oddNum = [];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenNum.push(num_list[i]);
        } else {
            oddNum.push(num_list[i]);
        }
    }
    answer += Number(evenNum.join('')) + Number(oddNum.join(''));
    return answer;
}



console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581

/*
    다른 풀이
    1. function solution(num_list) {
    const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
        if (num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
        return { odds, evens }
    }, { odds: [], evens: [] })
    return Number(odds.join('')) + Number(evens.join(''))
    }

    // 배열 메소드 reduce를 활용한 풀이법
    // reduce() 메소드는 두개의 매개변수를 갖는데 첫 번째는 실행을 완료한 값 두 번쨰는 초기 값을 갖는다
    // 이 풀이법에서는 첫 번째 매개변수로 콜백함수를 두 번째 매개변수로는 초기 객체를 할당했는데 변수 odd와 even에 빈배열을 할당 해주었다.
    // 콜백함수에서는 조건문을 활용해 num_list의 각각 요소 num을 홀수 짝수로 나누어 각각 odds와 evens 배열에 push 해준다.
    // 콜백함수를 통해서 얻은 배열 odds와 evens를 join메소드로 문자로 변환후 Number()를 활용해 숫자 데이터로 변환한다.

*/