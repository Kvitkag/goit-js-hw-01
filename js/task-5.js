const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let country = prompt('Укажите страну');
let deliveryPrice;
let message;

switch (country.toLowerCase()) {
    case china: {
        country = 'Китай';
        deliveryPrice = priceChina;
        break;
    }
    case chile: {
        country = 'Чили';
        deliveryPrice = priceChile;
        break;
    }
    case australia: {
        country = 'Австралию';
        deliveryPrice = priceAustralia;
        break;
    }
    case india: {
        country = 'Индию';
        deliveryPrice = priceIndia;
        break;
    }
    case jamaica: {
        country = 'Ямайку';
        deliveryPrice = priceJamaica;
        break;
    }
    default: {
        alert('В вашей стране доставка не доступна');
        break;
    }
}
if (deliveryPrice !== undefined) {
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    alert(message);
}