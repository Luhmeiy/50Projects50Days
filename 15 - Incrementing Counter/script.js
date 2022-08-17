const counters = document.querySelectorAll(".counter");
const speed    = 200;

counters.forEach((counter) => {
    function updateCount() {
        const target    = parseInt(counter.getAttribute('data-target'));
        const count     = parseInt(counter.innerText);
        const increment = Math.trunc(target / speed);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});