import React from "react";
import IntlCodes from './intl'
import {formatIntl} from './types'

interface TypeProps {
	unix:number;

	format?:String  ;
	Intl?:formatIntl;
}

/**
 * This component transforms the Epoch value to Date
 *
 * @param unix - value Epoch Timestamp
 * @param Intl - value provides language sensitive string comparison (EN or en=English,ES or es=Spanish)
 * @defaultValue Intl "EN"
 * @param format - value Format Date a Return
 * @defaultValue format "%d.%mm.%Y"
 * @label values in param format : 
 * @ %d  =returns the day of the month for the specified in param unix (1,2..30,31)
 * @ %DD =returns the full day of the week for the one specified in param unix ( Monday, Tuesday,...)
 * @ %D  =returns the shorts day of the week for the one specified in param unix ( Mon, Tue,...)
 * @ %mm =returns the number month in the specified param unix (01,02..11,12)
 * @ %MM =returns the full month  in the specified param unix (January,February..)
 * @ %M  =returns the short month  in the specified param unix (Jan,Feb, Mar...)
 * @ %Y  =returns the full year of the specified param unix (2019,2020, 2021...)
 * @ %H  =returns the 24 hour for the specified param unix (12,13,14...21,23)
 * @ %h  =returns the 12 hour for the specified param unix (12,01,02...10,11)
 * @ %m  =returns the minutes for the specified param unix 
 * @ %s  =returns the seconds for the specified param unix
 * @ %a  =returns the abbreviations (am) or (pm) for the specified param unix (am,pm)
 * @example Here's a simple example:
 * ```ts
 *  <FormatDateEpoch unix={1620501421} format="%DD %d %M %Y - %h:%m:%s %a"  />
 *  return Saturday 8 May 2021 - 03:17:01 pm 
 * ```
 * @returns JSX.Element with Date Format include in props format
 * @internal
*/
const Index = ({ unix = 0, format = "%d.%mm.%Y" ,Intl='en'}:TypeProps):JSX.Element => {
	const convertEpoch = (unixTab:number) => {
		if (unixTab === 0) return null;
		const baseMilliseg = unixTab * 1000;
		const newDateFormat = new Date(baseMilliseg);
		//! Get Date
		const Day = newDateFormat.getDay();
		const Dat = newDateFormat.getDate();
		const Month = newDateFormat.getMonth();
		const Year = newDateFormat.getFullYear();
		//! Get Hours
		const Hour24 = newDateFormat.getHours();
		const Minute = newDateFormat.getMinutes();
		const Second = newDateFormat.getSeconds();
		let AmPm = "am";
		let Hour = Hour24;
		if (Hour > 12) {
			AmPm = "pm";
			Hour -= 12;
		}
		const {formatDays,formatMonth}=IntlCodes({Intl})

		return {
			DatObj: formatDays[Day],
			Day:Day<9?`0${Day}`:Day,
			Dat,
			MonObj: formatMonth[Month],
			Month:(Month+1)<9?`0${Month+1}`:Month+1,
			Year,
			Hour24,
			Hour:Hour<9?`0${Hour}`:Hour,
			Minutes:Minute<9?`0${Minute}`:Minute,
			Seconds:Second<9?`0${Second}`:Second,
			AmPm,
		};
	};
	const formatDate = (format:String) => {
		const objConvert = convertEpoch(unix);
		if (objConvert) {
			const {
				DatObj: { lg, sm },
				Dat,
				MonObj: { mlg, msm },
				Month,
				Year,
				Hour24,
				Hour,
				Minutes,
				Seconds,
				AmPm,
			} = objConvert;

			const countObj = [
				{ mrk: "%d", obj: Dat },
				{ mrk: "%DD", obj: lg },
				{ mrk: "%D", obj: sm },
				{ mrk: "%mm", obj: Month },
				{ mrk: "%MM", obj: mlg },
				{ mrk: "%M", obj: msm },
				{ mrk: "%Y", obj: Year },
				{ mrk: "%h", obj: Hour },
				{ mrk: "%H", obj: Hour24 },
				{ mrk: "%m", obj: Minutes },
				{ mrk: "%s", obj: Seconds },
				{ mrk: "%a", obj: AmPm },
			];
			let convFormat = format;

			for (let props in countObj) {
				const { mrk, obj } = countObj[props];
				convFormat = convFormat.replace(new RegExp(mrk,'g'), obj);
			}
			return convFormat;
		} else return <label>Unix Epoch Erro!</label>;
	};

	return (<div data-testid="epoch-id" >{formatDate(format)}</div>);
};
export default Index;
