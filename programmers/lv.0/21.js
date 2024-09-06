// 21번 풀이 옷가게 할인 받기
function solution(price) {
    if (price >= 100000 && price < 300000) {
        return Math.floor(price - (price * 0.05));
    } else if ( price >= 300000 && price < 500000) {
        return Math.floor(price - (price * 0.1));
    } else if (price >= 500000) {
        return Math.floor(price - (price * 0.2));
    } else {
        return price;
    }
}

console.log(solution(150000));
console.log(solution(580000));

/*
    다른 풀이
    1. const discounts = [
        [500000, 20],
        [300000, 10],
        [100000,  5],
    ]

    const solution = (price) => {
        for (const discount of discounts)
            if (price >= discount[0])
                return Math.floor(price - price * discount[1] / 100)
        return price
    }
    // discounts 배열을 생성하여 for of 반복문을 활용한 풀이
    // 
*/