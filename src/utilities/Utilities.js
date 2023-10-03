

export function getItemsFromLocale(){
    return localStorage.getItem("donations")
}

export default function setItemInLocale(id){
    const itemsJson = getItemsFromLocale()
    if(itemsJson){
        const items = JSON.parse(itemsJson)
        if(items.includes(id)){
            return false
        }else{
            items.push(id)
            const newItems = JSON.stringify(items)
            localStorage.setItem("donations", newItems)
            return true
        }
    }else{
        const arr = [id]
        const newItems = JSON.stringify(arr)
        localStorage.setItem("donations",newItems)
        return true
    }
}

