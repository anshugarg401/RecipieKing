import React from "react";
import Faq from "react-faq-component";


const data = {
  // title: "FAQ (How it works)",
  rows: [
    {
      title: "What is a balanced diet?",
      content: `A balanced diet includes a variety of foods from different food groups, such as fruits, vegetables, whole grains, lean proteins, and healthy fats. It provides the body with essential nutrients, vitamins, and minerals needed for optimal health.     `,
    },
    {
      title: "What are some healthy snack options?",
      content:
        "Healthy snack options include fruits, vegetables with hummus or yogurt dip, nuts and seeds, whole grain crackers with cheese, Greek yogurt, smoothies, and homemade energy bars..",
    },
    {
      title: "How many calories should I consume in a day?",
      content:
        "The number of calories needed per day varies depending on factors such as age, gender, weight, height, and activity level. It is best to consult with a healthcare professional or a registered dietitian to determine your specific calorie needs.",
    },
    {
      title: "Are carbohydrates bad for you?",
      content:
        `Carbohydrates are an important source of energy for the body. However, it is important to choose complex carbohydrates like whole grains, fruits, and vegetables over refined carbohydrates like white bread and sugary snacks, as they provide more nutrients and fiber.

      `,
    },
    {
      title: "Can I lose weight by skipping meals?",
      content:
        `Skipping meals is not a healthy or sustainable way to lose weight. It can lead to nutrient deficiencies, slowed metabolism, and overeating later on. It is important to focus on balanced meals and portion control for weight management.       `,
    },
    {
      title: "Is it necessary to count calories to lose weight?",
      content:
        `Counting calories can be a useful tool for weight management, but it is not necessary for everyone. It is more important to focus on the quality of the foods you eat, portion sizes, and overall balance in your diet.      `,
    },
    {
      title: "Are all fats bad for you?",
      content:
        "Not all fats are bad for you. Healthy fats, such as those found in avocados, nuts, seeds, and olive oil, are essential for a balanced diet. They help with nutrient absorption, brain function, and hormone production..",
    },

    
  ],
};



function FaqSection() {
  return (
    <div className="my-20 ">
      <h1 className="text-center text-red-500 font-bold">FAQ</h1>
      <div className="flex justify-center px-5 md:px-20 mb-24">
      <Faq data={data}  />
      </div>
      
    </div>
  );
}

export default FaqSection;
