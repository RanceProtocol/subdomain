export const isValidAmountValue = (value:string) =>
    /^[0-9]*(?:\.[0-9]*)?$/.test(value);
    
export const isPositiveInt = (value:string) => /^\+?([1-9]\d*)$/.test(value);

export const padZero = (num: number) => {
    if(num > 9)
      return num
    return `0${num}`
}

export const setIntervalImmediately = (callback: () => void, interval: number) => {
    callback();
    return setInterval(callback, interval);
}

export const getChainId = () => {
    return process.env.REACT_APP_ENVIRONMENT === "mainnet" || process.env.REACT_APP_ENVIRONMENT === "staging" ? 25 : 338
}

export const shortenAddress = (address: string): string => {
    if(!address) return "";
    const addressArr = address.split("");
    addressArr.splice(6,32, "...");
    address = addressArr.join("");
    return address;
}