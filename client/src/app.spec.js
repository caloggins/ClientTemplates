import Sut from './app'
const data = { gists: [ "url", "url", "url" ]}
const sut = new Sut(data)

test('the viewmodel as a property', () => {
    expect(sut.objects()).toBeDefined()
})

test('the property should have elements', () => {
    expect(sut.objects()).toHaveLength(3)
})

test('the app has the gists', () => {
    expect(sut.gists).toMatch(["url", "url", "url"])
})