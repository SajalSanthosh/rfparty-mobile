const Dataparty = require('@dataparty/api')
const debug = require('debug')('rfparty.service')

const Path = require('path')

class RfpartyService extends Dataparty.IService {
  constructor(opts){
    super(opts)

    this.addSchema(Path.join(__dirname, './schema/ble_adv.js'))
    this.addSchema(Path.join(__dirname, './schema/ble_station.js'))
    this.addSchema(Path.join(__dirname, './schema/ble_source.js'))

  }

}

module.exports = RfpartyService