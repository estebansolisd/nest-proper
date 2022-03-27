export default function nest(param = "") {
    const arr = param.split("");
    let result = "";
    for (let index = 0; index < arr.length / 2; index++) {
        let leftSideElement = arr[i];
        let rightSideElement = arr[arr.length - i];

        if (leftSideElement === rightSideElement) {
            // Using ? as key to be replaced and nest everytime the for loops
            result = result.includes("?") ? result.replace("?", leftSideElement + rightSideElement) : leftSideElement + "?" + rightSideElement;
        }else{
            
        }
    }


    return result;
}
