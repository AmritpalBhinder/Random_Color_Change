const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const code = document.querySelector("#code");
const copy_btn = document.querySelector("#copy_btn");

btn.addEventListener("click",()=>{
    change_background();
});

copy_btn.addEventListener("click",()=>{
    navigator.clipboard.writeText(code.innerHTML).then(()=>{
        alert("Copied: " + code.innerHTML);
    });
});

function change_background()
{
    let color = Math.floor(Math.random()*16777216).toString(16);

    body.style.backgroundColor = "#" + color ;
    code.innerHTML = "#" + color;
}