// HANDS-ON 2: Course Price Tag Labeler
// ------------------------------------
// Initial data:
//      let price = 1299;

// Tasks:
//    1. If price < 500 → "Budget Course"
//    2. If price between 500–1000 → "Standard Course"
//    3. If price > 1000 → "Premium Course"
//    4. Store label in courseTag
//    5. Print the label



price=1299
function budget(price){
    if(price<500){
        return "Budget course";
    }
    else if(price>500 && price<1000){
        return "Standard course";
    }
    else if(price>1000){
        return "premium course";
    }


}
label=budget(1299);
console.log("label is ",label)