import React from 'react';

import egg from '../assets/egg.jpg';
import medaldog from '../assets/medaldog.jpg';
import puppyplay from '../assets/puppyplay.jpg';
import dogcare from '../assets/dogcare.jpg';
import diseasedog from '../assets/diseasedog.jpg';


const BlogPost = ({ title, content, imageUrl }) => {
  // Function to render content segments as plain text or links
  const renderContent = () => {
    return content.map((segment, index) => {
      if (segment.type === 'text') {
        return <span key={index}>{segment.text}</span>;
      } else if (segment.type === 'link') {
        return (
          <a key={index} href={segment.url} target="_blank" rel="noopener noreferrer">
            {segment.text}
          </a>
        );
      } else if (segment.type === 'paragraph') {
        return <p key={index}>{segment.text}</p>;
      }
      return null;
    });
    
  };

  return (
    
    <div className="blog-post">
      <h2>{title}</h2>
      <img src={imageUrl} alt="Dog" />
      <p>{renderContent()}</p>
    </div>
  );
};

const BlogPage = () => {
  const posts = [
    {
      title: 'Food for dogs',
      content: [
        { type: 'text', text: 'Cooked, Unseasoned Eggs: Whether hard boiled or scrambled, cooked eggs can be a good treat to share with your canine buddy. Eggs made it to this list of healthy people food that dogs can eat because eggs are a great source of protein, vitamin D, selenium, and riboflavin. ' },
        { type: 'link', text: 'cooked eggs', url: 'https://www.google.com/search?sca_esv=31fe38a8fb03ee39&q=cooked+eggs+for+dogs&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjXqqmhnqqEAxUOUGcHHRekA5AQ0pQJegQICxAB&biw=1366&bih=641&dpr=1' },
        { type: 'text', text: ' important.' }
      ],
      imageUrl: egg, // Add the URL of the image
    },
    {
      title: 'Interesting fact about dog',
      content: [
        { type: 'text', text: ' Yup, medical detection dogs are a thing. Because their sense of smell is so great, some dogs can be trained to sniff out medical conditions. They are used to diagnose a particular condition or to alert their owners if they need more medication. Some are even being trained to sniff out Covid-19! One of these incredible dogs is Medical Detection Dog Pal (pictured above), who was awarded the PDSA Order of Merit. Pal played a vital role in diabetic owner Claire’s life by alerting her of changes in her blood sugar. If not caught in time, these changes could have killed her.' },
        { type: 'link', text: '', url: '' },
        { type: 'text', text: '' }
      ],
      imageUrl: medaldog, // Add the URL of the image
    },
    {
      title: 'Cute Puppy Playing in the Park',
      content: [
        { type: 'text', text: 'Check out this ' },
        { type: 'link', text: ' video!', url: 'https://www.google.com/search?sca_esv=31fe38a8fb03ee39&q=puppies+playing+in+the+park&tbm=vid&source=lnms&sa=X&ved=2ahUKEwiTgNS3oaqEAxUo4jgGHRTBDf0Q0pQJegQICBAB' },
        { type: 'text', text: '' }
      ],
      imageUrl: puppyplay, // Add the URL of the image
    },
    {
      title: 'Preventive care tips',
      content: [
        { type: 'text', text: 'There are a few things you can do to help prevent your dog from developing skin disease due to food allergies.  ' },
        { type: 'link', text: '', url: '' },
        { type: 'text', text: '' },
        { type: 'paragraph', text: 'First, be sure to feed them a high-quality diet that does not contain any ingredients that they may be allergic to. You can talk to your veterinarian about which ingredients to avoid.' },
        { type: 'paragraph', text: 'Second, keep your dog’s skin clean and free of any irritants. Regularly bathe them with a gentle, hypoallergenic shampoo. Be sure to rinse all of the shampoo completely. You may also want to consider using a moisturising conditioner to help keep their skin hydrated' },
        { type: 'paragraph', text: 'Finally, make sure your dog gets plenty of exercises. Exercise can help to reduce stress and improve overall health, both of which can help to prevent skin problems.By following these preventive care tips, you can help reduce the risk of your dog developing skin disease due to food allergies.' },

      ],
      imageUrl: dogcare, // Add the URL of the image
    },
    {
      title: 'Common Symptoms of Skin Disease Due to Food Allergies in Dogs',
      content: [
        { type: 'text', text: 'following...' },
        { type: 'link', text: '', url: '' },
        { type: 'text', text: '' },
        { type: 'paragraph', text: '1.Itching: When your dog is scratching or licking its skin, it may be a sign of an underlying issue like an allergic food reaction. Excessive itchiness can also lead to further complications like secondary skin infections.'},
        { type: 'paragraph', text: '2. Inflammation: An allergic condition known as atopic dermatitis is an inflammatory, persistent skin condition that causes inflammation and redness. This is the second most prevalent food allergic skin condition in dogs.'},
        { type: 'paragraph', text: '3.Head Shaking and scratching due to ear infections: Another common symptom of a food allergy in dogs is ear infections. A dog with a food allergy is likely to suffer from recurrent ear infections. Whimpering, scratching, and head shaking are sometimes the first indications of an ear infection.The ears also turn red, get swollen, and cause pain. ' },
        {type:'paragraph',text:'4.Dry and Flaky Skin: A typical symptom caused due to  food allergy, diet, environment, age and exercise, dry and flaky skin is another common skin condition in dogs.'},
        {type:'paragraph',text:'5.Bald patches: Your dog will likely shed hair from time to time, occasionally in large amounts. But it is not typical for such shedding to leave your dog with obvious bald areas. This is another symptom of skin disease that may be caused due to food and pollen allergy.'},
        {type :'paragraph',text:'6.Pigmented skin: Dogs who have hyperpigmentation have a thickening and darkening of their skin. It is not a particular disease, but rather a response of a dog’s body to certain circumstances like food allergy. Light-brown to black, velvety, rough regions of thickened, frequently hairless skin are indicative of hyperpigmentation'}
    
    
    
      ],
      imageUrl: diseasedog, // Add the URL of the image
    },
  ];

  return (
    <div className="blog-page" >
      
      <h1>My Dog Blog</h1>
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} imageUrl={post.imageUrl} />
      ))}
    </div>
  );
};

export default BlogPage;
