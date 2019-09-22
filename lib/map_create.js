let map;

// console.log(entries); 

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.765286, lng: -73.9674699 },
        zoom: 13,
        styles: mapStyle, 
        mapTypeControl: false,
        streetViewControl: false
    });

// weighted heatmap format - {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5}
    
    heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatMapData(),
            map: map, 
            radius: 10
    }); 

}; 

// let heatMapDataComplete = {}; 

// for (let station in stations) {

// }

function heatMapData () {
    return [
        {
            location: new google.maps.LatLng(40.5446, -74.164581), weight: 5
        },
        {
            location: new google.maps.LatLng(40.738879, -74.15553299999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.636948, -74.07482400000004), weight: 5
        },
        {
            location: new google.maps.LatLng(40.643738, -74.073622), weight: 5
        },
        {
            location: new google.maps.LatLng(40.732102, -74.06391500000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.719876, -74.04261600000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.716737, -74.03302400000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.616624, -74.03096399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.622715, -74.028368), weight: 5
        },
        {
            location: new google.maps.LatLng(40.592676, -73.97824300000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.788844, -73.97599000000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.785822, -73.968952), weight: 5
        },
        {
            location: new google.maps.LatLng(40.779485, -73.95554099999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.629702, -74.02551399999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.773636, -73.95987500000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.634945, -74.02341100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.641426, -74.01797199999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.704782, -74.01409899999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.644959, -74.01403399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.70784, -74.013691), weight: 5
        },
        {
            location: new google.maps.LatLng(40.707222, -74.01339100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.704591, -74.01327300000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.707466, -74.011867), weight: 5
        },
        {
            location: new google.maps.LatLng(40.706864, -74.00905599999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.635011, -74.01171699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.740388, -74.00210400000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.710454, -74.011324), weight: 5
        },
        {
            location: new google.maps.LatLng(40.710662, -74.011052), weight: 5
        },
        {
            location: new google.maps.LatLng(40.706539, -74.011052), weight: 5
        },
        {
            location: new google.maps.LatLng(40.711638, -74.01070800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.648866, -74.010086), weight: 5
        },
        {
            location: new google.maps.LatLng(40.712557, -74.00980700000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.715436, -74.00933499999996), weight: 5
        },
        {
            location: new google.maps.LatLng(40.71433, -74.00856299999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.713159, -74.003917), weight: 5
        },
        {
            location: new google.maps.LatLng(40.713061, -74.00877700000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.67491, -73.95779400000004), weight: 5
        },
        {
            location: new google.maps.LatLng(40.709938, -74.00798299999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.68713, -73.975346), weight: 5
        },
        {
            location: new google.maps.LatLng(40.713086, -74.00723199999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.719323, -74.00695300000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.722819, -74.00626699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.720852, -74.00523699999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.718697, -74.00097700000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.718233, -74.00032299999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.631428, -74.00538699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.640872, -73.99422900000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.650722, -73.975818), weight: 5
        },
        {
            location: new google.maps.LatLng(40.728202, -74.00534399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.726202, -74.003627), weight: 5
        },
        {
            location: new google.maps.LatLng(40.722397, -73.997211), weight: 5
        },
        {
            location: new google.maps.LatLng(40.65515, -74.00347699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.75202, -73.92874), weight: 5
        },
        {
            location: new google.maps.LatLng(40.733405, -74.00289800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.607958, -74.00178199999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.620728, -73.990388), weight: 5
        },
        {
            location: new google.maps.LatLng(40.629881, -73.977149), weight: 5
        },
        {
            location: new google.maps.LatLng(40.613513, -74.00064500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.783872, -73.979938), weight: 5
        },
        {
            location: new google.maps.LatLng(40.732251, -74.00055900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.619588, -73.99884199999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.604798, -73.99845600000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.617373, -73.98508800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.738007, -73.998381), weight: 5
        },
        {
            location: new google.maps.LatLng(40.660481, -73.99805900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.66043, -73.99794400000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.745924, -73.99800500000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.744071, -73.99562400000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.740088, -73.98642899999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.741096, -73.99787700000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.724332, -73.99768399999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.737348, -73.99689999999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.737434, -73.99678499999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.625419, -73.99663199999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.725297, -73.99620400000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.673714, -73.99613899999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.725665, -73.99564499999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.631412, -73.995473), weight: 5
        },
        {
            location: new google.maps.LatLng(40.680231, -73.99498), weight: 5
        },
        {
            location: new google.maps.LatLng(40.636232, -73.99476500000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.762439, -73.98598900000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.761675, -73.98390799999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.646343, -73.994551), weight: 5
        },
        {
            location: new google.maps.LatLng(40.718542, -73.99416400000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.711874, -73.94067000000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.720315, -73.99401399999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.601898, -73.99382100000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.752247, -73.99345599999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.750264, -73.99298399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.750329, -73.99109599999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.747224, -73.99336), weight: 5
        },
        {
            location: new google.maps.LatLng(40.743095, -73.98425099999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.742933, -73.992909), weight: 5
        },
        {
            location: new google.maps.LatLng(40.697356, -73.992888), weight: 5
        },
        {
            location: new google.maps.LatLng(40.665405, -73.99287700000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.665438, -73.99285600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.819396, -73.90146700000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.742868, -73.99277000000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.742981, -73.992727), weight: 5
        },
        {
            location: new google.maps.LatLng(40.730348, -73.992705), weight: 5
        },
        {
            location: new google.maps.LatLng(40.730056, -73.991042), weight: 5
        },
        {
            location: new google.maps.LatLng(40.686154, -73.990881), weight: 5
        },
        {
            location: new google.maps.LatLng(40.680801, -73.97513200000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.734836, -73.99068799999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.699316, -73.990474), weight: 5
        },
        {
            location: new google.maps.LatLng(40.713647, -73.99015199999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.692404, -73.99015099999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.723291, -73.98987299999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.757303, -73.98978699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.741006, -73.98931500000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.67032, -73.98875700000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.745574, -73.98868199999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.748931, -73.988113), weight: 5
        },
        {
            location: new google.maps.LatLng(40.749533, -73.98789899999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.71838, -73.98781300000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.692338, -73.98734200000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.692182, -73.98593499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.733243, -73.987169), weight: 5
        },
        {
            location: new google.maps.LatLng(40.597873, -73.98695499999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.699756, -73.98689000000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.755905, -73.98650399999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.688465, -73.98547400000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.690547, -73.98506600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.690545, -73.98506500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.754198, -73.98457300000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.760139, -73.98411199999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.588879, -73.98362900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.677302, -73.983135), weight: 5
        },
        {
            location: new google.maps.LatLng(40.773424, -73.982234), weight: 5
        },
        {
            location: new google.maps.LatLng(40.612006, -73.982009), weight: 5
        },
        {
            location: new google.maps.LatLng(40.753824, -73.981966), weight: 5
        },
        {
            location: new google.maps.LatLng(40.778575, -73.98191199999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.775545, -73.97639800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.76811, -73.98189100000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.690612, -73.98184800000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.703839, -73.91844000000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.746119, -73.98182600000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.730901, -73.981719), weight: 5
        },
        {
            location: new google.maps.LatLng(40.762877, -73.98158999999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.758652, -73.981311), weight: 5
        },
        {
            location: new google.maps.LatLng(40.577423, -73.981225), weight: 5
        },
        {
            location: new google.maps.LatLng(40.603967, -73.98066799999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.603234, -73.97234200000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.608691, -73.95777199999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.764755, -73.98064599999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.688269, -73.98045300000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.666276, -73.980324), weight: 5
        },
        {
            location: new google.maps.LatLng(40.644039, -73.97954099999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.650494, -73.96283599999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.650843, -73.94957499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.660376, -73.97950900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.597482, -73.97935899999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.596065, -73.97332900000004), weight: 5
        },
        {
            location: new google.maps.LatLng(40.599307, -73.955916), weight: 5
        },
        {
            location: new google.maps.LatLng(40.63615, -73.97817900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.763625, -73.97744899999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.684063, -73.977417), weight: 5
        },
        {
            location: new google.maps.LatLng(40.675496, -73.90281900000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.751849, -73.976945), weight: 5
        },
        {
            location: new google.maps.LatLng(40.576152, -73.97592500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.625305, -73.975732), weight: 5
        },
        {
            location: new google.maps.LatLng(40.620907, -73.97545300000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.760179, -73.97519599999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.580992, -73.97453100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.589547, -73.97429499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.615174, -73.97416599999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.68617, -73.973908), weight: 5
        },
        {
            location: new google.maps.LatLng(40.764909, -73.97337199999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.609147, -73.97298599999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.677172, -73.97251399999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.79388, -73.97236299999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.791654, -73.96468199999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.785822, -73.95096999999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.781435, -73.972149), weight: 5
        },
        {
            location: new google.maps.LatLng(40.757108, -73.97186999999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.675219, -73.97101199999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.75753, -73.96910200000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.576298, -73.968523), weight: 5
        },
        {
            location: new google.maps.LatLng(40.799354, -73.96832899999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.796105, -73.96139900000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.790582, -73.947473), weight: 5
        },
        {
            location: new google.maps.LatLng(40.762796, -73.96768600000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.764763, -73.96629100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.688123, -73.96674200000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.683263, -73.96583800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.804032, -73.96674200000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.643982, -73.96451000000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.672013, -73.96436), weight: 5
        },
        {
            location: new google.maps.LatLng(40.80819, -73.96412399999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.768143, -73.96401600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.761268, -73.96401600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.640905, -73.963866), weight: 5
        },
        {
            location: new google.maps.LatLng(40.635059, -73.96279300000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.639961, -73.948352), weight: 5
        },
        {
            location: new google.maps.LatLng(40.661596, -73.96219300000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.577961, -73.96180600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.629164, -73.961678), weight: 5
        },
        {
            location: new google.maps.LatLng(40.655053, -73.96122700000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.625028, -73.96081900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.688855, -73.96002499999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.617568, -73.95936), weight: 5
        },
        {
            location: new google.maps.LatLng(40.670499, -73.95875899999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.815596, -73.958395), weight: 5
        },
        {
            location: new google.maps.LatLng(40.811056, -73.95238599999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.808076, -73.94590599999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.804406, -73.93745200000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.800637, -73.95820100000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.670711, -73.95805100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.681159, -73.95605599999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.708377, -73.95775100000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.717241, -73.956614), weight: 5
        },
        {
            location: new google.maps.LatLng(40.595234, -73.95508999999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.805072, -73.95483300000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.802098, -73.94962499999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.798574, -73.94159300000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.731324, -73.95442500000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.58681, -73.95416699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.7574, -73.95400599999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.821994, -73.95367399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.742624, -73.95354500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.706994, -73.95348100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.689636, -73.95345900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.759123, -73.95326599999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.79911, -73.95180700000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.713875, -73.951592), weight: 5
        },
        {
            location: new google.maps.LatLng(40.703855, -73.94738699999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.724608, -73.95127100000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.667879, -73.950648), weight: 5
        },
        {
            location: new google.maps.LatLng(40.662752, -73.950605), weight: 5
        },
        {
            location: new google.maps.LatLng(40.669735, -73.95045500000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.68041, -73.95032600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.826426, -73.95041200000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.824787, -73.944232), weight: 5
        },
        {
            location: new google.maps.LatLng(40.820402, -73.93631499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.7061, -73.95034800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.700374, -73.95028400000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.700244, -73.94165800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.656648, -73.950198), weight: 5
        },
        {
            location: new google.maps.LatLng(40.743973, -73.94987600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.694568, -73.94904600000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.645089, -73.94897500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.74238, -73.94888900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.817902, -73.94764399999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.814459, -73.940992), weight: 5
        },
        {
            location: new google.maps.LatLng(40.632836, -73.94764199999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.747029, -73.94537000000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.747257, -73.945112), weight: 5
        },
        {
            location: new google.maps.LatLng(40.833879, -73.944726), weight: 5
        },
        {
            location: new google.maps.LatLng(40.795066, -73.944297), weight: 5
        },
        {
            location: new google.maps.LatLng(40.71459, -73.94410399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.7541, -73.94258000000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.669409, -73.94217300000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.830551, -73.941486), weight: 5
        },
        {
            location: new google.maps.LatLng(40.829934, -73.93863199999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.679921, -73.94085799999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.750508, -73.940177), weight: 5
        },
        {
            location: new google.maps.LatLng(40.840778, -73.940091), weight: 5
        },
        {
            location: new google.maps.LatLng(40.707889, -73.94000499999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.835957, -73.93989799999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.847369, -73.939683), weight: 5
        },
        {
            location: new google.maps.LatLng(40.851686, -73.93796700000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.849495, -73.93363199999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.748948, -73.93719399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.823877, -73.936443), weight: 5
        },
        {
            location: new google.maps.LatLng(40.697266, -73.93569200000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.699707, -73.91181), weight: 5
        },
        {
            location: new google.maps.LatLng(40.859022, -73.93419), weight: 5
        },
        {
            location: new google.maps.LatLng(40.706148, -73.93315999999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.669279, -73.93296700000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.753076, -73.93270999999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.744558, -73.930993), weight: 5
        },
        {
            location: new google.maps.LatLng(40.679279, -73.93058500000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.813208, -73.92987700000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.855176, -73.92938400000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.756977, -73.929373), weight: 5
        },
        {
            location: new google.maps.LatLng(40.693329, -73.92882600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.697673, -73.92713100000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.865286, -73.92698000000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.818429, -73.92692699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.810512, -73.92616499999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.827888, -73.92573600000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.860523, -73.92557499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.761959, -73.92538200000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.743778, -73.92399799999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.706636, -73.92292500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.664591, -73.92266799999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.669376, -73.90204699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.689652, -73.922281), weight: 5
        },
        {
            location: new google.maps.LatLng(40.766843, -73.921423), weight: 5
        },
        {
            location: new google.maps.LatLng(40.835535, -73.92138), weight: 5
        },
        {
            location: new google.maps.LatLng(40.833773, -73.91843), weight: 5
        },
        {
            location: new google.maps.LatLng(40.678815, -73.92080099999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.756864, -73.92073600000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.868045, -73.91992099999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.698666, -73.91968500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.808044, -73.91923400000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.864653, -73.91871900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.743079, -73.91841899999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.840048, -73.917775), weight: 5
        },
        {
            location: new google.maps.LatLng(40.839301, -73.91335500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.816132, -73.917754), weight: 5
        },
        {
            location: new google.maps.LatLng(40.770426, -73.91761400000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.68617, -73.916337), weight: 5
        },
        {
            location: new google.maps.LatLng(40.695607, -73.904021), weight: 5
        },
        {
            location: new google.maps.LatLng(40.661466, -73.916316), weight: 5
        },
        {
            location: new google.maps.LatLng(40.869359, -73.91532899999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.844406, -73.91462100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.805737, -73.91447099999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.756312, -73.91333299999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.848635, -73.91249700000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.744103, -73.91249700000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.774984, -73.91206699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.67836, -73.91193900000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.662541, -73.90876300000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.682867, -73.91048), weight: 5
        },
        {
            location: new google.maps.LatLng(40.874551, -73.90987899999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.816505, -73.90779700000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.702798, -73.90777600000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.85339, -73.90773300000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.808742, -73.90769), weight: 5
        },
        {
            location: new google.maps.LatLng(40.752898, -73.90597300000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.682558, -73.90550100000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.850307, -73.90524399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.878867, -73.90485799999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.678848, -73.90413899999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.812104, -73.90408500000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.688676, -73.903999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.858389, -73.90382799999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.704424, -73.903077), weight: 5
        },
        {
            location: new google.maps.LatLng(40.745623, -73.90296899999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.663419, -73.90245400000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.64666, -73.90183200000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.862941, -73.90119900000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.862803, -73.90103399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.884821, -73.900759), weight: 5
        },
        {
            location: new google.maps.LatLng(40.856085, -73.90069499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.663801, -73.900444), weight: 5
        },
        {
            location: new google.maps.LatLng(40.650625, -73.89955800000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.658748, -73.899472), weight: 5
        },
        {
            location: new google.maps.LatLng(40.666252, -73.88408700000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.677107, -73.89887099999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.889185, -73.898549), weight: 5
        },
        {
            location: new google.maps.LatLng(40.749663, -73.898485), weight: 5
        },
        {
            location: new google.maps.LatLng(40.867899, -73.89732600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.866974, -73.893485), weight: 5
        },
        {
            location: new google.maps.LatLng(40.822172, -73.896747), weight: 5
        },
        {
            location: new google.maps.LatLng(40.674552, -73.89655399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.746325, -73.89640300000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.816083, -73.89606000000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.706181, -73.89591000000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.664884, -73.89425799999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.82417, -73.89322800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.829966, -73.89187600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.678018, -73.891726), weight: 5
        },
        {
            location: new google.maps.LatLng(40.672786, -73.89043800000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.665405, -73.88945100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.746655, -73.89136100000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.820889, -73.89056700000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.873399, -73.890084), weight: 5
        },
        {
            location: new google.maps.LatLng(40.873026, -73.88691900000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.711353, -73.88958000000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.837382, -73.88765899999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.826508, -73.88642500000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.679938, -73.88468699999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.87963, -73.88466599999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.747647, -73.88378599999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.742445, -73.88200499999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.674161, -73.880761), weight: 5
        },
        {
            location: new google.maps.LatLng(40.681598, -73.88007399999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.840097, -73.879774), weight: 5
        },
        {
            location: new google.maps.LatLng(40.828894, -73.87955899999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.874827, -73.878872), weight: 5
        },
        {
            location: new google.maps.LatLng(40.885973, -73.878851), weight: 5
        },
        {
            location: new google.maps.LatLng(40.736998, -73.87724200000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.748541, -73.87679100000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.829495, -73.87455899999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.683209, -73.87376499999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.841882, -73.87355100000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.689945, -73.87256400000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.675382, -73.87207000000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.774702, -73.87118900000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.749143, -73.86945200000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.73308, -73.869259), weight: 5
        },
        {
            location: new google.maps.LatLng(40.693866, -73.85156799999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.848797, -73.86846500000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.8315, -73.86762299999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.857188, -73.86760700000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.858973, -73.85535500000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.865481, -73.86739299999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.69132, -73.86713500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.871387, -73.86713500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.877796, -73.86634100000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.877796, -73.86625500000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.677107, -73.86537599999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.883767, -73.86273599999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.749858, -73.86267199999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.729869, -73.86160999999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.854137, -73.86097699999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.833246, -73.86080500000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.887887, -73.86050499999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.692304, -73.86015099999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.679369, -73.85896000000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.893386, -73.85726499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.75176, -73.85518300000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.697405, -73.83635400000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.898382, -73.85438899999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.726462, -73.85262999999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.679857, -73.85149200000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.834255, -73.851222), weight: 5
        },
        {
            location: new google.maps.LatLng(40.903085, -73.85059100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.83646, -73.84647100000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.754622, -73.84562499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.721681, -73.84438999999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.695184, -73.84432600000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.680429, -73.84385299999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.839892, -73.84295199999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.878656, -73.838596), weight: 5
        },
        {
            location: new google.maps.LatLng(40.681745, -73.83763099999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.580454, -73.83745899999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.718477, -73.837223), weight: 5
        },
        {
            location: new google.maps.LatLng(40.843635, -73.83668699999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.668234, -73.83405800000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.668221, -73.834026), weight: 5
        },
        {
            location: new google.maps.LatLng(40.846817, -73.83254499999998), weight: 5
        },
        {
            location: new google.maps.LatLng(40.684364, -73.83218099999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.714444, -73.83097900000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.888244, -73.83085), weight: 5
        },
        {
            location: new google.maps.LatLng(40.660476, -73.83030100000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.759578, -73.83005600000001), weight: 5
        },
        {
            location: new google.maps.LatLng(40.700536, -73.82838200000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.852465, -73.828125), weight: 5
        },
        {
            location: new google.maps.LatLng(40.852417, -73.828082), weight: 5
        },
        {
            location: new google.maps.LatLng(40.583542, -73.82643000000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.685975, -73.82471299999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.709174, -73.82059300000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.585514, -73.82014300000003), weight: 5
        },
        {
            location: new google.maps.LatLng(40.702566, -73.81685900000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.608693, -73.81606799999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.588032, -73.81368399999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.705416, -73.810562), weight: 5
        },
        {
            location: new google.maps.LatLng(40.700488, -73.80793299999999), weight: 5
        },
        {
            location: new google.maps.LatLng(40.707564, -73.80332599999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.702131, -73.80111), weight: 5
        },
        {
            location: new google.maps.LatLng(40.590867, -73.797011), weight: 5
        },
        {
            location: new google.maps.LatLng(40.710459, -73.79359999999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.592334, -73.78849300000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.712622, -73.783815), weight: 5
        },
        {
            location: new google.maps.LatLng(40.643942, -73.782356), weight: 5
        },
        {
            location: new google.maps.LatLng(40.593214, -73.776433), weight: 5
        },
        {
            location: new google.maps.LatLng(40.595381, -73.768194), weight: 5
        },
        {
            location: new google.maps.LatLng(40.600138, -73.76152000000002), weight: 5
        },
        {
            location: new google.maps.LatLng(40.603983, -73.755383), weight: 5
        },
        {
            location: new google.maps.LatLng(40.845892, -73.91013599999997), weight: 5
        },
        {
            location: new google.maps.LatLng(40.703082, -74.01298300000002), weight: 5
        }
    ]
}

// // *** Plotting circle station coordinates

// function addStation(coords) {
//     new google.maps.Circle({
//         strokeColor: '#FFFFFF',
//         strokeOpacity: 0.3,
//         strokeWeight: 2,
//         fillColor: '#FFFFFF',
//         fillOpacity: 0.3,
//         map: map,
//         center: coords,
//         radius: 50
//     })
// }

// function stationPlotter() {
//     for (let stationName in stations) {
//         stations[stationName].forEach(station => {
//             addStation({ lat: +station["LATITUDE"], lng: +station["LONGITUDE"] });
//         })
//     }
// }