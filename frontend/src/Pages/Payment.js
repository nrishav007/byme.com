import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import swal from "sweetalert";
const Razorpay = useRazorpay();

const handlePayment = useCallback(
  async (price,email,mno,name) => {
    const order = {
      currency: "INR",
      receipt: "qwsaq1",
    };
    const options = {
      key: "rzp_test_sYtoH5zOp7BCJ8",
      amount: price * 100,
      currency: "INR",
      name: "Byme.com",
      image: "https://i.ibb.co/344xRpF/byme-1.jpg",
      order_id: order.id,
      handler: (res) => {
        swal({
          title: "Order placed successfully",
          text: "Enjoy your day",
          icon: "success",
        });
      },
      prefill: {
        name: name,
        email: email,
        contact: mno,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  },
  [Razorpay]
);
export default handlePayment;