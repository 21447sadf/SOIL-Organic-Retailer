const ITEMS_KEY = "items";
const ITEM_KEY = "item";
//This component stores items as hard coded values in local storage

function initSaleItems() {
    // Stop if data is already initialised.
    if(localStorage.getItem(ITEMS_KEY) !== null)
    return;

    //Hard coded Item info
    const saleItems = [
        { id: 1, prodName: "Large Corn - 6 pack", price: "3.00" },
        { id: 2, prodName: "HealthNuts Muesli Bar - 5 pack", price: "3.50" },
        { id: 3, prodName: "Nature's Noodle Co. - 500g High Protein Pasta", price: "4.00" },
        { id: 4, prodName: "Fresh Spinach - 300g", price: "2.50" },
        { id: 5, prodName: "Yokos Unsweetened Yoghurt - 500g", price: "3.00" },
        { id: 6, prodName: "Dough Delight Co. Wholemeal Bread Loaf", price: "3.50" }
    ];
    
    // Set data into local storage.
    localStorage.setItem(ITEMS_KEY, JSON.stringify(saleItems));
}

export default initSaleItems;

