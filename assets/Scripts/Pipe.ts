import { _decorator, Component, Node } from 'cc';
import { Setting } from './Setting';
const { ccclass, property } = _decorator;

@ccclass('Pipe')
export class Pipe extends Component {
    
    @property
    private moveSpeed:number = 0;

    private canMove:boolean = true;
    
    start() {
        this.moveSpeed = Setting.moveSpeed;
    }

    update(deltaTime: number) {
        if (!this.canMove) {
            return;
        }
        const position = this.node.position;
        let moveDistance = this.moveSpeed * deltaTime;

        this.node.setPosition(position.x-moveDistance, position.y, position.z);

        //销毁管道
        if (position.x < -850) {
            this.node.destroy();
        }
    }

    public stopMove() {
        this.canMove = false;
    }

    public startMove() {
        this.canMove = true;
    }
}


