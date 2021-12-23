const head1 = document.getElementById("Всем привет")
const head2 = document.querySelector("h2")
const head3 = document.querySelector("h3")

console.log(head1,head2,head3)

head1.onclick = () => {
    if(head2.textContent === "") {
        head2.textContent = "Хммм, а если на меня?"
    }
}

head2.onclick = () => {
    if(head2.textContent === "Хммм, а если на меня?") {
        head3.textContent = "Очень интересно. Попробуй нажать на меня"
    }
}

head3.onclick = () => {
    if(head1.style.color = "black") {
       stylechange1(head1,"Вышло неплохо")
        stylechange1(head2,"Продолжай!!!")
        stylechange1(head3,"У тебя всё получится!!!")
    }
}

function stylechange1 (node,text) {
    node.style.color = "red"
    node.style.backgroundColor = "black"
    node.style.textAlign = "center"
    node.textContent = text
}

