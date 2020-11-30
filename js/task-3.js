const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Введите пароль');

switch (message) {
    case null: {
        message = 'Отменено пользователем!';
        break;
    }
        
    case ADMIN_PASSWORD: {
        message = 'Добро пожаловать!';
        break;
    }
        
    default: {
        message = 'Доступ запрещен, неверный пароль!';
    }
}

                        //Another variant

// if (message === null) {
//     message = 'Отменено пользователем!';
// }
// else if (message === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// }
// else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

alert(message);