export * from "./test.actions";
export * from "./events.actions";
export * from "./page.actions";

export function static_GetCitiesList(language) {
  if (language === "ru") {
    return [
      { name: "Любое место", name2: "любом месте", sysname: "all-cities" },
      { name: "Online", name2: "Online", sysname: "online" },
      { name: "Москва", name2: "Москве", sysname: "msk" },
      { name: "Санкт-Петербург", name2: "Санкт-Петербурге", sysname: "spb" },
      { name: "Сочи", name2: "Сочи", sysname: "sch" },
      { name: "Краснодар", name2: "Краснодаре", sysname: "krd" },
      { name: "Казань", name2: "Казани", sysname: "kzn" },
      { name: "Екатеринбург", name2: "Екатеринбурге", sysname: "ekb" },
      { name: "Нижний Новгород", name2: "Нижнем Новгороде", sysname: "nnv" },
      { name: "Новосибирск", name2: "Новосибирске", sysname: "nsk" },
      { name: "Красноярск", name2: "Красноярске", sysname: "kry" },
    ];
  } else {
    return [
      { name: "All cities", name2: "11all cities", sysname: "all-cities" },
      { name: "New York", name2: "New York", sysname: "new-york" },
      { name: "London", name2: "London", sysname: "london" },
    ];
  }
}

export function static_GetMomentsList(language) {
  if (language === "ru") {
    return [
      { name: "Любое время", name2: "В любое время", sysname: "all-times" },
      { name: "Сегодня", name2: "Сегодня", sysname: "today" },
      { name: "Завтра", name2: "Завтра", sysname: "tomorrow" },
      { name: "Выходные", name2: "На выходных", sysname: "this-weekend" },
      { name: "Эта неделя", name2: "На этой неделе", sysname: "this-week" },
      {
        name: "Следующая неделя",
        name2: "На следующей неделе",
        sysname: "next-week",
      },
      { name: "Этот месяц", name2: "В этом месяце", sysname: "this-month" },
      {
        name: "Следуюший месяц",
        name2: "В следуюшем месяцe",
        sysname: "next-month",
      },
      { name: "Прошедшие", name2: "Прошедшие", sysname: "past" },
    ];
  } else {
    return [{ name: "Today", name2: "Today", sysname: "today" }];
  }
}
