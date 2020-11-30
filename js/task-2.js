const total = 100;
const ordered = 107;

if (ordered > total) {
    console.log('На складе недостаточно товаров!');
}
else {
    console.log('Заказ оформлен, с вами свяжется менеджер');
}

                        //Another variant

// const message = ordered > total ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
// console.log(message);