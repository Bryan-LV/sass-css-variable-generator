function showSuccessModal() {
    const modal = document.querySelector('#modal');
    modal.classList.toggle('open');
    setTimeout(() => {
        modal.classList.toggle('open');
    }, 950);
}
export default showSuccessModal;
