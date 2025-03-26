const CAT_ENDPOINT_RANDOM_CAT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_CAT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}