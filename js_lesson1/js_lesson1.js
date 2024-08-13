/*// .push()
let array = [1, 2, 3, 4, 5];
array.push(45, 97, "hello");
console.log(array);
console.log(array.length);

let war = array.push("Jo");
console.log(war);
console.log(array);

// .pop()
array.pop();
console.log(array);

//------------------------------------------

// for

// a) iterating over array
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// b) a certain number of times
 for (let i = 1; i < arr.length; i++) {
     console.log("Итерация" + arr[i]);
 }

 // c) сountdown
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//------------------------------------------

// for ..... of
let rows = [1, 2, 3, 4, 5];
let result = "";
let character = "#"

for (const row of rows){
    result = result + "\n" + row;
    console.log(result);
}

rows = [];
for (let b = 0; b < 10; b++){
    rows.push(character.repeat(b))
}
console.log(rows);

//-----------second half part-----------

// TODO: use a different type of loop

/!*for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));*!/


if (true) {
    console.log("Condition is true");
} else if (5 < 10) {
    console.log("5 is less than 10");
} else {
    console.log("This is the else block");
}

//---------------------------------------------


while (done !== count) {
    done++;
    rows.push(padRow(done, count));
    if (done !== count) {
        continueLoop !== false;
    }
}

rows.push(padRow(done, count));

//--------------------------

let done = 0;

while (rows.length < count) {
    done++;
    rows.push(padRow(rows.length + 1, count));
}*/

const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
