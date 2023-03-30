const addToBookMark = (name) =>{
    const isBlogStore = getStoreItem();
    console.log(isBlogStore);
    isBlogStore.push(name);
    localStorage.setItem('blogCart',JSON.stringify(isBlogStore));
} 





const getStoreItem = () => {
    let storeCart = [];
    const blogCart = localStorage.getItem('blogCart');
    if(blogCart){
        storeCart = JSON.parse(blogCart)
    }
    return storeCart
}


export {addToBookMark,getStoreItem}