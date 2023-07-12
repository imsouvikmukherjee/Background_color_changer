const body = document.querySelector("body");

const button = document.querySelectorAll(".button");
const heading = document.querySelector("h2");
button.forEach((button) => {
    button.addEventListener("click", (e)=>{
     let value = e.target.id;
        console.log(e.target);
      switch (value) {
        case "black":
            body.style.backgroundColor = "black";
            heading.innerHTML = "Background Color : Black"
            heading.style.color = "white";
            document.querySelector("h1").style.color = "white";
            break;

        case "tomato":
            body.style.backgroundColor = "tomato";
            heading.innerHTML = "Background Color : Tomato"
            heading.style.color = "white";
            break;

        case "violet":
            body.style.backgroundColor = "violet";
         
            heading.innerHTML = "Background Color : Violet"
            heading.style.color = "white";
            break;


        case "blueviolet":
            body.style.backgroundColor = "blueviolet";
         
            heading.innerHTML = "Background Color : Blueviolet"
            heading.style.color = "white";
            break;

        case "mediumseagreen":
            body.style.backgroundColor = "mediumseagreen";
          
            heading.innerHTML = "Background Color : Meadium sea green"
            heading.style.color = "white";
            break;

        case "dodgerblue":
            body.style.backgroundColor = "dodgerblue";
          
            heading.innerHTML = "Background Color : Dodgerblue"
            heading.style.color = "white";
            break;
      default:
        body.style.backgroundColor = "white";
        break;
       
      }
    })
})