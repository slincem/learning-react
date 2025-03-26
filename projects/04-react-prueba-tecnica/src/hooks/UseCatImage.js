import { useState, useEffect } from 'react';

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        if (!fact) return
        const firstWord = fact.split(' ')[0]
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&dolor=red&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url } = data
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl }
}