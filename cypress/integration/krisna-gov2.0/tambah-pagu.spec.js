// cypress/integration/krisna/tes.spec.js

/// <reference types="Cypress" />

/* eslint-env mocha */
/* global cy */
describe('Tambah Program di Pagu', () => {
    
    it('Menambah', () => {
        cy.visit('https://kemenpanrb.kl2.web.id/bs4/pagu')

        // klik tombol tambah
        //cy.get('[data-test=button-add]').click()
        cy.get('[data-test=button-add]').click()
        
        cy.get('[data-test=input-kode]')
      .type('01', { delay: 200 })

        cy.get('[data-test=input-nama]')
      .type('Program Penggemukan Fathur', { delay: 100 })
        
        cy.get('[data-test=input-level]').select('program')

        cy.get('[data-test=input-status]').select('ready')

        cy.get('[data-test=button-form-submit]').click()

        cy.get('[data-test=search-box-program]')
      .type('Fathur', { delay: 200 })
        
        cy.contains('Fathur')
    })
})