class Choice {
  static firstChoices () {
    return ['旬の時期', 'よく釣れる時期', '釣り方', '食べ方']
  }

  static allMonth (allFishes, compare) {
    const seasons = allFishes.map(fish => fish.season)
    const month = Array.from(new Set(seasons.flat()))
    return month.sort(compare)
  }

  static allHowToFish (allFishes) {
    const howToFish = allFishes.map(fish => fish.howToFish)
    return Array.from(new Set(howToFish.flat()))
  }

  static allHowToEat (allFishes) {
    const howToEat = allFishes.map(fish => fish.howToEat)
    return Array.from(new Set(howToEat.flat()))
  }
}

module.exports = Choice
