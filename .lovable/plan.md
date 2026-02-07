
## Correções Visuais e Novos Cards de Treinamento

### 1. Efeito hover em todos os cards (movimento ao passar o mouse)

Adicionar `hover:scale-105 hover:-translate-y-1 transition-transform duration-300` nos cards de:
- **SolucaoSection** (4 cards de features)
- **ServicosSection** (4 cards de servicos)
- **ValoresSection** (6 cards de valores)

### 2. Seção "Soluções Completas" (ServicosSection) - fundo claro

Trocar `bg-background` por `section-light` na tag `<section>` do `ServicosSection.tsx` (linha 47).

### 3. Valores Inegociáveis - linha verde animada no hover

Adicionar nos cards de `ValoresSection.tsx` um efeito de borda superior verde que aparece com animação rapida ao passar o mouse. Implementação via classe CSS com pseudo-elemento `::before`:
- Barra de 3px no topo do card com gradiente verde
- `transform: scaleX(0)` por padrão, `scaleX(1)` no hover
- Transição de 300ms

Classe CSS a criar em `index.css`:
```css
.card-hover-line {
  position: relative;
  overflow: hidden;
}
.card-hover-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(135deg, hsl(93 47% 47%), hsl(75 55% 56%));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.card-hover-line:hover::before {
  transform: scaleX(1);
}
```

### 4. Novos cards de Treinamento na seção Serviços

Adicionar 2 novos cards ao array `servicos` no `ServicosSection.tsx`, com o ícone `GraduationCap`:

**Card 1 - "Treinamentos para Colaboradores"**
- Descrição: "90% dos ataques começam com erro humano. Programas de conscientização e compliance que blindam sua empresa de dentro para fora, atendendo ISO 27001, NIST e LGPD."
- Items (4 principais):
  - "Firewall Humano: Conscientização"
  - "Phishing e Engenharia Social"
  - "Segurança no Home Office"
  - "Senhas e MFA"

**Card 2 - "Treinamentos de Compliance"**
- Descrição: "Programas especializados para conformidade regulatória e públicos específicos, da LGPD na prática à defesa executiva contra fraudes."
- Items:
  - "LGPD e Proteção de Dados"
  - "Classificação e Mesa Limpa"
  - "Defesa Executiva (CEO/BEC)"
  - "Resposta a Incidentes"

Importar `GraduationCap` e `Shield` do lucide-react para os novos ícones. O grid passará de 2x2 para 2x3 naturalmente.

### Arquivos alterados

| Arquivo | Alteração |
|---|---|
| `src/index.css` | Adicionar classe `.card-hover-line` com pseudo-elemento animado |
| `src/components/ValoresSection.tsx` | Adicionar classes `card-hover-line`, hover scale/translate nos cards |
| `src/components/ServicosSection.tsx` | Trocar fundo para `section-light`, adicionar hover nos cards, adicionar 2 cards de treinamento |
| `src/components/SolucaoSection.tsx` | Adicionar hover scale/translate nos cards de features |
