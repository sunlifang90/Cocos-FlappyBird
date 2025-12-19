import { _decorator, Component, Node } from 'cc';
import { Bird } from './Bird';
import { Bg } from './Bg';
import { PipeManager } from './PipeManager';
const { ccclass, property } = _decorator;

enum GameState {
    READY,
    PLAYING,
    OVER
}

@ccclass('GameManager')
export class GameManager extends Component {
    
    private static _instance: GameManager = null; 



    @property(Bird)
    private bird: Bird = null;
    @property(Bg)
    private bg: Bg = null;
    @property(Bg)
    private land:Bg = null;
    @property(PipeManager)
    private pipeManager:PipeManager = null;

    private gameState: GameState = GameState.READY;
    
    public static instance() {
        return this._instance;
    }

    protected onLoad(): void {
        GameManager._instance = this;
    }
    
    start() {
        
        //this.gameReady()
    }

    update(deltaTime: number) {
        
    }

    gameReady() {
        this.gameState = GameState.READY;
        this.bird.changeToDisable();
        this.bg.moveDisable();
        this.land.moveDisable();
        this.pipeManager.disableCreate();
    }

    startGame() {
        this.gameState = GameState.PLAYING;
    }

    gameOver() {
        this.gameState = GameState.OVER;
    }

}


