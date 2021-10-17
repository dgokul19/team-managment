export const findPath = ( location ) => {
    const result = {};
    const { pathname } = location;
    result.lastPath = pathname.split('/').pop();
    return result;
};