class Choice {
  constructor (allFishes) {
    this.allFishes = allFishes
  }

  firstChoices () {
    return ['旬の時期から探す', 'よく釣れる時期から探す', '釣り方から探す', '食べ方から探す']
  }

  getAllMonth (compare) {
    const seasons = this.allFishes.map(fish => fish.season)
    const month = Array.from(new Set(seasons.flat()))
    return month.sort(compare)
  }

  getAllHowToFish () {
    const howToFish = this.allFishes.map(fish => fish.howToFish)
    return Array.from(new Set(howToFish.flat()))
  }

  getAllHowToEat () {
    const howToEat = this.allFishes.map(fish => fish.howToEat)
    return Array.from(new Set(howToEat.flat()))
  }

  filterFishesBySeason (month) {
    return this.allFishes.filter(fish => fish.season.includes(month))
  }

  filterFishesByFishingSeason (month) {
    return this.allFishes.filter(fish => fish.fishingSeason.includes(month))
  }

  filterFishesByHowToFish (howToFish) {
    return this.allFishes.filter(fish => fish.howToFish.includes(howToFish))
  }

  filterFishesByHowToEat (howToEat) {
    return this.allFishes.filter(fish => fish.howToEat.includes(howToEat))
  }
}

module.exports = Choice
