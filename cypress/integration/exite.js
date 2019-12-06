describe('Demo of cy login test', function() {

  it('Exite login test', function() {

    cy.visit('https://lxedidexiqa01.tsys.editel.eu')
	cy.log('filling out user name and password') // if you really need this	
	cy.get('input#identifier').type('user')
	  .get('input#password').type('password')
	cy.contains('Sign in').click()
	cy.get('.editel-header').contains('Signed in as')
		.contains('user')
	cy.url().should('include', '/exite2-gui/home')
	cy.log('verifing logout button')	
	cy.get('#menu_logout').should('have.attr', 'href', '/exite2-gui/logout')
		.click()						  
	cy.url().should('include', '/auth-server/login')
	cy.get('.editel-exitelogo-svg').should('be.visible')	
	cy.screenshot()

  })

})
