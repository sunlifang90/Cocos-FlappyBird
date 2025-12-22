import { _decorator, Component, director, Game, Label, Node } from 'cc';
import { Bird } from './Bird';
import { Bg } from './Bg';
import { PipeManager } from './PipeManager';
import { GameReadyUI } from './UI/GameReadyUI';
import { GameData } from './GameData';
import { GameOverUI } from './UI/GameOverUI';
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

    @property(GameReadyUI)
    private gameReayUI:GameReadyUI = null;
    @property(Node)
    private gamingUI:Node = null;
    @property(GameOverUI)
    private gameOverUI:GameOverUI = null;

    private gameState: GameState = GameState.READY;
    
    public static instance() {
        return this._instance;
    }

    protected onLoad(): void {
        GameManager._instance = this;
        director.on("addScore", this.addScore, this);
        director.on("gameOver", this.gameOver, this);
    }
    
    start() {
        
        this.gameReady()
    }

    update(deltaTime: number) {
        
    }

    gameReady() {
        this.gameState = GameState.READY;
        this.bird.changeToDisable();
        this.bg.moveDisable();
        this.land.moveDisable();
        this.pipeManager.disableCreate();
        this.gameReayUI.node.active = true;
        this.gamingUI.active = false;
        this.gameOverUI.node.active = false;
    }

    startGame() {
        this.gameState = GameState.PLAYING;
        this.bird.changeToEnable();
        this.bg.moveEnable();
        this.land.moveEnable();
        this.pipeManager.enableCreate();
        this.gameReayUI.node.active = false;
        this.gamingUI.active = true;
        this.gameOverUI.node.active = false;
    }

    restartGame() {
        GameData.resetScore();
        director.loadScene("Game");
    }

    gameOver() {
        if (this.gameState == GameState.OVER) return;
        this.gameState = GameState.OVER;
        this.bird.changeToDisableNoRgdBody();
        this.bg.moveDisable();
        this.land.moveDisable();
        this.pipeManager.disableCreate();
        this.gamingUI.active = false;
        this.gameOverUI.show();
    }


    addScore(score: number=1) {
        GameData.addScore(score);
        this.gamingUI.getChildByName("Score").getComponent(Label).string = GameData.getScore().toString();
    }
}


