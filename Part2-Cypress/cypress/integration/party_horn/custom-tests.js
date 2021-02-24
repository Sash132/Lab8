describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of <audio> element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and Sound sources change when selecting the party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  describe('Volume Icon Tests', () => {
    it('Change from Icon 0 to Icon 1 when Increasing Volume from 0 to 1', () => {
      cy.get('#volume-number').clear().type('0');
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
      });

      cy.get('#volume-number').clear().type('1');
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      });
    });

    it('Change from Icon 1 to Icon 2 when Increasing Volume from 33 to 34', () => {
      cy.get('#volume-number').clear().type('33');
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      });

      cy.get('#volume-number').clear().type('34');
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      });
    });
        
    it('Change from Icon 2 to Icon 3 when Increasing Volume from 66 to 67', () => {
      cy.get('#volume-number').clear().type('66');
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      });

      cy.get('#volume-number').clear().type('67');
      cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
      });
    });
  });

  it('Honk Button is disabled when the textbook input is empty or a non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });

    cy.get('#volume-number').clear().type('test');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Error is shown when you type a number outside range for volume textbox input', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.match(':invalid');
    });

    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.match(':invalid');
    });
  });
});
