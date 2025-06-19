function set(storageName, value) {
    localStorage.setItem(storageName, JSON.stringify(value));
}

function get(storageName) {
    return JSON.parse(localStorage.getItem(storageName));
}

function remove(storageName) {
    localStorage.removeItem(storageName);
}

export const handleStorage = {
    set, get, remove
}
