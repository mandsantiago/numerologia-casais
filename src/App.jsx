import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, Star, Sparkles, Calculator } from 'lucide-react'
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra a compatibilidade numerológica entre vocês através das datas de nascimento e nomes completos
          </p>
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
          <p>✨ A numerologia é uma ferramenta de autoconhecimento e reflexão ✨</p>
        </motion.div>
      </div>
    </div>
  )
}

export default App

