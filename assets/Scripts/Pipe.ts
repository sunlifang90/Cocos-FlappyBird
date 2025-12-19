import { _decorator, Component, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Pipe')
export class Pipe extends Component {
    
    @property
    private moveSpeed:number = 0;
    
    start() {
        this.moveSpeed = GameManager.instance.moveSpeed;
    }

    update(deltaTime: number) {
        const position = this.node.position;
        let moveDistance = this.moveSpeed * deltaTime;

        this.node.setPosition(position.x-moveDistance, position.y, position.z);
    }
}


