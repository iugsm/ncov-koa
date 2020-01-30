import Httper from '../utils/http';

class Area {
  async getList() {
    const url: string = 'https://3g.dxy.cn/newh5/view/pneumonia';
    const resp: string = await Httper.get(url);
    const reg = /window.getAreaStat = (.*?)}catch/;
    const result = resp.match(reg);

    if (result !== null) {
      return JSON.parse(result[1]);
    }
    return [];
  }
}

export default new Area();
