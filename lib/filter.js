class Filter {
  constructor (allFishes) {
    this.allFishes = allFishes
  }

  fishFilter (firstAnswer, secondAnswer) {
    if (firstAnswer === '旬の時期から探す') {
      return this.filterBySeason(secondAnswer)
    } else if (firstAnswer === 'よく釣れる時期から探す') {
      return this.filterByFishingSeason(secondAnswer)
    } else if (firstAnswer === '釣り方から探す') {
      return this.filterByHowToFish(secondAnswer)
    } else if (firstAnswer === '食べ方から探す') {
      return this.filterByHowToEat(secondAnswer)
    } else if (firstAnswer === '魚の名前から探す') {
      return this.filterByName(secondAnswer)
    }
  }

  filterBySeason (month) {
    return this.allFishes.filter(fish => fish.season.includes(month))
  }

  filterByFishingSeason (month) {
    return this.allFishes.filter(fish => fish.fishingSeason.includes(month))
  }

  filterByHowToFish (howToFish) {
    return this.allFishes.filter(fish => fish.howToFish.includes(howToFish))
  }

  filterByHowToEat (howToEat) {
    return this.allFishes.filter(fish => fish.howToEat.includes(howToEat))
  }

  filterByName (names) {
    const fishes = []
    for (let i = 0; i < names.length; i++) {
      fishes.push(this.allFishes.filter(fish => fish.name.includes(names[i])))
    }
    return fishes.flat()
  }
}

module.exports = Filter
