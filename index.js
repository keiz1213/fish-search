const Fish = require('./fish')
const fishData = require('./fish_data')
const firstChoices = ['旬の時期', 'よく釣れる時期', '釣り方', '食べ方']
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

const getAllSeason = (allFishes) => {
  const seasons = allFishes.map(fish => fish.season)
  const month = Array.from(new Set(seasons.flat()))
  return month.sort(compare)
}

const getAllHowToFish = (allFishes) => {
  const howToFish = allFishes.map(fish => fish.howToFish)
  return Array.from(new Set(howToFish.flat()))
}

const getAllHowToEat = (allFishes) => {
  const howToEat = allFishes.map(fish => fish.howToEat)
  return Array.from(new Set(howToEat.flat()))
}

const filterWithSeason = async (allFishes) => {
  const prompt = createPrompt(getAllSeason(allFishes), '月を選択してください')
  const answer = await prompt.run()
  return allFishes.filter(fish => fish.season.includes(answer))
}

const filterWithFishingSeason = async (allFishes) => {
  const prompt = createPrompt(getAllSeason(allFishes), '月を選択してください')
  const answer = await prompt.run()
  return allFishes.filter(fish => fish.fishingSeason.includes(answer))
}

const filterWithHowtoFish = async (allFishes) => {
  const prompt = createPrompt(getAllHowToFish(allFishes), '釣り方を選択してください')
  const answer = await prompt.run()
  return allFishes.filter(fish => fish.howToFish.includes(answer))
}

const filterWithHowtoEat = async (allFishes) => {
  const prompt = createPrompt(getAllHowToEat(allFishes), '食べ方を選択してください')
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

main(firstChoices, allFishes)
