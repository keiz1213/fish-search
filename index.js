#!/usr/bin/env node

const Fish = require('./lib/fish')
const Choice = require('./lib/choice')
const Filter = require('./lib/filter')
const Prompt = require('./lib/prompt')
const fishData = require('./data/fish_data')

class Search {
  constructor (prompt, filter) {
    this.prompt = prompt
    this.filter = filter
  }

  async fishSearch () {
    const firstAnswer = await this.question()
    const secondAnswer = await this.question(firstAnswer)
    const fishes = this.filter.fishFilter(firstAnswer, secondAnswer)
    this.showFishInfo(fishes)
  }

  async question (answer) {
    const prompt = answer ? this.prompt.makePrompt(answer) : this.prompt.makePrompt()
    return await prompt.run()
  }

  async showFishInfo (fishes) {
    fishes.push('終了')
    let answer
    do {
      const prompt = this.prompt.selectPrompt(fishes, '魚を選択してください')
      answer = await prompt.run()
      if (answer !== '終了') {
        const fish = fishes.find(fish => fish.name === answer)
        fish.fishInfo()
      }
    } while (answer !== '終了')
    console.log('良い一日を！')
  }
}

const allFishes = Fish.createAllFishes(fishData)
const choice = new Choice(allFishes)
const filter = new Filter(allFishes)
const prompt = new Prompt(choice)
new Search(prompt, filter).fishSearch()
