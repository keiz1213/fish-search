class Prompt {
  constructor (choice) {
    this.choice = choice
  }

  makePrompt (answer) {
    if (!answer) {
      return this.selectPrompt(this.choice.firstChoices(), 'どうやって探しますか？')
    } else if (answer === '旬の時期から探す' || answer === 'よく釣れる時期から探す') {
      return this.selectPrompt(this.choice.getAllMonth(this.#compare), '月を選択してください')
    } else if (answer === '釣り方から探す') {
      return this.selectPrompt(this.choice.getAllHowToFish(), '釣り方を選択してください')
    } else if (answer === '食べ方から探す') {
      return this.selectPrompt(this.choice.getAllHowToEat(), '食べ方を選択してください')
    } else if (answer === '魚の名前から探す') {
      return this.multiSelectPrompt(this.choice.getAllFishNames(), '魚を選択してください')
    }
  }

  selectPrompt (choices, message) {
    const { Select } = require('enquirer')
    const prompt = new Select({
      message,
      choices
    })
    return prompt
  }

  multiSelectPrompt (choices, message) {
    const colors = require('ansi-colors')
    const { MultiSelect } = require('enquirer')
    const prompt = new MultiSelect({
      message,
      choices,
      footer () {
        return colors.dim('(スペースキーで選択、エンターキーで決定)')
      }
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

module.exports = Prompt
