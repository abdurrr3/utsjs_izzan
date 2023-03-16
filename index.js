// no 1
class jenisHewan {
  constructor(melata, merayap, berenang, terbang) {
    this.melata = melata;
    this.merayap = merayap;
    this.berenang = berenang;
    this.terbang = terbang;
  }
  hewanMelata(hewan1) {
    return "hewan yg melata adalah " + hewan1;
  }
  hewanMerayap(hewan1) {
    return "hewan yg merayap adalah " + hewan1;
  }
  hewanBerenang(hewan1) {
    return "hewan yg berenang adalah " + hewan1;
  }
  hewanTerbang(hewan1) {
    return "hewan yg terbang adalah " + hewan1;
  }
}

var hewanku = new jenisHewan();
console.log(hewanku.hewanTerbang("burung"));



 //no 2
//button 1
 function p() {
    alert ('tombol di klik 2 kali')
 }
 const btn1 = document.getElementById('btn1')
 btn1.addEventListener("click", function(){
     document.createElement('p')
     document.createTextNode('Berhasil!!')
 })

//buttton 2

const btn2 = document.getElementById('btn2')
btn2.addEventListener('mouseenter', function(){
    document.getElementById('p').setAttribute('class', 'red')
})
btn2.addEventListener("mouseleave", function(){
    document.getElementById('p').removeAttribute('class')
})

// button 3

const btn3 = document.getElementById('btn3')
btn3.addEventListener('click', function(){
    document.getElementById('hahay1').removeAttribute('class')
})
