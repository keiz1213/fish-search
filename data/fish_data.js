const fishData = [
  {
    name: ['アジ(鯵)'],
    otherName: ['特に無し'],
    season: ['7月', '8月', '9月'],
    fishingSeason: ['7月', '8月', '9月', '10月'],
    howToFish: ['サビキ', 'ルアー', 'かご釣り'],
    howToEat: ['刺し身', '南蛮漬け', '唐揚げ', 'なめろう'],
    timeZone: ['早朝', '夜']
  },
  {
    name: ['サバ(鯖)'],
    otherName: ['特に無し'],
    season: ['1月', '2月', '11月', '12月'],
    fishingSeason: ['9月', '10月'],
    howToFish: ['サビキ', 'ルアー'],
    howToEat: ['竜田揚げ', '煮付け', '塩焼き'],
    timeZone: ['朝']
  },
  {
    name: ['イワシ(鰯)'],
    otherName: ['特に無し'],
    season: ['9月', '10月'],
    fishingSeason: ['6月', '7月', '8月', '9月', '10月'],
    howToFish: ['サビキ'],
    howToEat: ['煮付け', '蒲焼き'],
    timeZone: ['朝', '夕']
  },
  {
    name: ['カサゴ(瘡魚)'],
    otherName: ['アラカブ', 'ガシラ'],
    season: ['1月', '2月'],
    fishingSeason: ['1月', '2月', '3月', '10月', '11月', '12月'],
    howToFish: ['穴釣り', 'ブラクリ'],
    howToEat: ['唐揚げ', '煮付け', '刺し身', '味噌汁'],
    timeZone: ['夜']
  },
  {
    name: ['メバル(目春)'],
    otherName: ['特に無し'],
    season: ['2月', '3月', '4月'],
    fishingSeason: ['3月', '4月', '5月', '6月'],
    howToFish: ['ルアー', '餌'],
    howToEat: ['煮付け', '刺し身', '唐揚げ'],
    timeZone: ['夜']
  },
  {
    name: ['アイナメ(鮎並)'],
    otherName: ['特に無し'],
    season: ['1月', '2月'],
    fishingSeason: ['1月', '2月', '12月'],
    howToFish: ['ルアー', '穴釣り', 'ブラクリ'],
    howToEat: ['刺し身', '素揚げ', '煮付け'],
    timeZone: ['朝', '夕']
  },
  {
    name: ['キジハタ(雉羽太)'],
    otherName: ['アコウ', 'アカアラ'],
    season: ['7月', '8月'],
    fishingSeason: ['7月', '8月', '9月'],
    howToFish: ['ルアー', '餌', 'タイラバ', '泳がせ'],
    howToEat: ['刺し身', '煮付け', '酒蒸し', 'お吸い物'],
    timeZone: ['朝', '夕']
  },
  {
    name: ['クロダイ(黒鯛)'],
    otherName: ['チヌ(茅渟)'],
    season: ['4月', '5月', '6月', '7月'],
    fishingSeason: ['3月', '4月', '8月', '9月', '10月'],
    howToFish: ['ウキフカセ', 'ルアー', '餌'],
    howToEat: ['塩焼き', '刺し身', 'ムニエル', '湯引き'],
    timeZone: ['朝', '夜']
  },
  {
    name: ['メジナ(眼仁奈)'],
    otherName: ['グレ'],
    season: ['1月', '2月', '3月'],
    fishingSeason: ['6月', '7月', '8月', '9月', '10月'],
    howToFish: ['ウキフカセ'],
    howToEat: ['焼き', '刺し身', '唐揚げ', '煮物'],
    timeZone: ['昼']
  },
  {
    name: ['キス(鱚)'],
    otherName: ['特になし'],
    season: ['5月', '6月', '7月'],
    fishingSeason: ['6月', '7月', '8月'],
    howToFish: ['投げ釣り'],
    howToEat: ['天ぷら', '刺し身', '唐揚げ'],
    timeZone: ['朝', '昼']
  },
  {
    name: ['カレイ(鰈)'],
    otherName: ['クチボソ'],
    season: ['1月', '2月', '12月'],
    fishingSeason: ['1月', '2月', '11月', '12月'],
    howToFish: ['投げ釣り'],
    howToEat: ['刺し身', '煮付け', '唐揚げ'],
    timeZone: ['朝', '夕']
  },
  {
    name: ['アオリイカ(障泥烏賊)'],
    otherName: ['ミズイカ'],
    season: ['5月', '6月', '10月', '11月'],
    fishingSeason: ['5月', '6月', '10月', '11月'],
    howToFish: ['ルアー', '泳がせ', 'ヤエン'],
    howToEat: ['刺し身', 'ソテー', '天ぷら', '唐揚げ'],
    timeZone: ['夜']
  },
  {
    name: ['タコ(蛸)'],
    otherName: ['特になし'],
    season: ['7月', '8月'],
    fishingSeason: ['7月', '8月', '9月'],
    howToFish: ['ルアー', 'テンヤ'],
    howToEat: ['たこめし', '湯引き', 'たこ焼き'],
    timeZone: ['夜']
  },
  {
    name: ['スズキ(鱸)'],
    otherName: ['シーバス', 'セイゴ→ フッコ→ スズキ'],
    season: ['5月', '6月', '7月'],
    fishingSeason: ['4月', '5月', '10月', '11月'],
    howToFish: ['投げ釣り', 'ルアー', '泳がせ', 'フカセ'],
    howToEat: ['塩焼き', '刺し身', 'カルパッチョ', 'ムニエル'],
    timeZone: ['朝', '昼', '夕', '夜']
  },
  {
    name: ['ブリ(鰤)'],
    otherName: ['ハマチ', 'ツバス→ ヤズ→ ワラサ→ ブリ'],
    season: ['8月', '9月', '10月'],
    fishingSeason: ['10月', '11月'],
    howToFish: ['ルアー', 'かご釣り'],
    howToEat: ['塩焼き', '刺し身', '照り焼き'],
    timeZone: ['朝', '夕']
  },
  {
    name: ['タチウオ(太刀魚)'],
    otherName: ['特になし'],
    season: ['9月', '10月'],
    fishingSeason: ['9月', '10月', '11月'],
    howToFish: ['ルアー', 'ウキ釣り'],
    howToEat: ['塩焼き', '刺し身', 'ムニエル', '唐揚げ', 'タタキ'],
    timeZone: ['夜']
  },
  {
    name: ['ヒラメ(鮃)'],
    otherName: ['特になし'],
    season: ['1月', '2月', '11月', '12月'],
    fishingSeason: ['5月', '6月', '10月', '11月'],
    howToFish: ['サビキ', 'ルアー', '泳がせ'],
    howToEat: ['ムニエル', '刺し身', '煮付け'],
    timeZone: ['朝', '夕']
  },
  {
    name: ['マゴチ(真鯒)'],
    otherName: ['特になし'],
    season: ['8月', '9月'],
    fishingSeason: ['6月', '7月', '8月'],
    howToFish: ['ルアー', '餌'],
    howToEat: ['ムニエル', '洗い'],
    timeZone: ['朝', '夕']
  },
  {
    name: ['サヨリ(細魚)'],
    otherName: ['特になし'],
    season: ['11月', '12月'],
    fishingSeason: ['11月', '12月'],
    howToFish: ['カゴ釣り', 'ウキ釣り'],
    howToEat: ['天ぷら', '丸揚げ'],
    timeZone: ['夜']
  },
  {
    name: ['カワハギ(皮剥)'],
    otherName: ['ウシズラ', 'カワハゲ'],
    season: ['1月', '2月', '8月', '9月', '12月'],
    fishingSeason: ['7月', '8月', '9月'],
    howToFish: ['サビキ', '投げ釣り'],
    howToEat: ['刺し身', '煮付け'],
    timeZone: ['朝']
  },
  {
    name: ['アイゴ(藍子)'],
    otherName: ['イバリ'],
    season: ['8月', '9月'],
    fishingSeason: ['8月', '9月', '10月'],
    howToFish: ['ウキ釣り', 'フカセ'],
    howToEat: ['塩焼き', '刺し身', 'ムニエル', '煮付け'],
    timeZone: ['夜']
  }
]

module.exports = fishData
