class DnaTranscriber {
  toRna(input) {
    let string = ''
    for(let i = 0; i < input.length; i++) {
      if(input[i] === 'C') {
        string += 'G'
      } else if(input[i] === 'G') {
        string += 'C'
      } else if(input[i] === 'A') {
        string += 'U'
      } else if(input[i] === 'T') {
        string += 'A'
      } else {
        throw new Error('Invalid input')
      }
    }
    return string
  }
}

module.exports = DnaTranscriber
