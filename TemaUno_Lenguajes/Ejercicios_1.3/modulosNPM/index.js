// Importación usando ESM (ES Modules)
import generateName from 'sillyname';
import { randomSuperhero } from 'superheroes';

// --- sillyname ---
const sillyName = generateName();
console.log(`Nombre tonto generado: ${sillyName}`);

// --- Desafio 2: superheroes ---
const hero = randomSuperhero();
console.log(`Superhéroe aleatorio: ${hero}`);