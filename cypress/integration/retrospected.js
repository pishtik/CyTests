describe('Demo of cy retrospective test', function() {

  function userName_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  function datetimeNow() {
    var datetime = new Date().toLocaleString();
    
    return datetime;
  }

  var userName = userName_Alpha_Numeric();

  it('retrospected test', function() {

    cy.visit('https://www.retrospected.com/')
	
	cy.wait(9000);
	
	cy.get('div')
		.should('have.class', 'MuiPaper-root')
		.and('have.class', 'MuiPaper-elevation24')
		.and('have.class', 'MuiDialog-paper')
		.and('have.class', 'MuiDialog-paperScrollPaper')
		.and('have.class', 'MuiDialog-paperWidthXs')
		.and('have.class', 'MuiDialog-paperFullWidth')
		.and('have.class', 'MuiPaper-rounded')
		.should('be.visible')

	cy.log('filling out user name ') // if you really need this

	cy.get('input')
		.should('have.class', 'MuiInput-input')
		.and('have.class', 'MuiInputBase-input')
		.type(userName)
	  
	cy.contains("Let's start").click()

	cy.get('h6')
		.should('have.class', 'MuiTypography-root')
		.and('have.class', 'sc-iRbamj')
		.and('have.class', 'sc-jlyJG')
		.and('have.class', 'gNNmcB')
		.and('have.class', 'MuiTypography-h6')
		.and('have.class', 'MuiTypography-colorInherit')
		.contains('Retrospected')

	cy.xpath('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit"]/span')
		.contains(userName)

	cy.log('verify userName ') 

	cy.xpath('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]')
		.click();

	cy.xpath('//div[@class="sc-htpNat brNezA"]/span/input')
		.should('have.value', '3')

	cy.xpath('//div[@class="MuiInputBase-root MuiInput-root MuiInput-underline"]/input')
		.should('have.value', 'default')

	cy.xpath('(//div[@class="sc-jzJRlG bsqXSS"])[1]/div/input')
		.should('have.value', 'satisfied')

	cy.xpath('(//div[@class="sc-jzJRlG bsqXSS"])[2]/div/input')
		.should('have.value', 'disatisfied')

	cy.xpath('(//div[@class="sc-jzJRlG bsqXSS"])[3]/div/input')
		.should('have.value', 'sunny')

	cy.get('span').contains('Cancel').click()

	cy.xpath("//button[@class='MuiButtonBase-root MuiFab-root MuiFab-extended MuiFab-secondary']")
		.click()

	cy.xpath("//span[@class='sc-gzVnrw ibZhkv']")
		.click()
		.type("WebEDI retrospective from: " + datetimeNow())

	cy.url().should('include', '/game/')

	cy.xpath("(//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart'])[1]")
		.type('something')
		.type('{enter}')

	cy.xpath("(//button[@aria-label='Open the Action panel'])[1]").click()

	cy.xpath("(//p[@class='MuiTypography-root MuiTypography-body1'])[2]").type('Agree with something !')

	cy.xpath("(//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart'])[2]")
		.type('everything')
		.type('{enter}')

	cy.xpath("(//button[@aria-label='Open the Action panel'])[2]").click()

	cy.xpath("(//p[@class='MuiTypography-root MuiTypography-body1'])[4]").type('Agree with everything !')

	cy.xpath("(//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart'])[3]")
		.type('nothing')
		.type('{enter}')

	cy.xpath("(//button[@aria-label='Open the Action panel'])[3]").click()

	cy.xpath("(//p[@class='MuiTypography-root MuiTypography-body1'])[6]").type('Agree with nothing !')

	cy.xpath("//div[@class='MuiPaper-root MuiPaper-elevation1 MuiCard-root sc-kgoBCf gcVjPA MuiPaper-rounded']/div/p/span/span/span")
		.contains('something')

	cy.xpath("//div[@class='MuiPaper-root MuiPaper-elevation1 MuiCard-root sc-kgoBCf gcVjPA MuiPaper-rounded']/div/p/span/span/span")
		.contains('everything')

	cy.xpath("//div[@class='MuiPaper-root MuiPaper-elevation1 MuiCard-root sc-kgoBCf gcVjPA MuiPaper-rounded']/div/p/span/span/span")
		.contains('nothing')

	cy.xpath("(//header/div/button/span[@class='MuiButton-label'])[2]")
		.click()
						  
	cy.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button']")
		.click()
	
	cy.screenshot()
  })
})
