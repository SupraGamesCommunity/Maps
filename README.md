# Supra Maps
* Interactive maps for:
  - [Supraland](https://store.steampowered.com/app/813630/Supraland/) : [Map](https://supragamescommunity.github.io/maps#mapId=sl)
    - [Crash](https://store.steampowered.com/app/1093730/Supraland_Crash/) : [Map](https://supragamescommunity.github.io/maps#mapId=slc)
  - [Supraland: Six Inches Under](https://store.steampowered.com/app/1522870/Supraland_Six_Inches_Under/) : [Map](https://supragamescommunity.github.io/maps#mapId=siu)
* Repository: [SupraGamesCommunity/maps](https://github.com/SupraGamesCommunity/maps)

## Features
* Supports all games.
* Includes embedded YouTube video references for every major item.
* Supports sharing your view of the map via a URL.
* Supports save file uploading to hide items you have already collected for all games.
* Crash Map kindly generated by [Benjamin](https://github.com/BenVlodgi) and upscaled/fogged by [Cal](https://github.com/Egasuas)
* Game maps and items extracted from game data files see [scripts directory](https://github.com/SupraGamesCommunity/maps/tree/main/scripts)
  
## How to Use & Documentation
### Keyboard shortcuts
Please note that these keyboard shortcuts are disabled when in build mode
- `WASD` - Pan up/down/left/right
- `TG` - Zoom in/out
- `Ctrl+F` - Search
- `F` - Toggle full screen
- `R` - Move to player marker
- `Alt+R` - Open file dialog for loading a save
- `1` - Load sl map
- `2` - Load SLC map
- `3` - Load SIU map

### Map linking URL
The map can be found here:
- [https://supragamescommunity.github.io/maps](https://supragamescommunity.github.io/maps)

In addition you can share a link to a specific map, zoom level and position:  
`https://supragamescommunity.github.io/maps/#mapId={map}&lat={lat}&lng={lng}&zoom={zoom}`
- `mapId` = one of {sl / slc / siu}.
- `zoom` is 0-8  where 0 is all the way zoomed out.
- `lat/lng` are the X Y position on the map.

## Credits
All credit for these amazing games goes to [David Münnich](http://www.david-m.org) and the [Supra Games Team](https://store.steampowered.com/developer/SupraGames).  
Original maps and data created by [Supra Games Community](https://github.com/supragamescommunity).  
Complete rewrite based on game data extraction and merge of 3 maps by [Joric](https://github.com/joric/supraland).  
Fork of Joric's map to SupraMaps project and tweaks to finish in preparation for Supra World by [Supra Games Community](https://github.com/SupraGamesCommunity/).  

### Credits
- [Cal (Egasuas)](https://github.com/Egasuas)
- [Joric](https://github.com/joric)
- [Jules](https://github.com/jules43)
- [KoenigsKind](https://github.com/KoenigsKind)
- [LewisPattJr](https://github.com/LewisPattJr)
- [TJ999M](https://github.com/TJ999M)

### Additional support from: 
- [Anna](https://github.com/PrismAnna) @SupraGames
- [Benjamin Thomas Blodgett (BenVlodgi)](https://github.com/BenVlodgi) @SupraGames
- [David Münnich (DavidM)](http://www.david-m.org) @SupraGames
- [Stuart Baron (NorabSeven)](https://github.com/norab7) @SupraGames
- Gludek
- Zookster 

## Assets and Dependencies
FModel did not work for large maps, Joric ended up using [UE4Parse](https://github.com/MinshuG/pyUE4Parse), a wonderful Python library by [MountainFlash](https://github.com/MinshuG/).
Many marker icons supplied by DavidM from game assets and others made by the community 

- [L.Control.FullScreen](https://github.com/brunob/leaflet.fullscreen) - Adds fullscreen button to leaflet map.
- [L.Control.MousePosition](https://github.com/ardhi/Leaflet.MousePosition) - Displays mouse XY map position on a leaflet map.
- [L.TileLayer.Canvas](https://github.com/GIAPspzoo/L.TileLayer.Canvas) - Leaflet extension to use map tile hierarchy.
- [leaflet-hash](https://github.com/mlevans/leaflet-hash) - Add dynamic URL hashes to web pages with Leaflet maps (modified).
- [leaflet-search](https://github.com/stefanocudini/leaflet-search) - search icon for leaflet maps.
- [leaflet](https://leafletjs.com/) - A javascript library for interactive maps.
- [leaflet.toolbar](https://github.com/Leaflet/Leaflet.toolbar) -  flexible, extensible toolbar interfaces for Leaflet maps.
- [papaparse](https://github.com/mholt/PapaParse) - Fast CSV reading.
- [UE4Parse](https://github.com/MinshuG/pyUE4Parse) - UE4 PAK file reader for Python.
- [joric/UE4Parse](https://github.com/joric/pyUE4Parse.git) - Joric's fork of the UE4 parse (modified).
- [gentiles.py](https://github.com/danizen/campaign-map/blob/master/gentiles.py) from [Jeff Thompson](jeffreythomson.org), [Dan Davis](danizen.net) and [Joric](https://github.com/joric/)

- [ImageMagick](https://imagemagick.org/index.php) - command line image manipulation.
- [Voidtools: Everything](https://www.voidtools.com/downloads/) - fast file search.

## License
This project uses some code Joric's Supraland project, the original [SupraGamesCommunity](https://github.com/SupraGamesCommunity/) map code and media files. Most of the media content is copyrighted by [Supra Games UG](www.supragames.de). Joric developed scripts to import data from the original game and fixed some bugs. This project is an unlicensed public domain, feel free to copy, sell and modify.

See [LICENSE](https://github.com/SupraGamesCommunity/maps/blob/main/LICENSE) for details.

## Other Maps
- Original interactive maps for [Supraland](https://supragamescommunity.github.io/map-sl/), [Crash](https://supragamescommunity.github.io/map-slc/) and [Six Inches Under](https://supragamescommunity.github.io/map-siu/)
- [Joric's combined map](https://joric.github.io/supraland)
- [Joric's experimental 3D map](https://joric.github.io/supraland/3d/)

## Technical Documentation
- [Technical Notes](https://github.com/SupraGamesCommunity/maps/blob/main/doc/technicalnotes.md)
- [Joric's Supraland Map Wiki](https://github.com/joric/supraland/wiki) - some details of the system

