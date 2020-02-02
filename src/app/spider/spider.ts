import Httper from "../../utils/http";

interface SipderData {}

enum Condition {
  AREA,
  DASH
}

class Spider {
  private url: string = "https://ncov.dxy.cn/ncovh5/view/pneumonia";

  constructor() {
    this.getRawHtml();
  }

  private async getRawHtml() {
    const rawHtml = await Httper.get(this.url);
    return rawHtml;
  }

  async spiderByCondition(condition: Condition) {
    const rawHtml = await this.getRawHtml();

    let data: SipderData = {};

    switch (condition) {
      case Condition.AREA:
        data = await this.spiderArea(rawHtml);
        break;
      case Condition.DASH:
        data = await this.sipderDash(rawHtml);
        break;
      default:
    }

    return data;
  }

  private async spiderArea(rawHtml: string) {
    const reg = /window.getAreaStat = (.*?)\}catch/;
    return this.analyz(rawHtml, reg);
  }

  private async sipderDash(rawHtml: string) {
    const reg = /window.getStatisticsService = (.*?)\}catch/;
    return this.analyz(rawHtml, reg);
  }

  private analyz(source: string, reg: RegExp): SipderData {
    const res = source.match(reg);

    let data = {};
    if (res !== null) {
      data = JSON.parse(res[1]);
    }
    return data;
  }
}

const spider = new Spider();

export { Condition, spider };
