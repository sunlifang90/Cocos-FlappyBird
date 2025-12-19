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
        
    }
}


