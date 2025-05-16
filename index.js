
let countEL=document.getElementById("count-el")
let saveEL=document.getElementsById("save-el")
let count=0
function increment(){
    console.log(" clicked")
    count+=1
    countEL.textContent=count
}
function save(){
    let total = count + "-"
    saveEL.textContent += total
    countEL.textContent = 0
    count =0
}

