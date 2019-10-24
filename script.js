const createGrid = (numberSquaresPerSide) => {
  const gridElt = document.getElementById('grid');
  const colorElt = document.getElementById('color-picker');
  gridElt.innerHTML = '';
  colorElt.value = '#000000';

  if (numberSquaresPerSide > 96) {
    numberSquaresPerSide = 96;
  }
  if (numberSquaresPerSide < 1) {
    numberSquaresPerSide = 1;
  }

  const widthHeight = 960/numberSquaresPerSide;
  for (let i = 0 ; i < numberSquaresPerSide*numberSquaresPerSide ; i++) {
    const divElt = document.createElement('div');
    divElt.classList.add('square');
    divElt.setAttribute('style', `width: ${widthHeight}px;height: ${widthHeight}px`);

    let color = "#000000";
    colorElt.addEventListener('change', (e) => {
      color = e.target.value;
      console.log(color);
    });

    divElt.addEventListener('click', (e) => {
      divElt.classList.toggle('fill');
      if (divElt.classList.contains('fill')) {
        divElt.setAttribute('style', `width: ${widthHeight}px;height: ${widthHeight}px;background:${color}`);
      }
      else {
        divElt.setAttribute('style', `width: ${widthHeight}px;height: ${widthHeight}px`);
      }
    });
  
    gridElt.appendChild(divElt);
  }
};

createGrid(prompt('How many squares per side do you want ?'));

const gridElt = document.getElementById('grid');
const resetElt = document.getElementById('reset');

resetElt.addEventListener('click', (e) => {
  createGrid(prompt('How many squares per side do you want ?'));
});
