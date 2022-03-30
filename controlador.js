let boton=document.getElementById("boton")
boton.addEventListener("click",function(event){

    

    alert("hicistes click")
    let selector=document.getElementById("selector").value
    alert("usted eligio el:"+ selector)
    switch(selector){
            case "1":
            alert("elegistes el #1")
            break
            case "2":
            alert("elegistes el #2")
            break
            case "3":
            alert("elegistes el #3")
            break
            case "4":
            alert("elegistes el #4")
            break
            case "5":
            alert("elegistes el #5")
            break
            case "6":
            alert("elegistes el #6")
            break
            case "7":
            alert("elegistes el #7")
            break
            case "8":
            alert("elegistes el #9")
            break
            case "10":
            alert("elegistes el #10")
            break
    }
})