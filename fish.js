class Fish {
  constructor (name, otherName, season, fishingSeason, howToFish, timeZone, howToEat) {
    this.name = name
    this.otherName = otherName
    this.season = season
    this.fishingSeason = fishingSeason
    this.howToFish = howToFish
    this.timeZone = timeZone
    this.howToEat = howToEat
  }

  static createAllFishes (fishData) {
    return fishData.map(fish => new Fish(fish.name, fish.otherName, fish.season, fish.fishingSeason, fish.howToFish, fish.timeZone, fish.howToEat))
  }

  fishInfo () {
    const info = `
    名前: ${this.name}

    別名: ${this.otherName}

    旬: ${this.season}

    よく釣れる時期: ${this.fishingSeason}

    釣り方: ${this.howToFish}

    時間帯: ${this.timeZone}
    
    食べ方: ${this.howToEat}
    `
    console.log(info)
  }
}

module.exports = Fish
