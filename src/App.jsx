import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, Star, Sparkles, Calculator, BookOpen, Info, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Importar funções de cálculo
import { calculateDestinyNumber, calculateAllNumbers } from './lib/numerologia_calculos.js'
import { getCompatibilityAnalysis } from './lib/compatibilidade_database.js'

function App() {
  const [person1, setPerson1] = useState({ name: '', birthDate: '' })
  const [person2, setPerson2] = useState({ name: '', birthDate: '' })
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [currentPage, setCurrentPage] = useState('home') // 'home', 'about', 'destiny', 'expression', 'soul', 'personality'

  const handleCalculate = async () => {
    if (!person1.name || !person1.birthDate || !person2.name || !person2.birthDate) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    setIsCalculating(true)
    
    // Simular um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 1000))

    try {
      // Calcular números para ambas as pessoas
      const numbers1 = calculateAllNumbers(person1.name, person1.birthDate)
      const numbers2 = calculateAllNumbers(person2.name, person2.birthDate)

      // Obter análise de compatibilidade
      const compatibility = getCompatibilityAnalysis(numbers1.destiny, numbers2.destiny)

      setResults({
        person1: { ...person1, numbers: numbers1 },
        person2: { ...person2, numbers: numbers2 },
        compatibility
      })
    } catch (error) {
      alert('Erro ao calcular. Verifique os dados inseridos.')
    }

    setIsCalculating(false)
  }

  const handleReset = () => {
    setPerson1({ name: '', birthDate: '' })
    setPerson2({ name: '', birthDate: '' })
    setResults(null)
    setCurrentPage('home')
  }

  const renderAboutPage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <Button 
              variant="ghost" 
              onClick={() => setCurrentPage('home')}
              className="p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <CardTitle className="text-3xl">O que é a Numerologia?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            A numerologia é uma antiga ciência que estuda a relação mística entre os números e os eventos da vida. Cada número possui uma vibração e um significado único, influenciando nossa personalidade, destino e as dinâmicas de nossos relacionamentos. Longe de ser uma mera adivinhação, a numerologia oferece um mapa de autoconhecimento e compreensão das energias que nos cercam.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Como a Numerologia é Calculada?</h3>
          <p className="text-lg leading-relaxed mb-6">
            Os cálculos numerológicos são baseados em datas de nascimento e nomes completos. Através de métodos específicos, como a redução teosófica (somar os dígitos de um número até chegar a um único dígito, ou a um número mestre como 11, 22 ou 33), transformamos essas informações em números que revelam aspectos profundos de quem somos e de como interagimos com o mundo.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">A Importância da Numerologia para um Casal</h3>
          <p className="text-lg leading-relaxed mb-4">
            Para um casal, a numerologia é uma ferramenta poderosa de compatibilidade e crescimento mútuo. Ao analisar os números de destino, expressão, alma e personalidade de cada parceiro, é possível:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 text-pink-700 dark:text-pink-300">Compreender as Dinâmicas</h4>
                <p>Revela os pontos fortes naturais da união, as áreas onde há harmonia e as que podem exigir mais atenção e compreensão.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 text-purple-700 dark:text-purple-300">Identificar Desafios</h4>
                <p>Ajuda a prever possíveis atritos ou desafios, oferecendo insights sobre como superá-los e transformá-los em oportunidades de crescimento.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 text-indigo-700 dark:text-indigo-300">Aprofundar a Conexão</h4>
                <p>Ao entender as motivações, desejos e a forma de expressão de cada um, o casal pode desenvolver uma comunicação mais eficaz e uma empatia mais profunda.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-300">Promover Autoconhecimento</h4>
                <p>Cada parceiro aprende mais sobre si mesmo através da lente do outro, fomentando o crescimento individual dentro do relacionamento.</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg leading-relaxed">
            Em essência, a numerologia para casais não é sobre prever o futuro, mas sim sobre fornecer um guia para navegar as complexidades do amor e da parceria com maior consciência e harmonia. É um convite para explorar as vibrações numéricas que unem duas almas, transformando o relacionamento em uma jornada de descoberta e evolução contínua.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )

  const renderNumberPage = (type) => {
    const content = {
      destiny: {
        title: "Número do Destino",
        description: "O Número do Destino, também conhecido como Número do Caminho da Vida, é considerado o mais importante na numerologia, pois revela o propósito maior da sua existência, as lições que você veio aprender e os desafios que provavelmente enfrentará.",
        calculation: "O Número do Destino é calculado a partir da sua data de nascimento completa (dia, mês e ano). O processo envolve somar cada dígito da data até que se obtenha um único dígito (de 1 a 9), ou um dos Números Mestres (11, 22 ou 33).",
        example: "Data de Nascimento: 14 de Junho de 1985 (14/06/1985)\n1. Some os dígitos do dia: 1 + 4 = 5\n2. Some os dígitos do mês: 0 + 6 = 6\n3. Some os dígitos do ano: 1 + 9 + 8 + 5 = 23\n4. Reduza o resultado do ano: 2 + 3 = 5\n5. Some os resultados: 5 + 6 + 5 = 16\n6. Reduza o resultado final: 1 + 6 = 7",
        meanings: [
          { number: 1, meaning: "Liderança, independência, pioneirismo, ambição" },
          { number: 2, meaning: "Cooperação, diplomacia, sensibilidade, parceria" },
          { number: 3, meaning: "Criatividade, comunicação, otimismo, expressão" },
          { number: 4, meaning: "Estabilidade, trabalho duro, organização, construção" },
          { number: 5, meaning: "Liberdade, aventura, adaptabilidade, mudança" },
          { number: 6, meaning: "Responsabilidade, harmonia, família, serviço" },
          { number: 7, meaning: "Espiritualidade, introspecção, análise, busca pelo conhecimento" },
          { number: 8, meaning: "Poder, sucesso material, autoridade, justiça" },
          { number: 9, meaning: "Humanitarismo, compaixão, altruísmo, sabedoria" },
          { number: 11, meaning: "Intuição, iluminação, inspiração, idealismo" },
          { number: 22, meaning: "Mestre Construtor, grandes realizações, pragmatismo, visão" },
          { number: 33, meaning: "Mestre Curador, amor incondicional, serviço universal, compaixão extrema" }
        ]
      },
      expression: {
        title: "Número da Expressão",
        description: "O Número da Expressão revela seus talentos naturais, habilidades inatas e o potencial que você tem para se expressar no mundo. Ele descreve como você se apresenta, suas aptidões e a maneira como você interage com o ambiente e as pessoas ao seu redor.",
        calculation: "O Número da Expressão é calculado a partir da soma dos valores numéricos de TODAS as letras do seu nome completo de nascimento. Utiliza-se a Tabela Pitagórica, que atribui um valor de 1 a 9 para cada letra do alfabeto.",
        example: "Nome: MARIA SILVA SANTOS\nM(4) + A(1) + R(9) + I(9) + A(1) = 24\nS(1) + I(9) + L(3) + V(4) + A(1) = 18\nS(1) + A(1) + N(5) + T(2) + O(6) + S(1) = 16\nSoma total: 24 + 18 + 16 = 58\nRedução: 5 + 8 = 13 → 1 + 3 = 4",
        meanings: [
          { number: 1, meaning: "Liderança, originalidade, iniciativa, autoconfiança" },
          { number: 2, meaning: "Cooperação, diplomacia, sensibilidade, trabalho em equipe" },
          { number: 3, meaning: "Criatividade, comunicação, otimismo, expressão artística" },
          { number: 4, meaning: "Organização, praticidade, disciplina, construção, trabalho duro" },
          { number: 5, meaning: "Versatilidade, adaptabilidade, liberdade, comunicação, aventura" },
          { number: 6, meaning: "Responsabilidade, serviço, harmonia, cuidado, ensino" },
          { number: 7, meaning: "Análise, introspecção, pesquisa, espiritualidade, perfeccionismo" },
          { number: 8, meaning: "Poder, autoridade, sucesso material, organização, justiça" },
          { number: 9, meaning: "Humanitarismo, compaixão, idealismo, sabedoria, altruísmo" },
          { number: 11, meaning: "Intuição, inspiração, idealismo, capacidade de liderar pelo exemplo" },
          { number: 22, meaning: "Grandes realizações, capacidade de construir em larga escala, visão prática" },
          { number: 33, meaning: "Mestre Curador, serviço universal, amor incondicional, grande compaixão" }
        ]
      },
      soul: {
        title: "Número da Alma",
        description: "O Número da Alma revela seus desejos mais profundos, suas motivações internas, o que realmente te move e te traz satisfação. Ele representa a sua essência, o que você anseia secretamente e o que te faz sentir completo e feliz.",
        calculation: "O Número da Alma é calculado a partir da soma dos valores numéricos de apenas as VOGAIS do seu nome completo de nascimento (A, E, I, O, U). Utiliza-se a mesma Tabela Pitagórica usada para o Número da Expressão.",
        example: "Nome: MARIA SILVA SANTOS\nVogais: A(1) + I(9) + A(1) + I(9) + A(1) + A(1) + O(6)\nSoma: 1 + 9 + 1 + 9 + 1 + 1 + 6 = 28\nRedução: 2 + 8 = 10 → 1 + 0 = 1",
        meanings: [
          { number: 1, meaning: "Desejo de independência, liderança, ser o primeiro, originalidade" },
          { number: 2, meaning: "Desejo de harmonia, parceria, amor, paz, cooperação" },
          { number: 3, meaning: "Desejo de alegria, criatividade, expressão, socialização, otimismo" },
          { number: 4, meaning: "Desejo de segurança, estabilidade, ordem, construção, trabalho duro" },
          { number: 5, meaning: "Desejo de liberdade, aventura, mudança, variedade, comunicação" },
          { number: 6, meaning: "Desejo de responsabilidade, serviço, família, comunidade, harmonia" },
          { number: 7, meaning: "Desejo de conhecimento, verdade, introspecção, espiritualidade, perfeição" },
          { number: 8, meaning: "Desejo de poder, sucesso material, reconhecimento, controle, justiça" },
          { number: 9, meaning: "Desejo de humanitarismo, compaixão, serviço universal, altruísmo" },
          { number: 11, meaning: "Desejo de inspiração, iluminação, liderar espiritualmente, idealismo" },
          { number: 22, meaning: "Desejo de construir algo de grande impacto, realizar sonhos grandiosos" },
          { number: 33, meaning: "Desejo de servir a humanidade com amor incondicional, ser um mestre curador" }
        ]
      },
      personality: {
        title: "Número da Personalidade",
        description: "O Número da Personalidade revela a forma como você é percebido pelas outras pessoas à primeira vista. Ele representa a sua 'fachada', as características que você mostra ao mundo e que atraem ou repelem as pessoas.",
        calculation: "O Número da Personalidade é calculado a partir da soma dos valores numéricos de apenas as CONSOANTES do seu nome completo de nascimento. Utiliza-se a mesma Tabela Pitagórica.",
        example: "Nome: MARIA SILVA SANTOS\nConsoantes: M(4) + R(9) + S(1) + L(3) + V(4) + S(1) + N(5) + T(2) + S(1)\nSoma: 4 + 9 + 1 + 3 + 4 + 1 + 5 + 2 + 1 = 30\nRedução: 3 + 0 = 3",
        meanings: [
          { number: 1, meaning: "Forte, independente, líder, confiante, original" },
          { number: 2, meaning: "Gentil, cooperativa, diplomática, amigável, receptiva" },
          { number: 3, meaning: "Carismática, comunicativa, otimista, divertida, expressiva" },
          { number: 4, meaning: "Confiável, prática, organizada, trabalhadora, séria" },
          { number: 5, meaning: "Aventureira, versátil, curiosa, sociável, energética" },
          { number: 6, meaning: "Responsável, acolhedora, protetora, harmoniosa, confiável" },
          { number: 7, meaning: "Misteriosa, reservada, intelectual, analítica, espiritual" },
          { number: 8, meaning: "Poderosa, ambiciosa, bem-sucedida, autoritária, confiante" },
          { number: 9, meaning: "Compassiva, idealista, sábia, humanitária, inspiradora" },
          { number: 11, meaning: "Inspiradora, intuitiva, carismática, visionária" },
          { number: 22, meaning: "Construtora, prática, visionária, com grande presença" },
          { number: 33, meaning: "Amorosa, compassiva, com forte presença e capacidade de cura" }
        ]
      }
    }

    const pageContent = content[type]

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentPage('home')}
                className="p-2"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <CardTitle className="text-3xl">{pageContent.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              {pageContent.description}
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Como é Calculado?</h3>
            <p className="text-lg leading-relaxed mb-4">
              {pageContent.calculation}
            </p>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 my-6">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700 dark:text-blue-300">Exemplo de Cálculo</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-line text-sm bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  {pageContent.example}
                </pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Significados dos Números</h3>
            <div className="grid gap-4">
              {pageContent.meanings.map((item, index) => (
                <Card key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Badge variant="secondary" className="text-lg px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {item.number}
                      </Badge>
                      <p className="text-lg">{item.meaning}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8">
          {renderAboutPage()}
        </div>
      </div>
    )
  }

  if (['destiny', 'expression', 'soul', 'personality'].includes(currentPage)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8">
          {renderNumberPage(currentPage)}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-pink-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Numerologia de Casais
            </h1>
            <Heart className="h-8 w-8 text-pink-500" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Descubra a compatibilidade numerológica entre vocês através das datas de nascimento e nomes completos
          </p>
          
          {/* Menu de Navegação */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage('about')}
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              O que é Numerologia?
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage('destiny')}
              className="flex items-center gap-2"
            >
              <Info className="h-4 w-4" />
              Número do Destino
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage('expression')}
              className="flex items-center gap-2"
            >
              <Info className="h-4 w-4" />
              Número da Expressão
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage('soul')}
              className="flex items-center gap-2"
            >
              <Info className="h-4 w-4" />
              Número da Alma
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage('personality')}
              className="flex items-center gap-2"
            >
              <Info className="h-4 w-4" />
              Número da Personalidade
            </Button>
          </div>
        </motion.div>

        {!results ? (
          /* Formulário de Entrada */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Users className="h-6 w-6" />
                  Dados do Casal
                </CardTitle>
                <CardDescription>
                  Preencha as informações de ambas as pessoas para calcular a compatibilidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Pessoa 1 */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">Primeira Pessoa</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name1">Nome Completo</Label>
                        <Input
                          id="name1"
                          placeholder="Digite o nome completo"
                          value={person1.name}
                          onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="birth1">Data de Nascimento</Label>
                        <Input
                          id="birth1"
                          type="date"
                          value={person1.birthDate}
                          onChange={(e) => setPerson1({ ...person1, birthDate: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pessoa 2 */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">Segunda Pessoa</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name2">Nome Completo</Label>
                        <Input
                          id="name2"
                          placeholder="Digite o nome completo"
                          value={person2.name}
                          onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="birth2">Data de Nascimento</Label>
                        <Input
                          id="birth2"
                          type="date"
                          value={person2.birthDate}
                          onChange={(e) => setPerson2({ ...person2, birthDate: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    onClick={handleCalculate}
                    disabled={isCalculating}
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-3 text-lg"
                  >
                    {isCalculating ? (
                      <>
                        <Calculator className="h-5 w-5 mr-2 animate-spin" />
                        Calculando...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5 mr-2" />
                        Calcular Compatibilidade
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* Resultados */
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto space-y-8"
            >
              {/* Compatibilidade Principal */}
              <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl flex items-center justify-center gap-3">
                    <Star className="h-8 w-8 text-yellow-500" />
                    {results.compatibility.title}
                    <Star className="h-8 w-8 text-yellow-500" />
                  </CardTitle>
                  <div className="flex justify-center mt-4">
                    <Badge variant="secondary" className="text-2xl px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      {results.compatibility.compatibility}% de Compatibilidade
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-center text-muted-foreground mb-6">
                    {results.compatibility.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Pontos Fortes */}
                    <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-green-700 dark:text-green-300 text-lg">
                          ✨ Pontos Fortes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {results.compatibility.strengths.map((strength, index) => (
                            <li key={index} className="text-green-600 dark:text-green-400">
                              • {strength}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Desafios */}
                    <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
                      <CardHeader>
                        <CardTitle className="text-orange-700 dark:text-orange-300 text-lg">
                          ⚠️ Desafios
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {results.compatibility.challenges.map((challenge, index) => (
                            <li key={index} className="text-orange-600 dark:text-orange-400">
                              • {challenge}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Conselho */}
                    <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                      <CardHeader>
                        <CardTitle className="text-blue-700 dark:text-blue-300 text-lg">
                          💡 Conselho
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue-600 dark:text-blue-400">
                          {results.compatibility.advice}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Números Individuais */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Pessoa 1 */}
                <Card className="shadow-xl border-0 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">
                      {results.person1.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Número do Destino:</span>
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {results.person1.numbers.destiny}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Número da Expressão:</span>
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {results.person1.numbers.expression}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Número da Alma:</span>
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {results.person1.numbers.soul}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Número da Personalidade:</span>
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {results.person1.numbers.personality}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pessoa 2 */}
                <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">
                      {results.person2.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Número do Destino:</span>
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {results.person2.numbers.destiny}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Número da Expressão:</span>
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {results.person2.numbers.expression}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Número da Alma:</span>
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {results.person2.numbers.soul}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Número da Personalidade:</span>
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {results.person2.numbers.personality}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Botão para Nova Consulta */}
              <div className="text-center">
                <Button 
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Nova Consulta
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" />
            A numerologia é uma ferramenta de autoconhecimento e reflexão
            <Sparkles className="h-4 w-4" />
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default App

