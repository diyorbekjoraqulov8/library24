function localStorageVerify(tokenName) {
  return localStorage.getItem(tokenName)
}

function localStorageRemove(tokenName) {
  return localStorage.removeItem(tokenName)
}

export {
  localStorageVerify,
  localStorageRemove
}