//Sat Mar 15 2025 09:01:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const initScript = require('../utils/initScript');
const {
  $,
  notify,
  sudojia,
  checkUpdate
} = initScript('星妈优选');
const starMomList = process.env.STAR_MOM_TOKEN ? process.env.STAR_MOM_TOKEN.split(/[\n&]/) : [];
let message = '';
const baseUrl = 'https://www.feihevip.com';
const appId = 'xmyx';
const appKey = 'TwUQ01lKS1Km5zlV2f7amsZc5EQYkTbv';
const headers = {
  'User-Agent': sudojia.getRandomUserAgent(),
  "Host": "www.feihevip.com",
  'Content-Type': "application/json",
  'Referer': 'https://servicewechat.com/wx4205ec55b793245e/271/page-frame.html',
  "fhAppid": appId,
  "source": 1
};
const taskList = [{
  taskName: "浏览主会场",
  taskType: "LLZTY",
  time: 3
}, {
  taskName: "浏览热销爆品1",
  taskType: "TZSPXQ2",
  time: 3
}, {
  taskName: "查看我的优惠券",
  taskType: "LLYHJ",
  time: 3
}, {
  taskName: "浏览视频10s",
  taskType: "LLSP",
  time: 11
}, {
  taskName: "补签赚积分",
  taskType: "YXBQ",
  time: 3
}, {
  taskName: "购买任意商品1次",
  taskType: "YXXD",
  time: 3
}, {
  taskName: "大转盘抽奖",
  taskType: "YXDZP",
  time: 3
}, {
  taskName: "打开签到提醒",
  taskType: "YXDY",
  time: 3
}, {
  taskName: "浏览粮油专场10s",
  taskType: "XXGG",
  time: 11
}];
!(async () => {
  await checkUpdate($.name, starMomList);
  console.log(`\n已随机分配 User-Agent\n\n${headers['user-agent'] || headers['User-Agent']}`);
  for (let i = 0; i < starMomList.length; i++) {
    const index = i + 1;
    headers.token = starMomList[i];
    await refreshToken(starMomList[i]);
    console.log(`\n*****第[${index}]个${$.name}账号*****`);
    message += `📣====${$.name}账号[${index}]====📣\n`;
    await $.wait(sudojia.getRandomWait(2000, 2500));
  }
  if (message) {
    await notify.sendNotify(`「${$.name}」`, `${message}`);
  }
})().catch(e => $.logErr(e)).finally(() => $.done());
async function main() {
  await sign();
  await $.wait(sudojia.getRandomWait(1e3, 2e3));
  console.log('开始执行任务列表...');
  await $.wait(sudojia.getRandomWait(500, 888));
  for (const task of taskList) {
    await toFinish(task.taskName, task.taskType);
    await $.wait(1000 * task.time);
    await completeTask(task.taskName, task.taskType);
    await $.wait(sudojia.getRandomWait(1e3, 3e3));
  }
  await getUserInfo();
}
async function sign() {
  try {
    const data = await sudojia.sendRequest(`${baseUrl}/api/member/signin/getSignInfo?signType=1`, 'get', Object.assign(headers, getSignature()));
    if ('200' !== data.code) {
      return console.error(data.msg);
    }
    const {
      signPop
    } = data.data;
    const point = signPop ? signPop[0].signPoint : 0;
    console.log(point === 0 ? '今日已签到，请勿重复签到' : `签到成功，积分+${point}`);
    point === 0 ? message += '今日已签到\n' : message += `签到成功，积分+${point}\n`;
  } catch (e) {
    console.error('签到时发生异常 ->', e.response.data);
  }
}
async function toFinish(taskName, taskType) {
  try {
    const data = await sudojia.sendRequest(`${baseUrl}/api/member/signin/tofinish?taskType=${taskType}`, 'get', Object.assign(headers, getSignature()));
    if ('200' !== data.code) {
      return console.error(`执行[${taskName}]任务失败 ->`, data.msg);
    }
    console.log(`去执行[${taskName}]任务`);
  } catch (e) {
    console.error(`执行[${taskName}]任务时发生异常 ->`, e.response.data);
  }
}
async function completeTask(taskName, taskType) {
  try {
    const data = await sudojia.sendRequest(`${baseUrl}/api/member/signin/completeTask?taskType=${taskType}`, 'get', Object.assign(headers, getSignature()));
    if ('200' !== data.code) {
      return console.error(`完成[${taskName}]任务失败❌ ->`, data.msg, '\n');
    }
    const point = data.data.awardSendPoints;
    console.log(`完成任务[${taskName}]---成功✅，积分+${point}\n`);
    message += `完成任务[${taskName}]---成功✅，积分+${point}\n`;
  } catch (e) {
    console.error(`完成[${taskName}]任务时发生异常 ->`, e.response.data);
  }
}
async function getUserInfo() {
  try {
    const data = await sudojia.sendRequest(`${baseUrl}/api/starMember/getMemberInfo`, 'post', Object.assign(headers, getSignature()));
    if ('200' !== data.code) {
      return console.error(data.msg);
    }
    const score = data.data.memberPoints.scoreValue;
    const level = data.data.memberGrade.currentGrade;
    const userName = data.data.baseInfo.nickName;
    console.log(`昵称：${userName}(${level})\n当前积分：${score}`);
    message += `昵称：${userName}(${level})\n当前积分：${score}\n\n`;
  } catch (e) {
    console.error('获取用户信息时发生异常 ->', e.response.data);
  }
}
async function refreshToken(token) {
  try {
    const {
      fhNonceStr,
      fhTimestamp,
      fhSign
    } = getRefreshTokenSignature();
    const header = {
      "Host": "mom.feihe.com",
      "token": token,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.48(0x1800302b) NetType/4G Language/zh_CN",
      "Referer": "https://servicewechat.com/wx4205ec55b793245e/215/page-frame.html",
      "fhAppid": 'xmh',
      "source": 1,
      fhNonceStr,
      fhTimestamp,
      fhSign
    };
    const data = await sudojia.sendRequest('https://mom.feihe.com/program/token/refreshToken', 'get', header);
    console.log(data);
  } catch (e) {}
}
function getRefreshTokenSignature() {
  const fhNonceStr = getFhNonceStr({
    length: 16
  });
  const fhTimestamp = +String(Date.now()).slice(0, 10);
  const signString = `fhAppidxmhfhNonceStr${fhNonceStr}fhTimestamp${fhTimestamp}98d9fe9b613a479dbcb111ca261e3ce1`;
  return {
    fhNonceStr,
    fhTimestamp,
    fhSign: sudojia.md5(signString).toUpperCase()
  };
}
function getSignature(data = {}) {
  const json = data ? JSON.stringify(data) : '';
  const fhNonceStr = getFhNonceStr({
    length: 16
  });
  const fhTimestamp = +String(Date.now()).slice(0, 10);
  const signString = `fhAppid${appId}fhNonceStr${fhNonceStr}fhTimestamp${fhTimestamp}${json}${appKey}`;
  return {
    fhNonceStr,
    fhTimestamp,
    fhSign: sudojia.md5(signString).toUpperCase()
  };
}
function getFhNonceStr(t) {
  let e,
    r,
    n = "",
    o = (t = function (t) {
      t || (t = {});
      return {
        length: t.length || 8,
        numeric: "boolean" != typeof t.numeric || t.numeric,
        letters: "boolean" != typeof t.letters || t.letters,
        special: "boolean" == typeof t.special && t.special,
        exclude: Array.isArray(t.exclude) ? t.exclude : []
      };
    }(t)).length;
  t.exclude;
  const i = function (t) {
    let e = "";
    t.numeric && (e += "0123456789");
    t.letters && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
    t.special && (e += "!$%^&*()_+|~-=`{}[]:;<>?,./");
    for (let r = 0; r <= t.exclude.length; r++) e = e.replace(t.exclude[r], "");
    return e;
  }(t);
  for (e = 1; e <= o; e++) n += i.substring(r = Math.floor(Math.random() * i.length), r + 1);
  return n;
}