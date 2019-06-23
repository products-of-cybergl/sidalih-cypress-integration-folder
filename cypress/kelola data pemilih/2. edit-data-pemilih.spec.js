/// <reference types="Cypress" />

// 1. Di table Aktif, data salah satu orang dipilih untuk diedit
// 2. Data ybs jadi muncul di Draft.
// 3. Dengan begitu bisa diedit2.
// 4. Setelah yakin akan perubahannya, baru di data ybs di Draft diaktivasi.
// 5. Data ybs di table Aktif sekarang ditiban dengan perubahan di Draft.

/* eslint-env mocha */
/* global cy */
describe('Kasus-Kasus', () => {

    it('Edit Data Pemilih', () => {

        cy.visit('/dpaktif/aktif')
        
        // 1. Di table Aktif, data salah satu orang dipilih untuk diedit
        
        // ketik nama ybs
        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)

        // pilih data (row) Fulan ----- (prefereable data-test)
        cy.get('span').contains(NIK).parent().parent() // cari row dengan NIK, lalu pergi ke tr
            .find('[data-test=checkbox-nik-'+(NIK)+']').click() // klik checkbox

        // tekan tombol Ubah/Saring ----- (prefereable data-test) 
        cy.get('span').contains('Ubah/Saring 1 baris').parent().click()

        // harusnya ada notif sukses ---- (prefereable data-test)
        // cy.contain("Satu data berhasil dipindah")

        // ketik nama ybs
        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)

        // harusnya sudah tidak ada
        cy.get('#webgrid tbody').should('be.empty')

        // 2. Data ybs jadi muncul di Draft.
        // 3. Dengan begitu bisa diedit2.

        cy.visit('/dpaktif/ubah')

        // klik semua checkbox "baru, aktif, tms, mdp, pindah" biar ada datanya di webgrid
        cy.get('.b-checkbox').parent().click()

        // ubah NIK Fulan
        cy.get('td').contains(NIK).type(NIK+10)

        cy.get('.button').find("span").contains('Simpan Data').click()

        // BAD UX pop-up yang di pojok kanan bawah harus ada, yang sekarang notifnya masih di atas. 
        
        // cek perubahan di halaman draft
        cy.visit('/dpdraft/draft')

        // cari 
        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)

        // 4. Setelah yakin akan perubahannya, baru di data ybs di Draft diaktivasi.
        
        // yakinkan
        cy.contains(NIK+10)
        
        // pilih data
        cy.get('span').contains(NIK+10).parent().parent()
            .find('input[type="checkbox"]').click() // klik checkbox
        // cy.get('[data-test=checkbox-nik-'+(NIK+10)+']').click() is preferable

        // aktivasi (pindahkan ke tabel aktif)
        cy.get('.button').find("span").contains('Aktifasi 1 baris').click()

        // 5. Data ybs di table Aktif sekarang ditiban dengan perubahan di Draft.
        cy.visit('/dpaktif/aktif')

        cy.get('[placeholder="Search..."]').type("Fulan bin Titan-" + testId)
        
        cy.contains(NIK+10)

    })

})