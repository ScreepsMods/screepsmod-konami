

module.exports = function (config) {
  if(config.common) {
    config.common.constants.CONSTRUCTION_COST = {
      "spawn": 1500,
      "extension": 300,
      "road": 30,
      "constructedWall": 1,
      "rampart": 1,
      "link": 500,
      "storage": 3000,
      "tower": 500,
      "observer": 800,
      "powerSpawn": 10000,
      "extractor": 500,
      "lab": 5000,
      "terminal": 10000,
      "container": 500,
      "nuker": 10000
    }

    config.common.constants.BODYPART_COST = {
      "move": 5,
      "work": 10,
      "attack": 8,
      "carry": 5,
      "heal": 25,
      "ranged_attack": 15,
      "tough": 1,
      "claim": 60
    }

    config.common.constants.UPGRADE_CONTROLLER_POWER = 100,

    config.common.constants.CONTROLLER_LEVELS = {
      1: 200,
      2: 4500,
      3: 13500,
      4: 40500,
      5: 121500,
      6: 364500,
      7: 1093500
    }

    config.common.constants.GCL_MULTIPLY = 100000
    config.common.constants.MINERAL_REGEN_TIME = 20000

  }
};