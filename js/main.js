// to make toolTips work

document.querySelectorAll('.toolTips').forEach((t)=>{
    new bootstrap.Tooltip(t)
})


// on click phone number in header copy to clipboard

document.getElementById('phoneBtn').addEventListener('click',(e)=>{
    let content = document.getElementById('phoneNumber').textContent;
    navigator.clipboard.writeText(content);
    document.getElementById('phoneSpan').setAttribute('data-bs-original-title','Copied');
    setTimeout(()=>{
        document.getElementById('phoneSpan').setAttribute('data-bs-original-title','Copy');
    },2000)
})


// hide and show password 

document.querySelectorAll('.passwordForm').forEach((el)=>{
    let eyeIcon = el.children[1];
    let passInput = el.children[0];
    eyeIcon.addEventListener('click',()=>{
        if (passInput.type == 'password') {
            passInput.type = 'text';
            eyeIcon.classList = 'fa-solid fa-eye';
            eyeIcon.style.color = "#1B74DD";
        } else {
            passInput.type = 'password';
            eyeIcon.classList = 'fa-solid fa-eye-slash';
            eyeIcon.style.color = "black";
        }
    })
})


// Btn Scroll To up

document.getElementById('btnScrollToUp').addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})


// Show 'Btn Scroll To up' when scroll down

window.addEventListener('scroll',()=>{
    if ($(window).scrollTop() > 300) {
        document.getElementById('btnScrollToUp').classList.add('showScrollBtn');
    }else {
        document.getElementById('btnScrollToUp').classList.remove('showScrollBtn');
    }
})