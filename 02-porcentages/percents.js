
// Mapping DOM
const result_price = document.querySelector("#result-price");
const btn_cal = document.querySelector("#btn-cal");
const discount = document.querySelector("#discount")
const price = document.querySelector("#price")
const main_form = document.querySelector("#main__form")

// WITH OBJECTS: 
// const obj_coupons = {
//     "PLATZI10" : 10, 
//     "PLATZI20" : 20, 
//     "PLATZI30" : 30, 
//     "PLATZI40" : 40, 
//     "PLATZI40" : 50, 

// } 

//WITH ARRAYS:
const arr_coupons = [];
arr_coupons.push({
    name: 'PLATZI10', 
    discount : 10
}); 
arr_coupons.push({
    name: 'PLATZI20', 
    discount : 20
}); 
arr_coupons.push({
    name: 'PLATZI30', 
    discount : 30
}); 
arr_coupons.push({
    name: 'PLATZI40', 
    discount : 40
}); 


// Manipulate DOM

btn_cal.addEventListener('click', (event) => {

    const price_value = Number(price.value)
    let discount_value = (discount.value)

    if (!price_value) {
        result_price.innerText = "Please check the fields again."  
        return;
    }
    // This is used for record the object and convert him in array. 
    // for (const [key, value] of Object.entries(coupons)) {
    //     // console.log(`${key}: ${value}`);
    //     if (discount_value == key) {
    //         discount_value = value 
    //     }

    // }

    // FOR OBJECTS: 
    // if (obj_coupons[discount_value]) {
    //     discount_value = obj_coupons[discount_value]
    // }

    // find VS filter: find return the element, filter return array with the elements

    const resultCoupon = arr_coupons.find((coupon)=> {
        // console.log(coupon, discount_value);
        return coupon.name == discount_value;
        // Return example { 'name': 'PLATZI10', 'discount': 10 } 
    })

    
    // FOR ARRAYS
    console.log(resultCoupon);
    if (resultCoupon) {
        discount_value = resultCoupon.discount
    } else {
        result_price.innerText = "Please check the fields again. This coupon doesn't have discount."  
        return;
    }

    discount_value = Number(discount_value)

    if (discount_value > 100) {
        result_price.innerText = "Error! Please check your discount field"  
        return; 
    }

    const result = ( price_value * (100 - discount_value))/ 100
    console.log({result,discount_value});
    result_price.innerText = "Result is: " + result 

})








