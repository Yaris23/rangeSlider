export class RangeLine{
constructor(minCount, maxCount){
    this.minCount = minCount;
    this.maxCount = maxCount;
}

show(){
    console.log(this.minCount, this.maxCount)
}
}