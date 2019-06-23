/// <reference types="Cypress" />

// 1. Di table Aktif, data salah satu orang dipilih untuk dipindahkan
// 2. Data ybs jadi muncul di Draft.

/* eslint-env mocha */
/* global cy */
describe('Kasus-Kasus', () => {

    it('Pindahkan Data Pemilih', () => {

        cy.visit('/dpaktif/aktif')
        
        // 1. Di table Aktif, data salah satu orang dipilih untuk diedit
        
        // ketik nama ybs
        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)

        // pilih data (row) Fulan ----- (prefereable data-test)
        cy.get('span').contains(NIK).parent().parent() // cari row dengan NIK, lalu pergi ke tr
            .find('[data-test=checkbox-nik-'+(NIK)+']').click() // klik checkbox

        // tekan tombol hapus ----- (prefereable data-test) 
        cy.get('span').contains('Pindahkan 1').parent().click()

        // pop-up untuk pilih tujuan muncul

        cy.get('option').contains('DKI JAKARTA').click()

        cy.get('option').contains('JAKARTA PUSAT').click()

        cy.get('option').contains('GAMBIR test').click()

        cy.get('option').contains('CIDENG').click()

        cy.get('span').contains('Pindahkan Pemilih').parent().click()

        // harusnya ada notif sukses
        // cy.contain("sukses")

        // ketik nama ybs
        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)

        // harusnya sudah tidak ada
        cy.get('#webgrid tbody').should('be.empty')

        // 2. Data ybs jadi muncul di Draft.

        cy.visit('/dpaktif/draft')

    })

})