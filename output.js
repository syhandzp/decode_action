//Mon Jul 08 2024 03:52:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x213c2a = new _0x53a454("望潮"),
  _0x55853d = "wangchao_data",
  _0x2d1ad7 = require("fs"),
  {
    log: _0x512ef4
  } = require("console"),
  _0x12d0c6 = 1,
  _0x255d9c = _0x213c2a.isNode() ? require("./sendNotify") : "";
let _0x224124 = ["@", "\n"],
  _0x5e744d = "",
  _0x19f320 = (_0x213c2a.isNode() ? process.env[_0x55853d] : _0x213c2a.getdata(_0x55853d)) || "",
  _0x92e31b = [],
  _0x2ac4a9 = 0,
  _0x3a2e22 = 0;
const _0x3fa217 = _0x213c2a.isNode() ? require("./utils") : "";
let _0x122342 = "";
async function _0x314475() {
  _0x512ef4("tips:每日低保");
  await _0xe92002();
  _0x512ef4("\n-------- 开始登陆 --------\n");
  taskall = [];
  for (let _0x2edd99 of _0x92e31b) {
    _0x2edd99.loadCache();
    if (!_0x2edd99.valid) {
      taskall.push(await _0x2edd99.login());
    } else await _0x213c2a.wait(200);
  }
  await Promise.all(taskall);
  _0x92e31b = _0x92e31b?.["filter"](_0x4c3c9c => _0x4c3c9c?.["valid"]);
  _0x512ef4("\n-------- 阅读 --------\n");
  taskall = [];
  if (!_0x92e31b?.["length"]) {
    _0x512ef4("\n-------- 无可用账号 --------\n");
  }
  for (let _0x4fac26 of _0x92e31b) {
    if (_0x4fac26.valid) {
      taskall.push(await _0x4fac26.get_cookie_xmt());
      taskall.push(await _0x4fac26.get_cookie_srv());
      taskall.push(await _0x4fac26.read_list());
      await _0x213c2a.wait(10000);
      taskall.push(await _0x4fac26.read_info());
      taskall.push(await _0x4fac26.luckdraw_history());
      await _0x213c2a.wait(10000);
    }
  }
  await Promise.all(taskall);
  _0x512ef4("\n-------- 运行完毕 --------\n");
}
class _0x496a7a {
  constructor(_0x476cff) {
    this.index = ++_0x2ac4a9;
    this.account = _0x476cff.split("&")[0];
    this.password = _0x476cff.split("&")[1];
    this.xmtCookie = "";
    this.srvCookie = "";
    this.xmtHeaders_GET = {
      "Host": "xmt.taizhou.com.cn",
      "Connection": "keep-alive",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.0;native_app",
      "Accept": "*/*",
      "X-Requested-With": "com.shangc.tiennews.taizhou",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://xmt.taizhou.com.cn/readingAward/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "JSESSIONID="
    };
    this.srvHeaders_GET = {
      "Host": "srv-app.taizhou.com.cn",
      "Connection": "keep-alive",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.0;native_app",
      "Accept": "*/*",
      "Referer": "https://srv-app.taizhou.com.cn/luckdraw/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "JSESSIONID="
    };
    this.srvHeaders_POST = {
      "Host": "srv-app.taizhou.com.cn",
      "Connection": "keep-alive",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.0;native_app",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "*/*",
      "Origin": "https://srv-app.taizhou.com.cn",
      "X-Requested-With": "com.shangc.tiennews.taizhou",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://srv-app.taizhou.com.cn/luckdraw/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "JSESSIONID="
    };
  }
  ["loadCache"]() {
    let _0x47e8e1 = _0x17f0b8(_0x55853d + "_config", this.account);
    if (_0x47e8e1) {
      _0x47e8e1 = JSON.parse(_0x47e8e1);
      console.log("账号[" + this.index + "]从缓存读取成功，其ID为： " + _0x47e8e1?.["id"] + "，手机号为：" + this.account);
      this.id = _0x47e8e1?.["id"];
      this.sessionId = _0x47e8e1?.["sessionId"];
      this.valid = true;
      return;
    }
  }
  async ["loginByCode"](_0x124a4d, _0x23c68d) {
    try {
      let _0x42652b = "/api/zbtxz/login",
        _0x1ea92b = _0x3fa217.guid(),
        _0x22664b = _0x3fa217.ts13(),
        _0x306c3c = _0x42652b + "&&" + _0x124a4d + "&&" + _0x1ea92b + "&&" + _0x22664b + "&&FR*r!isE5W&&64",
        _0x9c26bb = _0x3fa217.SHA256_Encrypt(_0x306c3c),
        _0x1ca5b7 = {
          "method": "POST",
          "url": "https://vapp.taizhou.com.cn" + _0x42652b,
          "headers": {
            "X-SESSION-ID": "" + _0x124a4d,
            "X-REQUEST-ID": _0x1ea92b,
            "X-TIMESTAMP": _0x22664b,
            "X-SIGNATURE": _0x9c26bb,
            "X-TENANT-ID": 64,
            "User-Agent": "5.3.1;00000000-6470-e940-ffff-ffffc798b45f;OPPO PBBM00;Android;9;huawei",
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "vapp.taizhou.com.cn",
            "Connection": "Keep-Alive"
          },
          "body": "code=" + _0x23c68d
        },
        _0x698129 = await _0x5f08e8(_0x1ca5b7, "取Token");
      if (_0x698129.code == 0) {
        this.valid = true;
        this.id = _0x698129.data.session.account_id;
        this.sessionId = _0x698129.data.session.id;
        _0x2feeda(_0x55853d + "_config", this.account, JSON.stringify({
          "id": this.id,
          "sessionId": this.sessionId
        }));
        _0x5381fb("账号[" + this.index + "],取Token成功");
      } else this.valid = false, _0x5381fb("账号[" + this.index + "],取Token:失败 ❌ 了呢,原因未知！"), console.log(_0x698129);
    } catch (_0x3e444a) {
      console.log(_0x3e444a);
    }
  }
  async ["loginInit"](_0x569407) {
    try {
      const _0x124b41 = "";
      let _0x10846f = {
          "method": "POST",
          "url": "https://vapp.taizhou.com.cn/api/account/init",
          "headers": {
            "User-Agent": "5.3.1;00000000-6470-e940-ffff-ffffc798b45f;OPPO PBBM00;Android;9;huawei",
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "vapp.taizhou.com.cn",
            "Connection": "Keep-Alive",
            "X-SIGNATURE": "7234f60a0bca2744f1f67afa2c3bfc2eba6e171aa6868b28b1d498cad9f0cf69",
            "X-REQUEST-ID": "f3c53cac-d4b9-47a2-8e56-c380f89b7b3f",
            "Content-Length": _0x124b41?.["length"],
            "X-SESSION-ID": "",
            "X-TENANT-ID": "64",
            "X-TIMESTAMP": "1687607239038"
          },
          "body": _0x124b41
        },
        _0x27da7e = await _0x5f08e8(_0x10846f, "初始化");
      _0x27da7e.code == 0 ? (_0x5381fb("账号[" + this.index + "],初始化成功"), _0x122342 = _0x27da7e.data.session.id, await this.loginByCode(_0x27da7e.data.session.id, _0x569407)) : (this.valid = false, _0x5381fb("账号[" + this.index + "],初始化:失败 ❌ 了呢,原因：", _0x27da7e), console.log(_0x27da7e));
    } catch (_0x5e8d06) {
      console.log(_0x5e8d06);
    }
  }
  async ["login"]() {
    let _0x2801c2 = "/web/oauth/credential_auth",
      _0x338aa9 = _0x3fa217.guid(),
      _0x2bcd12 = _0x2801c2 + "&&" + _0x338aa9 + "&&FR*r!isE5W&&64",
      _0x1a7e47 = _0x3fa217.SHA256_Encrypt(_0x2bcd12);
    try {
      const _0x287c00 = "client_id=10019&password=" + encodeURIComponent(await this.RSA_Encrypt(this.password)) + "&phone_number=" + this.account;
      let _0x5a205a = {
          "method": "POST",
          "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
          "headers": {
            "User-Agent": "ANDROID;9;10019;5.3.1;1.0;null;PBBM00",
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Host": "passport.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-SIGNATURE": _0x1a7e47,
            "X-REQUEST-ID": _0x338aa9,
            "Content-Length": _0x287c00?.["length"],
            "COOKIE": "SESSION=ZDZkYjJiYWMtMjU3Zi00YzNhLWE1N2EtNDJkY2EzYzA2ZDk2; Path=/; HttpOnly; SameSite=Lax"
          },
          "body": _0x287c00
        },
        _0x3e786b = await _0x5f08e8(_0x5a205a, "登录");
      _0x3e786b.code == 0 ? (_0x5381fb("账号[" + this.index + "],登录成功"), !_0x122342 ? await this.loginInit(_0x3e786b.data.authorization_code.code) : await this.loginByCode(_0x122342, _0x3e786b.data.authorization_code.code)) : (this.valid = false, _0x5381fb("账号[" + this.index + "],登录:失败 ❌ 了呢,原因：", _0x3e786b), console.log(_0x3e786b));
    } catch (_0x5f4419) {
      console.log(_0x5f4419);
    }
  }
  async ["RSA_Encrypt"](_0x39a733) {
    const _0x4ff01d = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB\n-----END PUBLIC KEY-----",
      _0x5b2fb5 = _0x3fa217.RSA_Encrypt(_0x39a733, _0x4ff01d);
    return _0x5b2fb5;
  }
  async ["get_cookie_xmt"]() {
    try {
      return new Promise(_0x59b123 => {
        let _0x3f2cbb = {
          "url": "https://xmt.taizhou.com.cn/prod-api/user-read/app/login?id=" + this.id + "&sessionId=" + this.sessionId,
          "headers": this.xmtHeaders_GET
        };
        _0x213c2a.get(_0x3f2cbb, async (_0x545dba, _0x5ae2cb, _0x59014f) => {
          try {
            let _0x4f0e67 = _0x5ae2cb.headers["set-cookie"][0];
            const _0x8ab06c = /JSESSIONID=([^;]+)/,
              _0x158c9b = _0x4f0e67.match(_0x8ab06c);
            if (_0x158c9b) {
              this.xmtCookie = _0x158c9b[1];
              _0x512ef4("账号[" + this.index + "]  @smallfawn 验证成功");
            } else _0x512ef4("账号[" + this.index + "]  @smallfawn 验证失败");
          } catch (_0x20dfaf) {
            _0x213c2a.logErr(_0x20dfaf, _0x5ae2cb);
          } finally {
            _0x59b123();
          }
        });
      });
    } catch (_0x5b04e8) {
      console.log(_0x5b04e8);
    }
  }
  async ["get_cookie_srv"]() {
    return new Promise(_0x2022ce => {
      let _0x44eb5e = {
        "url": "https://srv-app.taizhou.com.cn/tzrb/user/loginWC?accountId=" + this.id + "&sessionId=" + this.sessionId,
        "headers": this.srvHeaders_GET
      };
      _0x213c2a.get(_0x44eb5e, async (_0x1688de, _0x4d9148, _0x366eab) => {
        try {
          let _0xc7c2d9 = _0x4d9148.headers["set-cookie"][0];
          const _0x181b96 = /JSESSIONID=([^;]+)/,
            _0x2dfa3e = _0xc7c2d9.match(_0x181b96);
          _0x2dfa3e ? (this.srvCookie = _0x2dfa3e[1], _0x512ef4("账号[" + this.index + "]  @smallfawn 验证成功")) : _0x512ef4("账号[" + this.index + "]  @smallfawn 验证失败");
        } catch (_0x2c33e2) {
          _0x213c2a.logErr(_0x2c33e2, _0x4d9148);
        } finally {
          _0x2022ce();
        }
      });
    });
  }
  async ["read_list"]() {
    try {
      let _0xb5408c = this.xmtHeaders_GET;
      _0xb5408c.Cookie = "JSESSIONID=" + this.xmtCookie;
      let _0x5f5896 = {
          "url": "https://xmt.taizhou.com.cn/prod-api/user-read/list/" + _0x213c2a.time("yyyyMMdd"),
          "headers": _0xb5408c
        },
        _0x4b4119 = await _0x5f08e8(_0x5f5896);
      if (_0x4b4119.code == 200) for (let _0x16f717 of _0x4b4119.data.articleIsReadList) {
        !_0x16f717.isRead && (_0x5381fb("账号[" + this.index + "]  执行阅读" + _0x16f717.title), await this.read_1(_0x16f717.id));
      } else {}
    } catch (_0x2a6fe4) {
      console.log(_0x2a6fe4);
    }
  }
  async ["read_info"]() {
    try {
      let _0x22a703 = this.xmtHeaders_GET;
      _0x22a703.Cookie = "JSESSIONID=" + this.xmtCookie;
      let _0x21b8fc = {
          "url": "https://xmt.taizhou.com.cn/prod-api/user-read-count/count/" + _0x213c2a.time("yyyyMMdd"),
          "headers": _0x22a703
        },
        _0x1d066d = await _0x5f08e8(_0x21b8fc);
      if (_0x1d066d.code == 200) {
        if (_0x1d066d.data == 1) {
          _0x5381fb("账号[" + this.index + "]  执行抽奖");
          await this.luckdraw();
        }
      } else _0x5381fb("账号[" + this.index + "]  无抽奖次数，可能是已经抽过奖了……");
    } catch (_0x922acb) {
      console.log(_0x922acb);
    }
  }
  async ["luckdraw"]() {
    try {
      let _0x309bdc = this.srvHeaders_POST;
      _0x309bdc.Cookie = "JSESSIONID=" + this.srvCookie;
      let _0x450ce4 = {
          "url": "https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/save",
          "headers": _0x309bdc,
          "body": "activityId=67"
        },
        _0x398c77 = await _0x5f08e8(_0x450ce4);
      if (_0x398c77.code == 200) {
        _0x512ef4("抽奖成功");
      } else {
        if (_0x398c77.code == 500) {
          _0x512ef4("已经抽过奖了..");
        }
      }
    } catch (_0xb6f589) {
      console.log(_0xb6f589);
    }
  }
  async ["luckdraw_history"]() {
    try {
      let _0x41e087 = this.srvHeaders_GET;
      _0x41e087.Cookie = "JSESSIONID=" + this.srvCookie;
      let _0x4f0b17 = {
          "url": "https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/pageList?pageSize=10&pageNum=1&activityId=67",
          "headers": _0x41e087
        },
        _0x411f78 = await _0x5f08e8(_0x4f0b17);
      if (_0x411f78.code == 200) for (let _0x59ff9d of _0x411f78.data.records) {
        _0x5381fb("账号[" + this.index + "] 抽奖结果： " + _0x59ff9d.awardName + "   抽奖时间：" + _0x59ff9d.createTime);
      } else {}
    } catch (_0x4c2725) {
      console.log(_0x4c2725);
    }
  }
  async ["read_1"](_0x4c855c) {
    try {
      let _0x4ad00a = Date.now(),
        _0x3cb9fa = _0x20a065("&&".concat(_0x4c855c, "&&TlGFQAOlCIVxnKopQnW&&").concat(_0x4ad00a)),
        _0x1948b1 = this.xmtHeaders_GET;
      _0x1948b1.Cookie = "JSESSIONID=" + this.xmtCookie;
      let _0x4dc918 = {
          "url": "https://xmt.taizhou.com.cn/prod-api/already-read/article?articid=" + _0x4c855c + "&timestamp=" + _0x4ad00a + "&signature=" + _0x3cb9fa,
          "headers": _0x1948b1
        },
        _0x4b4724 = await _0x5f08e8(_0x4dc918);
      if (_0x4b4724.code == 200) _0x512ef4("阅读成功");else {}
    } catch (_0x4648cb) {
      console.log(_0x4648cb);
    }
  }
}
!(async () => {
  if (!(await _0x11080e())) return;
  _0x92e31b.length > 0 && (await _0x314475());
  await _0x36b640(_0x5e744d);
})().catch(_0x2320b9 => console.log(_0x2320b9)).finally(() => _0x213c2a.done());
function _0x2feeda(_0x52a91b, _0x3f3470, _0x29397c) {
  let _0x337cd3 = {},
    _0x35e82b = {};
  try {
    _0x337cd3 = _0x2d1ad7.readFileSync(_0x52a91b + ".json", "utf8");
    _0x35e82b = JSON.parse(_0x337cd3);
  } catch (_0x12b49c) {}
  _0x35e82b[_0x3f3470] = _0x29397c;
  const _0x51662e = JSON.stringify(_0x35e82b);
  try {
    _0x2d1ad7.writeFileSync(_0x52a91b + ".json", _0x51662e);
  } catch (_0x143fc5) {
    _0x143fc5.code === "ENOENT" ? _0x2d1ad7.writeFileSync(_0x52a91b + ".json", _0x51662e) : console.error("保存文件时发生错误：", _0x143fc5);
  }
}
function _0x17f0b8(_0x1b8a4e, _0x236c81) {
  try {
    const _0x207111 = _0x2d1ad7.readFileSync(_0x1b8a4e + ".json", "utf8"),
      _0x84d8bd = JSON.parse(_0x207111);
    return _0x84d8bd[_0x236c81];
  } catch (_0x864f6a) {
    if (_0x864f6a.code === "ENOENT") {
      return undefined;
    } else console.error("读取文件时发生错误：", _0x864f6a);
  }
}
async function _0x11080e() {
  if (_0x19f320) {
    let _0x3360a4 = _0x224124[0];
    for (let _0x5c77cf of _0x224124) if (_0x19f320.indexOf(_0x5c77cf) > -1) {
      _0x3360a4 = _0x5c77cf;
      break;
    }
    for (let _0x43d86d of _0x19f320.split(_0x3360a4)) _0x43d86d && _0x92e31b.push(new _0x496a7a(_0x43d86d));
    _0x3a2e22 = _0x92e31b.length;
  } else {
    console.log("未找到CK");
    return;
  }
  return console.log("共找到" + _0x3a2e22 + "个账号"), true;
}
function _0x5f08e8(_0x4bf8d5, _0x272a46) {
  return _0x272a46 = _0x4bf8d5.method?.["toLowerCase"]() || (_0x4bf8d5?.["body"] ? "post" : "get"), new Promise(_0x4f2af9 => {
    _0x213c2a[_0x272a46](_0x4bf8d5, (_0x3707f9, _0xe3acc3, _0xa46a13) => {
      try {
        _0x3707f9 ? (console.log(_0x272a46 + "请求失败", _0x3707f9), _0x213c2a.logErr(_0x3707f9)) : _0xa46a13 ? (typeof JSON.parse(_0xa46a13) == "object" ? _0xa46a13 = JSON.parse(_0xa46a13) : _0xa46a13 = _0xa46a13, _0x4f2af9(_0xa46a13)) : console.log("请求api返回数据为空，请检查自身原因");
      } catch (_0x512951) {
        _0x213c2a.logErr(_0x512951, _0xe3acc3);
      } finally {
        _0x4f2af9();
      }
    });
  });
}
function _0x615816(_0x2f7455, _0x76c21f = 3 * 1000) {
  return new Promise(_0x2b3985 => {
    let _0x3faeed = {
      "url": "https://ghproxy.com/https://raw.githubusercontent.com/" + _0x2f7455
    };
    _0x213c2a.get(_0x3faeed, async (_0x2582cd, _0x7e6961, _0x2fafe9) => {
      try {
        let _0x535ef2 = /scriptVersionNow\s*=\s*(["'`])([\d.]+)\1/,
          _0x49c81a = _0x2fafe9.match(_0x535ef2);
        scriptVersionLatest = _0x49c81a ? _0x49c81a[2] : "";
      } catch (_0x3f2133) {
        _0x213c2a.logErr(_0x3f2133, _0x7e6961);
      } finally {
        _0x2b3985();
      }
    }, _0x76c21f);
  });
}
async function _0xe92002() {
  try {
    const _0x30c1ab = ["https://ghproxy.com/https://raw.githubusercontent.com/smallfawn/Note/main/Notice.json", "https://fastly.jsdelivr.net/gh/smallfawn/Note@main/Notice.json", "https://cdn.jsdelivr.net/gh/smallfawn/Note@main/Notice.json", "https://gitee.com/smallfawn/Note/raw/master/Notice.json"];
    let _0x1b1e84 = null;
    for (const _0x42875b of _0x30c1ab) {
      const _0x2f7a12 = {
          "url": _0x42875b,
          "headers": {
            "User-Agent": ""
          }
        },
        _0x25bb3a = await _0x5f08e8(_0x2f7a12);
      if (_0x25bb3a && "notice" in _0x25bb3a) {
        _0x1b1e84 = _0x25bb3a.notice.replace(/\n/g, "\n");
        break;
      }
    }
    _0x1b1e84 && _0x5381fb(_0x1b1e84);
  } catch (_0x26cf66) {
    console.log(_0x26cf66);
  }
}
async function _0x3842f4(_0x48ec23 = 3 * 1000) {
  return new Promise(_0x1bcca1 => {
    try {
      let _0x4df67e = {
        "url": "https://v1.hitokoto.cn/",
        "headers": {}
      };
      _0x213c2a.get(_0x4df67e, async (_0x3c66da, _0xeb07a7, _0x531c00) => {
        try {
          _0x531c00 = JSON.parse(_0x531c00);
          _0x1bcca1(_0x531c00.hitokoto);
        } catch (_0x28b5c3) {
          _0x213c2a.logErr(_0x28b5c3, _0xeb07a7);
        } finally {
          _0x1bcca1();
        }
      }, _0x48ec23);
    } catch (_0x584382) {
      console.log(_0x584382);
    }
  });
}
function _0x5381fb(_0x4d0ecc) {
  if (_0x213c2a.isNode()) {
    _0x4d0ecc && (console.log("" + _0x4d0ecc), _0x5e744d += "\n" + _0x4d0ecc);
  } else console.log("" + _0x4d0ecc), _0x5e744d += "\n" + _0x4d0ecc;
}
async function _0x36b640(_0x181ca6) {
  if (!_0x181ca6) return;
  if (_0x12d0c6 > 0) {
    if (_0x213c2a.isNode()) await _0x255d9c.sendNotify(_0x213c2a.name, _0x181ca6);else {
      _0x213c2a.msg(_0x213c2a.name, "", _0x181ca6);
    }
  } else console.log(_0x181ca6);
}
function _0x33dbb6(_0x2b8f54) {
  return _0x3587b6(), _0x1f0c55(_0x2b8f54, _0x2b8f54.length), _0x7fcbec(), _0x1e1c0d();
}
function _0x3fdf4c(_0x19f687, _0x442008) {
  return _0x442008 >>> _0x19f687 | _0x442008 << 32 - _0x19f687;
}
function _0x14fd0a(_0x2e6e0b, _0x3b6307, _0x49ac51) {
  return _0x2e6e0b & _0x3b6307 ^ ~_0x2e6e0b & _0x49ac51;
}
function _0x17511b(_0x31a963, _0x38635e, _0x1d14a1) {
  return _0x31a963 & _0x38635e ^ _0x31a963 & _0x1d14a1 ^ _0x38635e & _0x1d14a1;
}
function _0x24da9a(_0x16790e) {
  return _0x3fdf4c(2, _0x16790e) ^ _0x3fdf4c(13, _0x16790e) ^ _0x3fdf4c(22, _0x16790e);
}
function _0x1de187(_0x30caa2) {
  return _0x3fdf4c(6, _0x30caa2) ^ _0x3fdf4c(11, _0x30caa2) ^ _0x3fdf4c(25, _0x30caa2);
}
function _0x12a4b5(_0x4e0b2c) {
  return _0x3fdf4c(7, _0x4e0b2c) ^ _0x3fdf4c(18, _0x4e0b2c) ^ _0x4e0b2c >>> 3;
}
function _0x6a02a1(_0x488d66) {
  return _0x3fdf4c(17, _0x488d66) ^ _0x3fdf4c(19, _0x488d66) ^ _0x488d66 >>> 10;
}
function _0x5477d8(_0x2739f5, _0x1bb2d3) {
  return _0x2739f5[_0x1bb2d3 & 15] += _0x6a02a1(_0x2739f5[_0x1bb2d3 + 14 & 15]) + _0x2739f5[_0x1bb2d3 + 9 & 15] + _0x12a4b5(_0x2739f5[_0x1bb2d3 + 1 & 15]);
}
var _0x45016e = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
  _0x2ac166,
  _0x47a972,
  _0x3a71d6,
  _0x2c71c8 = "0123456789abcdef";
function _0x35edd0(_0xadd1ed, _0xb66c38) {
  var _0x13bc28 = (_0xadd1ed & 65535) + (_0xb66c38 & 65535),
    _0xdf1034 = (_0xadd1ed >> 16) + (_0xb66c38 >> 16) + (_0x13bc28 >> 16);
  return _0xdf1034 << 16 | _0x13bc28 & 65535;
}
function _0x3587b6() {
  _0x2ac166 = new Array(8);
  _0x47a972 = new Array(2);
  _0x3a71d6 = new Array(64);
  _0x47a972[0] = _0x47a972[1] = 0;
  _0x2ac166[0] = 1779033703;
  _0x2ac166[1] = 3144134277;
  _0x2ac166[2] = 1013904242;
  _0x2ac166[3] = 2773480762;
  _0x2ac166[4] = 1359893119;
  _0x2ac166[5] = 2600822924;
  _0x2ac166[6] = 528734635;
  _0x2ac166[7] = 1541459225;
}
function _0x5ad6a0() {
  var _0x3080e4,
    _0x41f8c4,
    _0x22e00c,
    _0x369e22,
    _0x4edc28,
    _0x397c4b,
    _0x3239b4,
    _0x3ac250,
    _0x4c3745,
    _0x2fa93d,
    _0x527bc7 = new Array(16);
  _0x3080e4 = _0x2ac166[0];
  _0x41f8c4 = _0x2ac166[1];
  _0x22e00c = _0x2ac166[2];
  _0x369e22 = _0x2ac166[3];
  _0x4edc28 = _0x2ac166[4];
  _0x397c4b = _0x2ac166[5];
  _0x3239b4 = _0x2ac166[6];
  _0x3ac250 = _0x2ac166[7];
  for (var _0x45a8a6 = 0; _0x45a8a6 < 16; _0x45a8a6++) _0x527bc7[_0x45a8a6] = _0x3a71d6[(_0x45a8a6 << 2) + 3] | _0x3a71d6[(_0x45a8a6 << 2) + 2] << 8 | _0x3a71d6[(_0x45a8a6 << 2) + 1] << 16 | _0x3a71d6[_0x45a8a6 << 2] << 24;
  for (var _0x56eb7 = 0; _0x56eb7 < 64; _0x56eb7++) {
    _0x4c3745 = _0x3ac250 + _0x1de187(_0x4edc28) + _0x14fd0a(_0x4edc28, _0x397c4b, _0x3239b4) + _0x45016e[_0x56eb7];
    if (_0x56eb7 < 16) _0x4c3745 += _0x527bc7[_0x56eb7];else _0x4c3745 += _0x5477d8(_0x527bc7, _0x56eb7);
    _0x2fa93d = _0x24da9a(_0x3080e4) + _0x17511b(_0x3080e4, _0x41f8c4, _0x22e00c);
    _0x3ac250 = _0x3239b4;
    _0x3239b4 = _0x397c4b;
    _0x397c4b = _0x4edc28;
    _0x4edc28 = _0x35edd0(_0x369e22, _0x4c3745);
    _0x369e22 = _0x22e00c;
    _0x22e00c = _0x41f8c4;
    _0x41f8c4 = _0x3080e4;
    _0x3080e4 = _0x35edd0(_0x4c3745, _0x2fa93d);
  }
  _0x2ac166[0] += _0x3080e4;
  _0x2ac166[1] += _0x41f8c4;
  _0x2ac166[2] += _0x22e00c;
  _0x2ac166[3] += _0x369e22;
  _0x2ac166[4] += _0x4edc28;
  _0x2ac166[5] += _0x397c4b;
  _0x2ac166[6] += _0x3239b4;
  _0x2ac166[7] += _0x3ac250;
}
function _0x1f0c55(_0x3e43a3, _0x40d802) {
  var _0x3a3362,
    _0x5210f9,
    _0x37f25f = 0;
  _0x5210f9 = _0x47a972[0] >> 3 & 63;
  var _0x436dc1 = _0x40d802 & 63;
  if ((_0x47a972[0] += _0x40d802 << 3) < _0x40d802 << 3) _0x47a972[1]++;
  _0x47a972[1] += _0x40d802 >> 29;
  for (_0x3a3362 = 0; _0x3a3362 + 63 < _0x40d802; _0x3a3362 += 64) {
    for (var _0x44bf4a = _0x5210f9; _0x44bf4a < 64; _0x44bf4a++) _0x3a71d6[_0x44bf4a] = _0x3e43a3.charCodeAt(_0x37f25f++);
    _0x5ad6a0();
    _0x5210f9 = 0;
  }
  for (var _0x44bf4a = 0; _0x44bf4a < _0x436dc1; _0x44bf4a++) _0x3a71d6[_0x44bf4a] = _0x3e43a3.charCodeAt(_0x37f25f++);
}
function _0x7fcbec() {
  var _0x4150dc = _0x47a972[0] >> 3 & 63;
  _0x3a71d6[_0x4150dc++] = 128;
  if (_0x4150dc <= 56) {
    for (var _0x5acee1 = _0x4150dc; _0x5acee1 < 56; _0x5acee1++) _0x3a71d6[_0x5acee1] = 0;
  } else {
    for (var _0x5acee1 = _0x4150dc; _0x5acee1 < 64; _0x5acee1++) _0x3a71d6[_0x5acee1] = 0;
    _0x5ad6a0();
    for (var _0x5acee1 = 0; _0x5acee1 < 56; _0x5acee1++) _0x3a71d6[_0x5acee1] = 0;
  }
  _0x3a71d6[56] = _0x47a972[1] >>> 24 & 255;
  _0x3a71d6[57] = _0x47a972[1] >>> 16 & 255;
  _0x3a71d6[58] = _0x47a972[1] >>> 8 & 255;
  _0x3a71d6[59] = _0x47a972[1] & 255;
  _0x3a71d6[60] = _0x47a972[0] >>> 24 & 255;
  _0x3a71d6[61] = _0x47a972[0] >>> 16 & 255;
  _0x3a71d6[62] = _0x47a972[0] >>> 8 & 255;
  _0x3a71d6[63] = _0x47a972[0] & 255;
  _0x5ad6a0();
}
function _0x3e363b() {
  var _0x213b38 = 0,
    _0x2f2101 = new Array(32);
  for (var _0x5e9a80 = 0; _0x5e9a80 < 8; _0x5e9a80++) {
    _0x2f2101[_0x213b38++] = _0x2ac166[_0x5e9a80] >>> 24 & 255;
    _0x2f2101[_0x213b38++] = _0x2ac166[_0x5e9a80] >>> 16 & 255;
    _0x2f2101[_0x213b38++] = _0x2ac166[_0x5e9a80] >>> 8 & 255;
    _0x2f2101[_0x213b38++] = _0x2ac166[_0x5e9a80] & 255;
  }
  return _0x2f2101;
}
function _0x1e1c0d() {
  var _0xc78068 = new String();
  for (var _0x23c4c8 = 0; _0x23c4c8 < 8; _0x23c4c8++) {
    for (var _0x1561ec = 28; _0x1561ec >= 0; _0x1561ec -= 4) _0xc78068 += _0x2c71c8.charAt(_0x2ac166[_0x23c4c8] >>> _0x1561ec & 15);
  }
  return _0xc78068;
}
function _0x20a065(_0x4b9461) {
  function _0x193d93(_0x25adb7, _0x21fea5) {
    return _0x25adb7 << _0x21fea5 | _0x25adb7 >>> 32 - _0x21fea5;
  }
  function _0x23f5a0(_0x1ee0f1, _0x35f3b1) {
    var _0x16b5e2, _0x4035a9, _0x58d614, _0x26f04c, _0x22255e;
    return _0x58d614 = 2147483648 & _0x1ee0f1, _0x26f04c = 2147483648 & _0x35f3b1, _0x16b5e2 = 1073741824 & _0x1ee0f1, _0x4035a9 = 1073741824 & _0x35f3b1, _0x22255e = (1073741823 & _0x1ee0f1) + (1073741823 & _0x35f3b1), _0x16b5e2 & _0x4035a9 ? 2147483648 ^ _0x22255e ^ _0x58d614 ^ _0x26f04c : _0x16b5e2 | _0x4035a9 ? 1073741824 & _0x22255e ? 3221225472 ^ _0x22255e ^ _0x58d614 ^ _0x26f04c : 1073741824 ^ _0x22255e ^ _0x58d614 ^ _0x26f04c : _0x22255e ^ _0x58d614 ^ _0x26f04c;
  }
  function _0x51d78a(_0x9ba40d, _0x52ad08, _0x53a263) {
    return _0x9ba40d & _0x52ad08 | ~_0x9ba40d & _0x53a263;
  }
  function _0x3b2cf3(_0x55896a, _0x1ac882, _0x43eeea) {
    return _0x55896a & _0x43eeea | _0x1ac882 & ~_0x43eeea;
  }
  function _0x4a5034(_0x2574b2, _0x295441, _0x31fc2c) {
    return _0x2574b2 ^ _0x295441 ^ _0x31fc2c;
  }
  function _0x35678d(_0xcf30c5, _0x1d41bc, _0x57f387) {
    return _0x1d41bc ^ (_0xcf30c5 | ~_0x57f387);
  }
  function _0x10fc82(_0x385c78, _0x5604e1, _0x5f1805, _0x55314f, _0x3e7369, _0x81668, _0x2306b6) {
    return _0x385c78 = _0x23f5a0(_0x385c78, _0x23f5a0(_0x23f5a0(_0x51d78a(_0x5604e1, _0x5f1805, _0x55314f), _0x3e7369), _0x2306b6)), _0x23f5a0(_0x193d93(_0x385c78, _0x81668), _0x5604e1);
  }
  function _0x1f7075(_0x3f1a03, _0xcd9518, _0x3c78c6, _0x557212, _0x51b384, _0x2953cd, _0x3b22f9) {
    return _0x3f1a03 = _0x23f5a0(_0x3f1a03, _0x23f5a0(_0x23f5a0(_0x3b2cf3(_0xcd9518, _0x3c78c6, _0x557212), _0x51b384), _0x3b22f9)), _0x23f5a0(_0x193d93(_0x3f1a03, _0x2953cd), _0xcd9518);
  }
  function _0xf5f866(_0x24d83a, _0x5dab54, _0x44c142, _0xf48bf3, _0x5a40ab, _0x589e92, _0x43fb11) {
    return _0x24d83a = _0x23f5a0(_0x24d83a, _0x23f5a0(_0x23f5a0(_0x4a5034(_0x5dab54, _0x44c142, _0xf48bf3), _0x5a40ab), _0x43fb11)), _0x23f5a0(_0x193d93(_0x24d83a, _0x589e92), _0x5dab54);
  }
  function _0x5dd955(_0x3e89a5, _0x4eed56, _0x2d2941, _0x348094, _0x3c5a29, _0x47f2c6, _0x74b610) {
    return _0x3e89a5 = _0x23f5a0(_0x3e89a5, _0x23f5a0(_0x23f5a0(_0x35678d(_0x4eed56, _0x2d2941, _0x348094), _0x3c5a29), _0x74b610)), _0x23f5a0(_0x193d93(_0x3e89a5, _0x47f2c6), _0x4eed56);
  }
  function _0x217183(_0x1160ad) {
    for (var _0x26a9d6, _0x3bcf86 = _0x1160ad.length, _0x43b806 = _0x3bcf86 + 8, _0x2f6b8d = (_0x43b806 - _0x43b806 % 64) / 64, _0x1e2598 = 16 * (_0x2f6b8d + 1), _0x1f1573 = new Array(_0x1e2598 - 1), _0x52add7 = 0, _0x1700c0 = 0; _0x3bcf86 > _0x1700c0;) _0x26a9d6 = (_0x1700c0 - _0x1700c0 % 4) / 4, _0x52add7 = _0x1700c0 % 4 * 8, _0x1f1573[_0x26a9d6] = _0x1f1573[_0x26a9d6] | _0x1160ad.charCodeAt(_0x1700c0) << _0x52add7, _0x1700c0++;
    return _0x26a9d6 = (_0x1700c0 - _0x1700c0 % 4) / 4, _0x52add7 = _0x1700c0 % 4 * 8, _0x1f1573[_0x26a9d6] = _0x1f1573[_0x26a9d6] | 128 << _0x52add7, _0x1f1573[_0x1e2598 - 2] = _0x3bcf86 << 3, _0x1f1573[_0x1e2598 - 1] = _0x3bcf86 >>> 29, _0x1f1573;
  }
  function _0x25ac30(_0x1abe23) {
    var _0x652e23,
      _0x2f5ef1,
      _0x63498c = "",
      _0xf54565 = "";
    for (_0x2f5ef1 = 0; 3 >= _0x2f5ef1; _0x2f5ef1++) _0x652e23 = _0x1abe23 >>> 8 * _0x2f5ef1 & 255, _0xf54565 = "0" + _0x652e23.toString(16), _0x63498c += _0xf54565.substr(_0xf54565.length - 2, 2);
    return _0x63498c;
  }
  function _0x142766(_0x5d8aed) {
    _0x5d8aed = _0x5d8aed.replace(/\r\n/g, "\n");
    for (var _0x4a2bfc = "", _0x10c70d = 0; _0x10c70d < _0x5d8aed.length; _0x10c70d++) {
      var _0xc1401 = _0x5d8aed.charCodeAt(_0x10c70d);
      128 > _0xc1401 ? _0x4a2bfc += String.fromCharCode(_0xc1401) : _0xc1401 > 127 && 2048 > _0xc1401 ? (_0x4a2bfc += String.fromCharCode(_0xc1401 >> 6 | 192), _0x4a2bfc += String.fromCharCode(63 & _0xc1401 | 128)) : (_0x4a2bfc += String.fromCharCode(_0xc1401 >> 12 | 224), _0x4a2bfc += String.fromCharCode(_0xc1401 >> 6 & 63 | 128), _0x4a2bfc += String.fromCharCode(63 & _0xc1401 | 128));
    }
    return _0x4a2bfc;
  }
  var _0x86bd3f,
    _0x154b73,
    _0x56097a,
    _0x53cf55,
    _0xb81666,
    _0x3b4c1c,
    _0x5213a4,
    _0xa2219a,
    _0x569f86,
    _0x4dcefb = [],
    _0x2fb36f = 7,
    _0xbdb98e = 12,
    _0x381e0a = 17,
    _0x12843f = 22,
    _0x5eab36 = 5,
    _0x1f2d9f = 9,
    _0x5e9304 = 14,
    _0x21391b = 20,
    _0x7bf932 = 4,
    _0x2e5984 = 11,
    _0xa1c583 = 16,
    _0x29fe67 = 23,
    _0x3b58b7 = 6,
    _0x21aa3d = 10,
    _0x465f38 = 15,
    _0x523088 = 21;
  for (_0x4b9461 = _0x142766(_0x4b9461), _0x4dcefb = _0x217183(_0x4b9461), _0x3b4c1c = 1732584193, _0x5213a4 = 4023233417, _0xa2219a = 2562383102, _0x569f86 = 271733878, _0x86bd3f = 0; _0x86bd3f < _0x4dcefb.length; _0x86bd3f += 16) _0x154b73 = _0x3b4c1c, _0x56097a = _0x5213a4, _0x53cf55 = _0xa2219a, _0xb81666 = _0x569f86, _0x3b4c1c = _0x10fc82(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 0], _0x2fb36f, 3614090360), _0x569f86 = _0x10fc82(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 1], _0xbdb98e, 3905402710), _0xa2219a = _0x10fc82(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 2], _0x381e0a, 606105819), _0x5213a4 = _0x10fc82(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 3], _0x12843f, 3250441966), _0x3b4c1c = _0x10fc82(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 4], _0x2fb36f, 4118548399), _0x569f86 = _0x10fc82(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 5], _0xbdb98e, 1200080426), _0xa2219a = _0x10fc82(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 6], _0x381e0a, 2821735955), _0x5213a4 = _0x10fc82(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 7], _0x12843f, 4249261313), _0x3b4c1c = _0x10fc82(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 8], _0x2fb36f, 1770035416), _0x569f86 = _0x10fc82(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 9], _0xbdb98e, 2336552879), _0xa2219a = _0x10fc82(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 10], _0x381e0a, 4294925233), _0x5213a4 = _0x10fc82(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 11], _0x12843f, 2304563134), _0x3b4c1c = _0x10fc82(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 12], _0x2fb36f, 1804603682), _0x569f86 = _0x10fc82(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 13], _0xbdb98e, 4254626195), _0xa2219a = _0x10fc82(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 14], _0x381e0a, 2792965006), _0x5213a4 = _0x10fc82(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 15], _0x12843f, 1236535329), _0x3b4c1c = _0x1f7075(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 1], _0x5eab36, 4129170786), _0x569f86 = _0x1f7075(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 6], _0x1f2d9f, 3225465664), _0xa2219a = _0x1f7075(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 11], _0x5e9304, 643717713), _0x5213a4 = _0x1f7075(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 0], _0x21391b, 3921069994), _0x3b4c1c = _0x1f7075(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 5], _0x5eab36, 3593408605), _0x569f86 = _0x1f7075(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 10], _0x1f2d9f, 38016083), _0xa2219a = _0x1f7075(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 15], _0x5e9304, 3634488961), _0x5213a4 = _0x1f7075(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 4], _0x21391b, 3889429448), _0x3b4c1c = _0x1f7075(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 9], _0x5eab36, 568446438), _0x569f86 = _0x1f7075(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 14], _0x1f2d9f, 3275163606), _0xa2219a = _0x1f7075(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 3], _0x5e9304, 4107603335), _0x5213a4 = _0x1f7075(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 8], _0x21391b, 1163531501), _0x3b4c1c = _0x1f7075(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 13], _0x5eab36, 2850285829), _0x569f86 = _0x1f7075(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 2], _0x1f2d9f, 4243563512), _0xa2219a = _0x1f7075(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 7], _0x5e9304, 1735328473), _0x5213a4 = _0x1f7075(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 12], _0x21391b, 2368359562), _0x3b4c1c = _0xf5f866(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 5], _0x7bf932, 4294588738), _0x569f86 = _0xf5f866(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 8], _0x2e5984, 2272392833), _0xa2219a = _0xf5f866(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 11], _0xa1c583, 1839030562), _0x5213a4 = _0xf5f866(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 14], _0x29fe67, 4259657740), _0x3b4c1c = _0xf5f866(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 1], _0x7bf932, 2763975236), _0x569f86 = _0xf5f866(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 4], _0x2e5984, 1272893353), _0xa2219a = _0xf5f866(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 7], _0xa1c583, 4139469664), _0x5213a4 = _0xf5f866(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 10], _0x29fe67, 3200236656), _0x3b4c1c = _0xf5f866(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 13], _0x7bf932, 681279174), _0x569f86 = _0xf5f866(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 0], _0x2e5984, 3936430074), _0xa2219a = _0xf5f866(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 3], _0xa1c583, 3572445317), _0x5213a4 = _0xf5f866(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 6], _0x29fe67, 76029189), _0x3b4c1c = _0xf5f866(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 9], _0x7bf932, 3654602809), _0x569f86 = _0xf5f866(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 12], _0x2e5984, 3873151461), _0xa2219a = _0xf5f866(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 15], _0xa1c583, 530742520), _0x5213a4 = _0xf5f866(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 2], _0x29fe67, 3299628645), _0x3b4c1c = _0x5dd955(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 0], _0x3b58b7, 4096336452), _0x569f86 = _0x5dd955(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 7], _0x21aa3d, 1126891415), _0xa2219a = _0x5dd955(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 14], _0x465f38, 2878612391), _0x5213a4 = _0x5dd955(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 5], _0x523088, 4237533241), _0x3b4c1c = _0x5dd955(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 12], _0x3b58b7, 1700485571), _0x569f86 = _0x5dd955(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 3], _0x21aa3d, 2399980690), _0xa2219a = _0x5dd955(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 10], _0x465f38, 4293915773), _0x5213a4 = _0x5dd955(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 1], _0x523088, 2240044497), _0x3b4c1c = _0x5dd955(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 8], _0x3b58b7, 1873313359), _0x569f86 = _0x5dd955(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 15], _0x21aa3d, 4264355552), _0xa2219a = _0x5dd955(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 6], _0x465f38, 2734768916), _0x5213a4 = _0x5dd955(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 13], _0x523088, 1309151649), _0x3b4c1c = _0x5dd955(_0x3b4c1c, _0x5213a4, _0xa2219a, _0x569f86, _0x4dcefb[_0x86bd3f + 4], _0x3b58b7, 4149444226), _0x569f86 = _0x5dd955(_0x569f86, _0x3b4c1c, _0x5213a4, _0xa2219a, _0x4dcefb[_0x86bd3f + 11], _0x21aa3d, 3174756917), _0xa2219a = _0x5dd955(_0xa2219a, _0x569f86, _0x3b4c1c, _0x5213a4, _0x4dcefb[_0x86bd3f + 2], _0x465f38, 718787259), _0x5213a4 = _0x5dd955(_0x5213a4, _0xa2219a, _0x569f86, _0x3b4c1c, _0x4dcefb[_0x86bd3f + 9], _0x523088, 3951481745), _0x3b4c1c = _0x23f5a0(_0x3b4c1c, _0x154b73), _0x5213a4 = _0x23f5a0(_0x5213a4, _0x56097a), _0xa2219a = _0x23f5a0(_0xa2219a, _0x53cf55), _0x569f86 = _0x23f5a0(_0x569f86, _0xb81666);
  var _0x5c66d6 = _0x25ac30(_0x3b4c1c) + _0x25ac30(_0x5213a4) + _0x25ac30(_0xa2219a) + _0x25ac30(_0x569f86);
  return _0x5c66d6.toLowerCase();
}
function _0x53a454(_0x2e2c46, _0x22a0db) {
  class _0x116750 {
    constructor(_0x2dc835) {
      this.env = _0x2dc835;
    }
    ["send"](_0x602840, _0xa68fac = "GET") {
      _0x602840 = "string" == typeof _0x602840 ? {
        "url": _0x602840
      } : _0x602840;
      let _0x5c3cbd = this.get;
      return "POST" === _0xa68fac && (_0x5c3cbd = this.post), new Promise((_0x7a0b6f, _0x52d9fb) => {
        _0x5c3cbd.call(this, _0x602840, (_0x26e8b1, _0x24346e, _0x32e181) => {
          _0x26e8b1 ? _0x52d9fb(_0x26e8b1) : _0x7a0b6f(_0x24346e);
        });
      });
    }
    ["get"](_0x30fd83) {
      return this.send.call(this.env, _0x30fd83);
    }
    ["post"](_0x173c37) {
      return this.send.call(this.env, _0x173c37, "POST");
    }
  }
  return new class {
    constructor(_0x43c625, _0x264a9f) {
      this.name = _0x43c625;
      this.http = new _0x116750(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x264a9f);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["getEnv"]() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    ["isNode"]() {
      return "Node.js" === this.getEnv();
    }
    ["isQuanX"]() {
      return "Quantumult X" === this.getEnv();
    }
    ["isSurge"]() {
      return "Surge" === this.getEnv();
    }
    ["isLoon"]() {
      return "Loon" === this.getEnv();
    }
    ["isShadowrocket"]() {
      return "Shadowrocket" === this.getEnv();
    }
    ["isStash"]() {
      return "Stash" === this.getEnv();
    }
    ["toObj"](_0x343929, _0x63bcac = null) {
      try {
        return JSON.parse(_0x343929);
      } catch {
        return _0x63bcac;
      }
    }
    ["toStr"](_0x407042, _0xad888a = null) {
      try {
        return JSON.stringify(_0x407042);
      } catch {
        return _0xad888a;
      }
    }
    ["getjson"](_0x550dc5, _0x4b3b6a) {
      let _0x8796e4 = _0x4b3b6a;
      const _0x51adae = this.getdata(_0x550dc5);
      if (_0x51adae) try {
        _0x8796e4 = JSON.parse(this.getdata(_0x550dc5));
      } catch {}
      return _0x8796e4;
    }
    ["setjson"](_0x2cf043, _0x327d81) {
      try {
        return this.setdata(JSON.stringify(_0x2cf043), _0x327d81);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x579cca) {
      return new Promise(_0x99d3f2 => {
        this.get({
          "url": _0x579cca
        }, (_0x45d5fd, _0x47f79a, _0x4d6645) => _0x99d3f2(_0x4d6645));
      });
    }
    ["runScript"](_0x4b8982, _0x18a635) {
      return new Promise(_0xcda4f0 => {
        let _0xb5da6f = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xb5da6f = _0xb5da6f ? _0xb5da6f.replace(/\n/g, "").trim() : _0xb5da6f;
        let _0x2d5bf8 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2d5bf8 = _0x2d5bf8 ? 1 * _0x2d5bf8 : 20;
        _0x2d5bf8 = _0x18a635 && _0x18a635.timeout ? _0x18a635.timeout : _0x2d5bf8;
        const [_0x2710ec, _0x4ca6a5] = _0xb5da6f.split("@"),
          _0x433ff7 = {
            "url": "http://" + _0x4ca6a5 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x4b8982,
              "mock_type": "cron",
              "timeout": _0x2d5bf8
            },
            "headers": {
              "X-Key": _0x2710ec,
              "Accept": "*/*"
            },
            "timeout": _0x2d5bf8
          };
        this.post(_0x433ff7, (_0x47d365, _0x3fa833, _0x483db8) => _0xcda4f0(_0x483db8));
      }).catch(_0x56bcf2 => this.logErr(_0x56bcf2));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3bf2e5 = this.path.resolve(this.dataFile),
          _0x1b74ab = this.path.resolve(process.cwd(), this.dataFile),
          _0x4b4aad = this.fs.existsSync(_0x3bf2e5),
          _0x1ddc1c = !_0x4b4aad && this.fs.existsSync(_0x1b74ab);
        if (!_0x4b4aad && !_0x1ddc1c) return {};
        {
          const _0x3b1afb = _0x4b4aad ? _0x3bf2e5 : _0x1b74ab;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3b1afb));
          } catch (_0x45cc0) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x77aa83 = this.path.resolve(this.dataFile),
          _0x8eea42 = this.path.resolve(process.cwd(), this.dataFile),
          _0x5c1f76 = this.fs.existsSync(_0x77aa83),
          _0x30b656 = !_0x5c1f76 && this.fs.existsSync(_0x8eea42),
          _0x3cfb6b = JSON.stringify(this.data);
        _0x5c1f76 ? this.fs.writeFileSync(_0x77aa83, _0x3cfb6b) : _0x30b656 ? this.fs.writeFileSync(_0x8eea42, _0x3cfb6b) : this.fs.writeFileSync(_0x77aa83, _0x3cfb6b);
      }
    }
    ["lodash_get"](_0x2241e8, _0x20f839, _0x495afb) {
      const _0x4fd9fd = _0x20f839.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x5bede4 = _0x2241e8;
      for (const _0x3721b5 of _0x4fd9fd) if (_0x5bede4 = Object(_0x5bede4)[_0x3721b5], void 0 === _0x5bede4) return _0x495afb;
      return _0x5bede4;
    }
    ["lodash_set"](_0x78d073, _0x156caa, _0x628d75) {
      return Object(_0x78d073) !== _0x78d073 ? _0x78d073 : (Array.isArray(_0x156caa) || (_0x156caa = _0x156caa.toString().match(/[^.[\]]+/g) || []), _0x156caa.slice(0, -1).reduce((_0x25dcb4, _0x3b948d, _0x10c7fd) => Object(_0x25dcb4[_0x3b948d]) === _0x25dcb4[_0x3b948d] ? _0x25dcb4[_0x3b948d] : _0x25dcb4[_0x3b948d] = Math.abs(_0x156caa[_0x10c7fd + 1]) >> 0 == +_0x156caa[_0x10c7fd + 1] ? [] : {}, _0x78d073)[_0x156caa[_0x156caa.length - 1]] = _0x628d75, _0x78d073);
    }
    ["getdata"](_0x4791a5) {
      let _0x4ab1c0 = this.getval(_0x4791a5);
      if (/^@/.test(_0x4791a5)) {
        const [, _0x36017d, _0x24e659] = /^@(.*?)\.(.*?)$/.exec(_0x4791a5),
          _0x2665f2 = _0x36017d ? this.getval(_0x36017d) : "";
        if (_0x2665f2) try {
          const _0x293da4 = JSON.parse(_0x2665f2);
          _0x4ab1c0 = _0x293da4 ? this.lodash_get(_0x293da4, _0x24e659, "") : _0x4ab1c0;
        } catch (_0x401c57) {
          _0x4ab1c0 = "";
        }
      }
      return _0x4ab1c0;
    }
    ["setdata"](_0x34dff4, _0x50d961) {
      let _0x374337 = false;
      if (/^@/.test(_0x50d961)) {
        const [, _0x526483, _0xd40e21] = /^@(.*?)\.(.*?)$/.exec(_0x50d961),
          _0xd60825 = this.getval(_0x526483),
          _0x1b0b04 = _0x526483 ? "null" === _0xd60825 ? null : _0xd60825 || "{}" : "{}";
        try {
          const _0x18ba8d = JSON.parse(_0x1b0b04);
          this.lodash_set(_0x18ba8d, _0xd40e21, _0x34dff4);
          _0x374337 = this.setval(JSON.stringify(_0x18ba8d), _0x526483);
        } catch (_0x14cdff) {
          const _0x1729c1 = {};
          this.lodash_set(_0x1729c1, _0xd40e21, _0x34dff4);
          _0x374337 = this.setval(JSON.stringify(_0x1729c1), _0x526483);
        }
      } else _0x374337 = this.setval(_0x34dff4, _0x50d961);
      return _0x374337;
    }
    ["getval"](_0x3a2ca8) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x3a2ca8);
        case "Quantumult X":
          return $prefs.valueForKey(_0x3a2ca8);
        case "Node.js":
          return this.data = this.loaddata(), this.data[_0x3a2ca8];
        default:
          return this.data && this.data[_0x3a2ca8] || null;
      }
    }
    ["setval"](_0x5a022e, _0x508725) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x5a022e, _0x508725);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x5a022e, _0x508725);
        case "Node.js":
          return this.data = this.loaddata(), this.data[_0x508725] = _0x5a022e, this.writedata(), !0;
        default:
          return this.data && this.data[_0x508725] || null;
      }
    }
    ["initGotEnv"](_0x121067) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x121067 && (_0x121067.headers = _0x121067.headers ? _0x121067.headers : {}, void 0 === _0x121067.headers.Cookie && void 0 === _0x121067.cookieJar && (_0x121067.cookieJar = this.ckjar));
    }
    ["get"](_0x5168f4, _0x36b42e = () => {}) {
      switch (_0x5168f4.headers && (delete _0x5168f4.headers["Content-Type"], delete _0x5168f4.headers["Content-Length"], delete _0x5168f4.headers["content-type"], delete _0x5168f4.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x5168f4.headers = _0x5168f4.headers || {}, Object.assign(_0x5168f4.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(_0x5168f4, (_0x33a314, _0x12705c, _0xc869eb) => {
            !_0x33a314 && _0x12705c && (_0x12705c.body = _0xc869eb, _0x12705c.statusCode = _0x12705c.status ? _0x12705c.status : _0x12705c.statusCode, _0x12705c.status = _0x12705c.statusCode);
            _0x36b42e(_0x33a314, _0x12705c, _0xc869eb);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x5168f4.opts = _0x5168f4.opts || {}, Object.assign(_0x5168f4.opts, {
            "hints": !1
          })), $task.fetch(_0x5168f4).then(_0x34b816 => {
            const {
              statusCode: _0x23fc67,
              statusCode: _0x2e7afc,
              headers: _0x4c40b3,
              body: _0x5422bb,
              bodyBytes: _0x54505f
            } = _0x34b816;
            _0x36b42e(null, {
              "status": _0x23fc67,
              "statusCode": _0x2e7afc,
              "headers": _0x4c40b3,
              "body": _0x5422bb,
              "bodyBytes": _0x54505f
            }, _0x5422bb, _0x54505f);
          }, _0x9a8f64 => _0x36b42e(_0x9a8f64 && _0x9a8f64.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x554862 = require("iconv-lite");
          this.initGotEnv(_0x5168f4), this.got(_0x5168f4).on("redirect", (_0x558f01, _0x38164d) => {
            try {
              if (_0x558f01.headers["set-cookie"]) {
                const _0x414ef5 = _0x558f01.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x414ef5 && this.ckjar.setCookieSync(_0x414ef5, null);
                _0x38164d.cookieJar = this.ckjar;
              }
            } catch (_0x218215) {
              this.logErr(_0x218215);
            }
          }).then(_0x3e0f3d => {
            const {
                statusCode: _0x433a2b,
                statusCode: _0x522083,
                headers: _0x5ea3ea,
                rawBody: _0x3b11b5
              } = _0x3e0f3d,
              _0x3f73ef = _0x554862.decode(_0x3b11b5, this.encoding);
            _0x36b42e(null, {
              "status": _0x433a2b,
              "statusCode": _0x522083,
              "headers": _0x5ea3ea,
              "rawBody": _0x3b11b5,
              "body": _0x3f73ef
            }, _0x3f73ef);
          }, _0xc353f2 => {
            const {
              message: _0x342b7a,
              response: _0x19c214
            } = _0xc353f2;
            _0x36b42e(_0x342b7a, _0x19c214, _0x19c214 && _0x554862.decode(_0x19c214.rawBody, this.encoding));
          });
      }
    }
    ["post"](_0x4eec19, _0x121248 = () => {}) {
      const _0x1ebac5 = _0x4eec19.method ? _0x4eec19.method.toLocaleLowerCase() : "post";
      switch (_0x4eec19.body && _0x4eec19.headers && !_0x4eec19.headers["Content-Type"] && !_0x4eec19.headers["content-type"] && (_0x4eec19.headers["content-type"] = "application/x-www-form-urlencoded"), _0x4eec19.headers && (delete _0x4eec19.headers["Content-Length"], delete _0x4eec19.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x4eec19.headers = _0x4eec19.headers || {}, Object.assign(_0x4eec19.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[_0x1ebac5](_0x4eec19, (_0x162d9b, _0x131101, _0xc93ee7) => {
            !_0x162d9b && _0x131101 && (_0x131101.body = _0xc93ee7, _0x131101.statusCode = _0x131101.status ? _0x131101.status : _0x131101.statusCode, _0x131101.status = _0x131101.statusCode);
            _0x121248(_0x162d9b, _0x131101, _0xc93ee7);
          });
          break;
        case "Quantumult X":
          _0x4eec19.method = _0x1ebac5, this.isNeedRewrite && (_0x4eec19.opts = _0x4eec19.opts || {}, Object.assign(_0x4eec19.opts, {
            "hints": !1
          })), $task.fetch(_0x4eec19).then(_0x551244 => {
            const {
              statusCode: _0x1597ce,
              statusCode: _0x5e58a5,
              headers: _0x260697,
              body: _0x51e744,
              bodyBytes: _0x12b50d
            } = _0x551244;
            _0x121248(null, {
              "status": _0x1597ce,
              "statusCode": _0x5e58a5,
              "headers": _0x260697,
              "body": _0x51e744,
              "bodyBytes": _0x12b50d
            }, _0x51e744, _0x12b50d);
          }, _0x5306b5 => _0x121248(_0x5306b5 && _0x5306b5.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x2a9ae8 = require("iconv-lite");
          this.initGotEnv(_0x4eec19);
          const {
            url: _0x261255,
            ..._0x3ad63a
          } = _0x4eec19;
          this.got[_0x1ebac5](_0x261255, _0x3ad63a).then(_0x440d69 => {
            const {
                statusCode: _0x431a56,
                statusCode: _0x51cd48,
                headers: _0x5c3396,
                rawBody: _0x516804
              } = _0x440d69,
              _0x3e81cd = _0x2a9ae8.decode(_0x516804, this.encoding);
            _0x121248(null, {
              "status": _0x431a56,
              "statusCode": _0x51cd48,
              "headers": _0x5c3396,
              "rawBody": _0x516804,
              "body": _0x3e81cd
            }, _0x3e81cd);
          }, _0x4a127b => {
            const {
              message: _0x14d0ac,
              response: _0x2e610a
            } = _0x4a127b;
            _0x121248(_0x14d0ac, _0x2e610a, _0x2e610a && _0x2a9ae8.decode(_0x2e610a.rawBody, this.encoding));
          });
      }
    }
    ["time"](_0xa34731, _0x4d5a9f = null) {
      const _0x29e2f5 = _0x4d5a9f ? new Date(_0x4d5a9f) : new Date();
      let _0x19fd4a = {
        "M+": _0x29e2f5.getMonth() + 1,
        "d+": _0x29e2f5.getDate(),
        "H+": _0x29e2f5.getHours(),
        "m+": _0x29e2f5.getMinutes(),
        "s+": _0x29e2f5.getSeconds(),
        "q+": Math.floor((_0x29e2f5.getMonth() + 3) / 3),
        "S": _0x29e2f5.getMilliseconds()
      };
      /(y+)/.test(_0xa34731) && (_0xa34731 = _0xa34731.replace(RegExp.$1, (_0x29e2f5.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x461ea8 in _0x19fd4a) new RegExp("(" + _0x461ea8 + ")").test(_0xa34731) && (_0xa34731 = _0xa34731.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x19fd4a[_0x461ea8] : ("00" + _0x19fd4a[_0x461ea8]).substr(("" + _0x19fd4a[_0x461ea8]).length)));
      return _0xa34731;
    }
    ["queryStr"](_0x2af78a) {
      let _0x48958b = "";
      for (const _0x17e6f1 in _0x2af78a) {
        let _0x4cbea2 = _0x2af78a[_0x17e6f1];
        null != _0x4cbea2 && "" !== _0x4cbea2 && ("object" == typeof _0x4cbea2 && (_0x4cbea2 = JSON.stringify(_0x4cbea2)), _0x48958b += _0x17e6f1 + "=" + _0x4cbea2 + "&");
      }
      return _0x48958b = _0x48958b.substring(0, _0x48958b.length - 1), _0x48958b;
    }
    ["msg"](_0x15a4e0 = _0x2e2c46, _0x41228c = "", _0x7f43d4 = "", _0x4a071f) {
      const _0x1597a3 = _0x464419 => {
        switch (typeof _0x464419) {
          case void 0:
            return _0x464419;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  "url": _0x464419
                };
              case "Loon":
              case "Shadowrocket":
                return _0x464419;
              case "Quantumult X":
                return {
                  "open-url": _0x464419
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let _0x42d59a = _0x464419.url || _0x464419.openUrl || _0x464419["open-url"];
                  return {
                    "url": _0x42d59a
                  };
                }
              case "Loon":
                {
                  let _0x2084a1 = _0x464419.openUrl || _0x464419.url || _0x464419["open-url"],
                    _0x23f253 = _0x464419.mediaUrl || _0x464419["media-url"];
                  return {
                    "openUrl": _0x2084a1,
                    "mediaUrl": _0x23f253
                  };
                }
              case "Quantumult X":
                {
                  let _0x3940a0 = _0x464419["open-url"] || _0x464419.url || _0x464419.openUrl,
                    _0x3f0094 = _0x464419["media-url"] || _0x464419.mediaUrl,
                    _0x17d4b4 = _0x464419["update-pasteboard"] || _0x464419.updatePasteboard;
                  return {
                    "open-url": _0x3940a0,
                    "media-url": _0x3f0094,
                    "update-pasteboard": _0x17d4b4
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(_0x15a4e0, _0x41228c, _0x7f43d4, _0x1597a3(_0x4a071f));
          break;
        case "Quantumult X":
          $notify(_0x15a4e0, _0x41228c, _0x7f43d4, _0x1597a3(_0x4a071f));
          break;
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let _0x207060 = ["", "==============📣系统通知📣=============="];
        _0x207060.push(_0x15a4e0);
        _0x41228c && _0x207060.push(_0x41228c);
        _0x7f43d4 && _0x207060.push(_0x7f43d4);
        console.log(_0x207060.join("\n"));
        this.logs = this.logs.concat(_0x207060);
      }
    }
    ["log"](..._0x54f220) {
      _0x54f220.length > 0 && (this.logs = [...this.logs, ..._0x54f220]);
      console.log(_0x54f220.join(this.logSeparator));
    }
    ["logErr"](_0x5a1543, _0x560050) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x5a1543);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x5a1543.stack);
      }
    }
    ["wait"](_0xe417cf) {
      return new Promise(_0x573ce8 => setTimeout(_0x573ce8, _0xe417cf));
    }
    ["done"](_0x13b6a3 = {}) {
      const _0x5c829d = new Date().getTime(),
        _0x2b715d = (_0x5c829d - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2b715d + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x13b6a3);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x2e2c46, _0x22a0db);
}