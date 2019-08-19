//初始化整个游戏的精灵,作为游戏开始的入口
import { ResourceLoader } from './js/base/ResourceLoader.js';
import { BackGround } from './js/runtime/BackGround.js';

export class Main {
  constructor(){
    console.log("我执行啦!");
    // this.canvas = document.getElementById("game_canvas");
    this.canvas = wx.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));

    let image = wx.createImage();
    image.src = "res/background.png";
    image.onload = () => {
      this.ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        image.width,
        image.height,
      );
    }
  }

  onResourceFirstLoaded(map){
    // console.log(mapp)
    let background = new BackGround(this.ctx, map.get("background"));
    background.draw();
  }
}