class CalculadoraRepository {
  historico = [];

  calcular({ parcelaA, parcelaB, operador }) {
    let resultado = 0;

    if (typeof parcelaA === 'string' || typeof parcelaB === 'string') {
      throw new Error('Coloca um valor válido!');
    }

    switch (operador) {
      case '+':
        resultado = parcelaA + parcelaB;
        break;
      case '-':
        resultado = parcelaA - parcelaB;
        break;
      case '*':
        resultado = parcelaA * parcelaB;
        break;
      case '/':
        resultado = parcelaA / parcelaB;
        break;
      default:
        throw new Error('Coloca um operador válido!');
    }

    if (!resultado) {
      throw new Error('Operação não suportada!');
    }

    this.historico.push({
      parcelaA,
      parcelaB,
      operador,
      resultado
    });

    return resultado;
  }

  pegarHistorico() {
    return this.historico;
  }
}

module.exports = { CalculadoraRepository };