class Choice {
  constructor (allFishes) {
    this.allFishes = allFishes
  }

  firstChoices () {
    return ['旬の時期から探す', 'よく釣れる時期から探す', '釣り方から探す', '食べ方から探す']
  }

  allMonth (compare) {
    const seasons = this.allFishes.map(fish => fish.season)
    const month = Array.from(new Set(seasons.flat()))
    return month.sort(compare)
  }

  allHowToFish () {
    const howToFish = this.allFishes.map(fish => fish.howToFish)
    return Array.from(new Set(howToFish.flat()))
  }

  allHowToEat () {
    const howToEat = this.allFishes.map(fish => fish.howToEat)
    return Array.from(new Set(howToEat.flat()))
  }

  fishesBySeason (month) {
    return this.allFishes.filter(fish => fish.season.includes(month))
  }

  fishesByFishingSeason (month) {
    return this.allFishes.filter(fish => fish.fishingSeason.includes(month))
  }

  fishesByHowToFish (howToFish) {
    return this.allFishes.filter(fish => fish.howToFish.includes(howToFish))
  }

  fishesByHowToEat (howToEat) {
    return this.allFishes.filter(fish => fish.howToEat.includes(howToEat))
  }
}

module.exports = Choice
