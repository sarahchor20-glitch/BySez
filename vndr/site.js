/* =====================================================================
   VNDR — shared machine catalogue + site helpers
   Loaded by every page. The page generator (_build/build.mjs) also reads
   MACHINES, INCLUDED and machineSVG from this file to write the pages.

   EDIT MACHINES HERE. Every page updates automatically.
   Prices are deliberately not shown anywhere: every machine links to the
   contact page ("Contact us for pricing").
   ===================================================================== */

const ENQUIRY_EMAIL = 'support@vndrglobal.com';

// VNDR logo outline (same as images/brand/vndr-logo.svg, viewBox 0 0 1319 356), used inside the machine drawings.
const LOGO_PATH = 'M166.8,356C160.3,355.4 149.2,353.2 145.5,351.8C133.9,347.2 125.9,342.2 119.5,335.6C112.6,328.4 108.2,321.4 104.7,311.8C103.9,309.6 102.9,307 102.5,306C102.1,305 100.8,301 99.5,297.2C98.2,293.5 96.7,289 96.1,287.2C95.4,285.5 93.6,280.2 92,275.5C88.1,264 83.1,249.6 81.2,244.2C80.4,241.8 79.1,238 78.4,235.8C77.7,233.5 76.9,231.3 76.7,230.9C76.5,230.5 74.8,225.5 72.9,219.9C71,214.3 69.3,209.4 69.1,209C68.9,208.6 68,206 67.1,203.2C66.2,200.4 64.9,196.6 64.2,194.6C63,191.3 60.8,184.8 53.7,164C52,159 50.2,153.8 49.7,152.5C48.6,149.6 47.3,145.9 46.1,142.1C45.7,140.6 44.4,137 43.4,134.1C42.3,131.2 41.1,127.6 40.6,126.1C39.4,122.4 36.3,113.3 35.9,112.5C35.7,112.1 35,110 34.3,107.8C33.6,105.7 32.3,101.9 31.5,99.5C30.6,97.1 28.6,91.1 26.9,86.1C25.2,81.2 23.7,76.9 23.6,76.6C23.4,76.3 22.5,73.6 21.5,70.6C20.5,67.6 19.1,63.5 18.4,61.6C17.7,59.7 16,54.5 14.5,50.1C13,45.7 11.4,41.2 11,40C10.6,38.8 8.8,33.8 7.1,28.8C-0.8,5.6 -0.5,6.7 0.8,6.1C1.7,5.6 86.3,5.6 87.2,6.1C88.2,6.5 89,8.2 90,12C90.6,13.8 91.3,16.5 91.7,17.9C92.1,19.2 92.8,21.4 93.1,22.8C93.5,24.1 94.5,27.4 95.4,30.1C96.2,32.9 97.2,36.1 97.6,37.4C100.2,46.5 101,49.1 101.6,50.9C102.4,53.4 104,58.9 106.3,66.8C107.3,70.1 108.3,73.5 108.6,74.4C109.3,76 110,78.5 112,85.8C112.7,88.3 113.8,91.9 114.4,93.8C115,95.6 116.5,100.7 117.8,105C119,109.3 120.3,113.7 120.6,114.6C120.9,115.6 121.6,117.7 122.1,119.2C122.9,122 123.3,123.4 125.3,130.4C125.8,132 127.1,136.5 128.3,140.2C129.5,144 130.8,148.5 131.3,150.1C132.1,153.2 132.4,154.4 135,162.5C135.8,165 136.9,168.6 137.4,170.5C138.5,174.6 140.5,181.2 141.6,184.6C142.1,186 143.2,189.8 144.1,193.1C145,196.4 146.4,201.2 147.3,203.7C148.1,206.2 149.7,211.6 150.9,215.7C152,219.8 153.5,224.9 154.2,227C154.9,229.1 156.1,232.9 156.8,235.4C158.3,240.9 158.9,242.7 160.9,249.1C161.7,251.9 162.8,255.4 163.2,257C164.9,263.1 167.1,270.2 167.6,271.5C167.9,272.3 168.4,273.4 168.6,274C170,277.8 174.3,279.7 177.6,278.2C180.9,276.7 181.2,275.9 184.5,264.5C185.1,262.5 186.4,258.1 187.5,254.8C188.6,251.4 190,246.6 190.7,244.1C191.4,241.5 192.6,237.6 193.4,235.3C194.8,230.9 195.7,228.2 197.9,220.4C198.6,217.8 199.5,215.1 199.7,214.4C200.7,211.9 201.6,208.9 203.9,200.8C204.4,199 205.8,194.3 207.1,190.2C208.4,186.2 209.9,181.2 210.5,179.2C211.5,175.4 212.5,172.2 213.2,170.1C214,168.1 215.7,162.5 216.4,159.9C216.7,158.5 217.4,156.4 217.7,155.1C218.1,153.9 218.9,151.4 219.5,149.5C220.1,147.6 220.8,145.6 221,144.9C221.3,144.2 221.9,141.9 222.5,139.9C223.1,137.8 223.9,134.8 224.4,133.2C224.9,131.7 225.5,129.7 225.8,128.9C226,128.1 226.6,126.2 227.1,124.8C227.6,123.3 228.7,119.7 229.5,116.8C230.3,113.8 231.9,108.6 233,105.2C234.1,101.9 235.7,96.7 236.5,93.8C237.4,90.8 238.7,86.3 239.5,83.8C241.1,78.9 241.4,77.9 243.6,70.2C244.4,67.7 245.5,63.9 246.3,61.8C247,59.6 248,56.4 248.5,54.5C250.5,47.5 252.6,40.6 252.9,40C253.2,39.4 254.2,36 257,26.1C257.7,23.7 258.4,21.3 258.7,20.7C259,20.1 259.7,18 260.2,16C262.8,7.1 263,6.6 264.2,6.1C265.3,5.6 347.8,5.6 348.8,6.1C350,6.7 350.6,4.7 340.7,33.8C338.9,38.8 336.8,45.1 335.8,47.9C334.8,50.6 333.5,54.5 332.9,56.4C332.3,58.3 331.4,61 330.9,62.4C330.4,63.8 328.6,68.9 326.9,73.9C325.2,78.8 323.4,84.2 322.8,85.8C322.2,87.3 321,90.9 320.1,93.8C319.2,96.6 318.2,99.5 317.9,100.2C317.6,101 316.2,104.9 314.9,109C313.6,113.1 312.2,116.9 312,117.6C311.3,119.3 308.4,127.6 307.2,131.4C306.7,133 305.4,136.9 304.3,140C303.1,143.1 301.7,147.4 301,149.5C300.3,151.6 299.4,154.5 298.9,155.9C298.4,157.2 296.7,162.2 295.1,166.9C293.5,171.5 291.7,176.8 291,178.6C290.4,180.4 288.7,185.2 287.3,189.4C283.5,200.7 278.7,214.8 277.5,218C276.9,219.6 275.9,222.6 275.3,224.6C274.3,227.8 272.9,231.8 270.3,239C270,239.8 268.7,243.5 267.5,247.4C266.2,251.2 265,254.8 264.7,255.3C264.5,255.7 263.8,257.8 263.2,259.8C262.6,261.7 261.2,265.7 260.2,268.5C259.3,271.3 257.3,277 256,281.1C254.6,285.2 253.3,289.2 253,289.9C252.7,290.6 251.3,294.7 249.8,299C245.7,311.3 242.7,318.6 239.9,323.2C230.3,338.7 215.2,349.3 196.2,353.8C187.4,355.9 175.9,356.8 166.8,356ZM573.8,356C565.1,355.4 551.4,352.9 547.2,351.2C546.5,350.9 544.5,350.2 542.8,349.6C535.3,346.9 533.4,346 525.2,341.5C511.8,333.9 498.5,321.2 490.8,308.5C489.6,306.6 488.3,304.5 487.9,303.8C486.6,301.9 484.7,298.1 482.7,293.2C479.2,284.9 478.4,282.4 475.9,269.2C474.3,261.2 474.4,265.5 474.2,176.6C474.1,103.4 474.1,95.5 473.7,93.9C472.4,88.1 470.2,84.2 465.8,79.7C460.5,74.4 455.4,71.9 448.5,71.2C441.6,70.6 435.3,72.1 430.1,75.7C424.1,79.9 420.2,85.4 418.3,92.2L417.6,94.6L417.5,222.1C417.4,344 417.4,349.5 416.9,349.9C416.2,350.7 337.6,350.6 337.1,349.9C336.5,349.1 336.7,97.9 337.3,93.6C339,81.2 341.4,70.9 343.6,66C344.1,65 344.9,63.1 345.5,61.8C351.2,48.1 361.2,34.8 373.2,24.8C386.4,14 402.2,6.3 419.5,2.4C428.8,0.3 445.2,-0.6 457.1,0.4C461.3,0.7 470.4,1.9 470.8,2.1C470.9,2.2 472,2.5 473.3,2.7C477.5,3.6 487.2,6.8 492.5,9C494.7,9.9 501.1,13.2 504.5,15.2C506.6,16.4 508,17.4 513.9,21.5C518,24.3 527.4,33.1 530.5,37C531.2,37.9 532.6,39.6 533.6,40.9C537.1,45.2 541.3,52 544.4,58.2C547.9,65.2 549.8,70.5 551.5,77.6C552.9,83.6 553.6,87.4 554.2,91.8L554.8,96.9L555,179C555.2,267.7 555.1,261.2 556.4,265.6C557.2,268.4 559.2,272 561.8,275.1C569.7,284.9 582.6,287.8 594.9,282.6C600.5,280.2 605.9,275.1 608.7,269.6C609.8,267.3 611.2,262.8 611.5,260.5C611.7,259.1 611.8,217.7 611.8,133C611.8,39.7 611.8,7.4 612,6.9C612.2,6.6 612.7,6.2 613.1,6C614.2,5.6 690,5.6 690.8,6C691.2,6.2 691.6,6.6 691.7,7C691.9,7.4 692,43.3 691.9,133.4C691.8,268.3 691.9,261.7 690.7,268.2C690.4,269.4 690.1,271.2 689.9,272.2C689.1,276.4 686.7,285.2 685.4,288.9C683.5,294 679.2,303 677,306.2C676.5,307 675.1,309.1 673.9,310.9C668,319.8 659.3,328.9 650,335.6C644.8,339.4 644.5,339.6 639.9,342.1C637.7,343.3 635.3,344.6 634.6,345C633,345.9 628,348 623.7,349.5C621.8,350.2 619.7,351 619,351.2C615.1,352.9 601.4,355.3 592,356C588.1,356.3 578,356.3 573.8,356ZM710,350.2C709.7,350.1 709.3,349.8 709.2,349.7C709.1,349.5 709,272.3 709,178.1L709,6.8L709.5,6.4C710,5.9 711.5,5.9 771.5,5.8C835.7,5.7 846.4,5.8 857.2,6.8C866.1,7.5 877.6,9.1 880.8,10C881.2,10.1 882.6,10.4 883.8,10.6C885,10.8 886.4,11.2 887,11.4C887.6,11.6 890.4,12.3 893.1,13C900.7,14.9 915,20.1 920.5,22.8C930.8,28.1 932.1,28.8 940.5,34C946.3,37.6 956.2,45.1 962.2,50.6C969.3,57.2 978.1,66.9 982.3,72.9C982.9,73.8 984.3,75.7 985.3,77C986.2,78.3 987.5,80.3 988.2,81.4C988.8,82.5 990,84.4 990.9,85.6C991.7,86.9 992.8,88.8 993.5,90C994.1,91.2 995.6,94 996.8,96.2C998,98.5 999.4,101.4 1000,102.8C1005.4,116.1 1006.3,118.3 1008.1,125.3C1011.8,138.9 1013.2,146.1 1014.2,157.8C1016.4,181.3 1014.5,208.6 1009.6,225.4C1009.3,226.5 1008.6,229.2 1008,231.4C1006.1,238.8 1000.3,253.7 997.5,258.5C997,259.4 995.8,261.6 994.9,263.5C993.9,265.4 992.3,268.2 991.3,269.9C990.2,271.5 988.7,273.9 988,275.1C987.3,276.3 985.7,278.6 984.5,280.2C983.3,281.8 981.8,283.9 981.1,284.9C980.4,285.8 979.1,287.5 978.2,288.5C977.3,289.5 976,291.2 975.2,292.1C974.4,293.1 973.1,294.6 972.3,295.4C971.5,296.2 969.8,298 968.6,299.3C962.3,306 952.1,314.5 943.1,320.4C937.6,324.1 929.4,329 928.9,329C928.8,329 927,329.9 924.8,331.1C922.7,332.3 919.4,333.8 917.7,334.5C915.9,335.2 913.1,336.4 911.4,337.1C908.1,338.6 904.5,339.8 898.4,341.6C896.2,342.3 893.5,343 892.4,343.4C883.4,346 869.2,348.5 857.4,349.4C854.5,349.6 850.9,349.9 849.5,350C845.9,350.4 710.9,350.6 710,350.2ZM1020.3,350.2C1020,350.1 1019.7,349.8 1019.5,349.5C1019.3,349.2 1019.2,298.5 1019.2,178C1019.2,8.1 1019.3,7 1019.7,6.5C1020,6.2 1020.5,5.9 1020.8,5.9C1021.1,5.8 1058.2,5.8 1103.1,5.8C1177.6,5.9 1185.3,5.9 1189.8,6.3C1192.4,6.6 1194.8,6.8 1195,6.9C1195.2,6.9 1196.8,7.2 1198.5,7.4C1202.4,7.9 1210,9.3 1212.8,10.2C1217.8,11.7 1225.6,14.3 1228.4,15.4C1235.7,18.3 1248.3,25.1 1254,29.3C1261.6,34.9 1263.9,36.9 1269.6,42.6C1274.6,47.6 1279.5,53.4 1282.9,58.4C1284.1,60.2 1285.4,62 1285.7,62.5C1286.1,63 1286.9,64.2 1287.4,65.2C1288,66.3 1289.3,68.9 1290.5,71C1293.4,76.5 1294,77.8 1296.5,85.1C1299.8,94.5 1301.1,100.1 1302.4,111.6C1303,116.4 1303.1,134 1302.6,138.4C1301.4,148.6 1300.1,155.1 1298,161.1C1294.7,170.9 1293.6,173.7 1290.6,179.4C1287.2,185.6 1286.4,186.9 1283.2,191.6C1274.1,205 1263.4,215.8 1250.1,225C1246.5,227.5 1246.3,228 1247.2,229.8C1248.2,231.7 1250.8,236 1252.5,238.9C1253.5,240.5 1255.1,243.3 1256.1,245C1257,246.7 1258.3,248.9 1259,249.9C1259.6,250.8 1261.2,253.6 1262.6,256C1263.9,258.4 1265.3,260.7 1265.5,261.1C1265.8,261.4 1267.3,263.9 1268.8,266.6C1274.8,277.1 1277.3,279.8 1282.1,281.4L1284.1,282.1L1300.9,282.2C1314.2,282.3 1317.8,282.4 1318.1,282.7C1318.6,283.2 1318.7,349.2 1318.1,349.9C1317.8,350.4 1317.3,350.4 1294.3,350.4C1269.2,350.5 1264.2,350.4 1257.5,349.4C1241.8,347.1 1227.2,340.1 1215.3,329.1C1208.3,322.6 1203.2,315.7 1197.9,305.9C1196.8,303.8 1195.5,301.4 1195,300.6C1194.5,299.8 1193.1,297.4 1191.9,295.2C1190.8,293.1 1189,290 1188,288.4C1187.1,286.7 1185.3,283.6 1184.1,281.4C1182.9,279.2 1181.5,276.7 1181,275.8C1180.4,274.9 1179,272.3 1177.7,270.1C1176.5,267.8 1175,265.1 1174.4,264.1C1173.8,263.2 1172.5,260.9 1171.5,259C1170.5,257.1 1169,254.6 1168.3,253.2C1167.5,251.9 1166.4,250.1 1165.8,249.1C1164.1,246.2 1167.4,246.5 1132.7,246.6L1102.7,246.6L1102.1,247.3L1101.5,248L1101.5,298.6C1101.5,348 1101.5,349.2 1101,349.8L1100.5,350.4L1060.7,350.4C1038.1,350.5 1020.6,350.4 1020.3,350.2ZM844.1,281.3C858.1,280 869.3,276.8 880.9,271C886.4,268.2 887.6,267.5 892.6,264C902.5,257.2 911,248 917.8,236.9C920.5,232.4 922.2,229.2 923.4,226.2C923.8,225.1 924.5,223.4 925,222.5C926.9,218.2 929.1,210.6 930.1,204.8C930.4,203.4 930.7,201.6 930.9,200.7C931.1,199.8 931.6,195.9 932,192C933.2,180.8 933.1,172.8 931.5,159.4C930.8,153.7 928.7,144.3 927.1,139.4C925.9,135.8 925.1,133.9 922.6,128.1C920.9,124.1 915.5,115.2 913,112C912.4,111.2 911.1,109.6 910.1,108.4C908,105.6 902.8,100.2 900.1,98C899,97.1 897.5,95.8 896.8,95.2C892.5,91.3 881.5,85 873.3,81.7C869.4,80 862.1,77.8 858.8,77.3C857.9,77.1 856.6,76.8 855.9,76.6C854.6,76.3 851.2,75.7 844.6,74.8C842,74.5 838.5,74.4 817.2,74.4L792.8,74.4L792.2,74.9L791.6,75.5L791.6,178L791.6,280.5L792.3,281.1L793,281.8L816,281.7C836.6,281.7 839.4,281.7 844.1,281.3ZM1170.2,178C1180.7,177.4 1186.2,175.9 1195.3,171.3C1205.1,166.3 1213.6,156.7 1217.2,146.5C1221.9,133.4 1221.7,118.1 1216.8,105.2C1213.1,95.9 1204.7,86.7 1194.5,80.9C1191.6,79.3 1183.6,76.5 1179.4,75.6C1178.3,75.4 1176.5,75 1175.4,74.8C1173.6,74.4 1170,74.4 1138.1,74.4L1102.8,74.4L1102.2,74.9L1101.6,75.5L1101.6,125.9C1101.5,181.2 1101.4,177.6 1102.9,177.9C1103.3,178 1103.7,178.1 1103.9,178.1C1104.5,178.3 1166.2,178.2 1170.2,178Z';

