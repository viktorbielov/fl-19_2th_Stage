class Game{

    constructor() {
        this.charactersArray = [
            // eslint-disable-next-line no-magic-numbers
            new Unit('Butcher',200,18,5,1.1), // (name, health, attack, armor, attack speed)
            // eslint-disable-next-line no-magic-numbers
            new Unit('Hughie',100,11,3,1.5),
            // eslint-disable-next-line no-magic-numbers
            new Unit('Homelander',450,35,10,0.8),
            // eslint-disable-next-line no-magic-numbers
            new Unit('Starlight',350,20,6,1.0),
            // eslint-disable-next-line no-magic-numbers
            new Unit('Queen Maeve',400,25,7,0.9),
            // eslint-disable-next-line no-magic-numbers
            new Unit('A-Train',250,19,5,0.5)
        ]
    }
 
    initialise(context) {
        context.firstInit();
        context.generateList(this.charactersArray);
        
        let myPlayer, enemyPlayer;

        context.startBtn.addEventListener('click', () => {
            alert('Choose your fighter');
            context.startBtn.classList.add('hidden');
            context.fightBtn.classList.add('hidden');
            context.character_list.classList.remove('hidden');

            context.character_list.childNodes.forEach((wrapper, i) => {
                wrapper.addEventListener('click', () => {
                    let flag = true;
                    const myPlayerId = i;
                    myPlayer = this.charactersArray[myPlayerId];
                    wrapper.classList.add('selected');

                    while(flag) {
                        const enemyPlayerId = Math.floor(Math.random() * context.character_list.childNodes.length);
                        if(enemyPlayerId !== myPlayerId) {
                                context.character_list.childNodes[enemyPlayerId].classList.add('selected');
                                context.battle_field.append(context.character_list.childNodes[myPlayerId],
                                    context.fightBtn,context.character_list.childNodes[enemyPlayerId]);
                                context.fightBtn.classList.remove('hidden');
                                context.character_list.childNodes.forEach((item) => {
                                item.classList.add('hidden');
                                flag = false;
                                enemyPlayer = this.charactersArray[enemyPlayerId];
                            });
                        }
                    }
                });
            });
        });
        context.fightBtn.addEventListener('click', () => {
            context.fightBtn.setAttribute('disabled', true);
            this.fight(context,myPlayer,enemyPlayer);
        });
    }

    fight(context,myPlayer, enemyPlayer) {
            const myPlayerNode = context.battle_field.childNodes[0].childNodes;
            // eslint-disable-next-line no-magic-numbers
            const enemyPlayerNode = context.battle_field.childNodes[2].childNodes;
            const fightInterval = setInterval(() => {
                if(myPlayer.health <= 0 && enemyPlayer.health <= 0) {
                    alert(`It's a draw`);
                    clearInterval(fightInterval);
                    window.location.reload();
                }else if(myPlayer.health <= 0 && enemyPlayer.health > 0) {
                    alert(`${enemyPlayer.name} has won`);
                    clearInterval(fightInterval);
                    window.location.reload();
                }else if(myPlayer.health > 0 && enemyPlayer.health <= 0) {
                    alert(`${myPlayer.name} has won`);
                    clearInterval(fightInterval);
                    window.location.reload();
                } else{
                    myPlayerNode[1].innerText = Unit.getDamage(myPlayer, enemyPlayer);
                    enemyPlayerNode[1].innerText = Unit.getDamage(enemyPlayer, myPlayer);
                }
            // eslint-disable-next-line no-magic-numbers
            },1000);
    }
}

class Unit {
    constructor(name, health, attack, armor, attackSpeed) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.armor = armor;
        this.attackSpeed = attackSpeed;
    }

    static getDamage(receiver, deliverer) {
        const delivererHitpoints = deliverer.attack / deliverer.attackSpeed;
        const deliveredDamage = delivererHitpoints - receiver.armor > 0 ? delivererHitpoints - receiver.armor : 0;
        receiver.health = (receiver.health - deliveredDamage).toFixed(1);
        if (receiver.health < 0) {
            receiver.health = 0;
        }
        return receiver.health;
    }
}

class Display {

    constructor() {
        this.startBtn = document.querySelector('.start');
        this.fightBtn = document.querySelector('.fight');
        this.character_list = document.querySelector('.characters-list');
        this.battle_field = document.querySelector('.battle-field');
    }

    initialise() {
        const game = new Game();
        game.initialise(this);

    }

    firstInit() {
        this.startBtn.classList.remove('hidden');
        this.character_list.classList.add('hidden');
    }  
    
    generateList(arg) {
        arg.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('character__wrapper')
            const title = document.createElement('h2');
            title.classList.add('character__title');
            const health = document.createElement('div');
            health.classList.add('character__health');
            const attack = document.createElement('div');
            attack.classList.add('character__attack');
            const armor = document.createElement('div');
            armor.classList.add('character__armor');
            const attackSpeed = document.createElement('div');
            attackSpeed.classList.add('character__attack-speed');
            title.innerHTML = item.name;
            health.innerHTML = item.health;
            attack.innerHTML = item.attack;
            armor.innerHTML = item.armor;
            attackSpeed.innerHTML = item.attackSpeed;
            div.append(title,health,attack,armor,attackSpeed);
            this.character_list.appendChild(div);
        })
    }
}

const startGame = new Display();

startGame.initialise();