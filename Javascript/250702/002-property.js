// computed property
const blood = "bloodType";
const user = {
    name: "Ghost",
    [blood]: "B", // []<-괄호씌워주면 변수로 변함
    [3 + 5]: 8,
    ["best" + "Friend"]: "Irangi",
};

console.log(blood, user.bloodType);
console.log(user[8]);
console.log(user["8"]);
console.log(user.bestFriend);
