const Fish = require('./fish')
const Choice = require('./choice')
const fishData = require('./fish_data')
const allFishes = Fish.createAllFishes(fishData)

const createPrompt = (choices, message) => {
  const { Select } = require('enquirer')
  const prompt = new Select({
    message,
    choices
  })
  return prompt
}

const compare = (a, b) => {
  let index = 0
  const aNum = parseInt(a)
  const bNum = parseInt(b)
  if (aNum > bNum) {
    index = 1
  } else if (aNum < bNum) {
    index = -1
  }
  return index
}

const filterWithSeason = async (allFishes) => {
  const prompt = createPrompt(Choice.allMonth(allFishes, compare), '月を選択してください')
  const answer = await prompt.run()
  return allFishes.filter(fish => fish.season.includes(answer))
}

const filterWithFishingSeason = async (allFishes) => {
  const prompt = createPrompt(Choice.allMonth(allFishes), '月を選択してください')
  const answer = await prompt.run()
  return allFishes.filter(fish => fish.fishingSeason.includes(answer))
}

const filterWithHowtoFish = async (allFishes) => {
  const prompt = createPrompt(Choice.allHowToFish(allFishes), '釣り方を選択してください')
  const answer = await prompt.run()
  return allFishes.filter(fish => fish.howToFish.includes(answer))
}

const filterWithHowtoEat = async (allFishes) => {
  const prompt = createPrompt(Choice.allHowToEat(allFishes), '食べ方を選択してください')
  const answer = await prompt.run()
  return allFishes.filter(fish => fish.howToEat.includes(answer))
}

const showFishInfo = async (filteredFishes) => {
  filteredFishes.push('終了')
  let answer
  do {
    const prompt = createPrompt(filteredFishes, '魚を選択してください')
    answer = await prompt.run()
    if (answer !== '終了') {
      const fish = filteredFishes.find(fish => fish.name === answer)
      fish.fishInfo()
    }
  } while (answer !== '終了')
  console.log('お気をつけて！')
}

const main = async (firstChoices, allFishes) => {
  const prompt = createPrompt(firstChoices, 'どこから探しますか？')
  const answer = await prompt.run()
  let filteredFishes
  if (answer === '旬の時期') {
    filteredFishes = await filterWithSeason(allFishes)
  } else if (answer === 'よく釣れる時期') {
    filteredFishes = await filterWithFishingSeason(allFishes)
  } else if (answer === '釣り方') {
    filteredFishes = await filterWithHowtoFish(allFishes)
  } else if (answer === '食べ方') {
    filteredFishes = await filterWithHowtoEat(allFishes)
  }
  showFishInfo(filteredFishes)
}

main(Choice.firstChoices(), allFishes)
