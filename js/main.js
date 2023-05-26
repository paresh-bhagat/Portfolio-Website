$(function() {
    $('#sidebarCollapse').on('click', function () { 
        $('#sidebar, #content').toggleClass('active');

    });
});



const text = document.querySelector(".typewritter-text");

const textLoad = () => {
        setTimeout(() => {
            text.textContent = "I'm Paresh Bhagat";
        }, 0);
        setTimeout(() => {
            text.textContent = "I'm a Software Engineer";
        }, 2000);
        setTimeout(() => {
            text.textContent = "Nice to meet you";
        }, 4000); //1s = 1000 milliseconds
    }
textLoad();
setInterval(textLoad, 6000);