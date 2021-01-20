const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// easy as hell to config webpack in Next//add configs to webpack
// don't need to eject old config

// make habit of looking at source code instead of docs for certain things

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('WE ARE IN THE DEV SERVER')

    return defaultConfig

    // add confing to default 

    // return {
    //   ...defaultConfig,
    //   webpack: {
    //     ...stuffsHere
    //   }
    // }
  }

  return defaultConfig
}