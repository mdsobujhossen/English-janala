const createElements = (arr) => {
    const htmlsElements = arr.map(el => `<span>${el}</span>`)

    return(htmlsElements.join(' '));
    
}


const synonyms = ['a', 'b', 'c']
createElements(synonyms)