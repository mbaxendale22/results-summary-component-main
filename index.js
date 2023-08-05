const cardContainer = document.querySelector('.card-container')
const scoreDisplay = document.querySelector('.score-display')

function createResultsCards(scoresArr, scoreCounter) {
    scoresArr.forEach((score) => {
        scoreCounter += score.score
        const newScore = document.createElement('div')
        newScore.classList.add('score-container')
        const content = `
    <div class="score-container-left-side">
    <img src="${score.icon}" />
    <p>${score.category}</p>
    </div>
    <p class="score-container-right-side"><span class="score-text">${score.score}</span><span>&nbsp;</span> / 100</p>
    `
        newScore.innerHTML = content
        const styles = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: score.backgroundColor,
            borderRadius: '8px',
            color: score.textColor,
            padding: '0 1rem 0 1rem',
            marginBottom: '1rem',
        }
        Object.assign(newScore.style, styles)
        cardContainer.appendChild(newScore)
    })
    return scoreCounter
}

function createScoreAnimation(score) {
    for (let i = 0; i <= score; i++) {
        setTimeout(() => {
            scoreDisplay.textContent = i
        }, 25 * i)
    }
}

const finalScoreCounter = createResultsCards(SCORES, 0)

const finalScore = Math.floor(finalScoreCounter / SCORES.length).toString()

createScoreAnimation(finalScore)
