const humber = document.querySelector(".humber");
const humbers = [...humber.children]; //ก็อป arr obj ต้องสร้างใหม่ปกติจะ ref
const navtext = document.querySelector(".navtext");
const navtextchild = [...navtext.children]

//console.log(navtext);//หาของใน obj 

if ( window.matchMedia("(max-width: 840px)")) {//กัน function ทำงาน ตอนขนาดไม่ตรง
    humber.addEventListener("click", () => {
        console.log(window)
        navtext.classList.toggle("ultoggle")
        humbers.forEach((h) => {
            h.classList.toggle("spanchangecolor")
        })
        humbers[0].classList.toggle("span1toggle")
        humbers[1].classList.toggle("span2toggle")
        humbers[2].classList.toggle("span3toggle")
    })

    navtextchild.forEach((navchild) => {
        navchild.addEventListener("click", () => {
            navtext.classList.toggle("ultoggle")
            humbers.forEach((h) => {
                h.classList.toggle("spanchangecolor")
            })
            humbers[0].classList.toggle("span1toggle")
            humbers[1].classList.toggle("span2toggle")
            humbers[2].classList.toggle("span3toggle")
        })
    })
}