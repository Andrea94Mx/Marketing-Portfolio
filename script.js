
function invert(x){
    console.log('invert Image');
x.style.filter= "invert(100%)";
}

function revert(x){
    console.log('NORMAL Image');
x.style.filter= "invert(0%)";
}

function allSections() {
const allbtn = document.querySelectorAll('.projectButton');

allbtn.forEach((btn) => {

    const imgbg = btn.parentElement; 
    
    btn.addEventListener('mouseenter', () => invert(imgbg));
    btn.addEventListener('mouseleave', () => revert(imgbg));
});

}

allSections();
