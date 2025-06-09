// Base de Dados de Compatibilidade Numerológica

/**
 * Base de dados de compatibilidade entre números do destino
 */
const compatibilityDatabase = {
    // Número 1 - Líder, Independente, Pioneiro
    "1-1": {
        compatibility: 75,
        title: "Dois Líderes Unidos",
        description: "Casal dinâmico e ambicioso, com grande potencial para conquistas conjuntas. Ambos são independentes e determinados.",
        strengths: ["Ambição compartilhada", "Independência mútua", "Energia para projetos"],
        challenges: ["Competição entre si", "Dificuldade em ceder", "Egos conflitantes"],
        advice: "Aprendam a trabalhar em equipe e definam áreas de liderança para cada um."
    },
    "1-2": {
        compatibility: 85,
        title: "Líder e Colaborador",
        description: "Combinação harmoniosa onde um lidera e o outro apoia. Equilíbrio entre ação e diplomacia.",
        strengths: ["Complementaridade natural", "Equilíbrio de energias", "Apoio mútuo"],
        challenges: ["Possível dependência", "Diferenças de ritmo", "Necessidade de espaço"],
        advice: "O número 1 deve valorizar a sensibilidade do 2, e o 2 deve apoiar a independência do 1."
    },
    "1-3": {
        compatibility: 80,
        title: "Ação e Criatividade",
        description: "União entre determinação e criatividade. O 1 traz foco e o 3 traz inspiração e alegria.",
        strengths: ["Projetos criativos", "Energia positiva", "Inovação constante"],
        challenges: ["Dispersão de energia", "Diferenças de prioridades", "Impaciência"],
        advice: "Canalizem a criatividade em projetos concretos e mantenham o foco nos objetivos."
    },
    "1-4": {
        compatibility: 70,
        title: "Visão e Estrutura",
        description: "O 1 traz visão e iniciativa, enquanto o 4 oferece estabilidade e organização para concretizar sonhos.",
        strengths: ["Realização de objetivos", "Estabilidade financeira", "Projetos duradouros"],
        challenges: ["Ritmos diferentes", "Impaciência vs cautela", "Rigidez vs flexibilidade"],
        advice: "Respeitem os diferentes ritmos e combinem visão com planejamento cuidadoso."
    },
    "1-5": {
        compatibility: 90,
        title: "Par Ativo e Dinâmico",
        description: "Casal cheio de ideias, aventureiro e dinâmico. Ambos amam liberdade e novas experiências.",
        strengths: ["Aventuras constantes", "Liberdade mútua", "Energia inesgotável"],
        challenges: ["Falta de estabilidade", "Dificuldade de compromisso", "Dispersão"],
        advice: "Mantenham a aventura mas criem algumas bases sólidas para o relacionamento."
    },
    "1-6": {
        compatibility: 75,
        title: "Liderança e Cuidado",
        description: "O 1 lidera enquanto o 6 cuida e nutre. Combinação que pode criar um lar harmonioso e próspero.",
        strengths: ["Lar harmonioso", "Responsabilidade compartilhada", "Cuidado mútuo"],
        challenges: ["Excesso de responsabilidades", "Diferenças de prioridades", "Possessividade"],
        advice: "Equilibrem ambição profissional com vida familiar e respeitem as necessidades de cada um."
    },
    "1-7": {
        compatibility: 65,
        title: "Ação e Reflexão",
        description: "Pode haver distância emocional, mas ambos são independentes. O 1 age, o 7 reflete.",
        strengths: ["Independência mútua", "Crescimento pessoal", "Respeito ao espaço"],
        challenges: ["Distância emocional", "Falta de intimidade", "Comunicação limitada"],
        advice: "Façam esforço consciente para se conectar emocionalmente e compartilhar sentimentos."
    },
    "1-8": {
        compatibility: 85,
        title: "Poder e Sucesso",
        description: "Casal focado em conquistas materiais e sucesso. Ambos são ambiciosos e determinados.",
        strengths: ["Sucesso material", "Ambição compartilhada", "Poder conjunto"],
        challenges: ["Materialismo excessivo", "Competição", "Stress por sucesso"],
        advice: "Lembrem-se de cultivar a intimidade emocional além das conquistas materiais."
    },
    "1-9": {
        compatibility: 70,
        title: "Liderança e Humanitarismo",
        description: "O 1 foca em objetivos pessoais, o 9 em causas maiores. Podem inspirar-se mutuamente.",
        strengths: ["Visão ampla", "Projetos significativos", "Crescimento mútuo"],
        challenges: ["Diferentes prioridades", "Conflito ego vs altruísmo", "Dispersão de energia"],
        advice: "Encontrem causas que unam ambição pessoal com bem maior."
    },
    "2-2": {
        compatibility: 80,
        title: "Harmonia Dupla",
        description: "Relacionamento muito harmonioso e sensível. Ambos valorizam a paz e a cooperação.",
        strengths: ["Harmonia constante", "Sensibilidade mútua", "Cooperação natural"],
        challenges: ["Falta de iniciativa", "Indecisão conjunta", "Passividade"],
        advice: "Um de vocês precisa tomar mais iniciativa para que o relacionamento avance."
    },
    "2-3": {
        compatibility: 85,
        title: "Sensibilidade e Alegria",
        description: "O 2 oferece estabilidade emocional e o 3 traz alegria e criatividade ao relacionamento.",
        strengths: ["Equilíbrio emocional", "Criatividade", "Comunicação fluida"],
        challenges: ["Sensibilidade excessiva", "Dispersão vs foco", "Mudanças de humor"],
        advice: "O 3 deve ser mais sensível e o 2 mais expressivo para manter o equilíbrio."
    },
    "2-4": {
        compatibility: 90,
        title: "Cooperação e Estabilidade",
        description: "Combinação muito estável e harmoniosa. Ambos valorizam segurança e construção gradual.",
        strengths: ["Estabilidade total", "Construção sólida", "Confiança mútua"],
        challenges: ["Rotina excessiva", "Falta de aventura", "Resistência a mudanças"],
        advice: "Introduzam novidades gradualmente para manter o relacionamento interessante."
    },
    "2-5": {
        compatibility: 65,
        title: "Estabilidade vs Liberdade",
        description: "O 2 busca segurança enquanto o 5 quer liberdade. Podem aprender muito um com o outro.",
        strengths: ["Crescimento mútuo", "Equilíbrio", "Novas experiências"],
        challenges: ["Necessidades opostas", "Insegurança vs aventura", "Ritmos diferentes"],
        advice: "Encontrem um meio-termo entre segurança e aventura que satisfaça ambos."
    },
    "2-6": {
        compatibility: 95,
        title: "Amor e Estabilidade",
        description: "Relacionamento amoroso, afetuoso e muito estável. Ambos valorizam família e harmonia.",
        strengths: ["Amor profundo", "Família unida", "Cuidado mútuo"],
        challenges: ["Possessividade", "Dependência emocional", "Resistência a mudanças"],
        advice: "Mantenham individualidade dentro da união e cultivem interesses próprios."
    },
    "2-7": {
        compatibility: 70,
        title: "Sensibilidade e Introspecção",
        description: "Ambos são sensíveis e introspectivos. Podem criar uma conexão profunda e espiritual.",
        strengths: ["Conexão profunda", "Compreensão mútua", "Crescimento espiritual"],
        challenges: ["Isolamento social", "Melancolia", "Falta de ação"],
        advice: "Equilibrem a introspecção com atividades sociais e projetos práticos."
    },
    "2-8": {
        compatibility: 75,
        title: "Sensibilidade e Ambição",
        description: "O 2 oferece apoio emocional para as ambições do 8, criando uma base sólida para o sucesso.",
        strengths: ["Apoio incondicional", "Sucesso equilibrado", "Estabilidade emocional"],
        challenges: ["Pressão por sucesso", "Negligência emocional", "Stress"],
        advice: "O 8 deve valorizar o apoio emocional do 2 e não negligenciar a intimidade."
    },
    "2-9": {
        compatibility: 80,
        title: "Cooperação e Compaixão",
        description: "Ambos são compassivos e cooperativos. Podem trabalhar juntos em causas humanitárias.",
        strengths: ["Compaixão mútua", "Trabalho humanitário", "Sensibilidade social"],
        challenges: ["Idealismo excessivo", "Falta de praticidade", "Dispersão"],
        advice: "Mantenham os pés no chão enquanto trabalham por ideais elevados."
    },
    "3-3": {
        compatibility: 85,
        title: "Criatividade Dupla",
        description: "Casal muito criativo e comunicativo. Relacionamento cheio de alegria, arte e expressão.",
        strengths: ["Criatividade infinita", "Comunicação excelente", "Alegria constante"],
        challenges: ["Dispersão de energia", "Falta de foco", "Superficialidade"],
        advice: "Canalizem a criatividade em projetos concretos e mantenham disciplina."
    },
    "3-4": {
        compatibility: 70,
        title: "Criatividade e Estrutura",
        description: "O 3 traz inspiração e o 4 oferece estrutura para materializar as ideias criativas.",
        strengths: ["Projetos criativos realizados", "Equilíbrio", "Produtividade"],
        challenges: ["Ritmos diferentes", "Impaciência vs cautela", "Conflito liberdade vs rotina"],
        advice: "O 4 deve dar espaço para criatividade e o 3 deve aceitar alguma estrutura."
    },
    "3-5": {
        compatibility: 90,
        title: "Criatividade e Aventura",
        description: "Casal dinâmico, criativo e aventureiro. Relacionamento cheio de novidades e experiências.",
        strengths: ["Aventuras criativas", "Liberdade mútua", "Experiências únicas"],
        challenges: ["Instabilidade", "Falta de compromisso", "Dispersão total"],
        advice: "Criem algumas bases sólidas para dar estabilidade ao relacionamento."
    },
    "3-6": {
        compatibility: 80,
        title: "Criatividade e Cuidado",
        description: "O 3 traz alegria e criatividade, o 6 oferece cuidado e responsabilidade familiar.",
        strengths: ["Família criativa", "Lar alegre", "Equilíbrio responsabilidade-diversão"],
        challenges: ["Responsabilidades vs liberdade", "Diferentes prioridades", "Stress familiar"],
        advice: "Equilibrem diversão com responsabilidades familiares."
    },
    "3-7": {
        compatibility: 65,
        title: "Expressão e Introspecção",
        description: "O 3 é extrovertido e o 7 introvertido. Podem complementar-se se houver compreensão mútua.",
        strengths: ["Crescimento pessoal", "Equilíbrio social", "Aprendizado mútuo"],
        challenges: ["Necessidades sociais opostas", "Comunicação difícil", "Incompreensão"],
        advice: "Respeitem as diferentes necessidades sociais e encontrem atividades que ambos gostem."
    },
    "3-8": {
        compatibility: 75,
        title: "Criatividade e Sucesso",
        description: "O 3 traz criatividade para os negócios do 8, que oferece estrutura para materializar ideias.",
        strengths: ["Negócios criativos", "Sucesso inovador", "Complementaridade"],
        challenges: ["Prioridades diferentes", "Pressão por resultados", "Conflito arte vs dinheiro"],
        advice: "Encontrem formas de monetizar a criatividade sem perder a essência artística."
    },
    "3-9": {
        compatibility: 95,
        title: "Criatividade e Compaixão",
        description: "Conexão criativa, generosa e emocional. Ambos são expressivos e compassivos.",
        strengths: ["Expressão emocional", "Projetos humanitários", "Criatividade com propósito"],
        challenges: ["Sensibilidade excessiva", "Idealismo", "Dispersão emocional"],
        advice: "Canalizem a sensibilidade em projetos que ajudem outras pessoas."
    },
    "4-4": {
        compatibility: 85,
        title: "Estabilidade Total",
        description: "Relacionamento muito estável e organizado. Ambos valorizam segurança e trabalho duro.",
        strengths: ["Estabilidade máxima", "Organização perfeita", "Segurança financeira"],
        challenges: ["Rotina excessiva", "Falta de espontaneidade", "Rigidez"],
        advice: "Introduzam novidades e espontaneidade para manter o relacionamento vivo."
    },
    "4-5": {
        compatibility: 60,
        title: "Estabilidade vs Liberdade",
        description: "O 4 busca segurança e o 5 quer liberdade. Diferenças fundamentais que requerem compreensão.",
        strengths: ["Equilíbrio", "Crescimento mútuo", "Complementaridade"],
        challenges: ["Necessidades opostas", "Conflitos constantes", "Incompreensão"],
        advice: "Encontrem compromissos que ofereçam segurança com alguma liberdade."
    },
    "4-6": {
        compatibility: 90,
        title: "Responsabilidade e Cuidado",
        description: "Ambos são responsáveis e focados na família. Relacionamento muito estável e cuidadoso.",
        strengths: ["Família sólida", "Responsabilidade compartilhada", "Cuidado mútuo"],
        challenges: ["Excesso de responsabilidades", "Falta de diversão", "Stress"],
        advice: "Reservem tempo para diversão e relaxamento além das responsabilidades."
    },
    "4-7": {
        compatibility: 75,
        title: "Praticidade e Sabedoria",
        description: "O 4 oferece praticidade e o 7 traz sabedoria. Podem construir algo sólido e significativo.",
        strengths: ["Projetos significativos", "Sabedoria prática", "Crescimento espiritual"],
        challenges: ["Isolamento social", "Excesso de seriedade", "Falta de leveza"],
        advice: "Equilibrem seriedade com momentos de leveza e socialização."
    },
    "4-8": {
        compatibility: 95,
        title: "Segurança e Conquistas",
        description: "Casal com foco em segurança e conquistas materiais. Muito compatíveis em objetivos.",
        strengths: ["Sucesso material garantido", "Segurança total", "Objetivos alinhados"],
        challenges: ["Materialismo excessivo", "Workaholic", "Negligência emocional"],
        advice: "Lembrem-se de cultivar a vida emocional além das conquistas materiais."
    },
    "4-9": {
        compatibility: 70,
        title: "Praticidade e Idealismo",
        description: "O 4 traz praticidade para os ideais do 9, que inspira o 4 a pensar além do material.",
        strengths: ["Ideais realizáveis", "Projetos humanitários práticos", "Equilíbrio"],
        challenges: ["Diferentes prioridades", "Conflito prático vs ideal", "Ritmos diferentes"],
        advice: "Combinem praticidade com idealismo para criar projetos que realmente ajudem."
    },
    "5-5": {
        compatibility: 80,
        title: "Liberdade Dupla",
        description: "Casal muito livre e aventureiro. Relacionamento dinâmico com muitas experiências.",
        strengths: ["Aventuras constantes", "Liberdade total", "Experiências únicas"],
        challenges: ["Falta de compromisso", "Instabilidade", "Dispersão"],
        advice: "Criem alguns compromissos básicos para dar estabilidade ao relacionamento."
    },
    "5-6": {
        compatibility: 65,
        title: "Liberdade vs Responsabilidade",
        description: "O 5 quer liberdade e o 6 busca responsabilidade familiar. Necessitam de equilíbrio.",
        strengths: ["Crescimento mútuo", "Equilíbrio", "Aprendizado"],
        challenges: ["Necessidades opostas", "Conflitos de prioridades", "Stress"],
        advice: "O 6 deve dar espaço e o 5 deve assumir algumas responsabilidades."
    },
    "5-7": {
        compatibility: 70,
        title: "Aventura e Reflexão",
        description: "O 5 traz experiências e o 7 oferece reflexão. Podem aprender muito juntos.",
        strengths: ["Crescimento pessoal", "Experiências profundas", "Sabedoria"],
        challenges: ["Necessidades sociais diferentes", "Ritmos opostos", "Incompreensão"],
        advice: "Respeitem os diferentes ritmos e necessidades de socialização."
    },
    "5-8": {
        compatibility: 75,
        title: "Liberdade e Ambição",
        description: "O 5 pode trazer criatividade para os negócios do 8, que oferece estabilidade financeira.",
        strengths: ["Negócios inovadores", "Sucesso criativo", "Liberdade financeira"],
        challenges: ["Prioridades diferentes", "Conflito liberdade vs compromisso", "Stress"],
        advice: "Encontrem formas de ter sucesso que preservem a liberdade pessoal."
    },
    "5-9": {
        compatibility: 85,
        title: "Liberdade e Compaixão",
        description: "Ambos são livres e compassivos. Podem viajar e ajudar pessoas pelo mundo.",
        strengths: ["Viagens humanitárias", "Liberdade com propósito", "Experiências significativas"],
        challenges: ["Falta de estabilidade", "Idealismo excessivo", "Dispersão"],
        advice: "Canalizem a liberdade em projetos que realmente façam diferença."
    },
    "6-6": {
        compatibility: 90,
        title: "Cuidado Duplo",
        description: "Relacionamento muito amoroso e cuidadoso. Ambos priorizam família e harmonia.",
        strengths: ["Amor profundo", "Família perfeita", "Cuidado mútuo"],
        challenges: ["Possessividade", "Dependência", "Sacrifício excessivo"],
        advice: "Mantenham individualidade e não se sacrifiquem demais pelo outro."
    },
    "6-7": {
        compatibility: 75,
        title: "Cuidado e Sabedoria",
        description: "O 6 cuida e o 7 oferece sabedoria. Podem criar um relacionamento profundo e significativo.",
        strengths: ["Relacionamento profundo", "Cuidado sábio", "Crescimento espiritual"],
        challenges: ["Diferentes necessidades sociais", "Isolamento", "Melancolia"],
        advice: "Equilibrem cuidado com crescimento pessoal e mantenham conexões sociais."
    },
    "6-8": {
        compatibility: 80,
        title: "Cuidado e Sucesso",
        description: "O 6 oferece apoio familiar para as ambições do 8. Podem construir um império familiar.",
        strengths: ["Sucesso familiar", "Apoio incondicional", "Estabilidade"],
        challenges: ["Pressão por sucesso", "Negligência familiar", "Stress"],
        advice: "O 8 deve equilibrar ambição com tempo de qualidade em família."
    },
    "6-9": {
        compatibility: 85,
        title: "Cuidado e Compaixão",
        description: "Ambos são cuidadores e compassivos. Relacionamento muito amoroso e humanitário.",
        strengths: ["Amor universal", "Trabalho humanitário", "Família amorosa"],
        challenges: ["Sacrifício excessivo", "Idealismo", "Negligência própria"],
        advice: "Cuidem de si mesmos também e não se sacrifiquem excessivamente pelos outros."
    },
    "7-7": {
        compatibility: 80,
        title: "Sabedoria Dupla",
        description: "Relacionamento muito profundo e espiritual. Ambos buscam crescimento interior.",
        strengths: ["Conexão espiritual", "Crescimento mútuo", "Sabedoria compartilhada"],
        challenges: ["Isolamento social", "Melancolia", "Falta de praticidade"],
        advice: "Equilibrem crescimento espiritual com vida social e atividades práticas."
    },
    "7-8": {
        compatibility: 70,
        title: "Sabedoria e Poder",
        description: "O 7 oferece sabedoria para as ambições do 8. Podem criar sucesso com significado.",
        strengths: ["Sucesso consciente", "Sabedoria prática", "Crescimento"],
        challenges: ["Prioridades diferentes", "Materialismo vs espiritualidade", "Stress"],
        advice: "Encontrem formas de ter sucesso que estejam alinhadas com valores espirituais."
    },
    "7-9": {
        compatibility: 85,
        title: "Sabedoria e Compaixão",
        description: "Ambos são espirituais e compassivos. Relacionamento muito profundo e significativo.",
        strengths: ["Conexão espiritual profunda", "Trabalho humanitário", "Sabedoria compassiva"],
        challenges: ["Idealismo excessivo", "Falta de praticidade", "Melancolia"],
        advice: "Mantenham os pés no chão enquanto trabalham por ideais elevados."
    },
    "8-8": {
        compatibility: 85,
        title: "Poder Duplo",
        description: "Casal muito ambicioso e poderoso. Podem construir um império juntos.",
        strengths: ["Sucesso garantido", "Poder conjunto", "Ambição compartilhada"],
        challenges: ["Competição", "Materialismo excessivo", "Negligência emocional"],
        advice: "Trabalhem juntos ao invés de competir e cultivem a intimidade emocional."
    },
    "8-9": {
        compatibility: 75,
        title: "Poder e Compaixão",
        description: "O 8 tem poder material e o 9 tem compaixão. Podem usar recursos para ajudar outros.",
        strengths: ["Poder com propósito", "Recursos para ajudar", "Impacto social"],
        challenges: ["Prioridades diferentes", "Conflito material vs espiritual", "Stress"],
        advice: "Usem o sucesso material para fazer diferença positiva no mundo."
    },
    "9-9": {
        compatibility: 90,
        title: "Compaixão Dupla",
        description: "Relacionamento muito compassivo e humanitário. Ambos querem ajudar o mundo.",
        strengths: ["Amor universal", "Trabalho humanitário", "Compaixão infinita"],
        challenges: ["Idealismo excessivo", "Negligência própria", "Falta de praticidade"],
        advice: "Cuidem de si mesmos e do relacionamento enquanto ajudam outros."
    },
    "11-11": {
        compatibility: 95,
        title: "Intuição Dupla",
        description: "Relacionamento muito espiritual e intuitivo. Conexão quase telepática.",
        strengths: ["Conexão espiritual profunda", "Intuição compartilhada", "Inspiração mútua"],
        challenges: ["Sensibilidade excessiva", "Instabilidade emocional", "Pressão espiritual"],
        advice: "Mantenham equilíbrio emocional e não se sobrecarreguem com responsabilidades espirituais."
    },
    "22-22": {
        compatibility: 90,
        title: "Mestres Construtores",
        description: "Casal com potencial para construir algo grandioso e duradouro para a humanidade.",
        strengths: ["Projetos grandiosos", "Impacto mundial", "Construção duradoura"],
        challenges: ["Pressão extrema", "Perfeccionismo", "Stress"],
        advice: "Lembrem-se de que são humanos e precisam de descanso e diversão também."
    },
    "33-33": {
        compatibility: 95,
        title: "Mestres Professores",
        description: "Relacionamento dedicado ao ensino e elevação da humanidade. Amor universal.",
        strengths: ["Ensino conjunto", "Amor universal", "Elevação espiritual"],
        challenges: ["Sacrifício excessivo", "Pressão para ser perfeito", "Negligência pessoal"],
        advice: "Cuidem de si mesmos para poderem cuidar melhor dos outros."
    }
};

/**
 * Função para obter análise de compatibilidade entre dois números
 * @param {number} num1 - Primeiro número do destino
 * @param {number} num2 - Segundo número do destino
 * @returns {object} - Análise de compatibilidade
 */
export function getCompatibilityAnalysis(num1, num2) {
    // Cria a chave para busca (sempre o menor número primeiro)
    const key = num1 <= num2 ? `${num1}-${num2}` : `${num2}-${num1}`;
    
    // Retorna a análise ou uma análise padrão se não encontrar
    return compatibilityDatabase[key] || {
        compatibility: 70,
        title: "Combinação Única",
        description: "Esta é uma combinação especial que requer análise individual.",
        strengths: ["Crescimento mútuo", "Aprendizado", "Experiências únicas"],
        challenges: ["Necessidades diferentes", "Compreensão mútua", "Paciência"],
        advice: "Conversem abertamente sobre suas necessidades e encontrem formas de se complementar."
    };
}

export { compatibilityDatabase };

