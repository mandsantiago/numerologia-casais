#!/bin/bash

# Resolve problemas de permissão
npm config set unsafe-perm true

# Instala dependências com legacy peer deps
npm install --legacy-peer-deps

# Executa o build
npm run build