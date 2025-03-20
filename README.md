# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# React-practice

react application setup
tech used

1. yarn
2. vite
3. react
4. typescript + SWC

After setup all this application as we init the npm application here also we need to init our yarn

C:\Users\acer>d:

# D:\>npm i yarn -g

changed 1 package in 965ms

# D:\>yarn create vite project11

yarn create v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-vite@6.3.1" with binaries:

- create-vite
- cva
  |

# o Select a framework:

| React
|
o Select a variant:

# | TypeScript + SWC

|
o Scaffolding project in D:\project11...
|
— Done. Now run:

# cd project11

# yarn init || yarn

Done in 14.75s.

# D:\>cd project11

# D:\project11>yarn

yarn install v1.22.22
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 36.63s.

# D:\project11>yarn dev

yarn run v1.22.22
\$ vite

VITE v6.2.1 ready in 404 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help

➜ D:\project11>code .

when we need to import packages with the binding of the types then we can use

➜ yarn add @types/<packagesName>

when we need to send code for the production phase we need to build that code
as that time it will compile that code and make 4 files
all the files will be stored in the dist folder

➜ yarn dev build

1. index.html
2. .css
3. js--> if the app is big then it will break down into chunck
4. svg --> store all the file/photos

"lint": This will maintain the standard of the code as need some shorts of the  
rules are: 1. variable name must be alpha numeric, camel cases, all the function name must be within the limited size
function name must be of the certain size or the length

➜ yarn dev lint==>Now this will set all the rules that we have discussed above

if we need to see about the rules for the linting then we can see search on the chrome
most popular is of the airbnb

The entry point of the react application is of the index.html as of of the outside of the folder

but in the case of react our main file is pages.tsx

Any thing that we write outside of the src directory will be not compile
but images are can be taken from the public directory

when we working on the NEXT.JS
all the file name must be the name of the folder name and last will be
as in next.js what ever we are making of the folder name that is consider as the url of the that pages

in react if we need to use multiple of the components/ function then we can use fragment

➜ <> </> ---> this is called as the fragement
➜ <fragment></fragment> Both of them are of the same things. As we can use any of this things.

LIFE CYCLE OF THE COMPONENTS

1.  Mounting
    When our components get loaded
2.  Updating
    When the components inside a component is updated
3.  Unmounting phase
    Our components get switched

summery for the lifecycle of the components
when we open the websites first it will mounting as that time it gives the skeleton of the websites.
This time it will load the application of the websites (pages) and then it will call the API (network call) and fetch the data to load for that component to be updated or it is mouted (for the very first early phase of the application of randering) and when ever we press any link then it will rander another pages, this time the mounting pahase is completed and it will go for the updating after unmounting. At the time of the unmounting the components will be get switched.

What is strict mode in React application?
--> As in the lifecycle of the components while mounting, updating and unmounting of it there is changes of the data inside of the components and due to this some time there will be infinite renders will be occour, so to overcome this issue react have got one of the external componets that will check / stricts such types of infinite reanders.This is the componets that we implement within the components.

