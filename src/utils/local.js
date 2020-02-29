const LocalCtr = (function () {

  function get(key) {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : []
  }

  function set(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
  }

  function clear(key) {
    localStorage.getItem(key) && localStorage.clear()
  }


  return {
    set,
    get,
    clear,
  }

})()

export default LocalCtr