type ErrorMessage = {
  title: string;
  description: string;
};

export const errorMessages: Record<number, ErrorMessage> = {
  400: {
    title: "Requisição Inválida",
    description:
      "A solicitação não pôde ser compreendida pelo servidor devido a uma sintaxe malformada.",
  },
  401: {
    title: "Não Autorizado",
    description: "A solicitação requer autenticação do usuário.",
  },
  403: {
    title: "Proibido",
    description:
      "O servidor entendeu a solicitação, mas se recusa a autorizá-la.",
  },
  404: {
    title: "Não Encontrado",
    description:
      "O servidor não encontrou nada que corresponda ao URI da solicitação.",
  },
  405: {
    title: "Método Não Permitido",
    description:
      "O método especificado na linha de solicitação não é permitido para o recurso identificado pelo URI da solicitação.",
  },
  406: {
    title: "Não Aceitável",
    description:
      "O recurso identificado pela solicitação é capaz de gerar apenas entidades de resposta com características de conteúdo não aceitáveis de acordo com os cabeçalhos de aceitação enviados na solicitação.",
  },
  407: {
    title: "Autenticação de Proxy Necessária",
    description: "O cliente deve primeiro se autenticar com o proxy.",
  },
  408: {
    title: "Tempo de Solicitação Esgotado",
    description: "O servidor esgotou o tempo de espera para a solicitação.",
  },
  409: {
    title: "Conflito",
    description:
      "A solicitação não pôde ser concluída devido a um conflito com o estado atual do recurso.",
  },
  410: {
    title: "Indisponível",
    description:
      "O recurso solicitado não está mais disponível no servidor e não há endereço de encaminhamento conhecido.",
  },
  411: {
    title: "Comprimento Necessário",
    description:
      "O servidor se recusa a aceitar a solicitação sem um Content-Length definido.",
  },
  412: {
    title: "Pré-condição Falhou",
    description:
      "A pré-condição dada na solicitação foi avaliada como falsa pelo servidor.",
  },
  413: {
    title: "Carga Muito Grande",
    description:
      "O servidor não aceitará a solicitação porque a carga da solicitação é muito grande.",
  },
  414: {
    title: "URI Muito Longo",
    description:
      "O servidor não aceitará a solicitação porque a URL é muito longa.",
  },
  415: {
    title: "Tipo de Mídia Não Suportado",
    description:
      "O servidor não aceitará a solicitação porque o tipo de mídia não é suportado.",
  },
  416: {
    title: "Intervalo Não Satisfatório",
    description:
      "O cliente solicitou uma parte do arquivo, mas o servidor não pode fornecer essa parte.",
  },
  417: {
    title: "Falha na Expectativa",
    description:
      "O servidor não pode atender aos requisitos do campo de cabeçalho Expect da solicitação.",
  },
  418: {
    title: "Eu sou um bule de chá",
    description:
      "Esta resposta de erro é dada quando o servidor se recusa a fazer café porque é, permanentemente, um bule de chá.",
  },
  421: {
    title: "Solicitação Mal Direcionada",
    description:
      "A solicitação foi direcionada para um servidor que não pode produzir uma resposta.",
  },
  422: {
    title: "Entidade Não Processável",
    description:
      "O servidor entende o tipo de conteúdo da entidade de solicitação e espera usá-lo para atualizar o servidor.",
  },
  423: {
    title: "Bloqueado",
    description: "O recurso de origem ou destino de um método está bloqueado.",
  },
  424: {
    title: "Falha de Dependência",
    description:
      "O método não pôde ser executado no recurso porque a ação solicitada dependia de outra ação que falhou.",
  },
  425: {
    title: "Muito Cedo",
    description:
      "O servidor se recusa a executar a solicitação usando o protocolo atual, mas pode estar disposto a fazê-lo no futuro.",
  },
  426: {
    title: "Atualização Necessária",
    description:
      "O servidor se recusa a executar a solicitação usando o protocolo atual, mas pode estar disposto a fazê-lo após o cliente atualizar para um protocolo diferente.",
  },
  428: {
    title: "Pré-condição Necessária",
    description:
      "O servidor de origem exige que a solicitação seja condicional.",
  },
  429: {
    title: "Muitas Solicitações",
    description:
      'O usuário enviou muitas solicitações em um determinado período de tempo ("limitação de taxa").',
  },
  431: {
    title: "Campos de Cabeçalho de Solicitação Muito Grandes",
    description:
      "O servidor se recusa a processar a solicitação porque seus campos de cabeçalho são muito grandes.",
  },
  451: {
    title: "Indisponível por Razões Legais",
    description:
      "Um operador de servidor recebeu uma demanda legal para negar acesso a um recurso ou a um conjunto de recursos que inclui o recurso solicitado.",
  },
  500: {
    title: "Erro Interno do Servidor",
    description:
      "O servidor encontrou uma condição inesperada que o impediu de atender à solicitação.",
  },
  501: {
    title: "Não Implementado",
    description:
      "O servidor não suporta a funcionalidade necessária para atender à solicitação.",
  },
  502: {
    title: "Gateway Ruim",
    description:
      "O servidor, ao atuar como um gateway ou proxy, recebeu uma resposta inválida do servidor upstream.",
  },
  503: {
    title: "Serviço Indisponível",
    description:
      "O servidor está temporariamente indisponível para lidar com a solicitação devido a sobrecarga ou manutenção do servidor.",
  },
  504: {
    title: "Tempo Limite do Gateway",
    description:
      "O servidor, ao atuar como um gateway ou proxy, não recebeu uma resposta oportuna do servidor upstream.",
  },
  505: {
    title: "Versão HTTP Não Suportada",
    description:
      "O servidor não suporta ou se recusa a suportar a versão do protocolo HTTP que foi usada na mensagem de solicitação.",
  },
  506: {
    title: "Variante Também Negocia",
    description:
      "A negociação transparente de conteúdo para a solicitação resulta em uma referência circular.",
  },
  507: {
    title: "Armazenamento Insuficiente",
    description:
      "O servidor é incapaz de armazenar a representação necessária para completar a solicitação.",
  },
  508: {
    title: "Loop Detectado",
    description:
      "O servidor detectou um loop infinito ao processar a solicitação (enviado em vez de 208).",
  },
  510: {
    title: "Não Estendido",
    description:
      "Extensões adicionais à solicitação são necessárias para que o servidor a cumpra.",
  },
  511: {
    title: "Autenticação de Rede Necessária",
    description: "O cliente precisa se autenticar para obter acesso à rede.",
  },
  999: {
    title: "Erro Desconhecido",
    description:
      "O servidor encontrou uma condição inesperada que o impediu de atender à solicitação.",
  },
};
