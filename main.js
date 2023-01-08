const scoreBoard = {
  _home: 0,
  _away: 0,
  range: [0, 99],
  set home(val) {
    this._home = val;
    document.querySelector('#team1').textContent = this._home;
  },
  set away(val) {
    this._away = val;
    document.querySelector('#team2').textContent = this._away;
  },
  checkRangeAndUpdate(value, operator, step) {
    
    const [min, max] = this.range;

    const getter = `_${value}`;
    if(operator === '+' && (this[getter] + step) - 1 < max) {

      this[value] = this[getter] + step;
    }
    if(operator === '-' && (this[getter] - step) + 1 > min) {
 
     this[value] = this[getter] - step;
    }
  },
  homeplus:   ['home', '+', 1],
  homeminus:  ['home', '-', 1],
  awayplus:   ['away', '+', 1],
  awayminus:  ['away', '-', 1],
  
}

function init() {
  const container = document.querySelector('.scorecontainer');
  container.addEventListener('click', function(e) {

    scoreBoard.checkRangeAndUpdate.apply(scoreBoard, scoreBoard[e.target.id]);
  });
}

init();
