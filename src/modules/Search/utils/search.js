export function selectMatchingResults(searchQuery, users) {

  if(!searchQuery) {
    return {
      items: [],
      noMatch: false
    };
  }

  let items = users.reduce((results, { id, name, items, address, pincode} = {}) => {

    let matchFound = false;
    let matchedUser = Object.assign({}, {id, name, address, pincode});
  
    // match ID
    if(id.toLowerCase().includes(searchQuery)) {
      matchFound = true;
      matchedUser.id = getTextWithHighlightedPhrase(id, searchQuery);
    }

    //Match Name
    if(name.toLowerCase().includes(searchQuery)) {
      matchFound = true;
      matchedUser.name = getTextWithHighlightedPhrase(name, searchQuery);
    }

    // Match address
    if(address.toLowerCase().includes(searchQuery)) {
      matchFound = true;
      matchedUser.address = getTextWithHighlightedPhrase(address, searchQuery);
    }

    // Match pincode
    if(pincode.toLowerCase().includes(searchQuery)) {
      matchFound = true;
      matchedUser.pincode = getTextWithHighlightedPhrase(pincode, searchQuery);
    }

    //Match items
    if(items.includes(searchQuery)) {
      matchFound = true;
      matchedUser.itemsFoundText = getTextWithHighlightedPhrase(`${searchQuery} found in items`, searchQuery);
    }

    //If Match found , add it to results
    if(matchFound) {
      results.push(matchedUser)
    }

    return results;
  }, [])

  return {
    items,
    noMatch: (items.length === 0)
  }
}

function getTextWithHighlightedPhrase(text, phrase) {
  return text.toLowerCase().replace(phrase, `<span class='word-highlight'>${phrase}</span>`)
}