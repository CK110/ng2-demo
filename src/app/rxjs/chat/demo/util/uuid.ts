// taken from TodoMVC  04dfe76c-1664-4df6-b712-586456001083
export function uuid() {
  var i, random;
  var result = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      result += '-';
    }
    result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16); // 转为16进制字符串
  }

  return result;
};

