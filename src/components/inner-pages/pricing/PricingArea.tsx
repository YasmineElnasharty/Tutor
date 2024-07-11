import Link from "next/link";

const pricing_data = [
   {
      id: 1,
      title: "Premium Membership",
      price: 500,
      currency: "Rs.",
      contacts: 10,
      validity: "6 Months",
      demoClassText: "GET FREE DEMO CLASS",
      demoClassSubText: "Best value for your money!",
      benefits: [
         "Professional & Experienced Tutors",
         "Best Home Tutors at Affordable Price",
         "Contact Tutors Directly",
         "Upto 50% extra contacts free of cost in case you don't find tutor with given contacts.",
         "Free Tutor replacement support for 6 months.",
         "Premium Phone/Whatsapp/Chat Support.",
         "100% money back guarantee."
      ]
   },
   {
      id: 2,
      title: "Basic Membership",
      price: 635,
      currency: "Rs.",
      contacts: 5,
      validity: "3 Months",
      demoClassText: "GET FREE DEMO CLASS",
      demoClassSubText: "Best value for your money!",
      benefits: [
         "Experienced Tutors",
         "Affordable Price",
         "Contact Tutors Directly",
         "Free Tutor replacement support for 3 months.",
         "Basic Phone/Whatsapp Support."
      ]
   }
];

const PricingArea = () => {
   return (
      <div className="pricing-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-lg-5 col-md-6">
                     <div className="single-pricing-inner-wrap">
                        <div className="single-pricing-inner">
                           <div className="ribbon">
                              <span>1/3rd of Market Price*</span>
                              <span>Lowest Price With Money Back Guarantee</span>
                           </div>
                           <h6 className="title">{item.title}</h6>
                           <div className="price-area">
                              <span className="new-price">{item.currency}{item.price}</span>
                           </div>
                           <div className="pricing-details">
                              <p>Tutor Contacts: <span>{item.contacts}</span></p>
                              <p>Validity: <span>{item.validity}</span></p>
                           </div>
                           <p className="demo-class-subtext">{item.demoClassSubText}</p>
                           <ul className="pricing-list">
                              {item.benefits.map((benefit, index) => (
                                 <li key={index} className="check"><i className="fa fa-check"></i>{benefit}</li>
                              ))}
                           </ul>
                           <Link className="ed-btn btn-base btn-radius w-100" href="#">
                              {item.demoClassText}
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PricingArea;
