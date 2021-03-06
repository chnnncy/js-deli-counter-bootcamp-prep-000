function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length > 0) {
   let name = katzDeliLine.shift()
   return `Currently serving ${name}.`
 }
 else {
   return 'There is nobody waiting to be served!'
 }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var message = 'The line is currently: '
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i != katzDeliLine.length - 1) {
        message += `${i + 1}. ${katzDeliLine[i]}, `
      }
      else {
        message += `${i + 1}. ${katzDeliLine[i]}`
      }
    }
    return message
  }
  else {
    return 'The line is currently empty.'
  }
}