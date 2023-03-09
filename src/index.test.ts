import isChanon from './index'

test('is TRUE with "Chanon"', () => {
    expect(isChanon('Chanon')).toBe(true)
})

test('is FALSE with bad spelling', () => {
    expect(isChanon('channon')).toBe(false)
})