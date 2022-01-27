const sumOfNumbers = async function (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(a + b); }, 2000)
    });
};

const productOfNumbers = async function (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(a * b); }, 2000)
    });
}

async function getResult() {
    let num1 = 5;
    let num2 = 10;
    let sum = await sumOfNumbers(num1, num2);
    console.log(`Sum of the numbers is ${sum}`);

    let product = await productOfNumbers(num1, num2);
    console.log(`Products of the number is ${product}`)
}

getResult();