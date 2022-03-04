const storage = window.localStorage
let icons = [
  'fa-brands fa-accessible-icon',
  'fa-solid fa-anchor',
  'fa-brands fa-apple',
  'fa-solid fa-baby-carriage',
  'fa-solid fa-baby',
  'fa-solid fa-bacon',
  'fa-solid fa-bag-shopping',
  'fa-brands fa-aws',
  'fa-solid fa-bandage',
  'fa-solid fa-baseball',
  'fa-solid fa-basket-shopping',
  'fa-solid fa-basketball',
  'fa-solid fa-bath',
  'fa-solid fa-battery-full',
  'fa-solid fa-battery-half',
  'fa-solid fa-bed',
  'fa-solid fa-beer-mug-empty',
  'fa-solid fa-bell',
  'fa-solid fa-bicycle',
  'fa-solid fa-binoculars',
  'fa-solid fa-blender',
  'fa-solid fa-bomb',
  'fa-solid fa-bone',
  'fa-solid fa-book',
  'fa-solid fa-bookmark',
  'fa-solid fa-bowling-ball',
  'fa-solid fa-box',
  'fa-solid fa-bread-slice',
  'fa-solid fa-briefcase',
  'fa-solid fa-brush',
  'fa-solid fa-bug',
  'fa-solid fa-building-columns',
  'fa-solid fa-bullhorn',
  'fa-solid fa-bullseye',
  'fa-solid fa-burger',
  'fa-solid fa-bus',
  'fa-solid fa-cake-candles',
  'fa-solid fa-calculator',
  'fa-regular fa-calendar-days',
  'fa-solid fa-camera',
  'fa-solid fa-candy-cane',
  'fa-solid fa-car',
  'fa-solid fa-carrot',
  'fa-solid fa-cart-shopping',
  'fa-solid fa-cat',
  'fa-solid fa-chair',
  'fa-solid fa-charging-station',
  'fa-solid fa-cheese',
  'fa-solid fa-chess-knight',
  'fa-solid fa-church',
  'fa-solid fa-clipboard',
  'fa-regular fa-clock',
  'fa-solid fa-cloud',
  'fa-solid fa-closed-captioning',
  'fa-solid fa-coins',
  'fa-regular fa-comment',
  'fa-solid fa-compact-disc',
  'fa-solid fa-compass',
  'fa-solid fa-compass-drafting',
  'fa-solid fa-computer-mouse',
  'fa-solid fa-couch',
  'fa-solid fa-crow',
  'fa-solid fa-crown',
  'fa-solid fa-cubes',
  'fa-solid fa-desktop',
  'fa-solid fa-dna',
  'fa-solid fa-dog',
  'fa-solid fa-dove',
  'fa-solid fa-dragon',
  'fa-solid fa-droplet',
  'fa-solid fa-drum',
  'fa-solid fa-dumbbell',
  'fa-regular fa-envelope-open',
  'fa-solid fa-eye',
  'fa-regular fa-face-grin',
  'fa-solid fa-feather',
  'fa-solid fa-filter',
  'fa-solid fa-fingerprint',
  'fa-solid fa-fire',
  'fa-solid fa-fire-extinguisher',
  'fa-solid fa-fish',
  'fa-solid fa-flag-checkered',
  'fa-solid fa-flag-usa',
  'fa-solid fa-flask',
  'fa-regular fa-floppy-disk',
  'fa-solid fa-football',
  'fa-brands fa-fort-awesome',
  'fa-solid fa-frog',
  'fa-solid fa-gem',
  'fa-solid fa-ghost',
  'fa-solid fa-gift',
  'fa-solid fa-glasses',
  'fa-solid fa-graduation-cap',
  'fa-solid fa-guitar',
  'fa-solid fa-gun',
  'fa-solid fa-hammer',
  'fa-solid fa-hand',
  'fa-solid fa-hat-cowboy',
  'fa-solid fa-headphones',
  'fa-solid fa-heart',
  'fa-solid fa-hippo',
  'fa-solid fa-horse',
  'fa-solid fa-house',
  'fa-solid fa-ice-cream',
  'fa-solid fa-jet-fighter',
  'fa-solid fa-key',
  'fa-regular fa-keyboard',
  'fa-regular fa-lemon',
  'fa-regular fa-lightbulb',
  'fa-solid fa-lock',
  'fa-solid fa-martini-glass-empty',
  'fa-solid fa-microphone',
  'fa-solid fa-mitten',
  'fa-solid fa-mobile',
  'fa-regular fa-money-bill-1',
  'fa-solid fa-moon',
  'fa-solid fa-motorcycle',
  'fa-solid fa-mug-saucer',
  'fa-solid fa-paint-roller',
  'fa-solid fa-paintbrush',
  'fa-solid fa-palette',
  'fa-solid fa-paper-plane',
  'fa-solid fa-paperclip',
  'fa-solid fa-parachute-box',
  'fa-solid fa-pen-clip',
  'fa-solid fa-pencil',
  'fa-solid fa-phone',
  'fa-solid fa-piggy-bank',
  'fa-solid fa-pizza-slice',
  'fa-solid fa-plane',
  'fa-solid fa-plug',
  'fa-solid fa-poo',
  'fa-solid fa-rainbow',
  'fa-solid fa-sailboat',
  'fa-solid fa-scale-balanced',
  'fa-solid fa-scissors',
  'fa-brands fa-searchengin',
  'fa-solid fa-shield',
  'fa-solid fa-ship',
  'fa-solid fa-shirt',
  'fa-solid fa-shoe-prints',
  'fa-solid fa-skull',
  'fa-solid fa-snowflake',
  'fa-solid fa-snowman',
  'fa-solid fa-socks',
  'fa-solid fa-spider',
  'fa-solid fa-temperature-empty',
  'fa-solid fa-thumbs-up',
  'fa-solid fa-thumbtack',
  'fa-solid fa-toilet-paper',
  'fa-solid fa-tooth',
  'fa-solid fa-tractor',
  'fa-solid fa-train',
  'fa-regular fa-trash-can',
  'fa-solid fa-trophy',
  'fa-solid fa-truck',
  'fa-solid fa-umbrella',
  'fa-solid fa-umbrella-beach',
  'fa-solid fa-video',
  'fa-solid fa-yin-yang',
]

