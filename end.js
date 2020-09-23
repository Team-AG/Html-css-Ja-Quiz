const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highscores = JSON.parse(localStorage.getItem('highscores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventdefaults()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highscores.push(score)

    highscores.sort((a, b) => {
        return b.score -a.score
    })
    highscores.splices(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}