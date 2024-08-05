# Máscara de Dinheiro em jQuery

Este repositório contém um código em jQuery para adicionar uma máscara de dinheiro a campos de entrada (`input`) com a classe `.mascara_dinheiro`. A máscara formata os valores de entrada como moeda brasileira (R$), incluindo a adição automática de vírgulas e pontos conforme necessário.

## Funcionalidades

### 1. Formatação ao Digitar

Ao digitar no campo de entrada, o valor é formatado automaticamente:
- Remove todos os caracteres não numéricos.
- Insere um ponto (.) antes dos dois últimos dígitos para representar os centavos.
- Adiciona o prefixo "R$" e formata o valor usando a função `addCommas` para inserir pontos como separadores de milhares.

### 2. Formatação ao Perder o Foco

Ao perder o foco do campo de entrada, o valor é ajustado para garantir que sempre tenha duas casas decimais:
- Verifica se o valor contém uma vírgula.
- Caso contrário, adiciona `,00` ao final do valor.

### 3. Função `addCommas`

Esta função:
- Adiciona pontos como separadores de milhares na parte inteira do valor.
- Converte o separador decimal de ponto para vírgula.

## Código

### jQuery e Manipulação do DOM

```javascript
$(document).on("input", ".mascara_dinheiro", function() {
    var value = $(this).val().replace(/\D/g, '');
    if(value.length > 2){
        value = value.substring(0, value.length - 2) + '.' + value.substring(value.length - 2);
    }
    var formattedValue = 'R$ ' + addCommas(value);
    $(this).val(formattedValue);
});

$(document).on("blur", ".mascara_dinheiro", function() {
    var valor = $(this).val();
    if (valor.indexOf(',') === -1) {
        valor += ',00';
        $(this).val(valor);
    }
});
```
### Função addCommas

```javascript

function addCommas(nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}
```
### Como Usar

- Adicione a biblioteca jQuery ao seu projeto.
- Adicione o código acima ao seu arquivo JavaScript.
- Adicione a classe mascara_dinheiro aos campos de entrada onde você deseja aplicar a máscara de dinheiro.

### Exemplo de Uso

```html

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Máscara de Dinheiro</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            // Cole o código jQuery aqui
        </script>
    </head>
    <body>
        <input type="text" class="mascara_dinheiro" placeholder="R$ 0,00">
    </body>
</html>
```
### Licença

Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo LICENSE para mais detalhes.
