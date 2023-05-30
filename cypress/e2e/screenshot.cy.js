describe('Screenshot Test', () => {
    it('should take a screenshot', () => {
        cy.visit('https://status.uptrends.com/98b24f56cb9245f9b054d0e37697cb35'); // Replace with your target URL

        cy.screenshot('example'); // Replace 'example' with your desired screenshot name
    });
});