const CATEGORIES = [
  { id: 'ramen',  name: 'Ramen',  blurb: 'Hot noodles on demand. The specialty machine people stop for.' },
  { id: 'snack',  name: 'Snack',  blurb: 'The backbone of vending: chilled or ambient, built to sell every day.' },
  { id: 'drinks', name: 'Drinks', blurb: 'Cold drinks, high turnover, simple to stock and run.' }
];

// Comes with every machine. Shown on the home page, product pages and the builder.
const INCLUDED = [
  ['Custom wrap', 'Your branding, or a VNDR design. Included.'],
  ['Nayax card reader', 'Card, tap and phone payments on every machine.'],
  ['Optional cash slot', 'Add a cash slot at no extra cost.'],
  ['Online monitoring', 'Check sales and stock from anywhere. Included.'],
  ['Worldwide shipping', 'Included to your nearest port, or delivered straight to your door.'],
  ['Set up for your country', 'Configured for your local power supply.'],
  ['Setup help and booklet', 'We help you get going, plus a step-by-step operating booklet.'],
  ['Warranty and support', 'Warranty cover and ongoing maintenance support.']
];

// Specs every machine shares
const COMMON_SPECS = {
  'Payments': 'Nayax card reader included, plus an optional cash slot at no extra cost',
  'Power': 'Set up for the power supply in your country',
  'Shipping': 'Worldwide. Included to your nearest port, or delivered to your door',
  'Branding': 'Custom wrap included',
  'Monitoring': 'Online machine monitoring included',
  'Setup': 'Setup help and an operating booklet',
  'Warranty': 'Warranty plus ongoing maintenance support'
};

