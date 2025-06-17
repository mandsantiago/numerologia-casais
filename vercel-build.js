// vercel-build.js
const { execSync } = require('child_process');

try {
  console.log('Instalando dependências...');
  execSync('npm install --legacy-peer-deps --prefer-offline --no-audit', { stdio: 'inherit' });
  
  console.log('Executando build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Build completado com sucesso!');
  process.exit(0);
} catch (error) {
  console.error('Erro durante o build:', error);
  process.exit(1);
}