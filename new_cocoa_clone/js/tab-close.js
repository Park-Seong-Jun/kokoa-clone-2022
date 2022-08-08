const tabCloseBtn = document.querySelector(".friends-screen__profile__channel__header i")
const channelBar = document.querySelector(".friends-screen__profile__channel__header")
const channelBox = document.querySelector(".friends-screen__profile__channel__box")
const closeIcon = document.querySelector(".friends-screen__profile__channel__header i") 

function tabClose() {
    channelBox.classList.toggle("behind");
    if (channelBox.classList.contains("behind")) {
        closeIcon.classList.replace("fa-chevron-up","fa-chevron-down")
        channelBar.classList.add("tab--close")
    } else {
        closeIcon.classList.replace("fa-chevron-down","fa-chevron-up")
        channelBar.classList.remove("tab--close")
    }
}

tabCloseBtn.addEventListener("click",tabClose);