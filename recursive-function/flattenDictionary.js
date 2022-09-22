function flattenDictionary(dictionary) {
  let flattenedDictionary = {};

  function flattenDictionaryHelper(dictionary, propName) {
    if (typeof dictionary != 'object') {
      flattenedDictionary[propName] = dictionary;
      return;
    }
    for(let prop in dictionary) {
      if (propName == '') {
        flattenDictionaryHelper(dictionary[prop], propName + prop);
      } else {
        flattenDictionaryHelper(dictionary[prop], propName + '.' + prop)
      }
    }
  }
  flattenDictionaryHelper(dictionary, '');
  return flattenDictionary;
}