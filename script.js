const productProfitArray = [
    { name: "Product A", profit: -75 },
    { name: "Product B", profit: -70 },
    { name: "Product C", profit: 93 },
    { name: "Product D", profit: 84 },
    { name: "Product E", profit: 88 },
    { name: "Product F", profit: 44 },
    { name: "Product G", profit: 5 },
]



function topProduct(productProfitArray) {
    if (productProfitArray.length === 0 ) return "No Data"
    let topProduct = productProfitArray [0]    
    for (let i = 0; i < productProfitArray.length; i++) {
    if (productProfitArray[i].profit > topProduct.profit)
    {topProduct = productProfitArray[i]}
    
    }
    console.log(topProduct)
} 

bottomProduct(productProfitArray)

function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0 ) return "No Data"
    let topProduct = productProfitArray [0]    

    for (let i = 0; i < productProfitArray.length; i++) {
    productProfitArray[i].profit < topProduct.profit && (topProduct = productProfitArray[i]);
    }
    console.log(topProduct)
}


function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
    return "No Data";
    }

let closestToZero = Number.POSITIVE_INFINITY;
let zeroProfitProduct = "";

    for (let i = 0; i < productProfitArray.length; i++) {
    const { name, profit } = productProfitArray[i];
    if (Math.abs(profit) < Math.abs(closestToZero) || (profit > 0 && closestToZero === Math.abs(closestToZero))) {
        closestToZero = profit;
        zeroProfitProduct = name;
    }
    }
    console.log(zeroProfitProduct)
}

    