let inpBase = document.getElementById("inp-base-px");
let inpPX = document.getElementById("inp-px");
let inpEM = document.getElementById("inp-em");

let pxToEm = () => {
  let inpBaseValue = inpBase.value;
  let pxValue = inpPX.value;
  if (pxValue.length != 0) {
    inpEM.value = pxValue / inpBaseValue;
  } else {
    inpEM.value = "";
  }
};

let emToPx = () => {
  let inpBaseValue = inpBase.value;
  let emValue = inpEM.value;
  if (emValue.length != 0) {
    inpPX.value = emValue * inpBaseValue;
  } else {
    inpPX.value = "";
  }
};

let calcEmPx = () => {
  if (inpBase.value.length != 0) {
    emToPx();
  } else {
    inpPX.value = "";
    inpEM.value = "";
  }
};

inpPX.oninput = pxToEm;
inpEM.oninput = emToPx;
inpBase.oninput = calcEmPx;
