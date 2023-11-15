function localStorageVerify(tokenName) {
  return localStorage.getItem(tokenName)
}

export {
  localStorageVerify
}