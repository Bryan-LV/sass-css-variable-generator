import showSuccessModal from './showSuccessModal';

function copyToClipboard() {
    const variables = Array.from(document.querySelectorAll('.output-var'));

    const textToCopy = variables.reduce(function (accumulator: string, currentItem) {
        accumulator += `${currentItem.textContent}\n`;
        return accumulator;
    }, ``);

    window.navigator.clipboard.writeText(textToCopy);
    showSuccessModal();
}

export default copyToClipboard;