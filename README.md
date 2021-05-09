# FORMAT Date EPOCH Reaxio

<p align="center">
  <img src="https://cldup.com/K3-R0bY2T8.gif"/>
</p>
<p align="center">
  <a title="Build Status" href="https://travis-ci.org/carrot/share-button">
   
  </a>
</p>

# An Introduction

React component, easy, simple, small and improved, this is u Format Date Epoch  

# When To Use

When We Require to convert an Epoch Timestamp value to a date that a Human reads, is where we will need this React component. 

## Why Should You Use This?

Many of the components for Reactjs are in a single installation, not only the component you need and in many cases very heavy, but this is ideal for:

1. Quick and easy loading and small
2. They don't inject extra javascript and DOM elements into your page, making it slower.
3. Easy to customize enough to adapt to the design of your site.
4. Reaxion FORMAT Date EPOCHL, takes up very little space, specific and simple for your project.
5. It can be customized in any way.

## 📦 Install

`npm i @reaxio/formatdateepoch`

## 🔨 Usage

```jsx
import FormatDateEpoch from "@reaxio/formatdateepoch";

const App = () => {

	const epochUnix = 1620584155
	const format = '%DD %d %MM %Y - %h:%m:%s %a' //Convert epoch to human-readable date

	return (
		<>
			<h3>Date is:</h3>
			<FormatDateEpoch unix={epochUnix} format={format} Intl='es' />
		</>
	)
};
```

## ✨ API

| Property   | Description                                                                                                | Type    | Default |
| :--------- | :--------------------------------------------------------------------------------------------------------- | :------ | :------ |
| unix        | The current Unix epoch time a convert                                                                            | Number  |         |
| format  | Convert epoch to human-readable date format | string  | %d.%mm.%Y
| Intl   | provides language sensitive string comparison, default is English                                                                            | string |  EN  |

---
* Note 1: In props unix, if value is not valid how Date Epoch, componet return Erro Date Epoch.
* Note 2: The value mask for prop format is next:
 	
	 **%d**  =returns the day of the month for the specified in param unix (1,2..30,31)
	
	**%DD** =returns the full day of the week for the one specified in param unix ( Monday, Tuesday,...)
	
	**%D**  =returns the shorts day of the week for the one specified in param unix ( Mon, Tue,...)
	
	**%mm** =returns the number month in the specified param unix (01,02..11,12)
	
	**%MM** =returns the full month  in the specified param unix (January,February..)
	
	**%M**  =returns the short month  in the specified param unix (Jan,Feb, Mar...)
	
	**%Y**  =returns the full year of the specified param unix (2019,2020, 2021...)
	
	**%H**  =returns the 24 hour for the specified param unix (12,13,14...21,23)
	
	**%h**  =returns the 12 hour for the specified param unix (12,01,02...10,11)
	
	**%m**  =returns the minutes for the specified param unix 
	
	**%s**  =returns the seconds for the specified param unix
	
	**%a**  =returns the abbreviations (am) or (pm) for the specified param unix (am,pm)

* Note 3: The props Intl, accept only ES or es = Spaning or EN or en = English.

---

## 🔺Examples

Look at our [FORMAT Data EPOCH example](https://codesandbox.io/s/inspiring-tdd-t9ogy)
 in CodeSandox, easy, simple and fast !!!

Thanks for using it.
😃 👊🏼
