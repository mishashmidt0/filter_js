function app() {
    const button = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.card')
    console.log(cards)
    function filter(category, items) {
        items.forEach(item => {
            console.log(item.classList.contains(category))
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';

            if (isItemFiltered && !isShowAll) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })
    }


    button.forEach((el) => {
        el.addEventListener('click', () => {
            const currentCategory = el.dataset.filter;
            filter(currentCategory, cards)

        })
    })
}


app()