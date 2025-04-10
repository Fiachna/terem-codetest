# URL Shortening UI

Code Challenge by Fiachna Carter for Terem

## Approach

 1. Used Vite to create project
 1. Built static mocked version of site for styles so I could focus on functionality afterwards
 1. Wrote tests for expected behaviour
 1. Implemented Logic

## Decisions

  - Went briefly back and forth on using tailwind, opted against it as I wanted to get things done quickly and so just used plain sass modules
	- Had a number of questions but due to turnaround time I held off on asking, they were:
		- The email said I would get a backend test but this is most definitely a frontend test here, is that correct?
		- Is there a style library or component library I could use to speed things up?
		- Just some clarifying questions on sizes/colors etc.
	- Switched to vitest late since I forgot it existed and had started out using jest, I feel a bit dumb on this one
	- Styling is mostly there but lacks the content width for desktop sizes as I just ran out of time
	- I couldn't complete a final functionality test as the cleanuri api throws 405 errors on OPTIONS calls, meaning CORS is busted
	- I started out trying to do things the right way but as time went on I started to rush a bit due to turnaround time, and the time I had already sunk into it and needing to tackle other projects

## Running the app

This app was built using vite, react and typescript. To run the app, first install dependencies:

```
npm install
```

or

```
yarn install
```

Then, once dependencies are installed, the app can be run with the following command:

```
npm run dev
```

or

```
yarn run dev
```

To run the test suite, run the following command:

```
npm run test:unit
```

or

```
yarn run test:unit
```

## Closing thoughts

Not my proudest work, I think I could improve on a lot if I had more time free to work on the app but I think it's at an acceptable state. Normally I do like to fire questions back and forth but due to the desired quick turnaround time I held off as I felt waiting for answers in order to progress would eat up too much time, hindsight will show whether that was a good call or not...

Task took way longer than 3 hours... had it just been building out the interactive components on the page I think I could have kept it timeboxed, but building and styling up the full reactive experience ate a lot of hours, especially without a sketch/figma doc to go off or a component library or css framework to run with...
