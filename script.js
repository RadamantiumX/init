function openModal() {
    const modal = document.querySelector('.modal')

    modal.style.display = "flex"
    modal.style.justifyContent = "center"
    modal.style.alignItems = "center"
    modal.style.flexDirection= "column"
}

function closeModal() {
    const modal = document.querySelector('.modal')
    modal.style.display = "none"
}