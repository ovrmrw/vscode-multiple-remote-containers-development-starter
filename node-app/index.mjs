import lodash from 'lodash'

const msg = lodash.flatten([["Hello"], ["Node.js"]]).join(", ")

console.log(msg)
