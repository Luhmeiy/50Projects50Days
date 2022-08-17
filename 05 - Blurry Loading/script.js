const loading = document.querySelector('.loading-text')
const image   = document.querySelector('.bg')
let   counter = 0
let   int     = setInterval(blur, 30)

function blur() {
    counter++
    if (counter > 99) clearInterval(int)
    loading.innerText     = `${counter}%`
    loading.style.opacity = scale(counter, 0, 100, 1, 0)
    image.style.filter    = `blur(${scale(counter, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min