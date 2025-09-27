//Sat Sep 27 2025 04:35:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const request = require("request"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
process.noDeprecation = true;
function generateRandomInteractionMessage() {
  const _0x200044 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x200044[Math.floor(Math.random() * _0x200044.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true",
  ksckEnvCount = Object.keys(process.env).filter(_0x44c152 => _0x44c152.toLowerCase().startsWith("ksck")).length;
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊版 ⭐                                ");
console.log("                            🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("================================================================================");
console.log("🎉 系统初始化完成，快手至尊金币版启动成功！🎉");
console.log("💎 检测到环境变量配置：" + ksckEnvCount + "个账号");
ksckEnvCount > process.env.MAX_CONCURRENCY && (console.log("错误: 检测到 " + ksckEnvCount + " 个ksck环境变量，最多只允许3个"), process.exit(1));
const baseRemoteUrl = "http://111.170.33.15:11678",
  proxyApiUrl = baseRemoteUrl + "/sign.php",
  queueStatusApiUrl = baseRemoteUrl + "/queue_status";
function generateKuaishouDid() {
  try {
    {
      const _0x4b6e25 = _0x1c75a8 => {
          {
            const _0x42dd9c = "0123456789abcdef";
            let _0x4fc626 = "";
            for (let _0x2f1f6d = 0; _0x2f1f6d < _0x1c75a8; _0x2f1f6d++) {
              _0x4fc626 += _0x42dd9c.charAt(Math.floor(Math.random() * _0x42dd9c.length));
            }
            return _0x4fc626;
          }
        },
        _0x51e50a = _0x4b6e25(16),
        _0x1f61ab = "ANDROID_" + _0x51e50a;
      return _0x1f61ab;
    }
  } catch (_0x5506d8) {
    {
      console.log("生成did失败: " + _0x5506d8.message);
      const _0x55d5aa = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x55d5aa.substring(0, 16);
    }
  }
}
async function sendRequest(_0x5447ea, _0x5555bb = null, _0xc90bff = "Unknown Request") {
  const _0x3b6915 = {
    ..._0x5447ea
  };
  if (_0x5555bb) try {
    _0x3b6915.agent = new SocksProxyAgent(_0x5555bb);
    if (isDevMode) console.log("[调试] " + _0xc90bff + " 使用代理: " + _0x5555bb);
  } catch (_0x372017) {
    console.log("[错误] " + _0xc90bff + " 代理URL无效(" + _0x372017.message + ")，尝试直连模式");
    if (isDevMode) console.log("[调试] 代理无效，自动切换到直连模式");
  } else {
    {
      if (isDevMode) console.log("[调试] 未配置代理，使用直连模式");
    }
  }
  if (isDevMode) {
    const _0x2a1119 = _0x3b6915.method || "GET";
    console.log("[调试] " + _0xc90bff + " -> " + _0x2a1119 + " " + _0x3b6915.url);
  }
  return new Promise(_0x257077 => {
    request(_0x3b6915, (_0x1af4af, _0x49791f, _0x523129) => {
      {
        if (_0x1af4af) {
          if (_0x1af4af.name === "AggregateError" && Array.isArray(_0x1af4af.errors)) {
            console.log("[调试] " + _0xc90bff + " 请求错误: AggregateError\n" + _0x1af4af.errors.map((_0x2179a6, _0x1c4d32) => "  [" + _0x1c4d32 + "] " + (_0x2179a6?.["message"] || _0x2179a6)).join("\n"));
          } else console.log("[调试] " + _0xc90bff + " 请求错误: " + (_0x1af4af.message || String(_0x1af4af)));
          return _0x257077(null);
        }
        if (!_0x49791f || _0x49791f.statusCode !== 200) {
          const _0x49362f = _0x49791f ? _0x49791f.statusCode : "无响应";
          console.log("[调试] " + _0xc90bff + " HTTP状态码异常: " + _0x49362f);
          return _0x257077(null);
        }
        try {
          _0x257077(JSON.parse(_0x523129));
        } catch {
          _0x257077(_0x523129);
        }
      }
    });
  });
}
async function testProxyConnectivity(_0x345d17, _0x5ea8b9 = "代理连通性检测") {
  if (!_0x345d17) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x389541 = await sendRequest({
    "method": "GET",
    "url": "https://ipinfo.io/json",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x345d17, _0x5ea8b9 + " → ipinfo.io");
  if (!_0x389541) return {
    "ok": false,
    "msg": "❌ 无法通过代理访问 ipinfo.io",
    "ip": ""
  };
  const _0x42006b = _0x389541.ip || _0x389541.ip_address || "";
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x42006b || "未知"),
    "ip": _0x42006b || "未知"
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x87fcc0, _0x13eb19, _0x350018 = "?") {
  const _0x5c3c6b = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    _0x20992a = await sendRequest({
      "method": "GET",
      "url": _0x5c3c6b,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x87fcc0,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x13eb19, "账号[" + _0x350018 + "] 获取基本信息");
  if (_0x20992a && _0x20992a.result === 1 && _0x20992a.data) return {
    "nickname": _0x20992a.data.userData?.["nickname"] || null,
    "totalCoin": _0x20992a.data.totalCoin ?? null,
    "allCash": _0x20992a.data.allCash ?? null
  };
  return null;
}
function centerAlign(_0xd031ef, _0x59c1ea) {
  _0xd031ef = String(_0xd031ef);
  if (_0xd031ef.length >= _0x59c1ea) return _0xd031ef.substring(0, _0x59c1ea);
  const _0x404bee = _0x59c1ea - _0xd031ef.length,
    _0x479373 = Math.floor(_0x404bee / 2),
    _0x564d1f = _0x404bee - _0x479373;
  return " ".repeat(_0x479373) + _0xd031ef + " ".repeat(_0x564d1f);
}
class KuaishouAdTask {
  constructor({
    index: _0x3b62a8,
    salt: _0x2e4f8e,
    cookie: _0x164eb3,
    nickname = "",
    proxyUrl = null
  }) {
    this.index = _0x3b62a8;
    this.salt = _0x2e4f8e;
    this.cookie = _0x164eb3;
    this.nickname = nickname || "账号" + _0x3b62a8;
    this.proxyUrl = proxyUrl;
    this.coinLimit = 500000;
    this.coinExceeded = false;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    Object.keys(this.taskConfigs).forEach(_0x2a05c5 => {
      this.taskStats[_0x2a05c5] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      };
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = 10;
    this.lowRewardLimit = 3;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    Object.keys(this.taskConfigs).forEach(_0x3ca4e3 => {
      this.taskLimitReached[_0x3ca4e3] = false;
    });
  }
  async ["checkCoinLimit"]() {
    try {
      {
        const _0xc41bef = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
        if (_0xc41bef && _0xc41bef.totalCoin) {
          const _0x56fce5 = parseInt(_0xc41bef.totalCoin);
          if (_0x56fce5 >= this.coinLimit) {
            console.log("⚠️ 账号[" + this.nickname + "] 金币已达 " + _0x56fce5 + "，超过 " + this.coinLimit + " 阈值，将停止任务");
            this.coinExceeded = true;
            this.stopAllTasks = true;
            return true;
          }
        }
        return false;
      }
    } catch (_0x52c864) {
      console.log("账号[" + this.nickname + "] 金币检查异常: " + _0x52c864.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0x4fcf03 = this.cookie.match(/egid=([^;]+)/),
        _0x3d1a6e = this.cookie.match(/did=([^;]+)/),
        _0x529d83 = this.cookie.match(/userId=([^;]+)/),
        _0x292d33 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0x444d06 = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0x4fcf03 ? _0x4fcf03[1] : "";
      this.did = _0x3d1a6e ? _0x3d1a6e[1] : "";
      this.userId = _0x529d83 ? _0x529d83[1] : "";
      this.kuaishouApiSt = _0x292d33 ? _0x292d33[1] : "";
      this.appver = _0x444d06 ? _0x444d06[1] : "";
      (!this.egid || !this.did) && console.log("账号[" + this.nickname + "] cookie格式可能无 egid 或 did，但继续尝试...");
    } catch (_0x5594a7) {
      console.log("账号[" + this.nickname + "] 解析cookie失败: " + _0x5594a7.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "] 任务执行统计:");
    for (const [_0x45b591, _0x49766a] of Object.entries(this.taskStats)) {
      {
        const _0x42746a = this.taskConfigs[_0x45b591].name;
        console.log("  " + _0x42746a + ": 成功" + _0x49766a.success + "次, 失败" + _0x49766a.failed + "次, 总奖励" + _0x49766a.totalReward + "金币");
      }
    }
  }
  async ["retryOperation"](_0x17868e, _0x23f7c9, _0x426c46 = 3, _0x59e647 = 2000) {
    let _0x5e1ec9 = 0,
      _0x185a4e = null;
    while (_0x5e1ec9 < _0x426c46) {
      try {
        const _0x254563 = await _0x17868e();
        if (_0x254563) return _0x254563;
        _0x185a4e = new Error(_0x23f7c9 + " 返回空结果");
      } catch (_0x31f4e8) {
        _0x185a4e = _0x31f4e8;
        console.log("账号[" + this.nickname + "] " + _0x23f7c9 + " 异常: " + _0x31f4e8.message);
      }
      _0x5e1ec9++;
      _0x5e1ec9 < _0x426c46 && (console.log("账号[" + this.nickname + "] " + _0x23f7c9 + " 失败，重试 " + _0x5e1ec9 + "/" + _0x426c46), await new Promise(_0x13c368 => setTimeout(_0x13c368, _0x59e647)));
    }
    if (isDevMode && _0x185a4e) {
      console.log("[调试] " + _0x23f7c9 + " 最终失败: " + _0x185a4e.message);
    }
    return null;
  }
  async ["getAdInfo"](_0x1a0650) {
    try {
      {
        const _0x5cd22b = "/rest/e/reward/mixed/ad",
          _0x353101 = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "2ac2a76d",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x2b6a92 = {
            "earphoneMode": "1",
            "mod": "Xiaomi(23116PN5BC)",
            "appver": this.appver,
            "isp": "CUCC",
            "language": "zh-cn",
            "ud": this.userId,
            "did_tag": "0",
            "net": "WIFI",
            "kcv": "1599",
            "app": "0",
            "kpf": "ANDROID_PHONE",
            "ver": "11.6",
            "android_os": "0",
            "boardPlatform": "pineapple",
            "kpn": "NEBULA",
            "androidApiLevel": "35",
            "country_code": "cn",
            "sys": "ANDROID_15",
            "sw": "1080",
            "sh": "2400",
            "abi": "arm64",
            "userRecoBit": "0"
          },
          _0x245823 = {
            "appInfo": {
              "appId": "kuaishou_nebula",
              "name": "快手极速版",
              "packageName": "com.kuaishou.nebula",
              "version": this.appver,
              "versionCode": -1
            },
            "deviceInfo": {
              "osType": 1,
              "osVersion": "15",
              "deviceId": this.did,
              "screenSize": {
                "width": 1080,
                "height": 2249
              },
              "ftt": ""
            },
            "userInfo": {
              "userId": this.userId,
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": 11101,
              "subPageId": _0x1a0650.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x4c77a9 = Buffer.from(JSON.stringify(_0x245823)).toString("base64"),
          _0x4e8f46 = await this.generateSignature2(_0x5cd22b, querystring.stringify({
            ..._0x2b6a92,
            ..._0x353101
          }), this.salt, _0x4c77a9);
        if (!_0x4e8f46) return console.log("❌ 账号[" + this.nickname + "] 生成签名失败，无法获取" + _0x1a0650.name), null;
        const _0x32f5d1 = {
          ..._0x2b6a92,
          "sig": _0x4e8f46.sig,
          "__NS_sig3": _0x4e8f46.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x4e8f46.__NStokensig
        };
        _0x353101.encData = _0x4e8f46.encData;
        _0x353101.sign = _0x4e8f46.sign;
        const _0x2c9f8b = "https://api.e.kuaishou.com" + _0x5cd22b + "?" + querystring.stringify(_0x32f5d1),
          _0x2c050c = await sendRequest({
            "method": "POST",
            "url": _0x2c9f8b,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            },
            "form": _0x353101,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
        if (!_0x2c050c) return null;
        if (_0x2c050c.errorMsg === "OK" && _0x2c050c.feeds && _0x2c050c.feeds[0] && _0x2c050c.feeds[0].ad) {
          {
            const _0x414418 = _0x2c050c.feeds[0].caption || _0x2c050c.feeds[0].ad?.["caption"] || "";
            if (_0x414418) {
              console.log("✅ 账号[" + this.nickname + "] 成功获取到广告信息：" + _0x414418);
            }
            const _0x103ce4 = _0x2c050c.feeds[0].exp_tag || "",
              _0x10516b = _0x103ce4.split("/")[1]?.["split"]("_")?.[0] || "";
            return {
              "cid": _0x2c050c.feeds[0].ad.creativeId,
              "llsid": _0x10516b,
              "mediaScene": "video"
            };
          }
        }
        isDevMode && console.log("[调试] getAdInfo 原始响应:", JSON.stringify(_0x2c050c));
        return null;
      }
    } catch (_0x43ea5c) {
      console.log("❌ 账号[" + this.nickname + "] 获取广告异常: " + _0x43ea5c.message);
      return null;
    }
  }
  async ["generateSignature"](_0x208ad8, _0x17f311, _0x47879b, _0x39a307) {
    try {
      const _0x314b93 = JSON.stringify({
          "businessId": _0x39a307.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x208ad8,
            "extInfo": "",
            "llsid": _0x17f311,
            "requestSceneType": _0x39a307.requestSceneType,
            "taskType": _0x39a307.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": 11101,
          "posId": _0x39a307.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x39a307.subPageId
        }),
        _0x115cec = "bizStr=" + encodeURIComponent(_0x314b93) + "&cs=false&client_key=2ac2a76d",
        _0x227336 = this.queryParams + "&" + _0x115cec,
        _0x2eef34 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "urldata": _0x227336,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "] 生成报告签名");
      if (!_0x2eef34 || !_0x2eef34.data) return null;
      return {
        "sig": _0x2eef34.data.sig,
        "sig3": _0x2eef34.data.__NS_sig3,
        "sigtoken": _0x2eef34.data.__NStokensig,
        "post": _0x115cec
      };
    } catch (_0x42aa6f) {
      console.log("❌ 账号[" + this.nickname + "] 生成签名异常: " + _0x42aa6f.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x25ae84, _0x2f8b7b, _0x4ab767, _0x4e1718) {
    const _0x4be14f = await this.requestSignService({
      "urlpath": _0x25ae84,
      "urldata": _0x2f8b7b,
      "api_client_salt": _0x4ab767,
      "req_str": _0x4e1718
    }, "账号[" + this.nickname + "] 生成广告签名");
    if (!_0x4be14f) return null;
    return _0x4be14f.data || _0x4be14f;
  }
  async ["submitReport"](_0x351159, _0x58f592, _0x37a786, _0x5bfb8a, _0x2029a3, _0x1b66ce) {
    try {
      {
        const _0x22ec16 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x351159 + "&__NS_sig3=" + _0x58f592 + "&__NS_xfalcon=&__NStokensig=" + _0x37a786),
          _0x466336 = await sendRequest({
            "method": "POST",
            "url": _0x22ec16,
            "headers": {
              "Host": "api.e.kuaishou.cn",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": this.cookie,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": _0x5bfb8a,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
        if (!_0x466336) {
          return {
            "success": false,
            "reward": 0
          };
        }
        if (_0x466336.result === 1) {
          const _0x58994a = _0x466336.data?.["neoAmount"] || 0;
          console.log("💰 账号[" + this.nickname + "] " + _0x1b66ce.name + _0x58994a + "金币奖励！");
          _0x58994a < 1000 && (this.did = generateKuaishouDid(), console.log("⚠️ 金币低于阈值,模拟下载应用提升权重^^^^^^"));
          return {
            "success": true,
            "reward": _0x58994a
          };
        }
        if ([20107, 20108, 1003, 415].includes(_0x466336.result)) return console.log("⚠️ 账号[" + this.nickname + "] " + _0x1b66ce.name + " 已达上限"), this.taskLimitReached[_0x2029a3] = true, {
          "success": false,
          "reward": 0
        };
        console.log("❌ 账号[" + this.nickname + "] " + _0x1b66ce.name + " 奖励失败，result=" + _0x466336.result + " msg=" + (_0x466336.errorMsg || ""));
        if (isDevMode) {
          console.log("[调试] submitReport 原始响应:", JSON.stringify(_0x466336));
        }
        return {
          "success": false,
          "reward": 0
        };
      }
    } catch (_0x435b13) {
      console.log("❌ 账号[" + this.nickname + "] 提交任务异常: " + _0x435b13.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0x4d90de, _0x36dca9) {
    const _0x496b6a = (process.env.km || "").trim();
    if (!_0x496b6a) return null;
    const _0x4301f0 = await sendRequest({
      "method": "POST",
      "url": proxyApiUrl + "?card_key=" + encodeURIComponent(_0x496b6a),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0x496b6a
      },
      "body": JSON.stringify(_0x4d90de),
      "timeout": 15000
    }, null, _0x36dca9 + "（签名服务）");
    if (!_0x4301f0) return null;
    if (_0x4301f0.success && _0x4301f0.status === "queued" && _0x4301f0.queue_id) {
      {
        const _0x8ce2eb = await this.pollQueueStatus(_0x4301f0.queue_id);
        if (_0x8ce2eb && _0x8ce2eb.success && (_0x8ce2eb.status === "completed" || _0x8ce2eb.status === "processed")) {
          return _0x8ce2eb;
        }
        console.log("账号[" + this.nickname + "] 签名失败: " + (_0x8ce2eb?.["error"] || _0x8ce2eb?.["status"] || "未知"));
        return null;
      }
    }
    if (_0x4301f0.success && (!_0x4301f0.status || _0x4301f0.status === "processed" || _0x4301f0.status === "completed")) return _0x4301f0;
    console.log("账号[" + this.nickname + "] 签名失败: " + (_0x4301f0.error || _0x4301f0.message || _0x4301f0.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0x2aae48, _0x2ac275 = 30000, _0x118a60 = 2000) {
    const _0x41465e = Date.now();
    while (Date.now() - _0x41465e < _0x2ac275) {
      const _0x43ea21 = await sendRequest({
        "method": "GET",
        "url": queueStatusApiUrl + "?queue_id=" + encodeURIComponent(_0x2aae48),
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "账号[" + this.nickname + "] 签名排队");
      if (_0x43ea21?.["success"]) {
        {
          if (_0x43ea21.status === "completed" || _0x43ea21.status === "processed") {
            return _0x43ea21;
          }
          if (_0x43ea21.status === "failed") return _0x43ea21;
        }
      }
      await new Promise(_0x2bf090 => setTimeout(_0x2bf090, _0x118a60));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["executeTask"](_0x394783) {
    const _0x185426 = this.taskConfigs[_0x394783];
    if (!_0x185426) return console.log("❌ 账号[" + this.nickname + "] 未知任务: " + _0x394783), false;
    if (this.taskLimitReached[_0x394783]) return false;
    try {
      const _0x1102e5 = await this.retryOperation(() => this.getAdInfo(_0x185426), "获取" + _0x185426.name + "信息", 3);
      if (!_0x1102e5) {
        this.taskStats[_0x394783].failed++;
        return false;
      }
      const _0x4c5500 = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "] ==>" + _0x185426.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x4c5500 / 1000) + " 秒");
      await new Promise(_0x13ab64 => setTimeout(_0x13ab64, _0x4c5500));
      const _0x2cc8b1 = await this.retryOperation(() => this.generateSignature(_0x1102e5.cid, _0x1102e5.llsid, _0x394783, _0x185426), "生成" + _0x185426.name + "签名", 3);
      if (!_0x2cc8b1) return this.taskStats[_0x394783].failed++, false;
      const _0x1a7acc = await this.retryOperation(() => this.submitReport(_0x2cc8b1.sig, _0x2cc8b1.sig3, _0x2cc8b1.sigtoken, _0x2cc8b1.post, _0x394783, _0x185426), "提交" + _0x185426.name + "报告", 3);
      if (_0x1a7acc?.["success"]) return this.taskStats[_0x394783].success++, this.taskStats[_0x394783].totalReward += _0x1a7acc.reward || 0, (_0x1a7acc.reward || 0) <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0, true;
      this.taskStats[_0x394783].failed++;
      return false;
    } catch (_0x24e577) {
      console.log("❌ 账号[" + this.nickname + "] 任务异常(" + _0x394783 + "): " + _0x24e577.message);
      this.taskStats[_0x394783].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x151920 = Object.keys(this.taskConfigs),
      _0x2874e8 = {};
    for (const _0x4314f4 of _0x151920) {
      {
        if (this.stopAllTasks) break;
        console.log("🚀 账号[" + this.nickname + "] 开始任务：" + this.taskConfigs[_0x4314f4].name);
        _0x2874e8[_0x4314f4] = await this.executeTask(_0x4314f4);
        if (this.stopAllTasks) break;
        if (_0x4314f4 !== _0x151920[_0x151920.length - 1]) {
          {
            const _0x2de022 = Math.floor(Math.random() * 8000) + 7000;
            console.log("⌛ 账号[" + this.nickname + "] 下一个任务，随机等待 " + Math.round(_0x2de022 / 1000) + " 秒");
            await new Promise(_0x356502 => setTimeout(_0x356502, _0x2de022));
          }
        }
      }
    }
    return _0x2874e8;
  }
}
function parseAccountConfig(_0x2f8478) {
  const _0x5af08b = String(_0x2f8478 || "").trim().split("#");
  if (_0x5af08b.length < 2) return null;
  const _0x17cf69 = _0x5af08b[0],
    _0x382cf5 = _0x5af08b.slice(1, _0x5af08b.length - (_0x5af08b.length >= 3 ? 1 : 0)).join("#");
  let _0x23f6d0 = null;
  if (_0x5af08b.length >= 3) {
    const _0x2b1e79 = _0x5af08b[_0x5af08b.length - 1].trim();
    console.log(_0x2b1e79);
    if (_0x2b1e79.includes("|")) {
      {
        console.log("开始解析格式1 " + _0x2b1e79);
        const _0x2c907f = _0x2b1e79.split("|");
        if (_0x2c907f.length >= 2) {
          const [_0x249c1e, _0x342461, _0x8b687, _0x41266d] = _0x2c907f;
          _0x23f6d0 = "socks5://" + _0x8b687 + ":" + _0x41266d + "@" + _0x249c1e + ":" + _0x342461;
        }
      }
    } else {
      _0x23f6d0 = /^socks5:\/\/.+/i.test(_0x2b1e79) ? _0x2b1e79 : null;
    }
    !_0x23f6d0 && console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x2b1e79);
  }
  return {
    "salt": _0x382cf5,
    "cookie": _0x17cf69,
    "proxyUrl": _0x23f6d0
  };
}
function loadAccountsFromEnv() {
  const _0x46569d = Object.keys(process.env).filter(_0x543d63 => /^ksck\d*$/i.test(_0x543d63)).sort((_0x3c9950, _0x203b24) => {
    {
      const _0x5cf010 = (_0x3c9950.match(/\d+$/) || [0])[0] * 1,
        _0x55ae90 = (_0x203b24.match(/\d+$/) || [0])[0] * 1;
      return _0x5cf010 - _0x55ae90;
    }
  });
  if (_0x46569d.length === 0) return console.log("未找到 ksck/ksck1/ksck2... 环境变量"), [];
  const _0x5e210c = [];
  for (const _0x15775e of _0x46569d) {
    {
      const _0x4c1e10 = (process.env[_0x15775e] || "").trim();
      if (!_0x4c1e10) continue;
      const _0x3c78d9 = _0x4c1e10.split("\n").map(_0x52b481 => _0x52b481.trim()).filter(Boolean);
      for (const _0x3da381 of _0x3c78d9) {
        {
          const _0x3c72ac = parseAccountConfig(_0x3da381);
          _0x3c72ac ? _0x5e210c.push(_0x3c72ac) : console.log("账号格式错误（" + _0x15775e + "）：" + _0x3da381);
        }
      }
    }
  }
  _0x5e210c.forEach((_0x111f1c, _0x4fce07) => {
    _0x111f1c.index = _0x4fce07 + 1;
  });
  return _0x5e210c;
}
async function concurrentExecute(_0x63e798, _0xaebd, _0x23b95b) {
  const _0x2e49bf = new Array(_0x63e798.length);
  let _0x38a394 = 0;
  async function _0x2b0c5a() {
    while (true) {
      {
        const _0xaf8512 = _0x38a394++;
        if (_0xaf8512 >= _0x63e798.length) return;
        const _0x2df228 = _0x63e798[_0xaf8512];
        try {
          _0x2e49bf[_0xaf8512] = await _0x23b95b(_0x2df228, _0xaf8512);
        } catch (_0x44d2d2) {
          console.log("并发执行异常（index=" + (_0xaf8512 + 1) + "）：" + _0x44d2d2.message);
          _0x2e49bf[_0xaf8512] = null;
        }
      }
    }
  }
  const _0x535133 = Array.from({
    "length": Math.min(_0xaebd, _0x63e798.length)
  }, _0x2b0c5a);
  await Promise.all(_0x535133);
  return _0x2e49bf;
}
async function processAccount(_0x15be93, _0x227fd1 = 10) {
  if (_0x15be93.proxyUrl) {
    {
      console.log("账号[" + _0x15be93.index + "]" + (_0x15be93.remark ? "（" + _0x15be93.remark + "）" : "") + " " + "🔌" + " 测试代理连接中...");
      const _0x51886b = await testProxyConnectivity(_0x15be93.proxyUrl, "账号[" + _0x15be93.index + "]");
      console.log("  - " + (_0x51886b.ok ? "✅ 代理验证通过，IP: " + _0x51886b.ip : "❌ 代理验证失败") + ": " + _0x51886b.msg);
      _0x51886b.ok && _0x51886b.ip && _0x51886b.ip !== "localhost" && (usedProxies.has(_0x51886b.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0x51886b.ip + "），请立即检查！"), process.exit(1)), usedProxies.add(_0x51886b.ip));
    }
  } else console.log("账号[" + _0x15be93.index + "] 未配置代理，走直连");
  console.log("账号[" + _0x15be93.index + "]" + (_0x15be93.remark ? "（" + _0x15be93.remark + "）" : "") + " " + "🔍" + " 获取账号信息中...");
  let _0x72dfbc = await getAccountBasicInfo(_0x15be93.cookie, _0x15be93.proxyUrl, _0x15be93.index),
    _0x1ddb9e = _0x72dfbc?.["nickname"] || "账号" + _0x15be93.index;
  if (_0x72dfbc) {
    const _0x4ce9d0 = _0x72dfbc.totalCoin != null ? _0x72dfbc.totalCoin : "未知",
      _0x46148a = _0x72dfbc.allCash != null ? _0x72dfbc.allCash : "未知";
    console.log("账号[" + _0x1ddb9e + "] " + "✅" + " 登录成功，" + "💰" + " 当前金币: " + _0x4ce9d0 + "，" + "💸" + " 当前余额: " + _0x46148a);
  } else console.log("账号[" + _0x1ddb9e + "] " + "❌" + " 基本信息获取失败，继续执行");
  const _0x4454cb = new KuaishouAdTask({
    ..._0x15be93,
    "nickname": _0x1ddb9e
  });
  await _0x4454cb.checkCoinLimit();
  if (_0x4454cb.coinExceeded) {
    {
      console.log("账号[" + _0x4454cb.nickname + "] 初始金币已超过阈值，不执行任务");
      const _0x1d8c6b = await getAccountBasicInfo(_0x15be93.cookie, _0x15be93.proxyUrl, _0x15be93.index),
        _0x22a450 = _0x72dfbc?.["totalCoin"] || 0,
        _0x2ec064 = _0x1d8c6b?.["totalCoin"] || 0,
        _0x3d45fa = _0x2ec064 - _0x22a450,
        _0x394b26 = _0x72dfbc?.["allCash"] || 0,
        _0x211fca = _0x1d8c6b?.["allCash"] || 0,
        _0x498e81 = _0x211fca - _0x394b26;
      return {
        "index": _0x15be93.index,
        "nickname": _0x1ddb9e,
        "initialCoin": _0x22a450,
        "finalCoin": _0x2ec064,
        "coinChange": _0x3d45fa,
        "initialCash": _0x394b26,
        "finalCash": _0x211fca,
        "cashChange": _0x498e81,
        "stats": _0x4454cb.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  for (let _0x18fc84 = 0; _0x18fc84 < _0x227fd1; _0x18fc84++) {
    {
      const _0x18614e = Math.floor(Math.random() * 8000) + 8000;
      console.log("账号[" + _0x4454cb.nickname + "] " + "⌛" + " 第" + (_0x18fc84 + 1) + "轮，先随机等待 " + Math.round(_0x18614e / 1000) + " 秒");
      await new Promise(_0x52569a => setTimeout(_0x52569a, _0x18614e));
      console.log("账号[" + _0x4454cb.nickname + "] " + "🚀" + " 开始第" + (_0x18fc84 + 1) + "轮任务");
      const _0x38de54 = await _0x4454cb.executeAllTasksByPriority();
      if (Object.values(_0x38de54).some(Boolean)) {
        console.log("账号[" + _0x4454cb.nickname + "] " + "✅" + " 第" + (_0x18fc84 + 1) + "轮执行完成");
      } else console.log("账号[" + _0x4454cb.nickname + "] " + "⚠️" + " 第" + (_0x18fc84 + 1) + "轮没有成功任务");
      if (_0x4454cb.stopAllTasks) {
        console.log("账号[" + _0x4454cb.nickname + "] " + "🏁" + " 达到停止条件，终止后续轮次");
        break;
      }
      if (_0x18fc84 < _0x227fd1 - 1) {
        const _0x417b3d = Math.floor(Math.random() * 10000) + 10000;
        console.log("账号[" + _0x4454cb.nickname + "] " + "⌛" + " 等待 " + Math.round(_0x417b3d / 1000) + " 秒进入下一轮");
        await new Promise(_0xd53ea3 => setTimeout(_0xd53ea3, _0x417b3d));
      }
    }
  }
  const _0x3ecb72 = await getAccountBasicInfo(_0x15be93.cookie, _0x15be93.proxyUrl, _0x15be93.index),
    _0xdff8b8 = _0x72dfbc?.["totalCoin"] || 0,
    _0x2521e1 = _0x3ecb72?.["totalCoin"] || 0,
    _0x123d7b = _0x2521e1 - _0xdff8b8,
    _0x1d0abb = _0x72dfbc?.["allCash"] || 0,
    _0x5056be = _0x3ecb72?.["allCash"] || 0,
    _0x3c48ec = _0x5056be - _0x1d0abb;
  _0x4454cb.printTaskStats();
  return {
    "index": _0x15be93.index,
    "nickname": _0x1ddb9e,
    "initialCoin": _0xdff8b8,
    "finalCoin": _0x2521e1,
    "coinChange": _0x123d7b,
    "initialCash": _0x1d0abb,
    "finalCash": _0x5056be,
    "cashChange": _0x3c48ec,
    "stats": _0x4454cb.getTaskStats(),
    "coinLimitExceeded": _0x4454cb.coinExceeded
  };
}
function printAccountsSummary(_0x4f2056) {
  if (!_0x4f2056.length) {
    {
      console.log("\n没有可显示的账号信息。");
      return;
    }
  }
  const _0xd5f466 = _0x4f2056.reduce((_0x32df58, _0x4ae152) => {
      return _0x32df58 + (parseInt(_0x4ae152.initialCoin) || 0);
    }, 0),
    _0x55df9f = _0x4f2056.reduce((_0x34ebc2, _0x2343cd) => {
      return _0x34ebc2 + (parseInt(_0x2343cd.finalCoin) || 0);
    }, 0),
    _0x46c9a0 = _0x55df9f - _0xd5f466,
    _0x3c3708 = _0x4f2056.reduce((_0xcb3de3, _0x5ac5b6) => {
      return _0xcb3de3 + (parseFloat(_0x5ac5b6.initialCash) || 0);
    }, 0),
    _0x188dfb = _0x4f2056.reduce((_0x306ca8, _0x2e6038) => {
      return _0x306ca8 + (parseFloat(_0x2e6038.finalCash) || 0);
    }, 0),
    _0x1d24ea = _0x188dfb - _0x3c3708;
  let _0x24c3a8 = 0,
    _0x3aaf6d = 0,
    _0x3b7f11 = 0;
  _0x4f2056.forEach(_0x27b587 => {
    _0x27b587.stats && Object.values(_0x27b587.stats).forEach(_0x50cfa1 => {
      _0x24c3a8 += _0x50cfa1.success + _0x50cfa1.failed;
      _0x3aaf6d += _0x50cfa1.success;
      _0x3b7f11 += _0x50cfa1.totalReward;
    });
  });
  const _0x48a9b3 = _0x24c3a8 > 0 ? (_0x3aaf6d / _0x24c3a8 * 100).toFixed(1) : "0.0",
    _0x2528c7 = _0x4f2056.filter(_0xca76a9 => _0xca76a9.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x4f2056.length).padEnd(22) + ("超过金币阈值账号: " + _0x2528c7).padEnd(22) + ("总任务数: " + _0x24c3a8).padEnd(22) + ("任务成功率: " + _0x48a9b3 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x46c9a0).padEnd(26) + ("总金币奖励: " + _0x3b7f11).padEnd(26) + ("总余额变化: " + _0x1d24ea.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x30aaac = ["序号", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x4a64ed = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x2c53d1 = "|";
  _0x30aaac.forEach((_0x44caa0, _0x166166) => {
    _0x2c53d1 += centerAlign(_0x44caa0, _0x4a64ed[_0x166166]) + "|";
  });
  console.log(_0x2c53d1);
  let _0x4cf74c = "|";
  _0x4a64ed.forEach(_0x178146 => {
    _0x4cf74c += "-".repeat(_0x178146) + "|";
  });
  console.log(_0x4cf74c);
  _0x4f2056.forEach(_0x3a0110 => {
    {
      let _0x5ac12e = "|";
      _0x5ac12e += centerAlign(_0x3a0110.index, _0x4a64ed[0]) + "|";
      const _0x475ec6 = (_0x3a0110.nickname || "-") + (_0x3a0110.coinLimitExceeded ? " ⚠️" : "");
      _0x5ac12e += centerAlign(_0x475ec6.substring(0, _0x4a64ed[1] - 2), _0x4a64ed[1]) + "|";
      _0x5ac12e += centerAlign(_0x3a0110.initialCoin, _0x4a64ed[2]) + "|";
      _0x5ac12e += centerAlign(_0x3a0110.finalCoin, _0x4a64ed[3]) + "|";
      const _0x3f678a = _0x3a0110.coinChange >= 0 ? "+" + _0x3a0110.coinChange : _0x3a0110.coinChange;
      _0x5ac12e += centerAlign(_0x3f678a, _0x4a64ed[4]) + "|";
      _0x5ac12e += centerAlign(_0x3a0110.initialCash, _0x4a64ed[5]) + "|";
      _0x5ac12e += centerAlign(_0x3a0110.finalCash, _0x4a64ed[6]) + "|";
      const _0x593534 = _0x3a0110.cashChange >= 0 ? "+" + _0x3a0110.cashChange.toFixed(2) : _0x3a0110.cashChange.toFixed(2);
      _0x5ac12e += centerAlign(_0x593534, _0x4a64ed[7]) + "|";
      console.log(_0x5ac12e);
    }
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x46d793 = loadAccountsFromEnv();
  console.log("共找到 " + _0x46d793.length + " 个有效账号");
  !_0x46d793.length && process.exit(1);
  const _0xe3dfe4 = parseInt(process.env.MAX_CONCURRENCY || process.env.CONCURRENCY || "888", 10) || 888,
    _0x39d5bc = parseInt(process.env.ROUNDS || "35", 10) || 35;
  console.log("\n防黑并发：" + _0xe3dfe4 + "    防黑轮数：" + _0x39d5bc + "\n");
  const _0x54ec06 = [];
  await concurrentExecute(_0x46d793, _0xe3dfe4, async _0x1d4843 => {
    console.log("\n—— 🚀 开始账号[" + _0x1d4843.index + "]" + (_0x1d4843.remark ? "（" + _0x1d4843.remark + "）" : "") + " ——");
    try {
      {
        const _0x41216a = await processAccount(_0x1d4843, _0x39d5bc);
        _0x54ec06.push({
          "index": _0x1d4843.index,
          "remark": _0x1d4843.remark || "无备注",
          "nickname": _0x41216a?.["nickname"] || "未知账号",
          "initialCoin": _0x41216a?.["initialCoin"] || 0,
          "finalCoin": _0x41216a?.["finalCoin"] || 0,
          "coinChange": _0x41216a?.["coinChange"] || 0,
          "initialCash": _0x41216a?.["initialCash"] || 0,
          "finalCash": _0x41216a?.["finalCash"] || 0,
          "cashChange": _0x41216a?.["cashChange"] || 0,
          "stats": _0x41216a?.["stats"] || {},
          "coinLimitExceeded": _0x41216a?.["coinLimitExceeded"] || false
        });
      }
    } catch (_0x2d56ae) {
      console.log("账号[" + _0x1d4843.index + "] " + "❌" + " 执行异常：" + _0x2d56ae.message);
      _0x54ec06.push({
        "index": _0x1d4843.index,
        "remark": _0x1d4843.remark || "无备注",
        "nickname": "未知账号",
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x2d56ae.message
      });
    }
  });
  _0x54ec06.sort((_0x35ed98, _0x32e046) => _0x35ed98.index - _0x32e046.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  function _0x2cff56(_0x257b49) {
    let _0x1f60f1 = 0;
    for (let _0x5d657a = 0; _0x5d657a < _0x257b49.length; _0x5d657a++) {
      {
        const _0x2167b5 = _0x257b49.charCodeAt(_0x5d657a);
        _0x2167b5 >= 19968 && _0x2167b5 <= 40869 || _0x2167b5 >= 126976 && _0x2167b5 <= 128767 ? _0x1f60f1 += 2 : _0x1f60f1 += 1;
      }
    }
    return _0x1f60f1;
  }
  function _0x21ace3(_0x340cfa, _0x2ec6e2) {
    const _0x131cd8 = String(_0x340cfa || ""),
      _0x4dd3ba = _0x2cff56(_0x131cd8),
      _0x461008 = _0x2ec6e2 - _0x4dd3ba;
    if (_0x461008 <= 0) {
      let _0x1916fb = "",
        _0x1e25f4 = 0;
      for (let _0xb41ba6 = 0; _0xb41ba6 < _0x131cd8.length; _0xb41ba6++) {
        {
          const _0x589bd9 = _0x2cff56(_0x131cd8[_0xb41ba6]);
          if (_0x1e25f4 + _0x589bd9 > _0x2ec6e2 - 2) return _0x1916fb + "..";
          _0x1916fb += _0x131cd8[_0xb41ba6];
          _0x1e25f4 += _0x589bd9;
        }
      }
      return _0x1916fb;
    }
    return _0x131cd8 + " ".repeat(_0x461008);
  }
  const _0x14fdce = ["序号", "备注", "账号名", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x3a0c3d = [6, 18, 18, 12, 12, 12, 12, 12, 12];
  let _0x1a488b = "|";
  for (let _0x2f678c = 0; _0x2f678c < _0x14fdce.length; _0x2f678c++) {
    _0x1a488b += " " + _0x21ace3(_0x14fdce[_0x2f678c], _0x3a0c3d[_0x2f678c]) + " |";
  }
  console.log(_0x1a488b);
  let _0x196bea = "+";
  for (let _0x35462e = 0; _0x35462e < _0x3a0c3d.length; _0x35462e++) {
    _0x196bea += "-".repeat(_0x3a0c3d[_0x35462e] + 2) + "+";
  }
  console.log(_0x196bea);
  _0x54ec06.forEach(_0x4557e5 => {
    let _0x157108 = "|";
    if (_0x4557e5.error) {
      _0x157108 += " " + _0x21ace3(_0x4557e5.index, _0x3a0c3d[0]) + " |";
      _0x157108 += " " + _0x21ace3(_0x4557e5.remark || "", _0x3a0c3d[1]) + " |";
      _0x157108 += " " + _0x21ace3("执行异常", _0x3a0c3d[2]) + " |";
      _0x157108 += " " + _0x21ace3("异常", _0x3a0c3d[3]) + " |";
      _0x157108 += " " + _0x21ace3("异常", _0x3a0c3d[4]) + " |";
      _0x157108 += " " + _0x21ace3("异常", _0x3a0c3d[5]) + " |";
      _0x157108 += " " + _0x21ace3("异常", _0x3a0c3d[6]) + " |";
      _0x157108 += " " + _0x21ace3("异常", _0x3a0c3d[7]) + " |";
      _0x157108 += " " + _0x21ace3("异常", _0x3a0c3d[8]) + " |";
      console.log(_0x157108);
      const _0x50a93f = _0x4557e5.error.substring(0, 120);
      let _0x1c7698 = "|";
      _0x1c7698 += " " + _0x21ace3("", _0x3a0c3d[0]) + " |";
      _0x1c7698 += " " + _0x21ace3("异常信息: " + _0x50a93f, _0x3a0c3d[1] + _0x3a0c3d[2] + _0x3a0c3d[3] + _0x3a0c3d[4] + _0x3a0c3d[5] + _0x3a0c3d[6] + _0x3a0c3d[7] + _0x3a0c3d[8] + 14) + " |";
      console.log(_0x1c7698);
    } else {
      _0x157108 += " " + _0x21ace3(_0x4557e5.index, _0x3a0c3d[0]) + " |";
      _0x157108 += " " + _0x21ace3(_0x4557e5.remark || "", _0x3a0c3d[1]) + " |";
      _0x157108 += " " + _0x21ace3(_0x4557e5.nickname + (_0x4557e5.coinLimitExceeded ? " ⚠️" : ""), _0x3a0c3d[2]) + " |";
      _0x157108 += " " + _0x21ace3(_0x4557e5.initialCoin.toFixed(2), _0x3a0c3d[3]) + " |";
      _0x157108 += " " + _0x21ace3(_0x4557e5.finalCoin.toFixed(2), _0x3a0c3d[4]) + " |";
      const _0x56a4f8 = _0x4557e5.coinChange >= 0 ? "+" + _0x4557e5.coinChange.toFixed(2) : _0x4557e5.coinChange.toFixed(2);
      _0x157108 += " " + _0x21ace3(_0x56a4f8, _0x3a0c3d[5]) + " |";
      _0x157108 += " " + _0x21ace3(_0x4557e5.initialCash.toFixed(2), _0x3a0c3d[6]) + " |";
      _0x157108 += " " + _0x21ace3(_0x4557e5.finalCash.toFixed(2), _0x3a0c3d[7]) + " |";
      const _0x57ec0b = _0x4557e5.cashChange >= 0 ? "+" + _0x4557e5.cashChange.toFixed(2) : _0x4557e5.cashChange.toFixed(2);
      _0x157108 += " " + _0x21ace3(_0x57ec0b, _0x3a0c3d[8]) + " |";
      console.log(_0x157108);
    }
  });
  console.log(_0x196bea);
})();