#!/bin/sh

# Compléter ici l'entrypoint pour exécuter les migrations Prisma avant de démarrer l'application
npx prisma migrate deploy
npm run seed
/bin/sh -c "npm run preview"
