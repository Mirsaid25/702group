let name = 'Alex'
let money = 10000
let accound = 7777
let q1 = prompt('Как вас зовут?').trim().toLowerCase()

if(q1 === name.toLowerCase()){
    let q2 = +prompt('Номер счета?')
    if(q2 == accound){
        let q3 = +prompt('Сколько обналичить?')
        if(q3 <= money){
            alert('Все отлично')
            let remainder = alert(
                `
                Было: ${money}
                Снял: ${q3}
                Осталось: ${money - q3} 
                `)
        } else {
            alert('Недостаточно средств')
        }
    } else{
        let error = alert('Пользователь не найден, досвидули')}
} else {
    let error = alert('Пользователь не найден, досвидули')
}


// -----------------------------------------------------------------------

// задание2

let question1 = prompt('Как вас зовут?').toUpperCase().trim()

if(question1[0] === "А"){
      let question2 = prompt('Сколько вам лет?')
      if( question2 > 20 && question2 <=40){
          let question3 = confirm('Мин. сумма для входа $100')
          if(question3 = true){
              let question4 = +prompt('Сколько вас?')
              let plays = 15
              if(question4 <= plays){
                  alert('Добропожаловать')
              } else{
                  alert('Нет свободных мест')
              }
          } else{
            alert('Get out')
        }
      } else{
          alert('Get out')
      }
} else {
    alert('Get out')
}
