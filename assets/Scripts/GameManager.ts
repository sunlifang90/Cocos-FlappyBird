import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    
    private static _instance: GameManager = null; 

    @property
    moveSpeed: number = 100;
    
    public static get instance() {
        return this._instance;
    }

    protected onLoad(): void {
        GameManager._instance = this;
    }
    
    start() {
        

    }

    update(deltaTime: number) {
        
    }
}


