const arrIndexOf = function <K> (arr:Array<K>, num?:K) {
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] === num){
      return i
    }
  }
  return -1
}


module.exports = arrIndexOf