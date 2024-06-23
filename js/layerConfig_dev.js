// Map Layer configuration
//
// Configures the set of layers and some properties for each game map.

class LayerConfig {
    constructor(type, category, name, defaultIcon='question_mark', defaultActive, games) {
        this.type = type;                           // Type of layer (can be tiles)
        this.category = category;                   // Category to use in layer selector grouping
        this.name = name;                           // User facing name of the layer
        this.defaultIcon = defaultIcon;             // Default icon to use for markers on this layer
        this.defaultActive = defaultActive;         // Should it be toggled on by default
        this.games = games;                         // Array of games to display for (slc, siu)
        this.index = 0;                             // Until Init is called index is undefined
    }
}

/* exported layerConfigs */
const layerConfigs = {
    data: new Map([
        ['jumppads',    new LayerConfig('markers', 'Travel',          'Pads',           'jumppad',       false, ['sl', 'slc',      ])],
        ['pipesys',     new LayerConfig('markers', 'Travel',          'Pipes',          'pipe',          false, ['sl',        'siu'])],
        ['closedChest', new LayerConfig('markers', 'Collectables',    'Chests',         'chest',         true,  ['sl', 'slc', 'siu'])],
        ['shop',        new LayerConfig('markers', 'Collectables',    'Shop',           'shop',          true,  ['sl', 'slc', 'siu'])],
        ['collectable', new LayerConfig('markers', 'Collectables',    'Collectables',   'question_mark', true,  ['sl', 'slc', 'siu'])],
        ['upgrades',    new LayerConfig('markers', 'Upgrades',        'Upgrades',       'loot',          false, ['sl', 'slc', 'siu'])],
        ['misc',        new LayerConfig('markers', 'Miscellaneous',   'Miscellaneous',  'question_mark', false, ['sl', 'slc', 'siu'])],
        ['coin',        new LayerConfig('markers', 'Collectables',    'Coins',          'awesome',       false, ['sl', 'slc', 'siu'])],
        ['graves',      new LayerConfig('markers', 'Miscellaneous',   'Graves',         'question_mark', false, ['sl'              ])],
        ['coordinate',  new LayerConfig('markers', 'Miscellaneous',   'XY',             null,            false, ['sl', 'slc', 'siu'])],
        //['extra',       new LayerConfig('markers', 'Miscellaneous',   'Extras',         'question_mark', false, ['sl', 'slc', 'siu'])],
        //['dev',         new LayerConfig('markers', 'Miscellaneous',   'Dev',            'question_mark', false, ['sl', 'slc', 'siu'])],
    ]),

    // Initialise any procedural data - store index based on position in Map
    init: function() {
        let i = 0;
        this.data.forEach(v => v.index = i++)
    },

    // Returns layerConfig for specified id
    get: function(id) {
        return this.data.get(id);
    },

    // Returns index of specified id (in order)
    getIndex: function(id) { 
        return this.data.get(id).index;
    },

    // Calls fn for each layer in order (passes v = LayerConfig(), k = layerId
    forEach: function(mapId, fn) {
        // Could use foreach but this seems clearer
        for(const [layerId, layerConfig] of this.data) {
            if(layerConfig.games.includes(mapId)) {
                fn(layerId, layerConfig);
            }
        }
    },

    // Calls the specified function for each layer of the specified type that is enabled for mapId
    forEachOfType: function(mapId, type, fn) {
        for(const [layerId, layerConfig] of this.data) {
            if(layerConfig.games.includes(mapId) && layerConfig.type == type) {
                fn(layerId, layerConfig);
            }
        }
    },

    // Returns object with entry for each layer that is enabled for the specified map { layer: true, ... } 
    getEnabledLayers: function(mapId) {
        let ret = {};
        for(const [layerId, layerConfig] of this.data) {
            if(layerConfig.games.includes(mapId)) {
                ret[layerId] = true;
            }
        }
        ret['_map'] = true;
        return ret;
    },

/*      A couple of different ways to do this. 2nd is not widely supported
        return Object.fromEntries(
            Array.from(this.data.entries(), ([k,v]) => [k, v.games.includes(mapId)])
            .filter(v => v[1]));
        return Object.fromEntries(this.data.entries()
            .filter(([k,v]) => v.games.includes(mapId))
            .map(([k,v]) => [k, true]));
*/

    // Returns object with entry for each layer that is active by default { layer: true }
    getDefaultActive: function(mapId) {
        let ret = {};
        for(const [layerId, layerConfig] of this.data) {
            if(layerConfig.games.includes(mapId) && layerConfig.defaultActive) {
                ret[layerId] = true;
            }
        }
        return ret;
    },

    // Returns object with entry for each layer that is enabled for the mapId and is of the specified type 
    getLayersByType : function(mapId, type) {
        let ret = {};
        for(const [layerId, layerConfig] of this.data) {
            if(layerConfig.games.includes(mapId) && layerConfig.type == type) {
                ret[layerId] = true;
            }
        }
        return ret;
    }
}
layerConfigs.init();
