// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  return arrays.reduce((flat, current) => flat.concat(current), []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value)
  }
}
// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  const countByDirection = (text, direction) => {
    return text.split('').filter(char => {
      const charScript = characterScript(char.codePointAt(0));
      return charScript ? charScript.direction === direction : false;
    }).length
  }

  const ltrCount = countByDirection(text, 'ltr')
  const rtlCount = countByDirection(text, 'rtl')

  if (ltrCount > rtlCount) {
    return 'ltr';
  } else if (rtlCount > ltrCount) {
    return 'rtl';
  } else {
    return 'ltr'
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