const MACHINES = [
  {
    id: 'ramen',
    page: 'machines/ramen-vending-machine/',   // product page (relative to the site root)
    category: 'ramen',
    name: 'Ramen Vending Machine',
    tag: 'Specialty',
    interface: 'Touchscreen',
    temp: 'Hot water',
    short: 'Interactive touchscreen ordering with an integrated hot-water system.',
    desc: 'Our flagship specialty machine. Customers browse and order on a large interactive touchscreen, collect their cup, and fill it at the built-in hot-water station. It stands out from every snack machine in the building.',
    features: ['Interactive touchscreen', 'Hot-water system', 'Adjustable water temperature', 'Nayax card reader', 'Online monitoring', 'Custom wrap included', 'Cutlery compartment', 'Independent water storage'],
    specs: {
      'Water temperature': 'Temperature controlled, adjustable on the machine',
      'Suitable products': 'Cup and bowl instant noodles, cutlery, condiments',
      'Ideal locations': 'Universities, student accommodation, hospitals, transport hubs, late-night venues'
    },
    art: 'ramen',
    photo: 'images/machines/ramen-touchscreen-black',   // product photo (relative to site root); shown instead of the illustration on cards
    photoAlt: 'Black VNDR touchscreen ramen vending machine stocked with cup noodles'
  },
  {
    id: 'snack-chilled',
    page: 'machines/refrigerated-snack-vending-machine/',
    category: 'snack',
    name: 'Refrigerated Snack Machine',
    tag: 'Refrigerated',
    interface: 'Keypad',
    temp: 'Refrigerated',
    short: 'Chilled snacks, fresh food and cold drinks in one machine.',
    desc: 'A refrigerated snack machine that opens up a much bigger product range: fresh food, dairy, chilled snacks and cold drinks alongside the classics.',
    features: ['Refrigerated cabinet', 'Glass display front', 'Adjustable spirals', 'Nayax card reader', 'Optional cash slot'],
    specs: {
      'Suitable products': 'Sandwiches, salads, yoghurt, chocolate, chilled snacks, cans and bottles',
      'Ideal locations': 'Offices, hospitals, gyms, universities, warehouses'
    },
    art: 'snack-chilled',
    photo: 'images/machines/snack-drink-front',
    photoAlt: 'VNDR snack and drink vending machine stocked with snacks and cold drinks'
  },
  {
    id: 'snack',
    page: 'machines/snack-vending-machine/',
    category: 'snack',
    name: 'Non-Refrigerated Snack Machine',
    tag: 'Best first machine',
    interface: 'Keypad',
    temp: 'Ambient',
    short: 'The classic snack machine. Simple, reliable, easy to start with.',
    desc: 'The machine most vending businesses start with. Shelf-stable snacks, no refrigeration to run, and products that last, making it easy to stock and easy to place.',
    features: ['Ambient (no refrigeration)', 'Glass display front', 'Adjustable spirals', 'Nayax card reader', 'Optional cash slot'],
    specs: {
      'Suitable products': 'Chips, chocolate, bars, nuts, lollies, personal-care items',
      'Ideal locations': 'Offices, warehouses, apartment buildings, shopping centres, entertainment venues'
    },
    art: 'snack',
    photo: 'images/machines/snack-drink-hallway',
    photoAlt: 'Black VNDR snack vending machine in a hallway'
  },
  {
    id: 'drinks',
    page: 'machines/drink-vending-machine/',
    category: 'drinks',
    name: 'Drinks Machine',
    tag: 'Refrigerated',
    interface: 'Keypad',
    temp: 'Refrigerated',
    short: 'Cold drinks, high turnover, simple to run.',
    desc: 'A glass-front refrigerated machine for water, soft drinks, energy drinks and protein shakes. It\'s simple to stock and quick to sell through.',
    features: ['Refrigerated', 'Glass display front', 'Nayax card reader', 'Optional cash slot'],
    specs: {
      'Suitable products': 'Water, soft drinks, energy drinks, sports drinks, protein shakes',
      'Ideal locations': 'Gyms, sports centres, warehouses, transport hubs, universities'
    },
    art: 'drinks',
    photo: 'images/machines/studio-front-2',
    photoAlt: 'Black VNDR vending machine with chilled drinks, front view'
  }
];
MACHINES.forEach(m => { m.specs = { ...m.specs, ...COMMON_SPECS }; });


