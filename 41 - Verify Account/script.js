const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, i) => {
    code.addEventListener('keydown', (e) => {
        lastCode = codes.length - 1;
        if (e.key >= 0 && e.key <= 9 && !(i === lastCode)) {
            codes[i].value = '';
            setTimeout(() => codes[i + 1].focus(), 10);
        } 
        else if (e.key === 'Backspace' && !(i === 0)) {
            setTimeout(() => codes[i - 1].focus(), 10);
        }
        else if (e.key >= 0 && e.key <= 9) {
            codes[i].value = '';
            setTimeout(() => codes[i].focus(), 10);
        } 
        else if (e.key === 'Backspace') {
            setTimeout(() => codes[i].focus(), 10);
        }
    })
})