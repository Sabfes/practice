Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}
function noop(){}

function _createModalFooter(buttons = []) {
    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')
    
    if (buttons.length === 0) {
        return document.createElement('div')
    } else {
        buttons.forEach( btn=> {
            const $btn = document.createElement('button')
            $btn.textContent = btn.text
            $btn.classList.add('btn')
            $btn.classList.add(`btn-${btn.type || 'secondary'}`)
            $btn.onclick = btn.handler || noop
            
            wrap.appendChild($btn)

            return wrap
        })
    }
    
    return wrap
}

function _createModal(options) {
    const DEFAULT_WIDTH = '600px'

    const html = `
        <div class="modal-overlay" data-close='true'>
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Окно'}</span>
                    ${closeSvg = options.closable ? `<span class="modal-close" data-close='true'>&times;</span>` : ''}
                </div>
                <div class="modal-body" data-content>
                    ${options.content || ''}
                </div>
                
            </div>
        </div>
    `
    
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('beforeend', html)
    document.querySelector('.container').appendChild(modal)
    
    const footer = _createModalFooter(options.footerBtn)
    footer.appendAfter(modal.querySelector('[data-content]'))
    
    return modal
}


$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let clossing = false
    let destroyed = false

    const listener = event => {
        if (event.target.dataset.close === 'true') {
            close();
        }
    }

    $modal.addEventListener('click', listener)

    function open() {
        if (destroyed) {
            return console.log('model is destroyed!');
        }
        if (!clossing) {
            $modal.classList.add('open')
        }
    }
    
    function close() {
        clossing = true
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        setTimeout( ()=> {
            $modal.classList.remove('hide')
            clossing = false
        }, ANIMATION_SPEED)
    }

    function destroy() {
        $modal.parentNode.removeChild($modal)
        $modal.removeEventListener('click', listener)
        destroyed = true
    }

    function setContent(html) {
        $modal.querySelector('[data-content]').innerHTML = html 
    }

    return {
        open,
        close,
        destroy,
    }
}