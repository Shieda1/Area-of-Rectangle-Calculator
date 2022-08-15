// https://calculator.swiftutors.com/area-of-rectangle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaoftheRectangleRadio = document.getElementById('areaoftheRectangleRadio');
const lengthoftheRectangleRadio = document.getElementById('lengthoftheRectangleRadio');
const widthoftheRectangleRadio = document.getElementById('widthoftheRectangleRadio');

let areaoftheRectangle;
let lengthoftheRectangle = v1;
let widthoftheRectangle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

areaoftheRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of the Rectangle';
  variable2.textContent = 'Width of the Rectangle';
  lengthoftheRectangle = v1;
  widthoftheRectangle = v2;
  result.textContent = '';
});

lengthoftheRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of the Rectangle';
  variable2.textContent = 'Width of the Rectangle';
  areaoftheRectangle = v1;
  widthoftheRectangle = v2;
  result.textContent = '';
});

widthoftheRectangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of the Rectangle';
  variable2.textContent = 'Length of the Rectangle';
  areaoftheRectangle = v1;
  lengthoftheRectangle = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaoftheRectangleRadio.checked)
    result.textContent = `Area of the Rectangle = ${computeAreaoftheRectangle().toFixed(2)}`;

  else if(lengthoftheRectangleRadio.checked)
    result.textContent = `Length of the Rectangle = ${computeLengthoftheRectangle().toFixed(2)}`;

  else if(widthoftheRectangleRadio.checked)
    result.textContent = `Width of the Rectangle = ${computeWidthoftheRectangle().toFixed(2)}`;
})

// calculation

function computeAreaoftheRectangle() {
  return Number(lengthoftheRectangle.value) * Number(widthoftheRectangle.value);
}

function computeLengthoftheRectangle() {
  return Number(areaoftheRectangle.value) / Number(widthoftheRectangle.value);
}

function computeWidthoftheRectangle() {
  return Number(areaoftheRectangle.value) / Number(lengthoftheRectangle.value);
}