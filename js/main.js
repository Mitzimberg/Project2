function showTab(tabId) {
    // I've got no real idea what any of this means, all of this was jacked
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        item.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick*="${tabId}"]`).classList.add('active');
}

showTab('tab1');
