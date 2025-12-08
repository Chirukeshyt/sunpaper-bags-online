export interface Product {
  id: string;
  size: string;
  unit: string;
  material: string;
  printing: string;
  purpose: string;
  min_quantity: number;
  cost: number | null;
  gst: number | null;
}

export const products: Product[] = [
  {"id":"p001","size":"6X9X2.5","unit":"Inc","material":"DUPLEX","printing":"SINGLE","purpose":"WEDDING BAGS","min_quantity":1000,"cost":9.0,"gst":18},
  {"id":"p002","size":"6X9X2.5","unit":"Inc","material":"DUPLEX","printing":"MULTY","purpose":"JEWELLERY BAGS","min_quantity":2000,"cost":11.0,"gst":18},
  {"id":"p003","size":"6X9X2.5","unit":"Inc","material":"CRAFT INDIA","printing":"SINGLE","purpose":"HOSPITAL BAGS","min_quantity":2000,"cost":8.5,"gst":18},
  {"id":"p004","size":"20X23X8","unit":"Cms","material":"CRAFT INDIA","printing":"SINGLE","purpose":"READYMADE BAGS","min_quantity":2000,"cost":9.0,"gst":18},
  {"id":"p005","size":"20X23X8","unit":"Cms","material":"DUPLEX","printing":"SINGLE","purpose":"INKPOT TYPE","min_quantity":2000,"cost":10.0,"gst":18},
  {"id":"p006","size":"20X23X8","unit":"Cms","material":"DUPLEX","printing":"MULTY","purpose":"SRI SAI MOBILE TYPE","min_quantity":2000,"cost":12.0,"gst":18},
  {"id":"p007","size":"20X23X8","unit":"Cms","material":"CATLUMINA","printing":"SINGLE","purpose":"ISTATION TYPE/MAT LAMINATED","min_quantity":2000,"cost":15.0,"gst":18},
  {"id":"p008","size":"20X28X8","unit":"Cms","material":"DUPLEX/200 GSM","printing":"SINGLE","purpose":"18+ FASHIONS TYPE","min_quantity":2000,"cost":12.0,"gst":18},
  {"id":"p009","size":"20X28X8","unit":"Cms","material":"CRAFT","printing":"SINGLE","purpose":"FASHION ZONE","min_quantity":2000,"cost":10.0,"gst":18},
  {"id":"p010","size":"20X28X8","unit":"Cms","material":"DUPLEX","printing":"MULTY","purpose":"DHANUSH MOBILE TYPE","min_quantity":2000,"cost":14.0,"gst":18},
  {"id":"p011","size":"11X13X4","unit":"Inc","material":"DUPLEX","printing":"SINGLE","purpose":"ANITHA DESIGNER","min_quantity":2000,"cost":14.5,"gst":18},
  {"id":"p012","size":"11X13X4","unit":"Inc","material":"DUPLEX","printing":"TWO COLOR","purpose":"D STORE","min_quantity":1000,"cost":15.5,"gst":18},
  {"id":"p013","size":"11X13X4","unit":"Inc","material":"DUPLEX","printing":"SINGLE-SOLID","purpose":"KESAVA FASHIONS","min_quantity":1000,"cost":15.5,"gst":18},
  {"id":"p014","size":"11X13X4","unit":"Inc","material":"DUPLEX","printing":"MULTY COLOR","purpose":"DASHERS","min_quantity":1000,"cost":16.5,"gst":18},
  {"id":"p015","size":"11X13X4","unit":"Inc","material":"CRAFT","printing":"SINGLE","purpose":"BANANA CLUB","min_quantity":1000,"cost":13.5,"gst":18},
  {"id":"p016","size":"16X13X4","unit":"Inc","material":"CRAFT","printing":"SINGLE","purpose":"U.V. FASHIONS","min_quantity":1000,"cost":15.0,"gst":18},
  {"id":"p017","size":"16X13X4","unit":"Inc","material":"DUPLEX","printing":"SINGLE","purpose":"THE BOYS WEAR","min_quantity":1000,"cost":16.5,"gst":18},
  {"id":"p018","size":"16X13X4","unit":"Inc","material":"DUPLEX","printing":"SINGLE-SOLID","purpose":"YES FASHION","min_quantity":1000,"cost":17.5,"gst":18},
  {"id":"p019","size":"16X13X4","unit":"Inc","material":"DUPLEX","printing":"TWO COLOR","purpose":"","min_quantity":1000,"cost":null,"gst":18},
  {"id":"p020","size":"16X13X4","unit":"Inc","material":"DUPLEX","printing":"MULTY","purpose":"LEHARAYI","min_quantity":1000,"cost":18.5,"gst":18},
  {"id":"p021","size":"18X13X4","unit":"Inc","material":"DUPLEX","printing":"SINGLE","purpose":"BALAJI","min_quantity":1000,"cost":18.5,"gst":18},
  {"id":"p022","size":"18X13X4","unit":"Inc","material":"DUPLEX","printing":"MULTY","purpose":"ALANKRUTI","min_quantity":1000,"cost":20.5,"gst":18},
  {"id":"p023","size":"18X13X4","unit":"Inc","material":"CATLUMINA","printing":"SINGLE","purpose":"I STATION","min_quantity":1000,"cost":37.0,"gst":18},
  {"id":"p024","size":"18X13X4","unit":"Inc","material":"CATLUMINA","printing":"MULTY","purpose":"OYASIS","min_quantity":1000,"cost":39.0,"gst":18},
  {"id":"p025","size":"8.5X8.5X6.5","unit":"Inc","material":"BROWN CRAFT","printing":"SINGLE","purpose":"SWEETS SHOP","min_quantity":2000,"cost":null,"gst":null},
  {"id":"p026","size":"11X8.5X8","unit":"Inc","material":"BROWN CRAFT","printing":"SINGLE","purpose":"SWEETS SHOP 1KG","min_quantity":2000,"cost":null,"gst":null},
  {"id":"p027","size":"9X6.5X3.5","unit":"Inc","material":"BROWN CRAFT","printing":"SINGLE","purpose":"SWEETS SHOP 1/4 KG","min_quantity":2000,"cost":null,"gst":null},
  {"id":"p028","size":"7X9X5","unit":"Inc","material":"BROWN CRAFT","printing":"SINGLE","purpose":"SWEETS 1/4 KG BOTTOM TYPE","min_quantity":2000,"cost":null,"gst":null},
  {"id":"p029","size":"8.5X8.5X5.5","unit":"Inc","material":"BROWN CRAFT","printing":"SINGLE","purpose":"RESTAURANT PACKING","min_quantity":2000,"cost":null,"gst":null}
];

export const getUniqueSizes = (): string[] => {
  return [...new Set(products.map(p => p.size))];
};

export const getUniqueMaterials = (): string[] => {
  return [...new Set(products.map(p => p.material))];
};

export const getUniquePrintings = (): string[] => {
  return [...new Set(products.map(p => p.printing))];
};
