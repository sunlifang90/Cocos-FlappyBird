import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export class GameData {
    public static score: number = 0;

    public static addScore(score: number) {
        GameData.score += score;
    }

    public static resetScore() {
        GameData.score = 0;
    }

    public static getScore() {
        return GameData.score;
    }
}


