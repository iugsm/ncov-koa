import Httper from '../../utils/http';

interface SipderData {}

class Spider {
  private url: string = 'https://ncov.dxy.cn/ncovh5/view/pneumonia';

  constructor() {
    this.getRawHtml();
  }

  private async getRawHtml() {
    const rawHtml = await Httper.get(this.url);
    return rawHtml;
  }

  async spiderArea() {
    const rawHtml = await this.getRawHtml();
    const reg = /window.getAreaStat = (.*?)\}catch/;
    return this.analyz(reg, rawHtml);
  }

  async sipderDash() {
    const rawHtml = await this.getRawHtml();
    const reg = /window.getStatisticsService = (.*?)\}catch/;
    return this.analyz(reg, rawHtml);
  }

  private analyz(reg: RegExp, source: string): SipderData {
    const res = source.match(reg);

    let data = {};
    if (res !== null) {
      data = JSON.parse(res[1]);
    }
    return data;
  }
}

export default new Spider();
