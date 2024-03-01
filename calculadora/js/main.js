const screen1 = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const buttonUse = button.textContent;
        

        

        if (button.id === "c"){
            screen1.textContent = 0
            return
        }

        if (button.id === "del"){
            if(screen1.textContent.length === 1 || screen1.textContent === "error unu" ) {
                screen1.textContent = "0";
            } else {
                screen1.textContent = screen1.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "equal"){
            try{
                screen1.textContent = eval(screen1.textContent    )
            } catch{
                screen1.textContent = "error unu";
            }
            return;
        }

        if(screen1.textContent === "0" || screen1.textContent === "error unu") {
            screen1.textContent = buttonUse
        } else {
            screen1.textContent += buttonUse;
        }
    })
});