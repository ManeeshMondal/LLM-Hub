# LLM-Hub
Online LLM Store
The application gives users the ability to explore, try and create different kinds of LLMs. React, and the MUI are used for developing client-side application. Data is fetched from mock server repository reated in Node and deployed on Render. The sections below detail the salient features of this project.

![image](https://github.com/ManeeshMondal/LLM-Hub/assets/93001043/1d9a362d-8745-45d9-ad28-922b8506ef29)
![image](https://github.com/ManeeshMondal/LLM-Hub/assets/93001043/fdac5693-6b48-4880-8a46-aeb78bb86022)
![image](https://github.com/ManeeshMondal/LLM-Hub/assets/93001043/46e45b1c-fa44-40a7-a404-f0ea0db58878)
![image](https://github.com/ManeeshMondal/LLM-Hub/assets/93001043/058d1110-9c5b-4b8c-810b-2276f6aea1c1)

## Features
 <br/>Search Functionality: Do you want to simultaneously browse different models? Yes, please proceed. You can fetch previous data by resetting filters without re-rendering page because each component retains its own distinct states.
  <br/>Filters: Filters in this project are user-selectable criteria, such as the number of reviews, categories, and minimum ratings, used to refine the displayed list of models. These filters enable users to customize their viewing experience by narrowing down the models based on their specific preferences or requirements.
 <br/> Memoization: Utilizing useMemo in React allows to memoize the result of computations or operations, such as filtering models based on user-defined criteria. By memoizing the filtered models, we optimize performance by avoiding unnecessary re-renders when the component's dependencies remain unchanged.
 <br/> Try Out Section: The "Try Out" section offers users the opportunity to interact with the created models in real-time, providing a sandbox environment for experimentation. Within this section, users can input sample data or parameters and observe the model's output or behavior. Additionally, users have the ability to copy the model's code directly from the interface, facilitating seamless integration into their own projects or workflows.
 <br/> Ability to create new models: The form for creating a new model comprises several essential components. It includes input fields for the model name, description, and code, enabling users to define the model's identity and functionality. Additionally, users can select the model's category from a dropdown menu, aiding in organization and classification. Furthermore, the form features an image upload functionality, allowing users to associate a visual representation with the model. Together, these components provide users with a comprehensive interface to input and customize details for the creation of a new model, enhancing usability and flexibility.
Performance Audit
 <br/> PageSpeed Insights: The site also scores 95 points in Accessibility and 96 points in Best Practices. The exact metrics are:

First Contentful Paint: 0.7s
Last Contentful Paint: 1.1s
Speed Index: 1.2s
Cumulative Layout Shift: 1ms



