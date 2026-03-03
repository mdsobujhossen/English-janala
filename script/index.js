

const levelWords = (lessonsLevel) => {
    const url = `https://openapi.programming-hero.com/api/level/${lessonsLevel}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWords(data.data))
}


const displayLevelWords = (words) => {
    console.log(words);
    const wordsContainer = document.getElementById("word-container")
    wordsContainer.innerHTML = ""

// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }



    words.forEach(word => {
        const wordDiv = document.createElement("div")
        wordDiv.innerHTML = `
         <div class="bg-base-100 rounded-md shadow space-y-6 py-10 px-4 h-full text-center">
                <h3 class="text-2xl font-semibold leading-6">${word.word}</h3>
                <p class="text-xl font-medium leading-6">Meaning /Pronounciation</p>
                <p class="font-bangla text-[28px] font-semibold text-[#2d2d2e]">"${word.meaning} /  ${word.pronunciation}"</p>
            </div>
        `
        wordsContainer.append(wordDiv)
    });
    
}





const getLessons = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
        .then(res => res.json())
        .then(json => displayLessons(json.data))
}

const displayLessons = (Lessons) => {
    const lessensContainer = document.getElementById("lessons-conainer")
    lessensContainer.innerHTML = ''
   
    Lessons.forEach(lesson => {
        const lessonsBtnDiv = document.createElement("div")
        lessonsBtnDiv.innerHTML = `
        <button href="" onclick="levelWords(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>
        Lessons ${lesson.level_no}</button>
        `
        lessensContainer.append(lessonsBtnDiv)
        
    });
}


getLessons()