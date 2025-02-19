import schools from "./schools.mjs";
import { getSchoolCode, setSchoolCode } from "./db.mjs";
import { getDateStr, getDate } from "./utils.mjs";
import { getMealInfo } from "./api.mjs";
import { parseDateStr } from "./utils.mjs";

const dateInput = document.querySelector("#select-date");
dateInput.value = getDateStr();

document.querySelector("#select-date").onchange = function () {
  const dayChosen = parseDateStr(dateInput.value);

  getMealInfo(schoolCode, dayChosen);
};

let schoolCode = getSchoolCode();
console.log(schoolCode)
while (!schoolCode) {
  const input = prompt(
    '학교 이름을 입력하세요. ("서울"은 빼고 쓰세요.  ex.답십리초등학교, 신길중학교, 신도림고등학교)'
  );
  schoolCode = schools[input];
  if (schoolCode) {
    setSchoolCode(schoolCode);
  }
}

getMealInfo(schoolCode, getDate());
