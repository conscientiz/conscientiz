

## Recriar o Logo ConscientiZ para o Site

### Problema
O logo atual (`logoconscie.png`) esta pequeno e com fundo visivel, nao se integrando bem ao design escuro do site.

### Solucao

Gerar o mesmo logo usando IA (Gemini Image Generation) com as seguintes caracteristicas:
- **Fundo transparente** (PNG com transparencia)
- **Tamanho adequado** para uso em navbar e footer
- **Estilo**: Escudo com gradiente verde (#7CAF41 para #ADD34F) contendo icone de cadeado/coracao, com o texto "ConscientiZ" ao lado em fonte moderna branca
- **Dimensoes**: Largo o suficiente para boa resolucao (~400px de largura)

### Passos

1. **Gerar o logo** via API de geracao de imagem com prompt descrevendo a identidade visual da marca (escudo verde, texto branco, fundo transparente)
2. **Salvar** o novo logo em `src/assets/logoconscie.png`
3. **Ajustar tamanhos** no CSS se necessario:
   - Navbar: `h-9` (36px) - pode aumentar para `h-10` ou `h-12`
   - Footer: `h-10` (40px) - pode aumentar para `h-12`

### Arquivos alterados

| Arquivo | Alteracao |
|---|---|
| `src/assets/logoconscie.png` | Novo logo gerado por IA |
| `src/components/Navbar.tsx` | Ajustar altura do logo se necessario |
| `src/components/FooterSection.tsx` | Ajustar altura do logo se necessario |

