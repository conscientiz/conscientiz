## Reformular seção "Nossa Solução" → "Metodologia ConscientiZ"

Arquivo único: `src/components/SolucaoSection.tsx`

### Alterações

**1. Header da seção**
- Eyebrow `Nossa Solução` → `Metodologia ConscientiZ`
- Título `Gophish + Metodologia ConscientiZ` → `Metodologia <span class="text-gradient-green">ConscientiZ</span>`
- Subtítulo substituído por: *"A maioria dos programas de segurança é criada por times de TI que aprenderam a comunicar. O nosso foi criado por especialistas em comunicação que dominam segurança — e que operam programas assim todos os dias."*

**2. Array `features` (4 cards, mesmo estilo visual)**

| # | Ícone (lucide) | Título | Descrição |
|---|---|---|---|
| 1 | `Search` | Diagnóstico de Comportamento | Antes de qualquer treinamento, entendemos como sua organização se comporta de verdade. Não assumimos — medimos. O programa começa com dados, não com suposições. |
| 2 | `MessageSquareHeart` | Comunicação que Engaja | Segurança precisa ser entendida por pessoas, não por sistemas. Criamos campanhas, materiais e experiências que falam a língua do seu colaborador — do operador ao C-level. |
| 3 | `GraduationCap` | Teachable Moment | Quando alguém erra, esse é o melhor momento para aprender. Nossa metodologia captura o erro em tempo real e o transforma em aprendizado imediato — sem punição, com impacto. |
| 4 | `LineChart` | Gestão Contínua e Métricas Reais | Entregamos relatórios para gestores com evolução real de comportamento, não só taxas de clique. Planejamos, executamos e ajustamos o programa mês a mês. |

Imports lucide atualizados: remover `Server`, `Database`, `DollarSign`; adicionar `Search`, `MessageSquareHeart`, `LineChart` (manter `GraduationCap`, `Check`, `X`).

**3. Frase de destaque ao final da seção**

Adicionar abaixo da tabela comparativa de ROI (antes/depois do CTA "Solicitar Proposta"), centralizada, fonte um pouco maior que o corpo (ex.: `text-lg md:text-xl`), peso semibold, com leve destaque (itálico ou cor accent):

> *"Ferramentas qualquer empresa instala. Programa que muda cultura, só quem entende de pessoas constrói."*

### O que NÃO muda
- Tabela "Comparativo de ROI" permanece como está (já não menciona Gophish como protagonista no título).
- Animações, glass-card, gradientes verdes, grid responsivo, CTA final.
- Demais seções do site.

### Pergunta
A frase de destaque final deve ficar **acima** ou **abaixo** do botão "Solicitar Proposta"? Por padrão vou colocar **acima** do botão (encerra o argumento e leva ao CTA).
