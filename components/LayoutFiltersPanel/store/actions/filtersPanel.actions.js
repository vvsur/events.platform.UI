import axios from 'axios';

export const SET_CITY_SYSNAME = '[FITERS] SET CITY SYSNAME';
export const SET_MOMENT_SYSNAME = '[FITERS] SET MOMENT SYSNAME';
export const SET_IS_SECOND_TYPE_OF_VIEW = '[FITERS] SET IS SECOND TYPE OF VIEW';
export const SET_EVENT_CITY = '[FITERS] SET EVENT CITY';
export const GET_CITIES_LIST = '[FITERS] GET CITIES LIST';

export function setCitySysName(val) {
    return {
        type: SET_CITY_SYSNAME,
        value: val
    }
}

export function setMomentSysName(val) {
    return {
        type: SET_MOMENT_SYSNAME,
        value: val
    }
}

export function setIsSecondTypeOfView(val) {
    return {
        type: SET_IS_SECOND_TYPE_OF_VIEW,
        value: val
    }
}

export function setEventCity(val) {
    return {
        type: SET_EVENT_CITY,
        value: val
    }
}

export function static_GetCitiesList(language) {

    return null;
// console.log("language>>:", language);

//     if (language === 'ru') {

//         return [
//             { name: 'Любой город', name2: 'любом городе', sysName: 'all-cities' },
//             { name: 'Москва', name2: 'Москве', sysName: 'msk' },
//             { name: 'Санкт-Петербург', name2: 'Санкт-Петербурге', sysName: 'spb' },
//             { name: 'Сочи', name2: 'Сочи', sysName: 'sch' },
//             { name: 'Краснодар', name2: 'Краснодаре', sysName: 'krd' },
//             { name: 'Казань', name2: 'Казани', sysName: 'kzn' },
//             { name: 'Екатеринбург', name2: 'Екатеринбурге', sysName: 'ekb' },
//             { name: 'Нижний Новгород', name2: 'Нижнем Новгороде', sysName: 'nnv' },
//             { name: 'Новосибирск', name2: 'Новосибирске', sysName: 'nsk' },
//             { name: 'Красноярск', name2: 'Красноярске', sysName: 'kry' },
//         ]

//     } else {

//         console.log("language>>:", language);

//         return [
//             { name: 'All cities', name2: 'all cities', sysName: 'all-cities' },
//             { name: 'New York', name2: 'New York', sysName: 'new-york' },
//             { name: 'London', name2: 'London', sysName: 'london' },
//             //{ name: 'Atlanta', name2: 'Atlanta', sysName: 'atlanta' },
//         ]
//     }

}

export function static_GetMomentsList(language) {

    return null;
    // if (language === 'ru') {

    //     return [
    //         { name: 'Любое время', name2: 'В любое время', sysName: 'all-times' },
    //         { name: 'Сегодня', name2: 'Сегодня', sysName: 'today' },
    //         { name: 'Завтра', name2: 'Завтра', sysName: 'tomorrow' },
    //         { name: 'Выходные', name2: 'На выходных', sysName: 'this-weekend' },
    //         { name: 'Эта неделя', name2: 'На этой неделе', sysName: 'this-week' },
    //         { name: 'Следующая неделя', name2: 'На следующей неделе', sysName: 'next-week' },
    //         { name: 'Этот месяц', name2: 'В этом месяце', sysName: 'this-month' },
    //         { name: 'Следуюший месяц', name2: 'В следуюшем месяцe', sysName: 'next-month' },
    //     ]

    // } else {

    //     return [
    //         { name: 'Today', name2: 'Today', sysName: 'today' },
    //     ]

    // }
}