/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- Hand-off to the contact page ---------- */
function saveEnquiry(obj) { try { sessionStorage.setItem('vndr-enquiry', JSON.stringify(obj)); } catch {} }
function takeEnquiry() {
  const q = new URLSearchParams(location.search);
  let saved = {};
  try { saved = JSON.parse(sessionStorage.getItem('vndr-enquiry') || '{}'); sessionStorage.removeItem('vndr-enquiry'); } catch {}
  return { machine: q.get('machine') || saved.machine, message: q.get('config') || saved.message };
}

/* ---------- Machine card (home page + machines page) ---------- */
function machineCard(m, root = '', uid = 'card') {
  const visual = m.photo
    ? `<img src="${root}${m.photo}-sm.jpg" alt="${esc(m.photoAlt)}" loading="lazy" width="640" height="800">`
    : machineSVG(m.art, uid + '-' + m.id);
  return `
  <article class="m-card reveal">
    <a class="m-visual ${m.photo ? 'has-photo' : ''}" href="${root}${m.page}" tabindex="-1" aria-hidden="true"><span class="m-tag ${m.tag === 'Specialty' ? 'hot' : ''}">${esc(m.tag)}</span>${visual}</a>
    <div class="m-body">
      <h3><a href="${root}${m.page}">${esc(m.name)}</a></h3>
      <p>${esc(m.short)}</p>
      <div class="m-foot">
        <a class="btn btn-primary btn-sm" href="${root}contact/?machine=${m.id}" data-machine="${m.id}">Contact us for pricing</a>
        <a class="m-more" href="${root}${m.page}" aria-label="View ${esc(m.name)}">→</a>
      </div>
    </div>
  </article>`;
}

