/// <reference types="Cypress" />

/* eslint-env mocha */
/* global cy */
describe('Access Page', () => {
    
    it('Pilih Portal - KL BPK', () => {

        cy.visit('https://rajaampatkab.kpu.go.id/')

        cy.setCookie('Gov2Session', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6ImFkbWluIiwiYWNjb3VudF9pZCI6IjkzNjUiLCJmdWxsbmFtZSI6IlJpemt5IFN5YWlmdWwiLCJmYWNlYm9vayI6IiIsImVtYWlsIjoicml6a3kuc3lhaWZ1bEBnbWFpbC5jb20iLCJwaG90b3VybCI6IiIsInNzb2tleSI6IiIsImlkIjoiNTY2NCIsInN0YXR1cyI6ImFjdGl2ZSJ9.9vfnPeYnXdhGkfCpCY3EIlT7EHiSSWwpYL0E_lXkTm8', {
            'domain': 'rajaampatkab.kpu.go.id'
        })

        cy.setCookie('PHPSESSID', 'q1l4t2ohgpohdbl7a5ds9hof81', {
            'domain': 'rajaampatkab.kpu.go.id'
        })

        cy.setCookie('_ga', 'GA1.2.1999693397.1514724948', {
            'domain': '.bootstrapcdn.com'
        })

        cy.visit('https://rajaampatkab.kpu.go.id/dpsnapshot/dps')

        cy.reload()
        
        // cy.contains('Rizky Syaiful')
    })
})