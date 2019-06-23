// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')



// agar error Vue tidak mematikan tes
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

// dua angka acak 
var testId = Math.floor((Math.random() * 100) + 1);

// angka acak untuk seed data NIK (ada kemungkinan konflik dengan NIK asli)
var NIK = Math.floor((Math.random() * 10000000000000000) + 1);