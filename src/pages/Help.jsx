import React from 'react'
import Congrats from './Congrats'  
import Nav from '../Component/Header/Nav'
import Footer from '../Component/Footer'

const Help = () => {
  return (
    <div>
      <Nav></Nav>
       <section className='flex flex-col justify-center items-center'>
          <div className="  w-11/12 min-h-2.5 p-14 rounded-xl">
            <div className="border-red-500 border-8 mx-auto bg-orange-500 text-white shadow-lg rounded-2xl p-6"> 
               <div className='m-5 mb-16 font-bold text-6xl underline text-center underline-offset-8 underline-4 '>Customer Service</div>
                <div className='m-5 font-bold text-3xl block '>How Can We Help You Today?</div>
               <span className='text-xl text-yellow-200 font-semibold space-x-2'>
                 We're here to assist you,that Whether you have a question about your order, need help with a product, or want to learn more about our services, our team is ready to support you.
               </span>
               <div className="mb-4 mt-8"> 
                  <h2 className="text-3xl  font-bold mb-2">General Information</h2>
                  <p className="text-gray-700 text-lg font-medium m-4"><b>Shopping Experience:</b> Our user-friendly website makes it easy to browse, search, and purchase products. Enjoy a seamless shopping experience with detailed product descriptions, high-quality images, and customer reviews..</p> 
                  <p className="text-gray-700 text-lg font-medium m-4"><b>Account Management:</b> Create an account to manage your orders, track shipments, and save your preferences for a personalized shopping experience.</p>
                </div> 
                {/* Order and shipping */}
             <div className="mb-4"> 
               <h2 className="text-3xl font-semibold mb-2">Order & Shipping</h2> 
              <h3 className='text-2xl font-bold text-yellow-300 ml-8'>Order Processing</h3>
               <p className="text-gray-700 text-lg font-medium m-4"><b>Confirmation:</b> Once you place an order, you will receive an email confirmation with your order details</p> 
               <p className="text-gray-700 text-lg font-medium m-4"><b>Processing Time:</b> Orders are typically processed within 1-2 business days. During peak times, processing may take a bit longer.</p>
               <p className="text-gray-700 text-lg font-medium m-4"><b>Order Tracking:</b> After your order has been shipped, you will receive a tracking number via email. Use this number to track the status of your shipment.</p>
               <p className="text-gray-700 text-lg font-medium m-4"><b>Order Modification:</b> You can modify your order within 24 hours of placing it. Please contact our customer service team for assistance.</p>
               <p className="text-gray-700 text-lg font-medium m-4"><b>Order Cancellation:</b> Orders can be canceled within 24 hours of placement without any penalties. After this period, cancellations may not be possible as the order might already be processed.</p>
               <p className="text-gray-700 text-lg font-medium m-4"><b>International Shipping:</b>
We offer international shipping to selected countries. Delivery times and shipping rates vary based on the destination.
Customers are responsible for any customs duties, taxes, or fees associated with international shipments.</p>
             </div> 
              {/* Payment and Billing */}
              <div className="mb-4">
                 <h2 className="text-3xl font-bold mb-2">Payments & Billing</h2>
                 <h3 className='text-2xl font-bold text-yellow-300'>Accepted Payment Methods:</h3>
                  <p className="text-gray-700 text-lg font-medium m-4"><b>Credit/Debit Cards: </b>
                  We accept all major credit and debit cards, including Visa, MasterCard, American Express, and Discover.</p> 
                  <p className="text-gray-700 text-lg font-medium m-4"><b>Net Banking: </b>Pay directly from your bank account using our secure net banking options..</p> 
                  <p className="text-gray-700 text-lg font-medium m-4"><b>UPI:</b> Use your Unified Payments Interface (UPI) ID for quick and secure transactions.</p> 
                  <p className="text-gray-700 text-lg font-medium m-4"><b>Digital Wallets:</b> We support payments through popular digital wallets like PayPal, Google Pay, and Apple Pay.</p> 
                  <p className="text-gray-700 text-lg font-medium m-4"><b>Cash on Delivery (COD):</b> Available for select locations, allowing you to pay for your order upon delivery.</p> 
                  <p className="text-gray-700 text-lg font-medium m-4">.</p> 
                </div> 
              {/* Refunds and Returm  */}
                <div className="mb-4">
                     <h2 className="text-3xl font-bold mb-2">Returns & Refunds</h2>

                     <h3 className='text-2xl font-bold text-yellow-300'>Return Policy</h3>
                     <p className="text-gray-700 text-lg font-medium m-4"> <b>Eligibility:</b> Items can be returned within 30 days of receipt for a full refund or exchange, provided they are in their original condition, unused, and with all tags and packaging intact.</p>
                     <p className="text-gray-700 text-lg font-medium m-4"><b>Non-Returnable Items:</b> Custom-made products, perishable goods, and final sale items are not eligible for returns.</p>
                     <p className="text-gray-700 text-lg font-medium m-4"><b>Reporting Damaged Item:</b> If you receive a damaged or defective item, please contact our customer service team within 48 hours of delivery. Provide photos of the damaged item and packaging for verification.</p>
                     <p className="text-gray-700 text-lg font-medium m-4"><b>Replacement Of Items :</b> We will arrange for a replacement or a full refund for the damaged or defective item at no additional cost to you.</p>
                 </div> 
                      {/* FAQs */}
                   <div className="mb-4"> 
                            <h2 className="text-3xl font-bold mb-2">FAQs</h2> 
                            <p className="text-gray-700 text- font-lg m-4 mb-1">What payment methods do you accept?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mt-1">We accept credit/debit cards, net banking, UPI, digital wallets, and Cash on Delivery.</p> 
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1">How do I apply a discount code?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1">Enter the discount code in the designated field at checkout and click "Apply."</p>  
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1">What should I do if my payment fails?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1">Ensure your payment details are correct and try again. If the issue persists, contact your bank or our customer service team for assistance.</p>     
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1">How do I track my order?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1">You can track your order using the tracking number provided in the shipping confirmation email.</p>  
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1">Can I change my shipping address after placing an order?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1">Please contact our customer service team within 24 hours to request an address change.</p>
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1">What should I do if my order is delayed?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1">If your order is delayed beyond the estimated delivery time, please reach out to our customer service team for assistance.</p>  
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1">How long do I have to return an item?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1">You have 30 days from the date of receipt to return an item.</p>  
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1">Can I exchange an item?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1">es, you can exchange eligible items by initiating a return and selecting the exchange option</p>  
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1">How do I track my return?</p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1">You can track your return using the tracking number provided on the return shipping label.</p>  
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1"></p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1"></p>  
                            <p className="text-gray-700 text-lg font-medium m-4 mb-1"></p> 
                            <p className="ml-10 text-white text-lg font-medium m-4 mb-1"></p>  
                    </div> 
                  </div>
                </div>
             </section>
      <Footer></Footer>
    </div>
  )
}
export default Help
