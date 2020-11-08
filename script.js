function getDayOfWeekJan1(year) {
    const dw1Jan = [5, 7, 1, 2, 3, 5, 6, 7, 1, 3, 4,
        5, 6, 1, 2, 3, 4, 6, 7, 1, 2, 4, 5, 6, 7, 2, 3, 4];
    return dw1Jan[year % 28];
}

function isYearLeap(year) {
    if (year % 4 !== 0) {
        return false;
    } else {
        return (year % 100 !== 0) ? true : year % 400 === 0;
    }
}

function getDayOfWeekName(dayOfWeek1To7, lang) {
    let name = new Array();
    if(lang === 'en') {
        name = ["Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"];
    } else if (lang === 'uk') {
        name = ["понеділок", "вівторок", "середа",
        "четвер", "п'ятниця", "субота", "неділя"];
    } else {
        name = ["понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота", "воскреснье"];
    }
    return name[dayOfWeek1To7-1];
}

const elid = (id) => {
	return document.getElementById(id);
}

function isInputCorrect(input) {
    return !!input.match(/^(19[1-9]\d|190[1-9]|20\d\d|2100)$/);
}

function setResult(input, lang) {
    if (isInputCorrect(input)) {
        let year = 1 * input;
        const dw1Jan = getDayOfWeekJan1(year);
        const isLeap = isYearLeap(year);
        let arrYears = [];
        for (let i = 1901; i <= 2100; i++) {
            if (isYearLeap(i) === isLeap && getDayOfWeekJan1(i) === dw1Jan) {
                arrYears.push(i);
            }
        }
		const resultList = arrYears.join(", ");
		elid("yNumSpan").innerHTML = input;
		elid("nonLeapSpan").style.display = isLeap ? "none" : "";
		elid("dwSpan").innerHTML = getDayOfWeekName(dw1Jan, lang);
		elid("resultListSpan").innerHTML = resultList;
		elid("yearP").style.display = "block";
		setTimeout(()=>{elid("yearP").style.fontSize="100%";}, 4);
    } else {
		elid("wrongInputP").style.display = "block";
	}
}

function clearResult() {
	elid("yearP").style.fontSize="0%";
	elid('yearP').style.display = 'none';
	elid("wrongInputP").style.display = "none";
}

function buttonState() {
    const isCorrect = isInputCorrect(elid('yearInput').value);
	elid("submitButton").classList.toggle("buttonDimmed", !isCorrect);
	elid("submitButton").classList.toggle("buttonSubmittable", isCorrect);
}

function isEnterPressed(keyUpEvent) {
	if (keyUpEvent.keyCode === 13) {
		elid("submitButton").click();
	}
}

function clickSubmitButton(lang) {
	setResult(elid('yearInput').value, lang);
	elid('yearInput').value = '';
	elid('yearInput').blur();
}

function changeLang(lang){
    let langLink = document.createElement("a");
	elid("langSelect").value = elid("langSelect").getAttribute("data-default-value");
    langLink.href = "index" + (lang !=='en' ? "_" + lang : "") + ".html";
    langLink.click();
}