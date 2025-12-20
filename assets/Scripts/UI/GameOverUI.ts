import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameOverUI')
export class GameOverUI extends Component {

    start() {

    }

    update(deltaTime: number) {
        
    }

    public show() {
        this.node.active = true;
    }

    public hide() {
        this.node.active = false;
    }
}