/* ---------- Enquiry forms (contact, venues) ----------
   Collects the form fields and opens the visitor's email app addressed to ENQUIRY_EMAIL.
   Replace with a form service (e.g. Formspree) later if you'd rather not rely on email apps. */
function mountEnquiryForm(form, { subject, note }) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get('name') || '').trim(), email = (fd.get('email') || '').trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      note.textContent = 'Please add your name and a valid email.';
      (!name ? form.elements.name : form.elements.email).focus();
      return;
    }
    const lines = [];
    form.querySelectorAll('[data-label]').forEach(el => {
      const label = el.dataset.label;
      let v;
      if (el.matches('fieldset')) v = [...el.querySelectorAll('input:checked')].map(i => i.value).join(', ');
      else v = el.value;
      lines.push(`${label}: ${v && v.trim() ? v.trim() : '-'}`);
    });
    const subj = typeof subject === 'function' ? subject(fd) : subject;
    location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(lines.join('\n'))}`;
    note.textContent = `Your email app should open now with everything filled in. If it doesn't, email us at ${ENQUIRY_EMAIL}.`;
  });
}


/* ---------- Machine illustrations (SVG) ---------- */
function machineSVG(kind, uid) {
  const id = kind + '-' + uid;
  const body = `
    <defs>
      <linearGradient id="b${id}" x1="0" x2="1"><stop offset="0" stop-color="#26262b"/><stop offset=".5" stop-color="#34343a"/><stop offset="1" stop-color="#1c1c20"/></linearGradient>
      <linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f1013"/><stop offset="1" stop-color="#18191d"/></linearGradient>
      <linearGradient id="s${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c8ff2e"/><stop offset="1" stop-color="#7bd11a"/></linearGradient>
      <linearGradient id="r${id}" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".07"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <linearGradient id="c${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2418"/><stop offset="1" stop-color="#1a0f0a"/></linearGradient>
    </defs>
    <ellipse cx="110" cy="392" rx="96" ry="8" fill="#000" opacity=".5"/>
    <rect x="16" y="10" width="188" height="374" rx="12" fill="url(#b${id})" stroke="#3f3f46" stroke-width="1"/>
    <rect x="16" y="10" width="188" height="34" rx="12" fill="#111114"/>
    <rect x="16" y="32" width="188" height="12" fill="#111114"/>
    <path transform="translate(30 22) scale(0.034)" fill="#f4f4f1" fill-rule="evenodd" d="${LOGO_PATH}"/>
    <circle cx="188" cy="27" r="3.5" fill="#c8ff2e"/>
    <rect x="22" y="370" width="176" height="10" rx="3" fill="#111114"/>`;

  const tap = `<rect x="163" y="184" width="24" height="24" rx="4" fill="#222227"/><text x="175" y="200" text-anchor="middle" font-size="10" fill="#888">◎</text>`;
  const keypad = (x, y, cols, rows, gap = 11) => {
    let k = '';
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) k += `<rect x="${x + c * gap}" y="${y + r * gap}" width="${gap - 2}" height="${gap - 2}" rx="2" fill="#2a2a30"/>`;
    return k;
  };
  const ramenLower = () => {
    let cups = '';
    const cols = ['#e94e3c', '#f2b134', '#f4f4f1', '#e94e3c', '#3c8ce9'];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) {
      const x = 32 + c * 22, y = 158 + r * 34;
      cups += `<path d="M${x} ${y} h16 l-2 20 h-12z" fill="${cols[(c + r) % 5]}"/><rect x="${x-1}" y="${y-3}" width="18" height="4" rx="1" fill="#ddd"/>`;
    }
    return `
      <rect x="26" y="150" width="122" height="114" rx="6" fill="url(#g${id})" stroke="#2b2b31"/>
      ${cups}
      <rect x="26" y="150" width="122" height="114" rx="6" fill="url(#r${id})"/>
      <rect x="26" y="274" width="168" height="84" rx="8" fill="#08080a"/>
      <rect x="96" y="278" width="28" height="12" rx="3" fill="#2b2b31"/><rect x="106" y="290" width="8" height="8" fill="#3a3a40"/>
      <path d="M110 300 v18" stroke="#9fd8ff" stroke-width="2.5" stroke-dasharray="3 3" opacity=".8"/>
      <path d="M90 322 h40 l-5 26 h-30z" fill="#e94e3c"/><rect x="88" y="318" width="44" height="5" rx="2" fill="#eee"/>
      <path d="M100 312 q4 -8 0 -16 M120 312 q4 -8 0 -16" stroke="#fff" stroke-width="1.5" fill="none" opacity=".35" stroke-linecap="round"/>
      <rect x="150" y="290" width="36" height="58" rx="5" fill="#141417"/><text x="168" y="323" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6" fill="#777">CUTLERY</text>`;
  };
  const bowl = (cx, cy, s = 1) => `
      <path d="M${cx - 18*s} ${cy} h${36*s} a${18*s} ${18*s} 0 0 1 ${-36*s} 0z" fill="#0b0b0c"/>
      <path d="M${cx - 8*s} ${cy - 6} q3 -6 0 -12 M${cx} ${cy - 6} q3 -6 0 -12 M${cx + 8*s} ${cy - 6} q3 -6 0 -12" stroke="#0b0b0c" stroke-width="2" fill="none" stroke-linecap="round"/>`;

  let inner = '';
  if (kind === 'ramen') {
    inner = `
      <rect x="26" y="54" width="168" height="88" rx="8" fill="#0a0a0c"/>
      <rect x="31" y="59" width="158" height="78" rx="5" fill="url(#s${id})"/>
      <text x="42" y="82" font-family="Inter Tight, sans-serif" font-weight="800" font-size="16" fill="#0b0b0c">HOT RAMEN</text>
      <text x="42" y="97" font-family="JetBrains Mono, monospace" font-size="8" fill="#0b0b0c" opacity=".7">TAP TO ORDER</text>
      ${bowl(158, 104)}
      <rect x="42" y="112" width="52" height="14" rx="7" fill="#0b0b0c"/><text x="51" y="122" font-family="Inter, sans-serif" font-size="7" font-weight="600" fill="#c8ff2e">ORDER →</text>
      <rect x="156" y="150" width="38" height="114" rx="6" fill="#141417"/>
      <rect x="163" y="160" width="24" height="16" rx="3" fill="#0a0a0c"/><rect x="166" y="165" width="18" height="2" fill="#c8ff2e" opacity=".8"/>
      ${tap}
      <rect x="163" y="216" width="24" height="40" rx="4" fill="#222227"/><path d="M168 228 h14 M168 236 h14 M168 244 h14" stroke="#555" stroke-width="2"/>
      ${ramenLower()}`;
  } else if (kind === 'ramen-keypad') {
    inner = `
      <rect x="26" y="54" width="168" height="88" rx="8" fill="#141417"/>
      <rect x="31" y="59" width="100" height="78" rx="5" fill="url(#s${id})"/>
      <text x="40" y="80" font-family="Inter Tight, sans-serif" font-weight="800" font-size="13" fill="#0b0b0c">HOT</text>
      <text x="40" y="94" font-family="Inter Tight, sans-serif" font-weight="800" font-size="13" fill="#0b0b0c">RAMEN</text>
      ${bowl(98, 116, 0.8)}
      <rect x="138" y="60" width="50" height="14" rx="3" fill="#0a0a0c"/><text x="163" y="70" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" fill="#c8ff2e">A3</text>
      ${keypad(141, 80, 4, 5, 11)}
      <rect x="156" y="150" width="38" height="114" rx="6" fill="#141417"/>
      <rect x="163" y="160" width="24" height="16" rx="3" fill="#0a0a0c"/><rect x="166" y="165" width="18" height="2" fill="#c8ff2e" opacity=".8"/>
      ${tap}
      <rect x="163" y="216" width="24" height="40" rx="4" fill="#222227"/><path d="M168 228 h14 M168 236 h14 M168 244 h14" stroke="#555" stroke-width="2"/>
      ${ramenLower()}`;
  } else if (kind === 'snack' || kind === 'snack-chilled') {
    const chilled = kind === 'snack-chilled';
    let items = '';
    const cols = chilled ? ['#f4f4f1', '#3c8ce9', '#c8ff2e', '#e94e3c', '#9fd8ff', '#f2b134'] : ['#e94e3c', '#f2b134', '#3c8ce9', '#c8ff2e', '#a855f7', '#f4f4f1'];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) {
      const x = 33 + c * 23, y = 66 + r * 40;
      const shape = chilled && r === 1
        ? `<path d="M${x} ${y+24} l17 -24 v24z" fill="${cols[(c * 2 + r) % 6]}"/>`
        : `<rect x="${x}" y="${y}" width="17" height="24" rx="2" fill="${cols[(c * 2 + r) % 6]}"/>`;
      items += `${shape}<path d="M${x-1} ${y+30} h19" stroke="${chilled ? '#2a3d52' : '#55555c'}" stroke-width="2"/>`;
    }
    for (let c = 0; c < 4; c++) items += `<rect x="${35 + c * 28}" y="232" width="20" height="38" rx="5" fill="${['#e94e3c','#3c8ce9','#c8ff2e','#f2b134'][c]}"/>`;
    inner = `
      <rect x="26" y="54" width="128" height="226" rx="6" fill="${chilled ? '#0c1520' : `url(#g${id})`}" stroke="${chilled ? '#23364a' : '#2b2b31'}"/>
      ${items}
      <path d="M26 224 h128" stroke="${chilled ? '#2a3d52' : '#2b2b31'}" stroke-width="2"/>
      ${chilled ? `<rect x="26" y="54" width="128" height="226" rx="6" fill="#9fd8ff" opacity=".06"/>` : ''}
      <rect x="26" y="54" width="128" height="226" rx="6" fill="url(#r${id})"/>
      <rect x="162" y="54" width="32" height="226" rx="6" fill="#141417"/>
      <rect x="167" y="64" width="22" height="30" rx="3" fill="url(#s${id})"/>
      ${chilled ? `<text x="178" y="83" text-anchor="middle" font-family="Inter Tight, sans-serif" font-weight="800" font-size="10" fill="#0b0b0c">3°</text>` : ''}
      ${keypad(168, 104, 2, 4, 11)}
      <rect x="167" y="160" width="22" height="22" rx="4" fill="#222227"/><text x="178" y="175" text-anchor="middle" font-size="10" fill="#888">◎</text>
      <rect x="26" y="292" width="168" height="66" rx="8" fill="#08080a"/>
      <rect x="40" y="308" width="140" height="32" rx="5" fill="#141417"/>
      <text x="110" y="328" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#666">PUSH</text>`;
  } else if (kind === 'drinks') {
    let b = '';
    const cols = ['#3c8ce9', '#e94e3c', '#c8ff2e', '#f4f4f1', '#f2b134', '#3c8ce9'];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) {
      const x = 33 + c * 19, y = 64 + r * 44;
      b += `<rect x="${x+3}" y="${y}" width="6" height="6" rx="1" fill="#ddd"/><rect x="${x}" y="${y+5}" width="12" height="30" rx="4" fill="${cols[(c + r * 2) % 6]}"/><rect x="${x}" y="${y+16}" width="12" height="7" fill="#fff" opacity=".35"/>`;
    }
    inner = `
      <rect x="26" y="54" width="128" height="230" rx="6" fill="#0c1520" stroke="#23364a"/>
      ${b}
      ${[0,1,2,3,4].map(r => `<path d="M28 ${100 + r*44} h124" stroke="#2a3d52" stroke-width="2"/>`).join('')}
      <rect x="26" y="54" width="128" height="230" rx="6" fill="#9fd8ff" opacity=".05"/>
      <rect x="26" y="54" width="128" height="230" rx="6" fill="url(#r${id})"/>
      <rect x="162" y="54" width="32" height="230" rx="6" fill="#141417"/>
      <rect x="167" y="64" width="22" height="40" rx="3" fill="url(#s${id})"/>
      <text x="178" y="88" text-anchor="middle" font-family="Inter Tight, sans-serif" font-weight="800" font-size="10" fill="#0b0b0c">4°</text>
      ${keypad(168, 114, 2, 4, 11)}
      <rect x="167" y="166" width="22" height="22" rx="4" fill="#222227"/><text x="178" y="181" text-anchor="middle" font-size="10" fill="#888">◎</text>
      <rect x="26" y="294" width="168" height="64" rx="8" fill="#08080a"/>
      <rect x="40" y="308" width="140" height="32" rx="5" fill="#141417"/>
      <text x="110" y="328" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" fill="#666">PUSH</text>`;
  } else if (kind === 'coffee') {
    const menu = ['ESPRESSO', 'LATTE', 'FLAT WHITE', 'CAPPUCCINO', 'LONG BLACK', 'MOCHA', 'HOT CHOC', 'TEA'];
    inner = `
      <rect x="26" y="54" width="168" height="104" rx="8" fill="url(#c${id})"/>
      <text x="38" y="80" font-family="Inter Tight, sans-serif" font-weight="800" font-size="16" fill="#f4f4f1">FRESH</text>
      <text x="38" y="98" font-family="Inter Tight, sans-serif" font-weight="800" font-size="16" fill="#c8ff2e">COFFEE</text>
      <text x="38" y="112" font-family="JetBrains Mono, monospace" font-size="7" fill="#f4f4f1" opacity=".6">MADE TO ORDER</text>
      <path d="M134 96 h40 v22 a20 20 0 0 1 -40 0z" fill="#f4f4f1"/><path d="M174 104 h6 a7 7 0 0 1 0 14 h-6" stroke="#f4f4f1" stroke-width="3" fill="none"/>
      <ellipse cx="154" cy="97" rx="20" ry="4" fill="#6b3f26"/>
      <path d="M146 88 q4 -8 0 -16 M154 88 q4 -8 0 -16 M162 88 q4 -8 0 -16" stroke="#f4f4f1" stroke-width="2" fill="none" opacity=".5" stroke-linecap="round"/>
      <rect x="26" y="166" width="168" height="104" rx="8" fill="#0a0a0c"/>
      <rect x="31" y="171" width="158" height="94" rx="5" fill="#141417"/>
      ${menu.map((t, i) => {
        const x = 37 + (i % 2) * 74, y = 177 + Math.floor(i / 2) * 21;
        return `<rect x="${x}" y="${y}" width="70" height="17" rx="4" fill="${i === 1 ? `url(#s${id})` : '#222227'}"/><text x="${x + 35}" y="${y + 11.5}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6.5" fill="${i === 1 ? '#0b0b0c' : '#999'}">${t}</text>`;
      }).join('')}
      <rect x="26" y="278" width="168" height="80" rx="8" fill="#08080a"/>
      <rect x="40" y="284" width="96" height="68" rx="6" fill="#111114"/>
      <rect x="78" y="286" width="20" height="8" rx="2" fill="#2b2b31"/>
      <path d="M88 296 v14" stroke="#6b3f26" stroke-width="3"/>
      <path d="M76 314 h24 l-3 30 h-18z" fill="#f4f4f1"/>
      <path d="M84 308 q3 -6 0 -12 M92 308 q3 -6 0 -12" stroke="#fff" stroke-width="1.5" fill="none" opacity=".3" stroke-linecap="round"/>
      <rect x="146" y="284" width="40" height="30" rx="5" fill="#141417"/><text x="166" y="303" text-anchor="middle" font-size="10" fill="#888">◎</text>
      <rect x="146" y="320" width="40" height="32" rx="5" fill="#141417"/><text x="166" y="339" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="6" fill="#777">CUPS</text>`;
  }
  return `<svg viewBox="0 0 220 402" role="img" aria-label="${esc(kind)} vending machine illustration">${body}${inner}</svg>`;
}


