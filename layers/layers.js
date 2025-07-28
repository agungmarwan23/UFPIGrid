var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GridTinggi_1 = new ol.format.GeoJSON();
var features_GridTinggi_1 = format_GridTinggi_1.readFeatures(json_GridTinggi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GridTinggi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GridTinggi_1.addFeatures(features_GridTinggi_1);
var lyr_GridTinggi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GridTinggi_1, 
                style: style_GridTinggi_1,
                popuplayertitle: 'Grid Tinggi',
                interactive: true,
    title: 'Grid Tinggi<br />\
    <img src="styles/legend/GridTinggi_1_0.png" /> Tinggi<br />' });
var format_GridSedang_2 = new ol.format.GeoJSON();
var features_GridSedang_2 = format_GridSedang_2.readFeatures(json_GridSedang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GridSedang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GridSedang_2.addFeatures(features_GridSedang_2);
var lyr_GridSedang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GridSedang_2, 
                style: style_GridSedang_2,
                popuplayertitle: 'Grid Sedang',
                interactive: true,
    title: 'Grid Sedang<br />\
    <img src="styles/legend/GridSedang_2_0.png" /> Sedang<br />' });
var format_GridRendah_3 = new ol.format.GeoJSON();
var features_GridRendah_3 = format_GridRendah_3.readFeatures(json_GridRendah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GridRendah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GridRendah_3.addFeatures(features_GridRendah_3);
var lyr_GridRendah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GridRendah_3, 
                style: style_GridRendah_3,
                popuplayertitle: 'Grid Rendah',
                interactive: true,
    title: 'Grid Rendah<br />\
    <img src="styles/legend/GridRendah_3_0.png" /> Rendah<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_GridTinggi_1.setVisible(true);lyr_GridSedang_2.setVisible(true);lyr_GridRendah_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GridTinggi_1,lyr_GridSedang_2,lyr_GridRendah_3];
lyr_GridTinggi_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'UFPI Kategori': 'UFPI Kategori', });
lyr_GridSedang_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'UFPI Kategori': 'UFPI Kategori', });
lyr_GridRendah_3.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'UFPI Kategori': 'UFPI Kategori', });
lyr_GridTinggi_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'UFPI Kategori': 'TextEdit', });
lyr_GridSedang_2.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'UFPI Kategori': 'TextEdit', });
lyr_GridRendah_3.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'UFPI Kategori': 'TextEdit', });
lyr_GridTinggi_1.set('fieldLabels', {'id': 'inline label - visible with data', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'inline label - visible with data', 'Komoditas Unggulan Hortikultura': 'inline label - visible with data', 'Ketersediaan Lahan': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Sosial Ekonomi': 'inline label - visible with data', 'Infrastruktur': 'inline label - visible with data', 'UFPI': 'inline label - visible with data', 'cluster': 'hidden field', 'UFPI Kategori': 'inline label - visible with data', });
lyr_GridSedang_2.set('fieldLabels', {'id': 'inline label - visible with data', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'inline label - visible with data', 'Komoditas Unggulan Hortikultura': 'inline label - visible with data', 'Ketersediaan Lahan': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Sosial Ekonomi': 'inline label - visible with data', 'Infrastruktur': 'inline label - visible with data', 'UFPI': 'inline label - visible with data', 'cluster': 'hidden field', 'UFPI Kategori': 'inline label - visible with data', });
lyr_GridRendah_3.set('fieldLabels', {'id': 'inline label - visible with data', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'inline label - visible with data', 'Komoditas Unggulan Hortikultura': 'inline label - visible with data', 'Ketersediaan Lahan': 'inline label - visible with data', 'Kekeringan': 'inline label - visible with data', 'Sosial Ekonomi': 'inline label - visible with data', 'Infrastruktur': 'inline label - visible with data', 'UFPI': 'inline label - visible with data', 'cluster': 'hidden field', 'UFPI Kategori': 'inline label - visible with data', });
lyr_GridRendah_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});