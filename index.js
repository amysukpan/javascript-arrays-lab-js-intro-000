const app = "I don't do much."
kittens= ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  var nk=kittens.slice(0)
  nk.push(name)
  return nk
}
function prependKitten(name){
  //return kittens.splice(0,)
}
function removeLastKitten(){
  return kittens.slice(0,Kittens.length-2)
}
function removeFirstKitten(){
  return kittens.splice(1)
}
