//28번 문제 풀이 공배수
function solution(number, n, m) {
    let answer = 0;
    answer += number % n === 0 && number % m === 0 ? 1 : 0
    return answer;
}

console.log(solution(60, 2, 3));
console.log(solution(55, 10, 5));

/*
    다른 풀이
    function solution(number, n, m) {
    return +!(number % n || number % m);
    }
    // !부정 연산자와 + 단항 더하기 연산자 그리고 || 논리 연산자를 활용한 풀이
    // ()안의 number % n || number % m을 먼저 살펴 보자면
    // number을 n과 m으로 나눈 나머지 값을 구하고 있는데
    // 첫 번째 매개변수 60, 2, 3을 활용해 보면 60 % 2 === 0 , 60 % 3 === 0을 구할 수 있고
    // 두 번째 매개변수 55, 10, 5을 활용해 보면 55 % 10 !== 0, 55 % 5 === 0을 구할 수 있다
    // 첫 번째 결과 값에서는 60 % 2 === 0 은 boolean으로서 true 60 % 3 === 0 또한 true이다.
    // 그러나 60 % 2와 60 % 3의 결과 값이 0이기 떄문에 논리 연산자를 활용했을때 숫자 0의 boolean 값은 false이다.
    // false || false의 값은 false이고 +!(false)에서 부정 연산자에의해 true값으로 변환되고 
    // 단항 더하기 연산자 +true에의해서 피연산자를 숫자로 변환하며 그 값은 1이 된다.
    // 마찬가지로 두 번째 매개변수를 풀이하면 55 % 10 !== 0 55 % 5 === 0 이므로 true를 반환
    // +!(true)는 +false를 숫자로 치환하면 0이 됩니다.
*/