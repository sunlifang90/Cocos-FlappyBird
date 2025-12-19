import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bg')
export class Bg extends Component {
    
    @property(Node)
    private bg1:Node = null;
    @property(Node)
    private bg2:Node = null;
    @property
    private moveSpeed:number = 100;
    
    start() {

    }

    update(deltaTime: number) {
        let moveDistance = this.moveSpeed * deltaTime;

        const bg1Pos = this.bg1.position;
        const bg2Pos = this.bg2.position;

        let bg1x = bg1Pos.x - moveDistance;
        if (bg1x < -730){
            // 移动到右边
            this.bg1.setPosition(bg2Pos.x+725, bg1Pos.y, 0);
        } else {
            this.bg1.setPosition(bg1x, bg1Pos.y, 0);
        }

        let bg2x = bg2Pos.x - moveDistance;
        if (bg2x < -730){
            // 移动到右边
            this.bg2.setPosition(bg1Pos.x+725, bg2Pos.y, 0);
        } else {
            this.bg2.setPosition(bg2x, bg2Pos.y, 0);
        }
    }
}


