
function payNow() {
    var options = {
        "key": "rzp_test_YourKeyHere",
        "amount": 50000,
        "currency": "INR",
        "name": "Laxmi’s WellnessBite",
        "description": "Order Payment",
        "handler": function (response){
            alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "9000090000"
        },
        "theme": {
            "color": "#ff66a3"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
}
