const functions = {
    getLang() {
        let lang = localStorage.getItem('calendarDuplicateCheckToolLang');
        if(!lang && navigator.language) lang = navigator.language.slice(0, 2);
        lang = { uk: 0, ru: 1, en: 2, ['0']: 0, ['1']: 1, ['2']: 2 }[lang];
        return lang === 0 || lang === 1 || lang === 2 ? lang : 2;
    },

    setLang: lang => localStorage.setItem('calendarDuplicateCheckToolLang', lang),

    checkInput(input) {
        input = Number(input);
        return input >= 1901 && input <= 2100;
    },

    getDayOfWeekJan1(year) {
        const dw1Jan = [4, 6, 0, 1, 2, 4, 5, 6, 0, 2, 3, 4,
            5, 0, 1, 2, 3, 5, 6, 0, 1, 3, 4, 5, 6, 1, 2, 3];
        return dw1Jan[year % 28];
    },

    getIsYearLeap(year) {
        if (year % 4 !== 0) return false;
        else return (year % 100 !== 0) ? true : year % 400 === 0;
    },

    getYearList(year) {
        const isYearLeap = functions.getIsYearLeap(year);
        const dwJan1 = functions.getDayOfWeekJan1(year);
        for (var ans = [], i = 1901; i <= 2100; i++) {
            if(isYearLeap === functions.getIsYearLeap(i) && dwJan1 === functions.getDayOfWeekJan1(i)) {
                ans.push(i);
            }
        }
        return ans.join(', ');
    }
}

export default functions;