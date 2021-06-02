import React, { useState, useEffect } from 'react'

const useMediaQuery = (query, defaultMatches = window.matchMedia(query)) => {
    const [matches, setMatches] = useState(defaultMatches);

    useEffect(() => {
        const media = window.matchMedia(query);

        const listener = () => setMatches(media.matches)
        if (media.matches !== matches) setMatches(media.matches)
        media.addListener(listener)

        return () => media.removeListener(listener)
    }, [query, matches]);

    return matches;
}

export default useMediaQuery
