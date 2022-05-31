var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "main - overworld",
        "main - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1653956878",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "survival",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "main - overworld",
            "last_rendertime": 1653898820,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                64,
                65,
                48
            ],
            "minZoom": 0,
            "spawn": [
                64,
                65,
                48
            ],
            "north_direction": 0
        },
        {
            "name": "Daytime South",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "survivalsouth",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "main - overworld",
            "last_rendertime": 1653898820,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                64,
                65,
                48
            ],
            "minZoom": 0,
            "spawn": [
                64,
                65,
                48
            ],
            "north_direction": 2
        },
        {
            "name": "Nether",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "survivalnether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "main - nether",
            "last_rendertime": 1653884086,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                64,
                65,
                48
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Nether South",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "survivalnethersouth",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "main - nether",
            "last_rendertime": 1653884086,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                64,
                65,
                48
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 2
        }
    ]
};
