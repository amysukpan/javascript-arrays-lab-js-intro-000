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
  //return Kittens.splice(0).push(name)
}
function prependKitten(name){
  //return Kittens.splice(0,)
}
function removeLastKitten(){
  return Kittens.slice(0,Kittens.length-2)
}
function removeFirstKitten(){
  return Kittens.splice(1)
}
