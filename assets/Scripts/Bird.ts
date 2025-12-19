import { _decorator, Component, Input, input, Node, RigidBody, RigidBody2D, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {
    
    private rgdBody: RigidBody2D = null;

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
        
    }

    private onTouchStart () {
        this.rgdBody.linearVelocity = new Vec2(0, 10);   
        //this.rgdBody.applyForceToCenter(new Vec2(0, 2), true);
        //this.rgdBody.applyLinearImpulseToCenter(new Vec2(0, 10), true);
    }
}


