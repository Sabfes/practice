const htmlSlider = `
    <main class="main d-flex justify-content-center align-items-center w-100 h-100">
        <div id="carouselExampleIndicators" class="carousel" data-ride="carousel">
            <ol class="carousel-indicators d-flex">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://images.wallpaperscraft.com/image/mountains_sky_clouds_beautiful_black_and_white_88041_1440x900.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://wallbox.ru/wallpapers/main/201320/f562f242ee00a32.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://wallpapercave.com/wp/wp2598955.jpg"  class="d-block w-100" alt="...">
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
    </main in>
`

const htmlProfile = `
    <main class="main d-flex justify-content-center align-items-center w-100 h-100">
        <img height="600px" src="https://i.pinimg.com/736x/17/18/0e/17180e6f58bb5648d61da5a129c6962a.jpg">
        <div class="col">
            <p class="htmlProfile__p ">Mortem effugere nemo potest</p>
            <p class="htmlProfile__p ">Nil inultum remanebit</p>
        </div>
    </main>
`

const htmlContact = `
    <main class="main d-flex justify-content-center align-items-center w-100 h-100">                   
        <ul class="list-group">
            <li class="list-group-item">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-book" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"/>
                    <path fill-rule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"/>
                </svg> Cras justo odio
            </li>
            <li class="list-group-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookshelf" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z"/>
            </svg> Dapibus ac facilisis in</li>
            <li class="list-group-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-briefcase" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
                <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
            </svg> Morbi leo risus</li>
            <li class="list-group-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                <path fill-rule="evenodd" d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
            </svg> Porta ac consectetur ac</li>
            <li class="list-group-item"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cash-stack" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"/>
                <path fill-rule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"/>
                <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
            </svg> Vestibulum at eros</li>
        </ul>
    </main>
`

const root = document.querySelector('#root');
root.insertAdjacentHTML('beforeend', htmlSlider);

document.addEventListener('click', (event) => {
    if ((event.target.dataset.toggle === 'pill')) {
        if (event.target.id === 'pills-home-tab') {
            root.innerHTML = ''
            root.insertAdjacentHTML('beforeend', htmlSlider);
        } else if (event.target.id === 'pills-profile-tab') {
            root.innerHTML = ''
            root.insertAdjacentHTML('beforeend', htmlProfile);
        } else if (event.target.id === 'pills-contact-tab') {
            root.innerHTML = ''
            root.insertAdjacentHTML('beforeend', htmlContact);
        }
    } 
})

