
export function format(date, fmt) {
    let o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// 判断是否为手机号
export function isMobilePhone(mPhone) {
    let re = /^[1][3,4,5,7,8][0-9]{9}$/
    return re.test(mPhone)
}

// 判断是否为电话号码
export function isTelephone(tel) {
    let re = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    return re.test(tel)
}

export function isPhone(phone) {
    return isMobilePhone(phone) || isTelephone(phone)
}

export function isEmail(email) {
    let re = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
    return re.test(email)
}

export function deepCopy(obj) {
    if (typeof obj !== 'object' || !obj) {
        return obj;
    }
    let newObj = obj.constructor === Array ? [] : {};
    for (let i in obj) {
        newObj[i] = typeof obj[i] === 'object' ?
            deepCopy(obj[i]) : obj[i];
    }
    return newObj;
}

export function twoPoint(value) {
    value = Math.round(parseFloat(value) * 100) / 100;
    let xsd = value.toString().split(".");
    if (xsd.length === 1) {
        value = value.toString() + ".00";
        return value;
    }
    if (xsd.length > 1) {
        if (xsd[1].length < 2) {
            value = value.toString() + "0";
        }
        return value;
    }
    return value;
}

export function twoNum(value) {
    value = '' + value
    if (value.length === 1) {
        return '0' + value
    }
    return value
}

export function onePoint(value) {
    value = Math.round(parseFloat(value) * 10) / 10;
    let xsd = value.toString().split(".");
    if (xsd.length === 1) {
        value = value.toString() + ".0";
        return value;
    }
    return value;
}

/*
 *
 */
export function amountFixed(input) {
    let output = {
        value: Number(input) || 0,
        unitEN: '',
        unitZH: '',
    }
    const {value} = output
    if (value > 1000000000) {
        const n = value / 100000000
        let fixed = 5 - String(parseInt(n)).length
        if (fixed <= 0) fixed = 0
        output.value = Number(n.toFixed(fixed))
        output.unitEN = ''
        output.unitZH = '亿'
    } else if (value > 100000) {
        const n = value / 10000
        let fixed = 5 - String(parseInt(n)).length
        if (fixed <= 0) fixed = 0
        output.value = Number(n.toFixed(fixed))
        output.unitEN = ''
        output.unitZH = '万'
    } else {
        let fixed = 5 - String(parseInt(value)).length
        if (fixed <= 0) fixed = 0
        output.value = Number(value.toFixed(fixed))
    }
    return output
}

export function priceFormat(input) {
    let value = Number(input) || 0
    if (value >= 10000) {
        value = parseInt(value)
    } else if (value >= 1000) {
        value = value.toFixed(1)
    } else if (value >= 100) {
        value = value.toFixed(2)
    } else if (value >= 10) {
        value = value.toFixed(3)
    } else if (value >= 1) {
        value = value.toFixed(4)
    } else if (value >= 0.1) {
        value = value.toFixed(5)
    } else if (value >= 0.01) {
        value = value.toFixed(6)
    } else if (value >= 0.001) {
        value = value.toFixed(7)
    } else {
        value = value.toFixed(8)
    }
    return Number(value)
}

export function toThousands(num) {
    let result = [], counter = 0;
    num = (num || 0).toString().split('');
    for (let i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) {
            result.unshift(',');
        }
    }
    return result.join('');
}

export function formatTHousands(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
    let t = "";
    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}

export function leftTimer(year, month, day, hour = 0, minute = 0, second = 0) {
    let leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数
    let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
    let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
    let minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
    let seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    hours = hours > 0 ? hours : '00'
    minutes = minutes > 0 ? minutes : '00'
    seconds = seconds > 0 ? seconds : '00'
    return hours + " : " + minutes + " : " + seconds + "";
}

export function countDown(leftTime) {
    let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
    let minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
    let seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    hours = hours > 0 ? hours : '00'
    minutes = minutes > 0 ? minutes : '00'
    seconds = seconds > 0 ? seconds : '00'
    return hours + " : " + minutes + " : " + seconds + "";
}

export function getTimer(leftTime) {
    let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
    let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
    let minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
    let seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    hours = hours > 0 ? hours : '00'
    minutes = minutes > 0 ? minutes : '00'
    seconds = seconds > 0 ? seconds : '00'
    return hours + ":" + minutes + ":" + seconds + "";
}

function IsPC() {
    let userAgentInfo = navigator.userAgent;
    let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


export function getUserAgent() {
    let ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
        mobile: !isPc
    };
}

export function sleep(time = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

export function detectScatter(error) {
    let i = 0;
    return new Promise(async (resolve, reject) => {
        // window.scatter = ScatterJS.scatter;
        while (!window.scatter && i <= 10) {
            await sleep(100);
            i++;
        }
        if (!window.scatter) {
            showError(error || '请提前下载并安装 Scatter 或是可以实现用户和 DAPP 交互的 EOS钱包。')
            reject()
        } else {
            resolve(window.scatter)
        }
    })
}

function checkTime(i) { //将0-9的数字前面加上0，例1变为01
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
