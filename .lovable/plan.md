

## Ajustar tabela comparativa de ROI

### Alteracoes no arquivo `src/components/SolucaoSection.tsx`

**1. Remover a linha "Dependencia de Fornecedor"** (ultimo item do array `comparison`)

**2. Ajustar a linha "Customizacao"** de "Ilimitada" para algo que reflita o modelo de servicos sem prometer algo irreal:

| Campo | Antes | Depois |
|---|---|---|
| `label` | Customização | Customização |
| `gophish` | Ilimitada | Sob medida por projeto |
| `market` | Limitada ao plano | Limitada ao plano |

"Sob medida por projeto" transmite flexibilidade real sem sugerir que tudo e gratuito — deixa claro que a customizacao existe e e adaptada a cada cliente, o que naturalmente se alinha com a cobranca por servico.

### Resultado final da tabela (4 linhas)

| Caracteristica | Gophish + ConscientiZ | Solucoes de Mercado |
|---|---|---|
| Custo de Licenca Anual | R$ 0 | R$ 50-200k |
| Controle de Dados | Total (On-Premise) | Nuvem do fornecedor |
| Conformidade LGPD | Garantida | Depende |
| Customizacao | Sob medida por projeto | Limitada ao plano |

