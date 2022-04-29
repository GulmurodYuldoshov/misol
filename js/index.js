var a = (500 + 250) * 11191
var b = 120 * 11747.42
var summ = a + b

alert ("Xush kelibsiz")
var sum = prompt("summani kirgizing")

if(isNaN(sum)){
    alert("Faqat son kiritishingiz mumkin!")
    sum = prompt("summani kirgizing")
} else{
    if(sum >= summ) {
        var demo = document.querySelector('.demo')
        demo.textContent = ` Oq yo’l, Alisher! `
    } else {
        var demo = document.querySelector('.demo')
        demo.textContent = 'Alisher, ozgina sabr qilish\n kerak bo’lar ekan'
    }
}
var qoldiq = sum - summ
    if(qoldiq >= 0) {
        var demo = document.querySelector('.demo')
        demo.textContent = ` Oq yo’l, Alisher! `
        var pul = document.querySelector('.naqt')
        pul.textContent = qoldiq
    } else {
        var demo = document.querySelector('.demo')
        demo.textContent = ' Alisher, ozgina sabr qilish\n kerak bo’lar ekan'
        var pul = document.querySelector('.naqt')
        pul.textContent = " Yo`q"
    }



