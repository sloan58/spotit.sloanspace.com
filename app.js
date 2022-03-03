const storage = window.localStorage
let icons = [
  'fa-bath',
  'fa-beer-mug-empty',
  'fa-bomb',
  'fa-brush',
  'fa-camera-retro',
  'fa-dragon',
  'fa-fire',
  'fa-floppy-disk',
  'fa-ghost',
  'fa-guitar',
  'fa-hand-spock',
  'fa-ice-cream',
  'fa-motorcycle',
  'fa-mug-saucer',
  'fa-poo',
  'fa-record-vinyl',
  'fa-skull-crossbones',
  'fa-socks',
  'fa-umbrella-beach',
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

function buildCards(cards) {
  return _.map(cards, (card) => {
    return {
      icon: card,
      size: 'text-' + _.sample(_.range(2, 9)) + 'xl',
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
