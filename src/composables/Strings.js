const Strings = {
    header: [
        ['Інструмент перевірки', 'повторень календарів'],
        ['Инструмент проверки', 'повторений календарей'],
        ['Calendar Duplicate', 'Check Tool']
    ],

    greeting: [
        'Вас вітає Інструмент перевірки повторень календарів. Тут Ви можете перевірити, календарі за які роки підходять для вибраного Вами року (від 1901 до 2100). Щоб здійснити перевірку, введіть номер року та натисніть на кнопку "Підтвердити" або "Enter".',
        'Вас приветствует Инструмент проверки повторений календарей. Здесь Вы можете проверить, календари за какие годы подходят для выбранного Вами года (от 1901 до 2100). Чтобы осуществить проверку, введите номер года и нажмите на кнопку "Подтвердить" или "Enter".',
        'Welcome to Calendar Duplicate Check Tool! It allows you to check calendar duplicates for a paticular year (between 1901 and 2100), i.e. calendars for which else years you can use in this year. To launch a check, please enter a year number and hit the button "Submit" or "Enter".'

    ],

    confirm: ['Підтвердити', 'Подтвердить', 'Confirm'],

    daysOfWeek: [
        ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"],
        ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскреснье"],
        ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    ],

    ans: [
        ['Ви ввели номер року', 'Це', 'не', 'високосний рік, першим днем якого є', 'Роки із таким самим календарем'],
        ['Вы ввели номер года', 'Это', 'не', 'высокосний год, первым днём которого является', 'Годы с таким же календарём'],
        ['You have enterend the year number', 'It is a', 'non-', 'leap year starting with', 'Years with the same calendar']
    ],

    error: [
        'Хибне введення! Номер року повинен бути числом у межах від 1901 до 2100 (включно).',
        'Неверный ввод! Номер года должен быть числом в пределах от 1901 до 2100 (включительно).',
        'Error: wrong input! You can enter and check year numbers only within the range between 1901 and 2100 (inclusive).'
    ]
}

export default Strings;