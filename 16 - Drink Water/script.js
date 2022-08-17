const empty   = document.querySelector('.empty');
const filled  = document.querySelector('.filled');
const glasses = document.querySelectorAll('.small');
let   count   = 0;
let   opCount = 0;
let   liters  = 2;
let   percent = 0;

// for (const glass of glasses) {
//     glass.addEventListener('click', () => {
//         count   += 43.75
//         opCount -= 43.75
//         empty.style.height  = `${opCount}px`;
//         filled.style.height = `${count}px`;
//     });
// }

function decrease(full, i) {
    if (full.length-1 > i) {
        for (let y = full.length-1; y >= i+1; y--) {
            count   = 42.5 * (i + 1);
            opCount = 42.5 * (glasses.length - (i + 1));
            percent = 12.5 * (i + 1);
            liters  = .25 * (glasses.length - (i + 1));
            glasses[y].classList.remove("full");
        }
    } else {
        for (let y = 0; y <= i; y++) {
            count   = 0;
            opCount = 340;
            percent = 0;
            liters  = 2;
            glasses[y].classList.remove("full");
        }
    }
}

function increase(i) {
    for (let y = 0; y <= i; y++) {
        count   = 42.5 * (i + 1);
        opCount = 42.5 * (glasses.length - (i + 1));
        percent = 12.5 * (i + 1);
        liters  = 2 - (.25 * (i + 1));
        glasses[y].classList.add("full");
    }
}


for (let i = 0; i < glasses.length; i++) {
    glasses[i].addEventListener('click', () => {
        let full = document.querySelectorAll('.full');
        if (glasses[i].classList.contains("full")) {
            decrease(full, i);
        } else {
            increase(i);
        }
        // Empty
        empty.style.height  = `${opCount}px`;
        liters === 0 ? empty.innerHTML = `` : empty.innerHTML = `<b>${liters}L</b> <span>Remained</span>`;

        // Filled
        filled.style.height = `${count}px`;
        percent === 0 ? filled.innerHTML = `` : filled.innerHTML = `${percent}%`;
    });
}