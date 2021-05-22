<template>
  <div class="selectDiv">
		<select v-model="lang" @change="setLang(lang)">
      <option value="0">Українська</option>
      <option value="1">Русский</option>
      <option value="2">English</option>
		</select>
	</div>
  <h1>{{ s.header[lang][0] }} <br> {{ s.header[lang][1] }}</h1>
  <p>{{ s.greeting[lang] }}</p>
  <div class="buttonAndInput">
		<input
      type = "number" min="1901" max="2100" v-model="input"
      @keydown.enter="hitEnter" @focus="onInputFocus">
		<button
      type="button" :class="buttonStateClass" @click="clickButton">{{ s.confirm[lang] }}</button>
	</div>
  <p class="withTransition" ref="result" v-show="showResult">
		{{ s.ans[lang][0] }} <span class="italic">{{ year }}</span>. {{ s.ans[lang][1] }}
    {{ isYearLeap ? '' : s.ans[lang][2] }}{{ s.ans[lang][3] }}
    {{ s.daysOfWeek[lang][dayOfWeek] }}. {{ s.ans[lang][4] }}: {{ yearList }}.
	</p>
	<p class="wrongInputP" v-show="showError">{{ s.error[lang] }}</p>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';
import Strings from './composables/Strings.js';
import fn from './composables/Functions.js';

export default {
  name: 'App',
  
  setup() {
    const s = Strings;
    const { getLang, setLang, checkInput, getDayOfWeekJan1, getIsYearLeap, getYearList } = fn;

    const lang = ref(getLang()), input = ref(''), dayOfWeek = ref(''), isYearLeap = ref(true),
    year = ref(''), yearList = ref(''), isInputCorrect = ref(false), result = ref(null),
    showResult = ref(false), showError = ref(false);

    const buttonStateClass = computed(() => isInputCorrect.value ? 'buttonOk' : 'buttonDimmed');

    watchEffect(() => isInputCorrect.value = checkInput(input.value));
    watchEffect(() => {
      if(!result.value) return;else if(!showResult.value) result.value.classList.add('zeroFontSize');
      else setTimeout(() => result.value.classList.remove('zeroFontSize'), 0);
    });

    const hitEnter = e => { e.target.blur(), clickButton() };
    const clickButton = () => {
      year.value = input.value;
      dayOfWeek.value = getDayOfWeekJan1(input.value);
      yearList.value = getYearList(input.value);
      isYearLeap.value = getIsYearLeap(input.value);
      showResult.value = isInputCorrect.value;
      showError.value = !isInputCorrect.value;
      input.value = '';
    }

    const onInputFocus = () => {
      showResult.value = false, showError.value = false, input.value = '';
    }

    return { s, lang, input, year, dayOfWeek, yearList, isYearLeap, isInputCorrect, buttonStateClass,
    clickButton, hitEnter, result, showResult, showError, onInputFocus, setLang }
  }
}

</script>
