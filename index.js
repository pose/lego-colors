(function () {

  var legoColorsExports = {};

  // Are we in Node.js or Require friendly environment?
  if (typeof exports === 'undefined') {

    // Are we in a browser?
    if (typeof window === 'undefined') {
      throw 'Neither exports nor window found!';
    }

    window.legoColors = legoColorsExports;
  } else {
    module.exports = legoColorsExports;
  }

  // Taken from: http://www.peeron.com/cgi-bin/invcgis/colorguide.cgi

  var legoColors = [
    // ['LEGO No.', 'Color', 'C', 'M', 'Y', 'K', 'R', 'G', 'B', 'Pantone'],
    ['1', 'White', '5', '3', '4', '0', '242', '243', '242', 'CoolGrey 1 C'],
    ['2', 'Grey', '40', '28', '34', '2', '161', '165', '162', '422 C'],
    ['3', 'Light yellow', '0', '13', '50', '0', '249', '233', '153', '1215 C'],
    ['5', 'Brick yellow', '14', '21', '47', '0', '215', '197', '153', '467 C'],
    ['6', 'Light green', '28', '0', '35', '0', '194', '218', '184', '351 C'],
    ['9', 'Light reddish violet', '0', '33', '8', '0', '232', '186', '199', '203 C'],
    ['12', 'Light orange brown', '10', '58', '90', '0', '203', '132', '66', '1385 C'],
    ['18', 'Nougat', '11', '53', '68', '0', '204', '142', '104', '472 C'],
    ['21', 'Bright red', '0', '100', '100', '0', '196', '40', '27', '032 C'],
    ['22', 'Medium reddish violet', '10', '72', '0', '0', '196', '112', '160', '2375 C'],
    ['23', 'Bright blue', '100', '47', '0', '0', '13', '105', '171', '293 C'],
    ['24', 'Bright yellow', '0', '19', '100', '0', '245', '205', '47', '116 C'],
    ['25', 'Earth orange', '62', '79', '93', '22', '98', '71', '50', '469 C'],
    ['26', 'Black', '60', '0', '0', '100', '27', '42', '52', 'Process Black C'],
    ['27', 'Dark grey', '62', '50', '55', '15', '109', '110', '108', '418 C'],
    ['28', 'Dark green', '100', '15', '100', '0', '40', '127', '70', '348 C'],
    ['29', 'Medium green', '46', '0', '62', '0', '161', '196', '139', '353 C'],
    ['36', 'Light Yellowich orange', '0', '21', '45', '0', '243', '207', '155', '148 C'],
    ['37', 'Bright green', '88', '0', '100', '0', '75', '151', '74', '355 C'],
    ['38', 'Dark orange', '30', '76', '95', '3', '160', '95', '52', '471 C'],
    ['39', 'Light bluish violet', '25', '14', '5', '0', '193', '202', '222', '2706 C'],
    ['40', 'Transparent', '0', '0', '0', '8', '236', '236', '236', 'CoolGrey 1 C'],
    ['41', 'Transparent Red', '0', '85', '75', '0', '205', '84', '75', '185 C'],
    ['42', 'Transparent Lg blue', '27', '0', '5', '0', '193', '223', '240', '304 C'],
    ['43', 'Transparent Blue', '60', '5', '0', '0', '123', '182', '232', '298 C'],
    ['44', 'Transparent Yellow', '5', '0', '60', '0', '247', '241', '141', '393 C'],
    ['45', 'Light blue', '33', '4', '9', '0', '180', '210', '227', '545 C'],
    ['47', 'Transparent fluorescent Reddish orange', '0', '60', '60', '0', '217', '133', '108', '165 C'],
    ['48', 'Transparent Green', '60', '0', '60', '0', '132', '182', '141', '360 C'],
    ['49', 'Transparent fluorescent Green', '5', '0', '65', '0', '248', '241', '132', '387 C'],
    ['50', 'Phosphorescent White', '7', '7', '12', '0', '236', '232', '222', '427 C'],
    ['100', 'Light red', '0', '27', '24', '0', '238', '196', '182', '169 C'],
    ['101', 'Medium red', '0', '60', '50', '0', '218', '134', '121', '170 C'],
    ['102', 'Medium blue', '68', '24', '5', '0', '110', '153', '201', '284 C'],
    ['103', 'Light grey', '22', '20', '27', '0', '199', '193', '183', '421 C'],
    ['104', 'Bright violet', '63', '95', '0', '0', '107', '50', '123', '2592 C'],
    ['105', 'Bright yellowish orange', '0', '47', '93', '0', '226', '155', '63', '137 C'],
    ['106', 'Bright orange', '0', '60', '90', '0', '218', '133', '64', '151 C'],
    ['107', 'Bright bluish green', '100', '3', '47', '0', '0', '143', '155', '327 C'],
    ['108', 'Earth yellow', '61', '63', '85', '20', '104', '92', '67', '1405 C'],
    ['110', 'Bright bluish violet', '88', '70', '0', '0', '67', '84', '147', '2736 C'],
    ['111', 'Transparent Brown', '25', '25', '28', '0', '191', '183', '177', 'WarmGrey 3 C'],
    ['112', 'Medium bluish violet', '70', '52', '0', '0', '104', '116', '172', '2726 C'],
    ['113', 'Transparent Medium reddish violet', '0', '40', '0', '0', '228', '173', '200', '230 C'],
    ['115', 'Medium yellowish green', '28', '0', '100', '0', '199', '210', '60', '381 C'],
    ['116', 'Medium bluish green', '80', '0', '36', '0', '85', '165', '175', '326 C'],
    ['118', 'Light bluish green', '32', '0', '18', '0', '183', '215', '213', '324 C'],
    ['119', 'Bright yellowish green', '45', '3', '98', '0', '164', '189', '70', '390 C'],
    ['120', 'Light yellowish green', '18', '0', '46', '0', '217', '228', '167', '365 C'],
    ['121', 'Medium yellowish orange', '0', '38', '82', '0', '231', '172', '88', '1365 C'],
    ['123', 'Bright reddish orange', '0', '72', '80', '0', '211', '111', '76', '165 C'],
    ['124', 'Bright reddish violet', '33', '95', '8', '5', '146', '57', '120', '241 C'],
    ['125', 'Light orange', '0', '33', '47', '0', '234', '184', '145', '1555 C'],
    ['126', 'Transparent Bright bluish violet', '37', '32', '0', '0', '165', '165', '203', '271 C'],
    ['127', 'Gold', '10', '27', '60', '0', '220', '188', '129', '156 C'],
    ['128', 'Dark nougat', '25', '60', '75', '3', '174', '122', '89', '471 C'],
    ['131', 'Silver', '44', '29', '30', '0', '156', '163', '168', '429 C'],
    ['133', 'Neon orange', '0', '70', '90', '0', '213', '115', '61', '165 C'],
    ['134', 'Neon green', '20', '0', '90', '0', '216', '221', '86', '374 C'],
    ['135', 'Sand blue', '63', '38', '27', '4', '116', '134', '156', '5415 C'],
    ['136', 'Sand violet', '49', '51', '29', '5', '135', '124', '144', '666 C'],
    ['137', 'Medium orange', '0', '50', '72', '0', '224', '152', '100', '1575 C'],
    ['138', 'Sand yellow', '43', '43', '60', '5', '149', '138', '115', '451 C'],
    ['140', 'Earth blue', '100', '70', '36', '40', '32', '58', '86', '2955 C'],
    ['141', 'Earth green', '100', '58', '100', '33', '39', '70', '44', '350 C'],
    ['143', 'Transparent fluorescent Blue', '20', '3', '0', '0', '207', '226', '247', '657 C'],
    ['145', 'Sand blue metallic', '60', '38', '23', '4', '121', '136', '161', '652C'],
    ['146', 'Sand violet metallic', '42', '42', '20', '5', '149', '142', '163', '5285 C'],
    ['147', 'Sand yellow metallic', '45', '45', '70', '3', '147', '135', '103', '873 C'],
    ['148', 'Dark grey metallic', '77', '67', '67', '10', '87', '88', '87', '446 C'],
    ['149', 'Black metallic', '100', '90', '55', '55', '22', '29', '50', '2767 C'],
    ['150', 'Light grey metallic', '36', '27', '30', '0', '171', '173', '172', '422 C'],
    ['151', 'Sand green', '60', '25', '53', '10', '120', '144', '129', '624 C'],
    ['153', 'Sand red', '37', '54', '48', '10', '149', '121', '118', '4995 C'],
    ['154', 'Dark red', '45', '100', '90', '11', '123', '46', '47', '194 C'],
    ['157', 'Transparent fluorescent Yellow', '0', '0', '70', '0', '255', '246', '123', '395 C'],
    ['158', 'Transparent fluorescent Red', '0', '45', '0', '0', '225', '164', '194', '211 C'],
    ['168', 'Gun metallic', '56', '54', '62', '15', '117', '108', '98', 'WarmGrey 11 C'],
    ['176', 'Red flip flop', '40', '70', '70', '0', '151', '105', '91', '483 C'],
    ['178', 'Yellow flip flop', '25', '55', '80', '5', '180', '132', '85', '160 C'],
    ['179', 'Silver flip flop', '50', '42', '43', '5', '137', '135', '136', '410 C'],
    ['180', 'Curry', '10', '36', '90', '0', '215', '169', '75', '131 C'],
    ['190', 'Fire Yellow', '0', '14', '100', '0', '249', '214', '46', '012 C'],
    ['191', 'Flame yellowish orange', '0', '37', '100', '0', '232', '171', '45', '137 C'],
    ['192', 'Reddish brown', '32', '80', '95', '50', '105', '64', '39', '499 C'],
    ['193', 'Flame reddish orange', '0', '79', '100', '0', '207', '96', '36', '173 C'],
    ['194', 'Medium stone grey', '39', '32', '31', '0', '163', '162', '164', '429 C'],
    ['195', 'Royal blue', '86', '56', '0', '0', '70', '103', '164', '2728 C'],
    ['196', 'Dark Royal blue', '100', '75', '0', '0', '35', '71', '139', '286 C'],
    ['198', 'Bright reddish lilac', '40', '90', '0', '0', '142', '66', '133', '254 C'],
    ['199', 'Dark stone grey', '70', '63', '60', '10', '99', '95', '97', '431 C'],
    ['200', 'Lemon metalic', '56', '35', '80', '5', '130', '138', '93', '5767 C'],
    ['208', 'Light stone grey', '10', '7', '12', '0', '229', '228', '222', '428 C'],
    ['209', 'Dark Curry', '12', '35', '90', '23', '176', '142', '68', '118 C'],
    ['210', 'Faded green', '67', '17', '65', '8', '112', '149', '120', '364 C'],
    ['211', 'Turquoise', '64', '0', '34', '0', '121', '181', '181', '3255 C'],
    ['212', 'Light Royal blue', '43', '8', '0', '0', '159', '195', '233', '292 C'],
    ['213', 'Medium Royal blue', '68', '43', '0', '0', '108', '129', '183', '2727 C'],
    ['216', 'Rust', '18', '82', '97', '30', '143', '76', '42', '174 C'],
    ['217', 'Brown', '39', '65', '80', '30', '124', '92', '69', '161 C'],
    ['218', 'Reddish lilac', '40', '66', '4', '0', '150', '112', '159', '2573 C'],
    ['219', 'Lilac', '67', '67', '0', '0', '107', '98', '155', '2725 C'],
    ['220', 'Light lilac', '36', '30', '0', '0', '167', '169', '206', '2716 C'],
    ['221', 'Bright purple', '2', '79', '0', '0', '205', '98', '152', '232 C'],
    ['222', 'Light purple', '0', '40', '0', '0', '228', '173', '200', '236 C'],
    ['223', 'Light pink', '0', '55', '30', '0', '220', '144', '149', '183 C'],
    ['224', 'Light brick yellow', '3', '17', '44', '0', '240', '213', '160', '7501 C'],
    ['225', 'Warm yellowish orange', '0', '32', '59', '0', '235', '184', '127', '713 C'],
    ['226', 'Cool yellow', '0', '7', '59', '0', '253', '234', '140', '120 C'],
    ['232', 'Dove blue', '60', '0', '10', '0', '125', '187', '221', '311 C'],
    ['268', 'Medium lilac', '95', '95', '0', '0', '52', '43', '117', '2685 C']
  ];

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function rgbAsNumber(r, g, b) {
    return r * 16 * 16 * 16 * 16 + g * 16 * 16 + b;
  }

  function convertRowToObj(row) {
    // ['LEGO No.', 'Color', 'C', 'M', 'Y', 'K', 'R', 'G', 'B', 'Pantone'],
    var rgb = Object.freeze([parseInt(row[6], 10), parseInt(row[7], 10), parseInt(row[8], 10)]);
    return Object.freeze({
      legoNumber: parseInt(row[0], 10),
      name: row[1],
      cmyk: Object.freeze([parseInt(row[2], 10), parseInt(row[3], 10), parseInt(row[4], 10), parseInt(row[5], 10)]),
      rgb: rgb,
      rgbHex: rgbToHex.apply(null, rgb),
      rgbHexAsNumber: rgbAsNumber.apply(null, rgb),
      pantone: row[9]
    });
  }

  var colorConstants = legoColors.reduce(function (colors, currentColor) {
    currentColor = convertRowToObj(currentColor);
    colors[currentColor.name.replace(/ /g, '_').toUpperCase()] = currentColor;
    return colors;
  }, {});

  legoColorsExports.getByLegoNumber = function (number) {
    var result = Object.keys(colorConstants).filter(function (colorConstantName) {
      return colorConstants[colorConstantName].legoNumber === number;
    });

    if (result.length) {
      return colorConstants[result[0]];
    }

    return null;
  };

  legoColorsExports.colors = colorConstants;

}());
