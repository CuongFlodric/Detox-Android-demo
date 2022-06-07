describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('Test1: should have "Step One" section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('Test2: should render "See Your Changes" in the second slide', async () => {
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('See Your Changes'))).toBeVisible(); // no this will pass!
    await element(by.id('slides')).swipe('right');
  });

  it('Test3: should enable swiping back and forth', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('right');
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('Test4: should disable swiping left in first page', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
    await element(by.id('slides')).swipe('right');
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('Test5: should disable swiping right in last page', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');

    await expect(element(by.text('Learn More'))).toBeVisible();
    await element(by.id('slides')).swipe('right');
    await element(by.id('slides')).swipe('right');
    await element(by.id('slides')).swipe('right');
    await element(by.id('slides')).swipe('right');
    await expect(element(by.text('Step One'))).toBeVisible();

  });

  it('Test6: should render "Debug" and have a Button to click in the third slide', async () => {
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('Debug'))).toBeVisible();
    await expect(element(by.text('CLICK HERE!'))).toBeVisible();

    await element(by.text('CLICK HERE!')).tap();
    await expect(element(by.text('Clicked!'))).toBeVisible();
    await element(by.text('OK')).tap();
  });

  it('Test7: should render "Learn More" and change text in the fourth slide', async () => {
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('Learn More'))).toBeVisible();

    const docsInput = element(by.id('docsInput'));

    await expect(docsInput).toBeVisible();

    await docsInput.clearText();
    await docsInput.typeText('Maybe later!');

    await expect(docsInput).toHaveText('Maybe later!');
    await element(by.text('Learn More')).tap();
  });

  it('Test8: Can Swipe up', async () => {
    await element(by.text('The Basics')).swipe('up', 'fast'); 
    await expect(element(by.text('Layout'))).toBeVisible();
    await element(by.text('Layout')).swipe('up', 'fast'); 
    await expect(element(by.text('Help'))).toBeVisible();
  });

  it('Test9: Can Swipe down', async () => {
    await expect(element(by.text('Help'))).toBeVisible();
    await element(by.text('Layout')).swipe('down', 'slow'); 
    await expect(element(by.text('Layout'))).toBeVisible();
    await element(by.text('The Basics')).swipe('down', 'slow'); 
  });

});
