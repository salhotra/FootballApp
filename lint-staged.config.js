module.exports = {
  '*.ts?(x)': () => 'tsc -p tsconfig.json',
  '*.(js|jsx|ts|tsx)': 'eslint . --ext .js,.jsx,.ts,.tsx',
};
