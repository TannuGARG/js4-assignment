function CreateObject(arr) {
    // Write your code here
    const hash={}
    index=0
    while(index<arr.length){
        hash[arr[index]]=arr[index+1]
        index+=2

    }
    return hash
    
}
module.exports = CreateObject;
