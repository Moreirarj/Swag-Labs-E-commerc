# Todos os testes da pasta tests/
npx playwright test

# Só o arquivo de login
npx playwright test tests/login.spec.ts

# Um ambiente específico (filtro por nome)
npx playwright test -g "Login - NOVASAUDE"

# Com navegador visível (seu config já usa headless: false)
npx playwright test tests/login.spec.ts --headed

# Sem abrir janela (útil em CI ou execução rápida)
npx playwright test tests/login.spec.ts --headed=false

---------------------------------------------------------------

Playwright UI Mode (interface gráfica oficial)

npx playwright test --ui

---------------------------------------------------------------
Modo debug (passo a passo)

npx playwright test tests/login.spec.ts --debug
---------------------------------------------------------------

# Ver o relatório HTML da última execução
npx playwright show-report

# Rodar em paralelo (padrão) ou com 1 worker
npx playwright test --workers=1

# Repetir testes instáveis
npx playwright test --retries=2

---------------------------------------------------------------
Scripts npm (package.json)

"scripts": {
  "test": "playwright test",
  "test:login": "playwright test tests/login.spec.ts",
  "test:ui": "playwright test --ui"
}


npm test
npm run test:login
npm run test:ui

---------------------------------------------------------------
