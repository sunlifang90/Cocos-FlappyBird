import { _decorator, Component, instantiate, math, Node, Prefab } from 'cc';
import { Pipe } from './Pipe';
const { ccclass, property } = _decorator;

@ccclass('PipeManager')
export class PipeManager extends Component {
    
    @property(Prefab)
    private pipePrefab:Prefab = null;

    @property
    private createFrequency:number = 2;
    private createTime:number = 0;
    private hasInitCreate:boolean = false;

    private canCreate:boolean = true;
    
    
    start() {
        
    }

    update(deltaTime: number) {
        if (!this.canCreate) {
            return;
        }
        if (!this.hasInitCreate) {
            this.hasInitCreate = true;
            this.createPipe();// 初始直接创建一个
            this.createTime = 0;
            return
        }
        this.createTime += deltaTime;
        if (this.createTime > this.createFrequency) {
            this.createPipe();
            this.createTime = 0;
        }
    }

    private createPipe() {
        let pipe = instantiate(this.pipePrefab);
        this.node.addChild(pipe);
        pipe.setWorldPosition(this.node.getWorldPosition());

        let y = math.randomRangeInt(-100, 200);
        pipe.setPosition(pipe.position.x, y, 0);
    }  
    
    public enableCreate() {
        this.canCreate = true;
    }
    public disableCreate() {
        this.canCreate = false;
        this.node.children.forEach(element => {
            element.getComponent(Pipe).stopMove();
        });
    }
}


