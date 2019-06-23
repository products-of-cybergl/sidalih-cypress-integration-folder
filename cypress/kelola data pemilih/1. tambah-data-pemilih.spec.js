/// <reference types="Cypress" />

/*
tes strategi:
1. bikin Fulan & Titan (sampai tabel Aktif)
2. edit Fulan (saat ini hanya ganti NIK)
3. pindah Titan (ke kelurahan yang berbeda)
4. hapus Fulan & Titan (dari tabel Aktif)
5. snapshot kelurahan
*/

/* eslint-env mocha */
/* global cy */
describe('Kasus-Kasus', () => {

    // login automation

    it('Tambah Dua Pemilih Baru', () => {

        // TAMBAH

        // akses halaman
        cy.visit('/dpdraft/tambah')

        // klik dropdown di menu kecamatan
        cy.get('option').contains('MISOOL UTARA').click()

        // klik dropdown di menu kelurahan
        cy.get('option').contains('WAIGAMA').click()

        // isi row pertama dari table webgrid ----- (prefereable data-test)
        cy.get('#webgrid tr:first td:first').type('9205010910170004')
            .next().type('9205012702990001')
            .next().type( NIK )
            .next().type('Fulan bin Titan-' + testId)
            .next().type('JAKARTA')
            .next().type('01|01|1970')
            .next().type('B')
            .next().type('L')
            .next().type('WAIGAMA')
            .next().type('001') // RT
            .next().type('001') // RW
            .next().type('0') // difabel
            .next().type('0') // keterangan
            .next().type('001') // nomor TPS
        // idealnya bisa select data-test dari setiap isian  

        cy.get('#webgrid tr:first').next().find("td:first").type('9205010910170004')
            .next().type('9205012702990001')
            .next().type( NIK + 1 )
            .next().type('Titan bin Fulan-' + testId)
            .next().type('JAKARTA')
            .next().type('01|01|1970')
            .next().type('B')
            .next().type('L')
            .next().type('WAIGAMA')
            .next().type('001') // RT
            .next().type('001') // RW
            .next().type('0') // difabel
            .next().type('0') // keterangan
            .next().type('001') // nomor TPS

        // tambah data ----- (prefereable data-test)
        cy.get('.button').find("span").contains('Tambah Data').click()

        // akses halaman
        cy.visit('/dpdraft/draft')

        // ketik nama ybs ----- (prefereable data-test) 
        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)

        // cek apakah dia ada di data draft
        cy.contains("Fulan bin Titan-" + testId)

        // aktivasi (pindahkan ke tabel aktif)
        cy.get('.button').find("span").contains('Aktifasi 1 baris').click()

        // data baru harusnya sudah ada di tabel aktif
        cy.visit('/dpaktif/aktif')

        // Fulan ada
        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)
        cy.contains("Fulan bin Titan-" + testId)
        
        // Titan juga
        cy.get('[placeholder="Search..."]').type("Titan bin Fulan-" + testId)
        cy.contains("Titan bin Fulan-" + testId)
    })

})