let colors = [
  'from-purple-600 to-blue-400',
  'from-cyan-500 to-blue-500',
  'from-cyan-500 to-blue-500',
  'from-purple-500 to-pink-500',
  'from-pink-500 to-orange-400',
  'from-teal-200 to-lime-200',
  'from-red-200 via-red-300',
]

let rotations = [
  '',
  'fa-rotate-90',
  'fa-rotate-180',
  'fa-rotate-270',
  'fa-flip-horizontal',
  'fa-flip-vertical',
  'fa-flip-both',
]

let textSizes = ['text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl']

function buildCards(cards) {
  return _.map(cards, (card) => {
    return {
      icon: card,
      size: _.sample(textSizes),
      color: _.sample(colors),
      rotation: _.sample(rotations),
    }
  })
}

function app() {
  return {
    players: JSON.parse(storage.getItem('players')) || [],
    leftCards: [],
    rightCards: [],
    addingPlayer: false,
    newPlayerName: '',
    needsPointAssignment: true,
    hasWinner: false,
    winner: '',
    winningScore: JSON.parse(storage.getItem('winningScore')) || 10,
    init() {
      this.$watch('winningScore', (v) => {
        storage.setItem('winningScore', v)
      })
      this.shuffle()
    },
    saveNewPlayer() {
      this.players.push({
        name: this.newPlayerName,
        score: 0,
      })
      storage.setItem('players', JSON.stringify(this.players))
      this.addingPlayer = false
      this.newPlayerName = ''
      console.log(this.players)
    },
    cancelAddPlayer() {
      this.addingPlayer = false
      this.newPlayerName = ''
    },
    removePlayer(player) {
      this.players = _.reject(this.players, (p) => p.name === player)
      storage.setItem('players', JSON.stringify(this.players))
    },
    addPoint(player) {
      this.players = this.players.map((p) => {
        if (p.name === player) {
          p.score++
        }
        return p
      })
      _.each(this.players, (player) => {
        if (player.score >= this.winningScore) {
          this.hasWinner = true
          this.winner = player.name
          this.players = _.map(this.players, (player) => {
            player.score = 0
            return player
          })
        }
      })
      storage.setItem('players', JSON.stringify(this.players))
      this.needsPointAssignment = false
    },
    newGame() {
      this.shuffle()
      this.hasWinner = false
      this.winner = ''
      this.needsPointAssignment = true
    },
    shuffle() {
      let options = icons
      let match = buildCards([_.sample(options)])[0]
      options = _.reject(options, (option) => option === match.icon)

      this.leftCards = _.sample(options, 7)
      options = _.reject(options, (option) =>
        _.contains(this.leftCards, option)
      )
      this.leftCards = buildCards(this.leftCards)
      this.leftCards.push(match)
      this.leftCards = _.shuffle(this.leftCards)

      this.rightCards = _.sample(options, 7)
      this.rightCards = buildCards(this.rightCards)
      this.rightCards.push(match)
      this.rightCards = _.shuffle(this.rightCards)

      this.needsPointAssignment = true
    },
  }
}
