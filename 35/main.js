let dataItem = []; // массив всех данных, которые мы получаем с сервера
let filterArr = []; // массив для фильтра (туда отфильтруются данные выбранного ключа значения, с дубликатами)
const container = document.querySelector('.container'); // обозначаем div container для js
const filterList = document.querySelector('.filter-list'); // обозначаем div фильтра для js
const modalDisplay = document.querySelector('.modal-body');
const btnOpen = document.querySelector('.btn-js');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-js');

filterList.addEventListener('click', (e) => { // ставим событие на клик по...
    const item = e.target.closest('li'); // нажатию на li-шку в списке фильтра (перехват события)
    if(item) {
        filter(item);
    }
});

load();
container.addEventListener('click', (event) => {
    const block = event.target.closest('.product-block');
    if(block) {
        let filteredProducts = dataItem.filter(el => el.id == block.dataset.id);
        filteredProducts.map((prod) => {
            const productArticle = `
            <div class="img-holder" style="border: none;">
                <img src="${prod.images[0]}" alt="">
            </div>
            <div class="info-prod" style="color: #eceeef;">
                <p>${prod.description}</p>
                <strong>UAH ${prod.price}</strong>
            </div>
            `;
            modalDisplay.insertAdjacentHTML('beforeend', productArticle);
        });
    }
    modal.classList.add('active');
})

function load() {
    fetch(`https://dummyjson.com/products`).then(response => { // делаем запрос на получение информации с сервера
        return response.json(); // записываем ответ, полученнный с сервера
    }).then(data => { // работаем с полученными данными
        dataItem = data.products;

        dataItem.map((item) => { // проходимся методом map (выдает новый массив без изменения исходящего) по массиву всех продуктов и...
            filterArr.push(item.category); //  в список для фильтра запихиваем все значения ключа category (пока что с дубликатами)

            const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>UAH ${item.price}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', product); // создаём через js отдельный блок в html для вывода блока про продукт, вставлеям его в container (в самый конец, тк выводиться они будут с каждым проходом метода map по массиву, каждый новый будет выводиться снизу предыдущего)
        });

        let list = []; // создаём массив для не-дубликатов. этот массив и будет основой фильтра
        const tempArray = filterArr.sort(); // временный массив, в который мы помещаем отсортированные данные (по алфавиту, по значению цифр) из массива всех категорий для фильтра

        for (let i = 0; i < tempArray.length; i++) { // проходимся циклом по по временному массиву
            if (tempArray[i + 1] !== tempArray[i]) { //если каждый последующий элемент массива НЕ равен предыдущему (т.е. он новый, НЕ дубликат), то...
                list.push(tempArray[i]); // запихиваем НЕ-дубликаты в массив не-дубликатов
            }
        }

        list.map((list) => { // проходимся методом map по массиву не-дубликатов
            const listItem = `<li>${list}</li>`; // делаем переменную из куска кода, который мы через js вставляем в html (это li-шка для списка для фильтра, в которую передаётся каждый новый элемент массива)
            filterList.insertAdjacentHTML('beforeend', listItem); // эта строчка кода непосредственно вставляет переменную выше, каждую новую ПОСЛЕ последующей
        });
    }).catch((error) => console.log(error)); // отлавливаем ошибки??
}

function filter(item) { // данная функция принимает переданную ей переменную 
    const cat = item.textContent; // переменная, значение которой, это текстовое значение заданной функции переменной

    while (container.firstChild) {
        container.removeChild(container.firstChild); // данный метод удаляет предыдущие данные, записанные в контейнер и позволяет записывать новые в пустой контейнер
    };

    if (cat != 'all') { // условие, которое сравнивает значение того, что считывается с кликнутого блока
        dataItem.map((item) => { // если 'all', то мапит все продукты всех категорий
            if (item.category == cat) {
                const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <h3>${item.brand}</h3>
                        <strong>UAH ${item.price}</strong>
                    </div>
                </div>
            `;
                container.insertAdjacentHTML('beforeend', product);
            }
        });
    } else { //если что-то одно, то мапит продукты выбранное категории, ...
        dataItem.map((item) => {
            filterArr.push(item.category); //предварительно запихивая их в отфильтрованный массив

            const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="img-holder">
                        <img src="${item.images[0]}" alt="">
                    </div>
                    <div class="info">
                        <span class="category">${item.category}</span>
                        <h3>${item.brand}</h3>
                        <strong>UAH ${item.price}</strong>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', product);
        });
    }
}

closeBtn.addEventListener('click', () => {
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
    while (modalDisplay.lastChild) {
        modalDisplay.removeChild(modalDisplay.lastChild);
    };
})
