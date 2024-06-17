import React, { useState } from 'react';
import "./faq.css";

function FaqSection(){
  const faqs = [
    { question:'How do I create a profile for my dog?',answer:"To create a profile for your dog, simply sign up for an account on PetMatch and provide information about your dog, including breed, age, gender, and any other relevant details in the description box given while adding details about dog."},
    { question: 'How does PetMatch determine compatibility between dogs?', answer: 'PetMatch uses a proprietary algorithm that takes into account factors such as breed compatibility, gender preferences, age, and health statuses of the dogs to suggest potential matches. We aim to find companions that are not only compatible but also have the potential for a harmonious relationship' },
    { question: 'Can I specify preferences for the type of dog I am looking for?', answer: 'Yes, absolutely! When creating your profile, you can specify preferences such as breed, age, gender, and any specific characteristics you are looking for in a companion. Our matchmaking algorithm will take these preferences into account when suggesting potential matches.' },
    { question: 'How can I contact for the preferred match?', answer: 'The moment you create your profile, you will be shown the match for your dog breed accordingly.' },
    { question: "what is provided in the blog section?", answer:"Mainly blog section is providing you some facts, details ,food ,lifestyle and some videos etc. regarding dogs."},
    { question:" Can we do shopping here?",answer:"yes! you can shop for products like accessories, food for dogs."},
  ];

  
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h3 className="question" onClick={() => toggleAnswer(index)}>
            {faq.question}
          </h3>
          <p className={`answer ${expandedIndex === index ? 'expanded' : ''}`}>
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;