// Centrale bedrijfsgegevens — één plek om aan te passen.
export const site = {
  name: 'Pauli Beton',
  legal: 'Pauli Beton NV',
  street: 'Industrielaan 19',
  zip: '3730',
  city: 'Bilzen-Hoeselt',
  country: 'België',
  phone: '+32 89 41 13 00',
  phoneHref: 'tel:+3289411300',
  email: 'info@paulibeton.be',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pauli+Beton+Industrielaan+19+3730+Hoeselt',
  founded: 1954,
  markets: ['België', 'Nederland', 'Frankrijk'],
}

export const yearsActive = new Date().getFullYear() - site.founded
