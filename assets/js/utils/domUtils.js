const DOMUtils = {
    showElement: (element) => {
        element.classList.remove('hidden');
        element.classList.add('flex');
    },
    hideElement: (element) => {
        element.classList.remove('flex');
        element.classList.add('hidden');
    },
    toggleElement: (element) => {
        element.classList.toggle('hidden');
    }
};

export default DOMUtils;