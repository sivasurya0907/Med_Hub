import React from 'react';
import ChatBot from 'react-simple-chatbot';

const Chatbot = () => {
  return (
   <>
   <ChatBot 
  steps={[
         {
            id: 'Greet',
            message: 'Welcome to MedHub! I am MedHub Bot your Health assistant!',
            trigger: 'Ask Name',
          },
          {
            id: 'Ask Name',
            message: 'What is your name?',
            trigger: 'waiting1',
          },
          {
            id: 'waiting1',
            user: true,
            trigger: 'Name',
          },
          {
            id: 'Name',
            message: 'Hi {previousValue}, How can I assist you today?',
           trigger:'Help'
          },
          {
            id: 'Help',
           user:true,//Help me find and learn about first aid for my condition
           trigger:'Help1'
          },
          {
            id: 'Help1',
            message: 'Okay fine,Choose your Symptoms',
           trigger:'Help2'
          },
          {
            id: 'Help2',
                  options: [
                    { value: 'Fever', label: 'Fever', trigger: 'Fever' },
                    { value: 'Difficulty Breathing', label: 'Difficulty Breathing', trigger: 'Difficulty Breathing' },
                    { value: 'Severe Headache', label: 'Severe Headache', trigger: 'Severe Headache' },
                    { value: 'Soar Throat', label: 'Soar Throat', trigger: 'Soar Throat' },
                    { value: 'Skin Rash', label: 'Skin Rash', trigger: 'Skin Rash' },
                  ],
          },
          {
            id:'Fever',
            message:'Possible Diseases:Influenza (Flu), COVID-1, Common Cold--- First Aid:*Rest and stay hydrated,*Take over-the-counter fever reducers (as per doctor-s recommendation)',
            trigger:'Thank'
          },
          {
            id:'Difficulty Breathing',
            message:'Possible Diseases: Asthma,Pneumonia,Chronic Obstructive Pulmonary Disease (COPD)--- First Aid:*Stay calm and seek emergency medical attention ,*Use prescribed inhalers or medications',
            trigger:'Thank'
          },
          {
            id:'Severe Headache',
            message:'Possible Diseases:MigraineTension, HeadacheCluster ,Headache----First Aid:*Find a quiet, dark room to rest,*Take over-the-counter pain relievers (as per doctor-s recommendation)',
            trigger:'Thank'
          },
          {
            id:'Soar Throat',
            message:'Possible Diseases:Viral Pharyngitis (common cold),Streptococcal Pharyngitis (Strep Throat),Gastroesophageal Reflux Disease (GERD)----First Aid:*Stay hydrated by drinking warm fluids Gargle with warm saltwater,*Take over-the-counter pain relievers (as per doctor-s recommendation)',
            trigger:'Thank'
          },
          {
            id:'Skin Rash',
            message:'Possible Diseases:Allergic Reaction,Eczema,Contact Dermatitis------First Aid:*Avoid scratching the affected area,*Apply a cool compress or anti-itch creamIdentify and avoid potential allergens or irritants',
            trigger:'Thank'
          },
          {
            id:'Thank',
            user:true,//Thank you so much
            trigger:'ThankMH'
          },
          {
            id:'ThankMH',
           message:'You-re Welcome,Take Care! Feel free to contact MedHub anytime',
          end:true,
          }
  ]}
  headerTitle="MedHubBot"
  placeholder="Type your message here..."
  floating={true}
/>

</>
  )
}

export default Chatbot