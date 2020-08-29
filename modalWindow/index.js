const cars = [
    {id:1, title: 'mb', price: '200k', img: 'https://i.pinimg.com/originals/60/fa/13/60fa13b4e40ba24bf778bebc78798032.jpg'},
    {id:2, title: 'bmw', price: '180k', img: 'https://3.bp.blogspot.com/-aXXmmvAauHg/Tf-QSvk_I9I/AAAAAAAAEE8/hp3X-Ipf2to/s1600/Latest+BMW+cars+in+blue+color_3.jpg'},
    {id:3, title: 'audi', price: '150k', img: 'https://avatars.mds.yandex.net/get-pdb/2338686/d1b5325d-1f3f-4168-bbb7-a3d3ddbd5b25/s1200?webp=false'},
]

const $cardsContainer = document.querySelector('.cardsContainer')

cars.forEach( item => {

    const card = document.createElement('div')
    card.classList.add('col')
    card.insertAdjacentHTML('beforeend', `
    <div class="card" style="width: 18rem;">
        <img height="200px" src="${item.img}" class="card-img-top">
        <div class="card-body" id="${item.id}">
            <h5 class="card-title">${item.title}</h5>
            <a href="#" class="btn btn-primary" data-openModal="true">Посмотреть цену</a>
            <a href="#" class="btn btn-danger" data-close="true">Удалить</a>
        </div>
    </div>
    `)

    $cardsContainer.appendChild(card)
})



document.addEventListener('click', (event)=>{ 

    const id = event.target.parentNode.id;
    const car = cars.find( f => f.id === +id)

    if (event.target.dataset.close === 'true') {
        $.confirm({
            title: car.title,
            content: 'Вы хотите удалить карточку?'
        }).then( ()=> {
            event.target.closest('.col').remove()
        }).catch( ()=> {
            console.log('cancel');
        })
    }

    else if (event.target.dataset.openmodal === 'true') {
        const modal = $.modal({
            title: car.title,
            closable: true,
            content: car.price,
            width: '400px',
            footerBtn: [
                {text: 'Cancel', type: 'primary', handler() { 
                    modal.close()
                }},
            ]
        })
        setTimeout( ()=> modal.open(), 100 )
    }
})