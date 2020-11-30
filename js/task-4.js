const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let amountDroids = prompt('Какое количество дроидов Вы хотите купить?');

if (amountDroids === null) {
    console.log('Отменено пользователем!');
}
else {
    amountDroids = Number(amountDroids);

    if (isNaN(amountDroids)) {
            console.log('Нужно вводить только цифры!');
    }
    // if (amountDroids === NaN) {                                 // чому не працює? і не дає ніде поставити break?
    //     console.log('Нужно вводить только цифры!');
    // }
    else if (amountDroids === 0) {
        console.log('Ничего не куплено!');
    }
    else {
        totalPrice = amountDroids * pricePerDroid;
        const balance = credits - totalPrice;

        if (totalPrice > credits) {
            console.log('Недостаточно средств на счету!');
        }
        else {
            if (amountDroids === 1) {
                console.log(`Вы купили ${amountDroids} дроида, на счету осталось ${balance} кредитов.`);
            }
            else {
                console.log(`Вы купили ${amountDroids} дроидов, на счету осталось ${balance} кредитов.`);
            }
        }
    }
}
