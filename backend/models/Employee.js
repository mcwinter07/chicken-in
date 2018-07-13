const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  name: String,
  email: String,
  password: String, // randomly generate a password upon creation and send emial to employee
  location: [ String ],
  standardRate: Number, // cents
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business'
  },
  dateCreated: {
    type: 'Date',
    default: Date.now,
    required: true
  }
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = {
  Employee
}
