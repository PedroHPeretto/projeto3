$(document).ready(function() {

    /* validação telefone */

    $('#inputTelefone').mask('+00 (00) 00000-0000')

    /* validação nome */

    $('#inputNome').mask('Z', {
        translation: {
            'Z': { pattern: /[A-Za-zÀ-ÖØ-öø-ÿ ]/, recursive: true }
        }
    });
    
    
    /* função adicionar contatos */

    const nomes = []
    const telefones = []

    let linhas = ''

    $('#form').on('submit', function(event) {
        event.preventDefault()

        adicionaLinha()
        atualizaTabela()
    })

    function adicionaLinha() {
        const inputNome = $('#inputNome')
        const inputTelefone = $('#inputTelefone')

        const nomeValor = inputNome.val()
        const telefoneValor = inputTelefone.val()

        if(nomes.includes(nomeValor) || telefones.includes(telefoneValor)) {
            alert(`Contato já existente`)
        } else {
            nomes.push(nomeValor)
            telefones.push(telefoneValor)

            let linha = '<tr>'
            linha += `<td>${nomeValor}</td>`
            linha += `<td>${telefoneValor}</td>`
            linha += '</tr>'

            linhas += linha
        }

        inputNome.val('')
        inputTelefone.val('')


    }

    function atualizaTabela() {
        $('tbody').html(linhas)
    }
})