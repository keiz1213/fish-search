#!/usr/bin/env node

const Fish = require('./lib/fish')
const Choice = require('./lib/choice')
const Search = require('./lib/search')
const fishData = require('./data/fish_data')

class Main {
  static async run (search) {
    const answer = await search.howToSearch()
    let fishes
    if (answer === '旬の時期から探す') {
      fishes = await search.searchBySeason()
    } else if (answer === 'よく釣れる時期から探す') {
      fishes = await search.searchByFishingSeason()
    } else if (answer === '釣り方から探す') {
      fishes = await search.searchByHowToFish()
    } else if (answer === '食べ方から探す') {
      fishes = await search.searchByHowToEat()
    } else if (answer === '魚の名前から探す') {
      fishes = await search.searchByName()
    }
    search.showFishInfo(fishes)
  }
}

const allFishes = Fish.createAllFishes(fishData)
const choice = new Choice(allFishes)
const search = new Search(choice)
Main.run(search)
