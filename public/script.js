
            var map_8d982080cb2e063cf8553f01b2eb3062 = L.map(
                "map_8d982080cb2e063cf8553f01b2eb3062",
                {
                    center: [42.3601, -71.0589],
                    crs: L.CRS.EPSG3857,
                    zoom: 12,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_500b64f3bb05128dacf60eb54fcea5f3 = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca target=\"_blank\" href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_8d982080cb2e063cf8553f01b2eb3062);
        
    

        function geo_json_8e21073784377f4e07b8fb784e1b2ce8_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_8e21073784377f4e07b8fb784e1b2ce8 = L.geoJson(null, {
                onEachFeature: geo_json_8e21073784377f4e07b8fb784e1b2ce8_onEachFeature,
            
        });

        function geo_json_8e21073784377f4e07b8fb784e1b2ce8_add (data) {
            geo_json_8e21073784377f4e07b8fb784e1b2ce8
                .addData(data)
                .addTo(map_8d982080cb2e063cf8553f01b2eb3062);
        }

        
    
    geo_json_8e21073784377f4e07b8fb784e1b2ce8.bindTooltip(
    function(layer){
    let div = L.DomUtil.create('div');
    
    let handleObject = feature=>typeof(feature)=='object' ? JSON.stringify(feature) : feature;
    let fields = ["Parties_Description", "Precinct1"];
    let aliases = ["Parties_Description", "Precinct1"];
    let table = '<table>' +
        String(
        fields.map(
        (v,i)=>
        `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`).join(''))
    +'</table>';
    div.innerHTML=table;
    
    return div
    }
    ,{"className": "foliumtooltip", "sticky": true});
                     
    
    geo_json_8e21073784377f4e07b8fb784e1b2ce8.bindPopup(
    function(layer){
    let div = L.DomUtil.create('div');
    
    let handleObject = feature=>typeof(feature)=='object' ? JSON.stringify(feature) : feature;
    let fields = ["Parties_Description", "Precinct1"];
    let aliases = ["Parties_Description", "Precinct1"];
    let table = '<table>' +
        String(
        fields.map(
        (v,i)=>
        `<tr>
            <td>${handleObject(layer.feature.properties[v]).toLocaleString()}</td>
        </tr>`).join(''))
    +'</table>';
    div.innerHTML=table;
    
    return div
    }
    ,{"className": "foliumpopup", "maxWidth": 250, "show": true, "sticky": false});
                     