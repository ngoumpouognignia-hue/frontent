// / Mise en évidence automatique des sessions en cours
document.querySelectorAll('.badge').forEach(badge => {
    if (badge.classList.contains('status-active')) {
        badge.parentElement.style.borderLeft = "5px solid #22c55e";
    } else if (badge.classList.contains('status-upcoming')) {
        badge.parentElement.style.borderLeft = "5px solid #f59e0b";
    }
});