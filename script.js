const light = document.getElementById(`light`);
const dark = document.getElementById(`dark`);
const body = document.querySelector(`body`);
const darkmode = document.querySelector(`darkmode`);
const button = document.querySelectorAll(`button`);

const zero = document.querySelector(`.zero`);
const one = document.querySelector(`.one`);
const two = document.querySelector(`.two`);
const three = document.querySelector(`.three`);
const four = document.querySelector(`.four`);
const five = document.querySelector(`.five`);
const six = document.querySelector(`.six`);
const seven = document.querySelector(`.seven`);
const eight = document.querySelector(`.eight`);
const nine = document.querySelector(`.nine`);

const dot = document.querySelector(`.dot`);
const del = document.querySelector(`.del`);
const ans = document.querySelector(`.ans`);
const ans1 = document.querySelector(`.ans1`);
const clear = document.querySelector(`.clear`);
const neg = document.querySelector(`.neg`);
const div = document.querySelector(`.div`);
const multi = document.querySelector(`.multi`);
const minus = document.querySelector(`.minus`);
const plus = document.querySelector(`.plus`);
const equal = document.querySelector(`.equal`);

let sign;

const digitclicked = function (digit) {
  digit.addEventListener(`click`, function () {
    const value = digit.textContent;
    ans.textContent += value;
  });
};

const action = function (actions) {
  actions.addEventListener(`click`, function () {
    const action = actions.textContent;
    ans.textContent += action;
    sign = action;
  });
};

digitclicked(dot);
digitclicked(zero);
digitclicked(one);
digitclicked(two);
digitclicked(three);
digitclicked(four);
digitclicked(five);
digitclicked(six);
digitclicked(seven);
digitclicked(eight);
digitclicked(nine);

action(plus);
action(minus);
action(div);
action(multi);

equal.addEventListener(`click`, function () {
  if (ans.textContent.length > 0) {
    const splittedValues = ans.textContent.split(sign);
    let answer;
    if (sign === `+`) {
      answer = Number(splittedValues[0]) + Number(splittedValues[1]);
    } else if (sign === `-`) {
      answer = Number(splittedValues[0]) - Number(splittedValues[1]);
    } else if (sign === `*`) {
      answer = Number(splittedValues[0]) * Number(splittedValues[1]);
    } else if (sign === `/`) {
      answer = Number(splittedValues[0]) / Number(splittedValues[1]);
    }
    ans1.textContent = ans.textContent;
    ans.textContent = answer;
  }
});

del.addEventListener(`click`, function () {
  ans.textContent = ans.textContent.slice(0, -1);
});
clear.addEventListener(`click`, function () {
  ans.textContent = ans1.textContent = ``;
});
neg.addEventListener(`click`, function () {
  ans.textContent += `-`;
});

light.addEventListener(`click`, function () {
  body.classList.remove(`darkmode`);
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove(`darkmode`);
  }
});
dark.addEventListener(`click`, function () {
  body.classList.add(`darkmode`);
  for (let i = 0; i < button.length; i++) {
    button[i].classList.add(`darkmode`);
  }
});
