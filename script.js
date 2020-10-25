function getDayOfWeekJan1(year) {
    const dw1Jan = [5, 7, 1, 2, 3, 5, 6, 7, 1, 3, 4,
        5, 6, 1, 2, 3, 4, 6, 7, 1, 2, 4, 5, 6, 7, 2, 3, 4];
    return dw1Jan[year % 28];
}

function getDayOfWeekName(dayOfWeek1To7, lang) {
    let name = new Array();
    if(lang === 'en') {
        name = ["Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"];
    } else if (lang === 'uk') {
        name = ["понеділок", "вівторок", "середа",
        "четвер", "п'ятниця", "субота", "неділя"];
    } else if (lang === 'ru') {
        name = ["понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота", "воскреснье"];
    }
    return name[dayOfWeek1To7-1];
}

function isYearLeap(year) {
    if (year % 4 !== 0) {
        return false;
    } else {
        return (year % 100 !== 0) ? true : year % 400 === 0;
    }
}

function isInputCorrect(input) {
    return input.match(/^(19[1-9]\d|190[1-9]|20\d\d|2100)$/) !== null;
}

function setOutput(input) {
    if (isInputCorrect(input)) {
        let year = Number.parseInt(input);
        const dw1Jan = getDayOfWeekJan1(year);
        const isLeap = isYearLeap(year);
        let result = [];
        for (let i = 1901; i <= 2100; i++) {
            if (isYearLeap(i) === isLeap && getDayOfWeekJan1(i) === dw1Jan) {
                result.push(i);
            }
        }     
        result = "You have enterend the year " + year + ". It is a " + 
        (isLeap ? "" : "non-") + "leap year starting with " +
        getDayOfWeekName(dw1Jan, 'en') + ". Years with the same calendar: " + 
        result.join(", ") + ".";
        document.getElementById("yearList").innerHTML = result;
    } else {
        document.getElementById("yearList").innerHTML = "Wrong input!";
    }
}

function setOutputUk(input) {
    if (isInputCorrect(input)) {
        let year = Number.parseInt(input);
        const dw1Jan = getDayOfWeekJan1(year);
        const isLeap = isYearLeap(year);
        let result = [];
        for (let i = 1901; i <= 2100; i++) {
            if (isYearLeap(i) === isLeap && getDayOfWeekJan1(i) === dw1Jan) {
                result.push(i);
            }
        }     
        result = "Ви ввели рік " + year + ". Це " + 
        (isLeap ? "" : "не") + "високосний рік, першим днем якого є " +
        getDayOfWeekName(dw1Jan, 'uk') + ". Роки із таким самим календарем: " + 
        result.join(", ") + ".";
        document.getElementById("yearList").innerHTML = result;
    } else {
        document.getElementById("yearList").innerHTML = "Хибне введення!";
    }
}

function setOutputRu(input) {
    if (isInputCorrect(input)) {
        let year = Number.parseInt(input);
        const dw1Jan = getDayOfWeekJan1(year);
        const isLeap = isYearLeap(year);
        let result = [];
        for (let i = 1901; i <= 2100; i++) {
            if (isYearLeap(i) === isLeap && getDayOfWeekJan1(i) === dw1Jan) {
                result.push(i);
            }
        }     
        result = "Вы ввели год " + year + ". Это " + 
        (isLeap ? "" : "не") + "высокосний год, первым днём которого является " +
        getDayOfWeekName(dw1Jan, 'ru') + ". Годы с таким же календарём: " + 
        result.join(", ") + ".";
        document.getElementById("yearList").innerHTML = result;
    } else {
        document.getElementById("yearList").innerHTML = "Ошибка ввода!";
    }
}

//document.getElementById("yearInput").value = new Date().getFullYear();
function buttonState() {
    let input = document.getElementById('yearInput').value;
    let isCorrect = isInputCorrect(input);
    document.getElementById("submitButton").disabled = !isCorrect;
    document.getElementById("yearInput").style["border-color"] = (isCorrect) ? "unset" : "red"; 
}

function changeLang(lang){
    let langLink = document.createElement("a");
    langLink.href = "index" + (lang !=='en' ? "_" + lang : "") + ".html";
    langLink.click();
}
