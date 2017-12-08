import Sut from './data'
const sut = new Sut()

test('the data should have contents', () => {
    expect(sut.gists).toBeDefined()
})