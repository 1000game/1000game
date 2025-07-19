// script.js
function copyCoupon() {
    // Get the coupon code text
    const couponCode = document.querySelector('.coupon-code').textContent;
    
    // Create a temporary textarea element to copy text
    const textarea = document.createElement('textarea');
    textarea.value = couponCode;
    document.body.appendChild(textarea);
    textarea.select();
    
    // Copy the text
    try {
        document.execCommand('copy');
        alert('تم نسخ الكوبون: ' + couponCode);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    
    // Remove the temporary textarea
    document.body.removeChild(textarea);
}