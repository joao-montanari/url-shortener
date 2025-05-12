export const generateRandomID = (maxLength: number = 6) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result: string = '';
    for(let index = 0; index < maxLength; index++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}