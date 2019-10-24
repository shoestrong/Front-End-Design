const morsecode = {
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  '?': '..--..',
  '/': '-..-.',
  '[': '-.-..',
  ']': '.---.',
  '-': '-....-',
  '.': '.-.-.-',
  '@': '--.-.',
  '*': '----',
  '$': '...-.',
  '#': '..--'
}
// 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
// A,B,C,D,E,F,G,H,I,J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
// Z,Y,X,W,V,U,T,S,R,Q, P, O, N, M, L, K, J, I, H, G, F, E, D, C, B, A
// 生成A-Z
const renderA2Z = () => {
  let arr = [];
  for (let i = 65; i < 91; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

// 反正A-Z
const renderZ2A = () => {
  return renderA2Z().reverse()
}

// 摩丝密码转换字母
function morse2word(morse) {
  const morsearr = /\//.test(morse) ? morse.split('/') : [];
  let wordarr = [];
  let word = '';
  for (let i = 0; i < morsearr.length; i++) {
    for (let j in morsecode) {
      if (morsearr[i] == morsecode[j]) {
        wordarr[i] = j;
      }
    }
  }
  for (let i = 0; i < wordarr.length; i++) {
    word += wordarr[i] + '';
  }
  return word;
}

// 字母转换摩丝密码
function word2morse(word) {
  let morsearr = [];
  let morse = '';
  for (let i = 0; i < word.length; i++) {
    for (let j in morsecode) {
      if (word[i] == j) {
        morsearr[i] = morsecode[j];
      }
    }
  }
  for (let i = 0; i < morsearr.length; i++) {
    morse += morsearr[i] + '/';
  }
  return morse;
}

// 编译摩斯密码
function encodeMorse(str) {
  if (!str) return;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      newStr += 'F' + atbashCipher(str[i].charCodeAt().toString())
    } else {
      newStr += 'F' + str[i].charCodeAt().toString()
    }
  }
  return newStr
}

// 解析摩斯密码
function decodeMorse(morse) {
  let newMorse = '';
  morse.split('F').map(r => {
    if (!r) return;
    if (r.length !== 4) {
      newMorse += String.fromCharCode(r)
    } else {
      newMorse += '\\u' + atbashCipher(r)
    }
  })
  return unescape(newMorse.replace(/\\/g, '%'))
}

// 埃特巴什码
function atbashCipher(str) {
  let atbash = '';
  let str2UpperCase = str.toUpperCase();
  for (let i = 0; i < str2UpperCase.length; i++) {
    if (renderA2Z().includes(str2UpperCase[i])) {
      atbash += renderZ2A()[renderA2Z().indexOf(str2UpperCase[i])]
    } else {
      atbash += str2UpperCase[i]
    }
  }
  return atbash
}

// 编码
export const enMorse = (str) => {
  return word2morse(encodeMorse(str))
}

// 解码
export const deMorse = (str) => {
  return decodeMorse(morse2word(str))
}


// console.log(word2morse('F963UF91XXF59Y9F6211F6765F4V86'))
// console.log(word2morse(encodeMorse('好好学习天2ss3天向上AssC')))

// console.log(decodeMorse(morse2word('..-./..---/..---/----./-----/----./..-./..---/..---/----./-----/----./..-./..---/...--/...--/----./---../..-./..---/-----/-----/-..../....-/..-./..---/..---/---../..---/...../..-./...../-----/..-./.----/.----/...../..-./.----/.----/...../..-./...../.----/..-./..---/..---/---../..---/...../..-./..---/.----/...../..---/.----/..-./.----/----./----./--.../---../..-./-..../...../..-./.----/.----/...../..-./.----/.----/...../..-./-..../--.../')))