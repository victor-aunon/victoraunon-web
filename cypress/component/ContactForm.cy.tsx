import ContactForm from 'components/ContactForm'

describe('ContactForm', () => {
  it('Submit form without completing captcha', () => {
    const siteKey = 'XXXX'
    cy.mount(<ContactForm formId="echo" reCaptchaSiteKey={siteKey} />)

    cy.get('#name').type('John Doe')
    cy.get('#email').type('test@test.com')
    cy.get('#message').type('Hola')
    cy.get('#privacy').click()

    cy.get("input[type='submit']").click()
    cy.contains('Verifica que eres humano').should('be.visible')
  })

  it('Submit form completing captcha', () => {
    const siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    cy.mount(<ContactForm formId="echo" reCaptchaSiteKey={siteKey} />)

    cy.get('#name').type('John Doe')
    cy.get('#email').type('test@test.com')
    cy.get('#message').type('Hola')
    cy.get('#privacy').click()

    cy.get("input[type='submit']").click()
    cy.contains('Formulario enviado').should('be.visible')
  })
})
