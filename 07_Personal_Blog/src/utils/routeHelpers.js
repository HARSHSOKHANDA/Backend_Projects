export function isActiveRoute(route, currentPath) { 
    return route === currentPath ? 'active': "";
}