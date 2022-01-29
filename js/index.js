function zacznij() {
  document.getElementById('zacznij').style.display = 'none'
  alert('Włącz dźwięk!')
  var audio = new Audio('audio/Milionerzy-main.mp3')
  audio.play()
  document.getElementById('logo').style.display = 'flex'
  setInterval(hide_logo, 8000)
  setInterval(show_logo_small, 8000)
  setInterval(show_info, 8000)
  setInterval(show_start, 8000)
}
function show_logo_small() {
  document.getElementById('logo-small').style.display = 'flex'
}
function show_info() {
  document.getElementById('info').style.display = 'flex'
}
function show_start() {
  document.getElementById('start').style.display = 'flex'
}
function hide_logo() {
  document.getElementById('logo').style.display = 'none'
}
function hide() {
  document.getElementById('logo-small').style.opacity = '0'
  document.getElementById('info').style.opacity = '0'
  document.getElementById('start').style.opacity = '0'
  var button2 = document.getElementById('start')
  button2.disabled = true
  document.getElementById('output').style.display = 'flex'

  document.getElementById('start').onclick = function start() {
    var sec = 3
    if (sec == 0) {
      stop()
    }

    var close = setInterval(function () {
      document.getElementById('output').innerHTML = sec
      sec--
      if (sec === -1) {
        clearInterval(close)
      }
    }, 1000)
  }
  wyczyscTablice()
  posortujPytania()
  document.getElementById('glowna').style.display = 'block'
  document.getElementById('glowna').style.opacity = '1'
  document.getElementById('pyt').innerHTML = posortowanePytania[0].question
  document.getElementById('cos').innerHTML = posortowanePytania[0].optionA
  document.getElementById('cos2').innerHTML = posortowanePytania[0].optionB
  document.getElementById('cos3').innerHTML = posortowanePytania[0].optionC
  document.getElementById('cos4').innerHTML = posortowanePytania[0].optionD
  document.getElementById('output').style.fontSize = '4vw'
  setTimeout(() => {
    document.getElementById('output').style.display = 'none'
    document.getElementById('glowna').style.display = 'block'
    document.getElementById('cos').style.display = 'block'
    document.getElementById('cos2').style.display = 'block'
    document.getElementById('cos3').style.display = 'block'
    document.getElementById('cos4').style.display = 'block'
    document.getElementById('pyt').style.display = 'block'
    document.getElementById('wyborOdpowiedzi').style.display = 'block'
  }, 4000)
}

