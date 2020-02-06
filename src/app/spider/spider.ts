import Httper from '../../utils/http';
import setting from '../../config/setting';
import fs from 'fs';

interface SipderData {
  area: [];
  dash: {};
}

class Spider {
  private url: string = 'https://ncov.dxy.cn/ncovh5/view/pneumonia';

  private async getRawHtml() {
    const rawHtml = await Httper.get(this.url);
    return rawHtml;
  }

  private async spiderArea(rawHtml: string) {
    const reg = /window.getAreaStat = (.*?)\}catch/;
    let data = [];

    const res = rawHtml.match(reg);

    if (res !== null) {
      data = JSON.parse(res[1]);
    }
    return data;
  }

  private async sipderDash(rawHtml: string) {
    const reg = /window.getStatisticsService = (.*?)\}catch/;
    let data = {};

    const res = rawHtml.match(reg);

    if (res !== null) {
      data = JSON.parse(res[1]);
    }
    return data;
  }

  intervalFunc() {
    this.spiderData();

    setInterval(() => {
      this.spiderData();
    }, setting.spiderTime);
  }

  private async spiderData() {
    console.log('spider start');

    const rawHtml = await this.getRawHtml();

    const area = await this.spiderArea(rawHtml);
    const dash = await this.sipderDash(rawHtml);

    const data: SipderData = {
      area,
      dash
    };
    this.saveData(data);
  }

  private saveData(data: SipderData) {
    const path = `${process.cwd()}/data/data.json`;

    if (data.area.length > 0 && Object.keys(data.dash).length > 0) {
      fs.writeFileSync(path, JSON.stringify(data));
    }
  }
}

const spider = new Spider();

export { spider };
