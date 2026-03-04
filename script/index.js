// remove active class in kessons button
const deleteActiveClass = (className) => {
const buttons = document.querySelectorAll('.lessons-btn')
buttons.forEach(button => {
    button.classList.remove("btn-active")
    button.classList.add("btn-outline")
});

}


const levelWords = (lessonsLevel) => {
    const url = `https://openapi.programming-hero.com/api/level/${lessonsLevel}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayLevelWords(data.data)
        deleteActiveClass()
        const lessonsButton = document.getElementById(`lessons-${lessonsLevel}`)
        lessonsButton.classList.remove("btn-outline")
        lessonsButton.classList.add("btn-active")
        console.log(lessonsButton)
    })
}


const displayLevelWords = (words) => {
    const wordsContainer = document.getElementById("word-container")
    wordsContainer.innerHTML = ""

    if(words.length < 1){
        wordsContainer.innerHTML = `
            <div class="text-center col-span-3 py-15 font-bangla space-y-2">
                <img class="mx-auto" src="./assets/alert-error.png" alt="">
                <h5 class="text-[#79716B] text-[13.38px]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h5>
                <p class="text-[#292524] font-medium text-[34px] ">নেক্সট Lesson এ যান।</p>
            </div>
        `
        return

    }

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
                <h3 class="text-2xl font-medium leading-6">${word.word ? word.word :'কোন শব্দ সিলেক্ট করা হইনি'}</h3>
                <p class="text-[18px] font-normal leading-6">Meaning /Pronounciation</p>
                <p class="font-bangla text-2xl font-medium text-[#2d2d2e]">"${word.meaning ? word.meaning : 'কোন অর্থ খুঁজে পাওয়া যাই নি'} /  ${word.pronunciation ? word.pronunciation : 'কোন pronounciation খুঁজে পাওয়া যাই নি'}"</p>
                <div class="flex justify-between items-center pt-5">
                    <button onclick="my_modal_5.showModal(${word.id})" class="info-btn btn bg-[#1A91FF10]"><i class="pointer-events-none fa-solid fa-circle-info"></i></button>
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
        <button id="lessons-${lesson.level_no}" href="" onclick="levelWords(${lesson.level_no})" class="lessons-btn btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>
        Lessons ${lesson.level_no}</button>
        `
        lessensContainer.append(lessonsBtnDiv)
        
    });
}


getLessons()