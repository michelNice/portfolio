import { jest } from '@jest/globals'

jest.unstable_mockModule('./supa.js', () => ({
  test: jest.fn()
}))

const { getTexts } = await import('./i18n.logic.js')
const { test: supaTest } = await import('./supa.js')


describe('i18n logic', () => {

  beforeEach(() => {
    supaTest.mockClear()
  })

  test('english translations', async () => {

    supaTest.mockResolvedValue({
      Nome: 'Name',
      about: 'About',
      skills: 'Skills'
    })

    const texts = await getTexts('en')

    expect(texts.Nome).toBe('Name')
    expect(texts.about).toBe('About')
    expect(texts.skills).toBe('Skills')
  })

  test('portuguese translations', async () => {

    supaTest.mockResolvedValue({
      Nome: 'Nome',
      about: 'Sobre',
      skills: 'Habilidades'
    })

    const texts = await getTexts('pt')

    expect(texts.Nome).toBe('Nome')
    expect(texts.about).toBe('Sobre')
    expect(texts.skills).toBe('Habilidades')
  })

})
