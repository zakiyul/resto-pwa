/* eslint-disable no-undef */
Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('.content');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('like and unlike one resto', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);

  I.seeElement('.card');
  I.wait(5);

  I.click(locate('a.card').first());
  I.wait(5);

  I.seeElement('#favBtn');
  I.wait(5);

  I.click('#favBtn');
  I.wait(5);

  I.amOnPage('/#/favorite');
  I.wait(5);

  I.seeElement('.card');
  I.click(locate('a.card').first());
  I.seeElement('#favBtn');
  I.click('#favBtn');
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item__not__found');
});
