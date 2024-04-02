    //Hook to add items to cart
    const [cartItems, setCartItems] = useState([]);

    //Function to add item to cart
    function addItemToCart(item) {
        //Check if item already exists in local storage
        //If it does, don't add anything
        const items = JSON.parse(localStorage.getItem(ITEMS_KEY));
        if (items !== null) {
            if (items.find(obj => obj.prodName === item.prodName) !== undefined) {
                return cartItems;
            }
        }

        //Use callback to update local storage
        setCartItems(cartItems => {
            cartItems = [...cartItems, item];
            //Store item in local storage
            localStorage.setItem(ITEMS_KEY, JSON.stringify(cartItems));
            return cartItems;
        });
      
        
    };