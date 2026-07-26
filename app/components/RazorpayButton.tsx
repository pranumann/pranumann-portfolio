"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Props = {
  amount: number;
};

export default function RazorpayButton({ amount }: Props) {
  const [loading, setLoading] = useState(false);


  const loadRazorpay = () => {
    return new Promise((resolve) => {

      if (window.Razorpay) {
        resolve(true);
        return;
      }


      const script = document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";


      script.onload = () => {
        resolve(true);
      };


      script.onerror = () => {
        resolve(false);
      };


      document.body.appendChild(script);

    });
  };



  const handlePayment = async () => {

    try {

      setLoading(true);


      const sdkLoaded = await loadRazorpay();


      if (!sdkLoaded) {
        alert("Razorpay SDK failed to load");
        return;
      }



      const response = await fetch(
        "/api/payment",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            amount,
          }),
        }
      );



      const data = await response.json();



      if (!response.ok) {

        alert(
          data.error ||
          "Payment order creation failed"
        );

        return;
      }



      const order = data.order;



      const options = {

        key:
          process.env
          .NEXT_PUBLIC_RAZORPAY_KEY_ID,


        amount:
          order.amount,


        currency:
          order.currency,


        name:
          "Pranumann Portfolio",


        description:
          "Support My Journey 🚀",


        order_id:
          order.id,


        method: {

          upi: true,

          card: true,

          netbanking: true,

          wallet: true,

        },


        handler: function () {

          alert(
            "Thank you for supporting my journey ⭐🚀"
          );

        },


        prefill: {

          name: "",

          email: "",

        },


        notes: {

          purpose:
            "Portfolio Support",

        },


        theme: {

          color:
            "#facc15",

        },

      };



      const razorpay =
        new window.Razorpay(options);



      razorpay.open();



    } catch (error) {


      console.error(
        "Payment Error:",
        error
      );


      alert(
        "Something went wrong"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <button

      onClick={handlePayment}

      disabled={loading}

      className="
      mt-6
      w-full
      py-2
      rounded-xl
      bg-yellow-400
      text-black
      font-semibold
      hover:bg-yellow-300
      transition
      flex
      justify-center
      items-center
      gap-2
      disabled:opacity-60
      "

    >

      {
        loading ? (

          <>

            <Loader2
              className="animate-spin"
              size={18}
            />

            Processing...

          </>

        ) : (

          "Support ⭐"

        )
      }


    </button>

  );

}