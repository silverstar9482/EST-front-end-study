const animals = ["puppy", "cat", "parret"];
let result = animals.filter((animal, index) => index === 2);
result = animals.map((animal, index) => index); // map은 새로운 배열을 만들어주는 메서드
//animal에서 2번째 값을 가지고와라는 뜻임
console.log(result);

// animals의 마지막요소로 Rabbit을 추가하세요 (원본배열을 변경)
animals.push("Rabbit"); // push는 원본 데이터를 마지막 배열에 추가하는 메서드
console.log(animals);

// 1~2번쨰에 있는 요소만 가져오기
const getAnimals = animals.slice(1, 3); //slice 몇번째에있는 값을 추출하여 반환하는 메서드
console.log(getAnimals);

//const animals = ["puppy", "cat", "parret","Rabbit"];
const getAnimals2 = animals.splice(1, 2, "Elephant");
//splice - 배열을 추가하는 메서드. 원본을 바꿔서 주의해야됌.
console.log(getAnimals2);
console.log("changed Animals : ", animals);
// ["puppy", "Elephant","Rabbit"]
animals.splice(1, 0, "cat");
console.log(animals);

// reverse() 배열요소를 거꾸로 변경(순번) -> 원본을 변경
const arr = ["Daniel", "Don", "donald", "Micheal", "Juliet"];
arr.reverse()
console.log(arr)