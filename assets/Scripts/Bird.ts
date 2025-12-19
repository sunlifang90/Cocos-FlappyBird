import { _decorator, Collider2D, Component, Contact2DType, Input, input, IPhysics2DContact, Node, RigidBody, RigidBody2D, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {
    
    private rgdBody: RigidBody2D = null;

    @property
    private rotationSpeed: number = 100;

    onLoad () {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);

    }

    onDestroy () {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }
    
    start() {
        this.rgdBody = this.getComponent(RigidBody2D);

        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }

    update(deltaTime: number) {
        if (this.node.angle > -50) {
            this.node.angle -= this.rotationSpeed * deltaTime;
        }
    }

    private onTouchStart () {
        //
        this.rgdBody.linearVelocity = new Vec2(0, 10);   

        this.node.setRotationFromEuler(new Vec3(0, 0, 30));
        //this.rgdBody.applyForceToCenter(new Vec2(0, 2), true);
        //this.rgdBody.applyLinearImpulseToCenter(new Vec2(0, 10), true);
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        console.log(otherCollider.tag);
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体结束接触时被调用一次
        console.log('onEndContact');
    }
}


