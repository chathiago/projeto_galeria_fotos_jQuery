$(document).ready(function(){
    
    $('header button').click(function() {
        $('form').slideDown()
    })

$('#botao-cancelar').click(function() {
    $('form').slideUp()
})

    $('form').on('submit', function(e) {
        e.preventDefault()
        const endereçoNovaImagem = $('#link-nova-imagem').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${endereçoNovaImagem}" />`).appendTo(novoItem)
        $(`<div class="overlay-img-link">
                <a href="./images/foto1.jpg" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)

        $('#link-nova-imagem').val('')
    })
})