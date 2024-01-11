const keys = document.querySelectorAll(".keys");
const textarea = document.querySelector("textarea");
const deleteBtn =document.getElementById("delete");
const shiftBtn = document.getElementById("shift");
const spaceBtn= document.getElementById("space");
//default theme
let chathamus_blue="#1A4B84";
//init char array
let chars =[];
//for each to get the key press
keys.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        textarea.value+=btn.innerText;
        chars =textarea.value.split("");
        const typedChar = btn.key;
        document.getElementById('output').innerText = `Typed character: ${chars}`;
        console.log(`Typed character: ${chars}`);
});
});
//delete button event
deleteBtn.addEventListener("click",()=>{
    chars.pop();
    textarea.value = chars.join("");
});
//space bar event
spaceBtn.addEventListener("click",()=>{
    chars.push('');
    textarea.value =chars.join("");
});
//Shift Button Event
shiftBtn.addEventListener("click",()=>{
    keys.forEach((btn)=>{
        btn.classList.toggle('upper');
   
    });
});
function printTypedCharacter(event) {
    const typedChar = event.key;
    document.getElementById('output').innerText = `Typed character: ${typedChar}`;
    
    console.log(`Typed character: ${typedChar}`);
  }

// Change Theme
function setTheme(theme) {
    document.documentElement.style.setProperty("--primary-color", theme);
    localStorage.setItem("movie-theme", theme);
  }
  setTheme(localStorage.getItem("movie-theme") || chathams_blue);
