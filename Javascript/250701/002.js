const nums = [1, 2, 3, 4, 5];
// 3이라면 찍지말기
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) continue; // 3이라면 break처럼 멈추지말고 i++ 증감해줘
    console.log(nums[i]);
}

let result = [];
// for문을 이용해서, nums의 배열요소를 모두 result로 넣을건데, 홀수번째만 넣기
// result = [1, 3, 5]
for (i = 0; i < nums.length; i++) {
    if (i % 2) continue; //홀수번째만 넣기로해서 i로 비교함
    result.push(nums[i]);

    console.log(result);
}