let dobreRadio = 'hejka'
let indexik = 0
var test
let proba = 0
let wynik = 0
let licznik = 0
const questions = [
  {
    question: 'How many days makes a week ?',
    optionA: '10 days',
    optionB: '14 days',
    optionC: '5 days',
    optionD: '7 days',
    correctOption: 'optionD',
  },
  {
    question: 'many days?',
    optionA: '10 days',
    optionB: '14 days',
    optionC: '5 days',
    optionD: '7 days',
    correctOption: 'optionB',
  },
  {
    question: 'How days?',
    optionA: '10 days',
    optionB: '14 days',
    optionC: '5 days',
    optionD: '7 days',
    correctOption: 'optionC',
  },
  {
    question: 'How many days?',
    optionA: '10 days',
    optionB: '1 days',
    optionC: '5 days',
    optionD: '7 days',
    correctOption: 'optionA',
  },
  {
    question: 'How ays?',
    optionA: '10 days',
    optionB: '14 days',
    optionC: '5 days',
    optionD: '2 days',
    correctOption: 'optionD',
  },
]
let posortowanePytania = []
function posortujPytania() {
  while (posortowanePytania.length < 5) {
    var losowe = questions[Math.floor(Math.random() * questions.length)]
    if (!posortowanePytania.includes(losowe)) {
      posortowanePytania.push(losowe)
    }
  }
}
function wyczyscTablice() {
  posortowanePytania.splice(0, posortowanePytania.length)
}
if (indexik === 0) {
  wyczyscTablice()
  posortujPytania()
  document.getElementById('pyt').innerHTML = posortowanePytania[0].question

  document.getElementById('cos').innerHTML = posortowanePytania[0].optionA
  document.getElementById('cos2').innerHTML = posortowanePytania[0].optionB
  document.getElementById('cos3').innerHTML = posortowanePytania[0].optionC
  document.getElementById('cos4').innerHTML = posortowanePytania[0].optionD
}
function wyborQuizu() {
  var radios = document.getElementsByName('wyborQuiz')
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      dobreRadio = radios[i].id
      break
    }
  }
  var cosiek = checkAnswer()
  if (dobreRadio != 'hejka' && cosiek === true) {
    if (document.getElementById('optionA').checked) {
      document.getElementById('cos').style.animation = 'none'
      document.getElementById('cos').style.backgroundColor = 'green'
    } else if (document.getElementById('optionB').checked) {
      document.getElementById('cos2').style.animation = 'none'
      document.getElementById('cos2').style.backgroundColor = 'green'
    } else if (document.getElementById('optionC').checked) {
      document.getElementById('cos3').style.animation = 'none'
      document.getElementById('cos3').style.backgroundColor = 'green'
    } else {
      document.getElementById('cos4').style.animation = 'none'
      document.getElementById('cos4').style.backgroundColor = 'green'
    }
    document.getElementById(dobreRadio).checked = false
    dobreRadio = 'hejka'
    indexik++
    wynik++
    if (wynik === 5) {
      setTimeout(() => {
        document.getElementById('option-modal').style.display = 'block'
        document.getElementById('glowna').style.animationName = 'fadeOut'
        document.getElementById('glowna').style.animationDuration = '1.2s'
        document.getElementById('wygrana').innerHTML = wynik + ' jesteś koksem'
        proba++
        setTimeout(() => {
          document.getElementById('glowna').style.animation = 'none'
          document.getElementById('glowna').style.opacity = '0'

          document.getElementById('option-modal').style.opacity = '1'
          button.disabled = false
        }, 1200)
        document.getElementById('cos').style.backgroundColor = 'transparent'
        document.getElementById('cos2').style.backgroundColor = 'transparent'
        document.getElementById('cos3').style.backgroundColor = 'transparent'
        document.getElementById('cos4').style.backgroundColor = 'transparent'
        document.getElementById('glowna').style.display = 'none'
        document.getElementById(dobreRadio).checked = false
        dobreRadio = 'hejka'
        wynik = 0
      }, 4000)
    }
    setTimeout(() => {
      document.getElementById('pyt').innerHTML =
        posortowanePytania[indexik].question
      document.getElementById('cos').innerHTML =
        posortowanePytania[indexik].optionA
      document.getElementById('cos2').innerHTML =
        posortowanePytania[indexik].optionB
      document.getElementById('cos3').innerHTML =
        posortowanePytania[indexik].optionC
      document.getElementById('cos4').innerHTML =
        posortowanePytania[indexik].optionD
      document.getElementById('cos').style.backgroundColor = 'transparent'
      document.getElementById('cos2').style.backgroundColor = 'transparent'
      document.getElementById('cos3').style.backgroundColor = 'transparent'
      document.getElementById('cos4').style.backgroundColor = 'transparent'
      document.getElementById('cos').style.animation = 'none'
      document.getElementById('cos2').style.animation = 'none'
      document.getElementById('cos3').style.animation = 'none'
      document.getElementById('cos4').style.animation = 'none'
    }, 4000)
  } else if (cosiek === false || dobreRadio != 'hejka') {
    if (document.getElementById('optionA').checked) {
      document.getElementById('cos').style.animation = 'none'
      document.getElementById('cos').style.backgroundColor = 'red'
    } else if (document.getElementById('optionB').checked) {
      document.getElementById('cos2').style.animation = 'none'
      document.getElementById('cos2').style.backgroundColor = 'red'
    } else if (document.getElementById('optionC').checked) {
      document.getElementById('cos3').style.animation = 'none'
      document.getElementById('cos3').style.backgroundColor = 'red'
    } else if (document.getElementById('optionD').checked) {
      document.getElementById('cos4').style.animation = 'none'
      document.getElementById('cos4').style.backgroundColor = 'red'
    }
    if (
      document.getElementById('optionA').id ===
      posortowanePytania[indexik].correctOption
    ) {
      document.getElementById('cos').style.backgroundColor = 'green'
    } else if (
      document.getElementById('optionB').id ===
      posortowanePytania[indexik].correctOption
    ) {
      document.getElementById('cos2').style.backgroundColor = 'green'
    } else if (
      document.getElementById('optionC').id ===
      posortowanePytania[indexik].correctOption
    ) {
      document.getElementById('cos3').style.backgroundColor = 'green'
    } else if (
      document.getElementById('optionD').id ===
      posortowanePytania[indexik].correctOption
    ) {
      document.getElementById('cos4').style.backgroundColor = 'green'
    }
    wyczyscTablice()
    posortujPytania()

    let button = document.querySelector('.ponownie')
    button.disabled = true
    indexik = 0
    setTimeout(() => {
      document.getElementById('option-modal').style.display = 'block'
      document.getElementById('powroty').style.display = 'block'
      document.getElementById('glowna').style.animationName = 'fadeOut'
      document.getElementById('glowna').style.animationDuration = '1.2s'
      document.getElementById('wygrana').innerHTML = wynik
      proba++
      setTimeout(() => {
        document.getElementById('glowna').style.animation = 'none'
        document.getElementById('glowna').style.opacity = '0'

        document.getElementById('option-modal').style.opacity = '1'
        button.disabled = false
      }, 1200)
      document.getElementById('cos').style.backgroundColor = 'transparent'
      document.getElementById('cos2').style.backgroundColor = 'transparent'
      document.getElementById('cos3').style.backgroundColor = 'transparent'
      document.getElementById('cos4').style.backgroundColor = 'transparent'
      document.getElementById('glowna').style.display = 'none'
      document.getElementById(dobreRadio).checked = false
      dobreRadio = 'hejka'
      wynik = 0
    }, 4000)
  } else {
    alert('cos sie zjebalo')
  }
}
function checkedOption() {
  if (document.getElementById('optionA').checked) {
    document.getElementById('cos').style.animationName = 'example'
    document.getElementById('cos').style.animationDuration = '1s'
    document.getElementById('cos').style.animationIterationCount = 'infinite'
    document.getElementById('cos2').style.backgroundColor = 'transparent'
    document.getElementById('cos3').style.backgroundColor = 'transparent'
    document.getElementById('cos4').style.backgroundColor = 'transparent'
    document.getElementById('cos2').style.animation = 'none'
    document.getElementById('cos3').style.animation = 'none'
    document.getElementById('cos4').style.animation = 'none'
  } else if (document.getElementById('optionB').checked) {
    document.getElementById('cos').style.backgroundColor = 'transparent'
    document.getElementById('cos2').style.animationName = 'example'
    document.getElementById('cos2').style.animationDuration = '1s'
    document.getElementById('cos2').style.animationIterationCount = 'infinite'
    document.getElementById('cos3').style.backgroundColor = 'transparent'
    document.getElementById('cos4').style.backgroundColor = 'transparent'
    document.getElementById('cos').style.animation = 'none'
    document.getElementById('cos3').style.animation = 'none'
    document.getElementById('cos4').style.animation = 'none'
  } else if (document.getElementById('optionC').checked) {
    document.getElementById('cos').style.backgroundColor = 'transparent'
    document.getElementById('cos2').style.backgroundColor = 'transparent'
    document.getElementById('cos3').style.animationName = 'example'
    document.getElementById('cos3').style.animationDuration = '1s'
    document.getElementById('cos3').style.animationIterationCount = 'infinite'
    document.getElementById('cos4').style.backgroundColor = 'transparent'
    document.getElementById('cos').style.animation = 'none'
    document.getElementById('cos2').style.animation = 'none'
    document.getElementById('cos4').style.animation = 'none'
  } else if (document.getElementById('optionD').checked) {
    document.getElementById('cos').style.backgroundColor = 'transparent'
    document.getElementById('cos2').style.backgroundColor = 'transparent'
    document.getElementById('cos3').style.backgroundColor = 'transparent'
    document.getElementById('cos4').style.animationName = 'example'
    document.getElementById('cos4').style.animationDuration = '1s'
    document.getElementById('cos4').style.animationIterationCount = 'infinite'
    document.getElementById('cos').style.animation = 'none'
    document.getElementById('cos2').style.animation = 'none'
    document.getElementById('cos3').style.animation = 'none'
  } else {
    document.getElementById('cos').style.backgroundColor = 'transparent'
    document.getElementById('cos2').style.backgroundColor = 'transparent'
    document.getElementById('cos3').style.backgroundColor = 'transparent'
    document.getElementById('cos4').style.backgroundColor = 'transparent'
  }
}
function checkAnswer() {
  var radios = document.getElementsByName('wyborQuiz')
  var stalaPoprawna = posortowanePytania[indexik].correctOption

  var odpowiedzZaznaczona
  var odpowiedz
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked === true) {
      odpowiedzZaznaczona = radios[i].id
    }
  }
  if (odpowiedzZaznaczona === stalaPoprawna) {
    odpowiedz = true
  } else {
    odpowiedz = false
  }
  return odpowiedz
}
function zamknijOknoKoncowe() {
  document.getElementById('option-modal').style.display = 'none'
  document.getElementById('logo-small').style.opacity = '1'
  document.getElementById('info').style.opacity = '1'
  document.getElementById('start').disabled = 'false'
  document.getElementById('start').style.opacity = '1'
}
function zaczynamy() {
  wyczyscTablice()
  posortujPytania()
  document.getElementById('pyt').innerHTML = posortowanePytania[0].question
  document.getElementById('cos').innerHTML = posortowanePytania[0].optionA
  document.getElementById('cos2').innerHTML = posortowanePytania[0].optionB
  document.getElementById('cos3').innerHTML = posortowanePytania[0].optionC
  document.getElementById('cos4').innerHTML = posortowanePytania[0].optionD
  document.getElementById('startujemy').style.display = 'none'
  document.getElementById('cos').style.display = 'block'
  document.getElementById('cos2').style.display = 'block'
  document.getElementById('cos3').style.display = 'block'
  document.getElementById('cos4').style.display = 'block'
  document.getElementById('pyt').style.display = 'block'
  document.getElementById('wyborOdpowiedzi').style.display = 'block'
}
