import { favorites } from "./index";

export function buyNow(item) {
    return favorites.post('/buyNow', { item })
}
export function getSa(name, id) {
    return favorites.post('/getSa', { name, id })
}