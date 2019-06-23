/// <reference types="Cypress" />



/* eslint-env mocha */
/* global cy */
describe('Kasus-Kasus', () => {

    // login automation

    it('Hapus Pemilih dari tabel aktif', () => {

        // HAPUS

        cy.visit('/dpaktif/aktif')

        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)

        // pilih data (row) Fulan ----- (prefereable data-test)
        cy.get('span').contains(NIK).parent().parent() // cari row dengan NIK, lalu pergi ke tr
            .find('input[type="checkbox"]').click() // klik checkbox
        // cy.get('[data-test=checkbox-nik-'+(NIK)+']').click() is preferable

        // tekan tombol Ubah/Saring ----- (prefereable data-test
        cy.get('span').contains('Ubah/Saring 1 baris').parent().click()

        // pergi ke halaman draft
        cy.visit('/dpdraft/draft')

        // ketik nama ybs
        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)

        // pilih data (row) Fulan ----- (prefereable data-test)
        cy.get('span').contains(NIK).parent().parent() // cari row dengan NIK, lalu pergi ke tr
            .find('input[type="checkbox"]').click() // klik checkbox
        // cy.get('[data-test=checkbox-nik-'+(NIK)+']').click() is preferable

        // tekan tombol hapus ----- (prefereable data-test) 
        cy.get('span').contains('Hapus').parent().click();

        // ketik nama ybs
        cy.get('[placeholder="Search..."]').type("Titan bin Fulan-"+ testId)

        // pilih data (row) Fulan ----- (prefereable data-test)
        cy.get('span').contains(NIK+1).parent().parent()
            .find('input[type="checkbox"]').click() // klik checkbox
        // cy.get('[data-test=checkbox-nik-'+(NIK+1)+']').click() is preferable

        // tekan tombol hapus ----- (prefereable data-test)
        cy.get('span').contains('Hapus 2 baris').parent().click()

        // cek apakah dia ada di data draft
        cy.get('#webgrid tbody').should('be.empty')
    })

})