/* ---------- Shared page chrome: nav, mobile menu, reveal-on-scroll ---------- */
function initChrome() {
  const nav = $('#nav'), menuBtn = $('#menuBtn');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20), { passive: true });
  menuBtn.onclick = () => { const o = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', o); };
  $('#navLinks').addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); } });
  const year = $('#year'); if (year) year.textContent = new Date().getFullYear();

  // Remember which machine a "Contact us for pricing" link was for, so the contact page can pre-select it
  // (works even where the page address can't carry ?machine=...)
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-machine]');
    if (a) saveEnquiry({ machine: a.dataset.machine });
  });

  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 5) * 60 + 'ms'; io.observe(el); });
}


/* ---------- Profit calculator (home page + product pages) ---------- */
function mountCalc(el, d = {}) {
  const v = Object.assign({ machine: 5997, sales: 15, price: 4.5, cost: 1.8, comm: 10 }, d);
  const slider = (id, label, min, max, step, val) => `
    <div class="field">
      <label for="${id}">${label} <output id="o${id}"></output></label>
      <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}">
    </div>`;
  el.innerHTML = `
    <div class="calc">
      <div class="calc-in">
        ${slider('cMachine', 'Machine price', 2997, 14997, 500, v.machine)}
        ${slider('cSales', 'Sales per day', 1, 60, 1, v.sales)}
        ${slider('cPrice', 'Average sale price', 1, 12, 0.5, v.price)}
        ${slider('cCost', 'Product cost per sale', 0.5, 8, 0.1, v.cost)}
        ${slider('cComm', 'Location commission', 0, 30, 1, v.comm)}
      </div>
      <div class="calc-out" aria-live="polite">
        <div class="eyebrow">Estimated monthly profit</div>
        <div class="big" id="rProfit">$0</div>
        <div class="sub" id="rSub"></div>
        <div class="calc-rows">
          <div><small>Monthly revenue</small><b id="rRev">$0</b></div>
          <div><small>Product cost</small><b id="rCogs">$0</b></div>
          <div><small>Location commission</small><b id="rComm">$0</b></div>
          <div><small>Yearly profit</small><b id="rYear">$0</b></div>
        </div>
      </div>
    </div>
    <p class="calc-note">Illustrative estimate only, based on 30 trading days a month. It doesn't include card fees, electricity, maintenance, travel, your time or tax, and actual results depend heavily on your location. Use it to compare scenarios, not as a forecast.</p>`;
  const money = n => '$' + Math.round(n).toLocaleString('en-US');
  const val = id => +el.querySelector('#' + id).value;
  const out = (id, t) => { el.querySelector('#' + id).textContent = t; };
  function calc() {
    const m = val('cMachine'), s = val('cSales'), p = val('cPrice'), c = val('cCost'), k = val('cComm');
    const rev = s * p * 30, cogs = s * c * 30, comm = rev * k / 100, profit = rev - cogs - comm;
    out('ocMachine', money(m)); out('ocSales', s); out('ocPrice', '$' + p.toFixed(2)); out('ocCost', '$' + c.toFixed(2)); out('ocComm', k + '%');
    out('rRev', money(rev)); out('rCogs', money(cogs)); out('rComm', money(comm)); out('rYear', money(profit * 12));
    out('rProfit', (profit < 0 ? '−' : '') + money(Math.abs(profit)));
    out('rSub', profit > 0 ? `Machine paid back in about ${(m / profit).toFixed(1)} months` : 'Adjust price or cost: this setup loses money');
  }
  el.addEventListener('input', calc);
  calc();
}