createRoot(documents.getElementsById("root)!).render
(
<StrictMode>
<LoginPage/>
</StrictMode>  
);
what it will check

1. Bugs related to reacts
2. Hooks issues
3. Issues
   Find bugs
   As when the components that are being changed then first it will compile and then it will take the snapshot internally and it will render to the browser and after rendering it will take another snapshot and both the compile snapshot and after render snapshot will be compared and if there is any changes on the state componets then react will sync all of them and give the final componetnts that is called as the reconsillation in the react application.
   Production pahase that strict mode will be not sent as on the development phase it will works

if the virtual dom is not updated as this time the real dom and virtual dom is compared and update all of them based on the state, then this shorts is also called as the reconssilation in the react.

There are two types of the components

1. Functional Based components
2. Class Based components

The react that will store data in the two form

1. Data that are internally stored in the components or the application of the react, that are called as the state. The data that are used to rendered in the application are called as the state

So before the react version 16.8, there were no capability of the functional components to maintain the state, so that time we were using the class based components.As that time only class based componets are stored the state by that time.
so such types of the components that are stored in the class based componets are called as the stateful components.
And the functional componets are called as the statless components. Till before the version of 16.8 version of react
By 16.8 version of react there is release of the webhooks. Among this there is a hook called as the state hook called as statehook, that is only used in the functional components.

so the react version after the 16.8 version we are using of the react webhook called as the statehooks as only compatable for the functional components, due to this reason we are not able use class based components.

2. Data that are given / inputed to the components are called as the props

To learn lifecycle of the componetnts, class based coponents are easier,

what is components in react?
--> compontets are same like the function like of the JS. They accepts the arbitory inputs called as the Props
There are two types of the components

1. Class components
2. Functional Components

# Class components

    Before react version 16.8,it is called as the primary components because it work on the basic of the stateful state as that time functional componets were not able to use to store the states. But later after 18.6 version functionla components also stores data on the basic of the state full components. As later fuctional componetnts also able to maintan the state on the basic of the hooks. So, it is widely used this as the main components as we cannot use mostly class components for the recent react application.

# WHAT IS HOOKS?
==>As same like in the express there is function called as the middleware which stores the req, res, next, same in the react hook also work as that function. As every thing is controlled or it comes as hooks to control all of the application from the frontend.

There are certain rules for the hook and that rules we need to follow in order to maintain that hooks or to maintain our hooks

# Rules

1. Nameing conventation
   -hooks starts with `use<name>()`

   - Hooks can be only in the functionl components
   - Hooks cannot be used inside of the another hooks

   In react we use mainly two hooks

   1. state hooks (which helps to maintain the states in the applcation)
   2. Effeect hooks (also know as the as the side effect hooks / also called as the listerner hooks)
   3. Performence hooks
      - when we need to optimize the performence of the application then we can use the performence hooks and there are two types of the performence hooks and they are called as the
        A. Memo Hooks
        B. Callback hooks

2. state management hooks
   A. Context Hooks
   B. Reducer Hooks
3. Router
   A. react router dom [if we need to works on the basic of the router then we can use this type of the hooks]
4. refrencing of the hooks
   ref hooks
5. Own custom hooks
   As hooks are also called as the function that is used to build the react feature or the functionality as is made by the react which are special following the rules of it.

# Major hooks is (very imoportant)
as basically we can say that hooks are the creater or also called as the listener.

In react if we need to use that hooks it is called as the webhooks

# 1. state hooks (creater hooks )
   ==> If we need to create the data of the components then that time we can use as the state hooks . Basically state hooks are of the asynchrous hooks

  #  HOW TO MAKE THE STATE HOOKS?

   1. First we need to make/ prepare array / because state hooks provides two features [ (state vairable name), (function to manipulate that variable) ]

   # const [email, setEmail]= useState<string>("bikashbishokarma@gmail.com")

   as we cannot change the state of the variable by using
   // email="hello@gmail.com"==> This will be the syntex error

   also cannot change by using of
   // setEmail("hello2@gmail.com")
   As this will bring the infinite times of the loading for the hooks # This will be shown in the browser console that too many render in the application that reasulting of the crash of the server.
   As the top state is render twice it is because there we used first email and its state. first render is because of the state variable[email] and second it render because of the state ["bikashBishokarma@gmail.com"]


      To change the state we need to perform the action as need to change by using of the actin that need to be trigger

# 2. EFFECT HOOKS what is side effect hooks?
   --> As basically we use state hook to create the hooks and if there is any shorts of the change is happen then we can use effect hooks to handel or to listen that hooks.

   we can use effect  hooks by important three ways in react ## [very_very_very_Important_don't_to_forget]
    1. UseEffect((callBack function)=>{
      console.log("This hook is always trigger")
    })  
            This need to import form the react.
   
   While use of the hooks if the hooks maintain the state and if we need to update that hooks then that time we can use the side effect hooks.
   As when we change the effect from the props then we can tell that as the side effect hooks.

as the function that are used inside of the side effect hooks cannot be made for the async function as we used for the setTimeOut function inside of it which cannot be possibe to make for the async function but can be done for it inside of we can pass the async function[iife_function]

 #   what is props?

==> The data that we provide for the components is called as the props. As props can be passed from one components to the another components


# WHat is mean by props drilling?
--> As when the parent components are sending props to the another child components then it is called as the props drilling. As the props are send from parent to child but not send from child to parent. It can be handeled by event handeler of the props


# what is psedu class in Tailwind css or in the react ?
=>A pseudo-class is a special CSS rule that applies styles based on an element's state (like hover, focus, or first-child).
In Tailwind CSS, pseudo-classes are used by adding them before the style class, separated by a colon (:)

# How do we send user any greeting based on the time frame?
--> If we want to make our websites as the UI attractive then we can add the greeting function to make busy and give impression to our customer. So, based on the time frame we can send our user the greeting message and this can be done by the simple logic 

# first make the logic component with segregation inside any file as eg- inside of the utilities by saying greettinguser.tsx
# logic must includes the correct timeframe


# React form
imputs are 
  -type
    -Text,(maximum of 255 character)
    - number,
    - url, 
    - password, 
    - email, 
    - hidden, 
    - file, 
    - radio, 
    - checkbox, 
    - dateTime, 
    - range, 
    - tel, 
    - reset, 
    - button
# What do we do operation with the form?
1. First we need to submit form => Kasari and k ley garxa
      # Submit of form is of last action 
      # form is always comes from the submit button from click event
      # As form submit is not the button event as it will triger the event.
  # what is the EVENT?
      Event is the action performed by the html elements.
   # Any things that we are doing inside of the web browser is called as the event


    # There are many types of the events 
 As we see the button in the html that is is just the button(HTML) elment that will trigger the event for the submit acton. As we need to pass the type that will perform the event, so when we make the html tag we need to pass our type that is similar to the name that we mentioned to backend such as submit reset, username, password, role and everything 
2. second we need to collect the data from the users and how to collect


   # let's handle the form in react
   1. Firstly form will be not handled by the action in the react. So, for this we need to handle by it with the event listner. 

    2. All the <input> html tag inside of the form that we must pass the <name="username">,<name="password"> as the basic of the data we need to send for the backend through API that must be stored in the backend / as the data that except by the API from form# broadwayReactCourse
# From Input handle and recive from the users
==> After the data recive from the user we need to store that data in the form of the state. As we need to make component inside and use of the usestate but beore we need
# Core method to have input and handle the form
```ts
interface ICrediential {
  email: String | null;
  password: String | null;
}
export const RightSecton = ({ label }: LoginParams) => {
  const [crediential, setCrediential] = useState<ICrediential>({
    email: null,
    password: null,
  });
  console.log(crediential);

  const SubmitForm = (e: any) => {
    e.preventDefault()
  };
  return (
    <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
      <h1 className="text-xl font-extrabold text-green-900 text-center md:text-left">
        Login
      </h1>
      <form action="" onSubmit={SubmitForm}>
        <div className="mt-4 flex flex-col md:flex-row">
          <label className="block text-md font-medium py-3 md:w-2/5">
            {label}
          </label>
          <input
            name="email"
            type="email"
            onChange={(event) => {
              setCrediential({
                ...crediential,
                email: event.target.value,
              });
```
As we don't handle form by this type of the custom function. We use liberary or plugins to handle the form.
# 1. React Hook form:
    This hook form handle useually handle 
    a. controlled (value is bind for the input field)
    and

    b. uncontrolled forms( value is not bind for the input field)

    --> We making the input field that are basically two types as controlled and uncontrolled. 

# 2. Formik
  As formik cannot handle the uncontrolled (data is not binded type)


  # so we use  React hook form 
  This is used because it is simple and can handle for the both react and react native also.

  # How to use React Hook form
  # 1. By Register Method
  # 2. By using controll mechanism
# 1. By register Method:(Mostly not used)
   1. Make variable including of 
```ts   
const {register, formState:{errors}, handleSubmit}=useForm({
    defaultValues:{
      email:null,
      password:null
    } as Icrediential // ICrediential is the interface that are type bunding 
   })
   ```
          register=(as this will handle uncontrolled inputs )

          formState=(to handle the validation ,errors that the form generated)

          handleSubmit=(while tha form is submit, to handle the submission event we use this)

# Validation of the form from the frontend
# 1. Yup
# 2. Joi

Basically client can provide any shorts of the data from the frontend but also we need to control as email,  password as max, min and including character and so on

As Joi and yup both will work for the same purpose for the validation of the schema of the form

# validation using of the react-hook-form
# 1. <yarn add yup/joi @reacthook/resolvers>
    form here we can use any of the libery for the schema validation 
# 2. @reacthook/resolvers is required
what ever the validation of the form we required must need from the joi we can follow the same method but need to work from the hook resolever schema


lets discuss about the use flow of the joi
1. First make the DTO schema for any form 
2. second pass the 


```ts
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi";

type LoginParams = {
  label: any;
};
interface ICrediential {
  email: string | null;
  password: string | null;
}

const userLoginDTO=Joi.object({
  email:Joi.string().email({tlds:{allow:false}}).required().messages({
    "string.base":"Email cannot be Empty"// this will straightly pass the message if there is validaion error
  }),
  password:Joi.string().required()// make here for the schema
})


export const RightSection = ({ label }: LoginParams) => {
const {register, formState:{errors}, handleSubmit}=useForm({
  defaultValues:{
      email:null,
      password:null
  } as ICrediential,
  resolver:joiResolver(userLoginDTO)
})

  const SubmitForm = (data:ICrediential) => {
  console.log("submit",data);
  
  };
  console.log(errors);
  
  return (
    <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
      <h1 className="text-xl font-extrabold text-green-900 text-center md:text-left" >
        Login
      </h1>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div className="mt-4 flex flex-col md:flex-row">
          <label className="block text-md font-medium py-3 md:w-2/5">
              
            {label}
          </label>
<div>
<input
            // name="email"
            type="email"
            // onChange={(event) => {
            //   setCrediential({
            //     ...crediential,
            //     email: event.target.value,
            //   });
            // }}
            {...register("email",{required:true})}
            placeholder="Enter your Email..."
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
          <div className="flex text-red-700 italic text-sm">
            {
            errors.email?"*Email is required !":""
            }
          </div>
</div>
```

# Diffrence between JOI and YUP
All the task will be done as the same but the thing is that it will straightly pass the message in the schema of YUP as other is same as like JOI
Joi is Directly importing by <import Joi from "joi">
but
Yup must be importing by <import *as Yup from "yup" >

The key diffrence is of the importing 
as we can pass straight to the schema about the message that what we need to show to the UI about its validation error not by taking its error in the componet inside

# As above all we had used for the  Register Method
  which is not mostly not used 
# But there is the contolled method which is mosyly used
Then what is the diffrence between the controlled and uncontrolled method

 As the controller is used to wrapped for the controlled components
 As while inputing of the the values that are of the defaults values ad=nd later if we need to change that then if we are able to change that value then it is called as the controlled and that is controlled by the controller but cannot be possible by the Register method

Controller is the react componet to control all the validatio of the form and many more as it the componet of the react-hook form

we can simply find in the controller components in  react hook form. Most of the popular liberary such as antd, MUI are also supported this controller. so it make the fast of the working as comparing to the another
As mainly we need to strictly follow the documentation for this as mostly it is given the example

As controller inside we can use the components given by hte diffrent libery as
input we can use as inbuild 

When we work as the frontend developer we need to work as the making of the components which helps for the proper readiability of the code and easy to read by all of the people.
# Also it will increase the reuseability of the code.

## Router for React
As the latest version 19 of the react there is the latest version is available for the react router, before there is the router for the both of the seperate router for react native and for the react web, but now they upgraded it and single react router can be used for the both of the application. 4
Before we were using for the reactive native as the react router and for the react-web used as the react router-DOM 
Latest version must be used for the Router for the react 

# use Case of the  react-Router 
Before the version 7 we need to setup react application first and later we need to setup the router

But after the version 7 from the router we can set up the react application

As in the react application if we need to use the url/route, first we need to register the router first


git problem solvedgit 


hello there to practice the coede




