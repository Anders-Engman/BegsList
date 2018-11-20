// Create Color Constructor to add to returned Sequelize Model
function Color(hslObject) {
  this.hue = hslObject.hue;
  this.saturation = hslObject.saturation;
  this.lightness = hslObject.lightness;
}

calcColorChange = function(topColor, bottomColor, listLength) {
  var colorDistance = {
    hue: topColor.hue - bottomColor.hue,
    saturation: topColor.saturation - bottomColor.saturation,
    lightness: topColor.lightness - bottomColor.lightness
  };
  var colorChangePerItem = {
    hue: Math.floor(colorDistance.hue / (listLength - 1)),
    saturation: Math.floor(colorDistance.saturation / (listLength - 1)),
    lightness: Math.floor(colorDistance.lightness / (listLength - 1))
  };
  return colorChangePerItem;
};

// Set the div's item color based on it position relative to the topColor/topItem
setItemColor = function(startColor, hslValue, itemRank) {
  return {
    hue: startColor.hue - hslValue.hue * itemRank,
    saturation: startColor.saturation - hslValue.saturation * itemRank,
    lightness: startColor.lightness - hslValue.lightness * itemRank
  };
};

insertItemColorVal = function(results) {
  // Set topColor and bottomColor values for gradient change
  var greenest = { hue: 130, saturation: 87, lightness: 45 };
  var reddest = { hue: 10, saturation: 87, lightness: 45 };
  hslDeltaVal = calcColorChange(greenest, reddest, results.length);
  for (var i = 0; i < results.length; i++) {
    itemColor = setItemColor(greenest, hslDeltaVal, i);
    results[i].Color = new Color(itemColor);
  }
};

module.exports = insertItemColorVal;
