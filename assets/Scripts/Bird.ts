import { _decorator, Component, Input, input, Node, RigidBody, RigidBody2D, Vec2, Vec3 } from 'cc';
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
}


