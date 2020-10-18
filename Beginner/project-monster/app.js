function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      monsterHealth2: 100,
      battleLogs: [],
      energy: 3,
      magic: 3,
      limit: 0,
      winner: '',
    };
  },
  computed: {
    monsterWidth() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return {
        width: `${this.monsterHealth}%`,
      };
    },
    monsterWidth2() {
      return {
        width: `${this.monsterHealth2}%`,
      };
    },
    playerWidth() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return {
        width: `${this.playerHealth}%`,
      };
    },
    noEnergy() {
      return this.energy < 3;
    },
    noMagic() {
      return this.magic < 3;
    },
    noLimit() {
      return this.limit < 10;
    },
    limitClass() {
      return {
        button_limit: this.limit >= 10,
      };
    },
    gameOverMessage() {
      if (this.winner === 'draw') {
        return 'A draw!';
      }
      if (this.winner === 'player') {
        return 'You won';
      }
      if (this.winner === 'monster') {
        return 'You lost';
      }
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
    monsterHealth2(value) {
      if (value <= 0) {
        this.monsterHealth2 = 0;
      }
    },
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.attackMonsterBar(attackValue);

      this.energy = this.energy + 1;
      this.magic = this.magic + 1;

      this.addBattleLog('player', 'attack', attackValue);

      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;

      this.limit = this.limit + 1;

      this.addBattleLog('monster', 'attack', attackValue);
    },
    specialAttack() {
      const attackValue = getRandomValue(20, 30);
      this.attackMonsterBar(attackValue);

      this.energy = 0;

      this.addBattleLog('player', 'attack', attackValue);

      this.attackPlayer();
    },
    heal() {
      const healValue = getRandomValue(15, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addBattleLog('player', 'heal', healValue);
      this.magic = 0;
    },
    limitBreak() {
      this.limit = 0;
      const attackValue = getRandomValue(5, 8);
      const that = this;
      let current = 0;
      const intervalID = setInterval(function() {
        // Your logic here
        that.attackMonsterBar(attackValue);
        if (++current === 7) {
          that.attackMonsterBar(attackValue * 2);

          that.addBattleLog('player', 'attack', attackValue * 9);

          window.clearInterval(intervalID);
        }
      }, 200);
    },
    surrender() {
      this.winner = 'monster';
    },
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.monsterHealth2 = 100;
      this.energy = 3;
      this.magic = 3;
      this.limit = 0;
      this.winner = '';
      this.battleLogs = [];
    },
    addBattleLog(who, what, value) {
      this.battleLogs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    attackMonsterBar(attackValue) {
      if (this.monsterHealth2 > 0) {
        this.monsterHealth2 -= attackValue;
      } else {
        this.monsterHealth -= attackValue;
      }
    },
  },
});

app.mount('#game');
