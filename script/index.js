

const levelWords = (lessonsLevel) => {
    const url = `https://openapi.programming-hero.com/api/level/${lessonsLevel}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWords(data.data))
}


const displayLevelWords = (words) => {
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
        wordDiv.className = "bg-base-100 rounded-md shadow space-y-4 p-10 h-full text-center"
        wordDiv.innerHTML = `
                <h3 class="text-2xl font-medium leading-6">${word.word}</h3>
                <p class="text-xl font-normal leading-6">Meaning /Pronounciation</p>
                <p class="font-bangla text-2xl font-medium text-[#2d2d2e]">"${word.meaning} /  ${word.pronunciation}"</p>
                <div class="flex justify-between items-center pt-5">
                    <button class="btn bg-[#1A91FF10]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10]"><i class="fa-solid fa-volume-high"></i></button>
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