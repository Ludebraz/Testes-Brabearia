const barbearia = {
  cortes: [
    { id: 1, tipo: "Militar", valor: 20.0 },
    { id: 2, tipo: "Samurai", valor: 35.0 },
    { id: 3, tipo: "Pompadour", valor: 20 },
    { id: 4, tipo: "Moicano", valor: 0 },
    { id: 5, tipo: "Razor part", valor: 0 },
  ],
  barbas: [
    { id: 1, tipo: "Capitão Jack", valor: 20.0 },
    { id: 2, tipo: "Van Dyke", valor: 20.0 },
    { id: 3, tipo: "Barba Média", valor: 20.0 },
    { id: 4, tipo: "Barba Baixa", valor: 20.0 },
    { id: 5, tipo: "Barba Zero", valor: 15.0 },
  ],
  estaAberto: true,
};

function buscaCortePorId(id) {
  for (let i = 0; i < barbearia.cortes.length; i++) {
    if (barbearia.cortes[i].id === id) {
      return barbearia.cortes[i];
    }
  }
  return "Corte não encontrado";
}

function buscaBarbaPorId(id) {
  for (let i = 0; i < barbearia.barbas.length; i++) {
    if (barbearia.barbas[i].id === id) {
      return barbearia.barbas[i];
    }
  }
  return "Barba não encontrada";
}

function verificaStatusBarbearia() {
  if (barbearia.estaAberto) {
    return "Estamos abertos";
  } else {
    return "Estamos fechados";
  }
}

function retornaTodosCortes() {
  return barbearia.cortes;
}

function retornaTodasBarbas() {
  return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
  const corte = buscaCortePorId(corteId);
  const barba = buscaBarbaPorId(barbaId);

  const pedido = {
    nome: nomeCliente,
    pedidoCorte: corte.tipo,
    pedidoCortePreco: corte.valor,
    pedidoBarba: barba.tipo,
    pedidoBarbaPreco: barba.valor
  };

  return pedido;
}

// Corrigido para alinhar com a ordem de parâmetros esperada pelo teste
function atualizarServico(lista, id, valor, tipo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      lista[i].tipo = tipo;
      lista[i].valor = valor;
      break;
    }
  }
  return lista;
}

function calculaTotal(pedido) {
  return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
