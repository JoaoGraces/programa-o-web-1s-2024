const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const operador = req.body.operador;
    const num2 = parseFloat(req.body.num2);

    // tentei passar o erro personalizado tambem porem nao consegui
    if (isNaN(num1) || isNaN(num2)) {
        const erro = 'Por favor insira um valor numérico válido'
        res.redirect(`/erro.html?erro=${erro}`);
    } else if (num2 == 0 && operador == '/'){
        const erro = 'Não é possivel fazer divisões por 0'
        res.redirect(`/erro.html?erro=${erro}`);
    } else {
        const resultado = calculadora.calcular(num1, operador, num2);
        res.redirect(`/resultado.html?resultado=${resultado}`);
    }
};