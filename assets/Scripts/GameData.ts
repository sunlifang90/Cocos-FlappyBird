import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

export class GameData {
    private static score: number = 0;
    private static bestScore: number = 0;
    private static isNew: boolean = false;

    public static addScore(score: number) {
        GameData.score += score;
        if (GameData.score > GameData.getBestScore()) {
            sys.localStorage.setItem("bestScore", GameData.score);
            GameData.isNew = true;
        }
    }

    public static resetScore() {
        GameData.score = 0;
        GameData.isNew = false;
    }

    public static getScore() {
        return GameData.score;
    }

    public static getBestScore() {
        GameData.bestScore = sys.localStorage.getItem("bestScore") || 0;
        return GameData.bestScore;
    }

    public static isNewValue() {
        return GameData.isNew;
    }
}


