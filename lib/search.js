class Search {
  constructor (choice) {
    this.choice = choice
  }

  async howToSearch () {
    const prompt = this.#createPrompt(this.choice.firstChoices(), 'どうやって魚を探しますか？')
    const answer = await prompt.run()
    return answer
  }

  async searchBySeason () {
    const prompt = this.#createPrompt(this.choice.allMonth(this.#compare), '月を選択してください')
    const answer = await prompt.run()
    return this.choice.fishesBySeason(answer)
  }

  async searchByFishingSeason () {
    const prompt = this.#createPrompt(this.choice.allMonth(this.#compare), '月を選択してください')
    const answer = await prompt.run()
    return this.choice.fishesByFishingSeason(answer)
  }

  async searchByHowToFish () {
    const prompt = this.#createPrompt(this.choice.allHowToFish(), '釣り方を選択してください')
    const answer = await prompt.run()
    return this.choice.fishesByHowToFish(answer)
  }

  async searchByHowToEat () {
    const prompt = this.#createPrompt(this.choice.allHowToEat(), '食べ方を選択してください')
    const answer = await prompt.run()
    return this.choice.fishesByHowToEat(answer)
  }

  async showFishInfo (fishes) {
    fishes.push('終了')
    let answer
    do {
      const prompt = this.#createPrompt(fishes, '魚を選択してください')
      answer = await prompt.run()
      if (answer !== '終了') {
        const fish = fishes.find(fish => fish.name === answer)
        fish.fishInfo()
      }
    } while (answer !== '終了')
    console.log('良い一日を！')
  }

  #createPrompt (choices, message) {
    const { Select } = require('enquirer')
    const prompt = new Select({
      message,
      choices
    })
    return prompt
  }

  #compare (a, b) {
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
}

module.exports = Search
