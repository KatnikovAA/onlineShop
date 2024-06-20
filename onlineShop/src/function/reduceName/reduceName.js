export const reduceName = (string) => {
        let shortName = string.split('')
        shortName.length = 20
    return shortName.join('') + '...'
}