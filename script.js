let unliXarf = prompt('Xohlagan matiningizni kiriting', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolorem ex, labore vel soluta obcaecati!')
let str = unliXarf.split('')
let son = 0
let unli = ["a", "u", "e", "o", "i"]
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < unli.length; j++) {
        if (unli[j] == str[i]) {
            son++
        }
    }

}
console.log(`siz kiritgan gapda unli sozlarning soni ${son}`);
let son2 = 0
let unli2 = ["a", "u", "e", "o", "i", " ", ",", "!", ".","?" , "(", ")", "-" ]
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < unli2.length; j++) {
        if (unli2[j] == str[i]) {
            son2++
        }
    }
    total = unliXarf.length - son2
}
console.log(`siz kiritgan gapda undosh sozlarning soni${total}`); 