const toggles = document.querySelectorAll(".toggle");
const good    = document.getElementById("good");
const cheap   = document.getElementById("cheap");
const fast    = document.getElementById("fast");

for (const toggle of toggles) {
    toggle.addEventListener('change', (e) => toggleGCF(e.target));
}

function toggleGCF(toggled) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good  === toggled) fast.checked  = false;
        if (cheap === toggled) good.checked  = false;
        if (fast  === toggled) cheap.checked = false;
    }
}