function rgbToHex(rgbType) {
  // 컬러값과 쉼표만 남기고 삭제.
  var rgb = rgbType.replace(/[^%,.\d]/g, '');

  // 쉼표(,)를 기준으로 분리해서, 배열에 담기.
  rgb = rgb.split(',');

  // 컬러값이 "%"일 경우, 변환하기.
  for (var x = 0; x < 3; x++) {
    if (rgb[x].indexOf('%') > -1) {
      rgb[x] = Math.round(parseFloat(rgb[x]) * 2.55);
    }
  }

  // 16진수 문자로 변환.
  var toHex = function(string) {
    string = parseInt(string, 10).toString(16);
    string = string.length === 1 ? '0' + string : string;

    return string;
  };

  var r = toHex(rgb[0]);
  var g = toHex(rgb[1]);
  var b = toHex(rgb[2]);

  var hexType = '#' + r + g + b;

  return hexType;
}

function hexToRgb(hexType) {
  var hex = hexType.replace('#', '');
  var value = hex.match(/[a-f\d]/gi);

  // 헥사값이 세자리일 경우, 여섯자리로.
  if (value.length == 3) {
    hex = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
  }

  value = hex.match(/[a-f\d]{2}/gi);

  var r = parseInt(value[0], 16);
  var g = parseInt(value[1], 16);
  var b = parseInt(value[2], 16);

  var rgbType = 'rgb(' + r + ', ' + g + ', ' + b + ')';

  return rgbType;
}

const palette = {
  hakgyoPurple: hexToRgb('#655caf'),
  hakgyoBlue: hexToRgb('#124794'),
  white: hexToRgb('#ffffff'),
};

export default palette;
