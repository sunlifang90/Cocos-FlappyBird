import { _decorator, Component, director, Label, Node } from 'cc';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('GameOverUI')
export class GameOverUI extends Component {

    private static MEDAL0 = 0;
    private static MEDAL1 = 10;
    private static MEDAL2 = 20;
    private static MEDAL3 = 30;

    @property(Label)
    private currentScore:Label = null;
    @property(Label)
    private bestScore:Label = null;
    @property(Node)
    private isNew:Node = null;

    @property([Node])
    private medals:Node[] = [];

    start() {

    }

    update(deltaTime: number) {
        
    }

    public show() {
        this.node.active = true;
        this.currentScore.string = GameData.getScore().toString();
        this.bestScore.string = GameData.getBestScore().toString();
        if(GameData.isNewValue()) {
            this.isNew.active = true;
        }

        if (GameData.getScore() >= GameOverUI.MEDAL0 && GameData.getScore() < GameOverUI.MEDAL1) {
            this.showMedal(0);
        } else if (GameData.getScore() >= GameOverUI.MEDAL1 && GameData.getScore() < GameOverUI.MEDAL2){
            this.showMedal(3);
        } else if (GameData.getScore() >= GameOverUI.MEDAL2 && GameData.getScore() < GameOverUI.MEDAL3){
            this.showMedal(2);
        } else {
            this.showMedal(1);
        }
    }

    public showMedal(index: number) {
        for(let i = 0; i < this.medals.length; i++) {
            this.medals[i].active = false;
        }
        this.medals[index].active = true;
    }

    public hide() {
        this.node.active = false;
    }
}


