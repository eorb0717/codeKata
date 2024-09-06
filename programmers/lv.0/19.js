// 19번 풀이 짝수는 싫어요
function solution(n) {
    let answer = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            answer.push(i)
        }
    }
    return answer.sort(function (a, b) {
        return a - b;
    });
}

console.log(solution(10));
console.log(solution(15));

/*
    다른 풀이
    1. function solution(n) {
        var answer = [];

        for (let i = 1; i<=n; i+=2) answer.push(i)

        return answer;
    }
    
    // for 반복문을 활용한 풀이
    // i를 1로 초기화 하고 반복은 매개변수 n과 같거나 작은 숫자까지 반복하고 
    // 반복이 끝날때마다 i를 2만큼 증가시켜서 홀수들만 반환 할 수 있도록 만든다.
    // 그렇게 반환된 숫자 i를 push 메소드를 활용해 빈 배열 answer에 할당시켜준다.

    2. const solution = (n) => 
        Array
        .from({ length: n }, (_, i) => i + 1)
        .filter(i => i % 2 !== 0)
    
    // Array.from()은 배열을 생성하는 메소드이다.
    // 첫 번째 인자 값은 배열 또는 유사 배열 객체가 들어오고 두 번째 인자 값은 콜백 함수를 넣어준다.
    // 위의 첫 번째 인자 값은 유사 배열 객체로 길이가 n만큼인 배열을 생성하겠다는 뜻이다.
    // 두 번째 콜백 함수는 첫 번째 인자 값으로 아무 값이 아닌 _가 오고 두 번째 값은 index값이 들어온다.
    // 따라서 n이 10일때 길이가 10만큼의 배열이 생성되고 배열의 각 index값을 활용해 1~10까지의 요솔르 갖는 배열을 생성해준다.
    // 그렇게 생성된 배열을 filter 메소드를 사용하여 홀수인 숫자들로만 이루어진 새로운 배열을 생성해준다.

    3. function solution(n) {
        return Array(n).fill(1).map((v,i)=>v+i).filter(v=>v%2===1);
    }

    // Array()는 길이가 n만큼인 배열을 생성해주는데 각가의 요소는 빈 값이다.
    // fill 메소드를 사용하여 모든 요소를 1로 채워준다. ex) [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // 그렇게 생성된 배열을 map 메소드를 사용하여 새로운 배열을 생성해준다.
    // map 메소드의 콜백 함수 풀이는 다음과 같다.
    // 첫 번째 인자 값은 배열의 각각의 요소들을 순회 하기 때문에 요소들이 들어가게 된다.
    // 두 번째 인자 값은 배열의 index 값이 들어가게 된다.
    // 그렇게 생성된 새로운 배열은 [1+0, 1+1, 1+2, 1+3, 1+4,...,1+9]이다.
    // filter 메소드를 활용해 홀수 값을 골라내어 새로운 배열로 생성해준다.
*/