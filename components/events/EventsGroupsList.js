import React from 'react';
import Link from 'next/link'


export default function EventsGroupsList(props) {

    const selectItem = (props.selectItem) ? props.selectItem : null;

    // https://tailwindcss.com/components/alerts/#app
    return (


        <div className="items-center pb-6">

            <div class="text-left px-3">

                {
                    props.items ? (
                        props.items.map(item => (

                            <div class="items-center text-indigo-100 leading-none rounded-full inline-flex">
                                <Link
                                    href={(item.sysName === selectItem) ? `/[language]/events/[city]/[moment]/` : `/[language]/events/[city]/[moment]/[group]`}
                                    as={(item.sysName === selectItem) ? `${props.baseUrl}` : `${props.baseUrl}/${item.sysName}`}
                                >
                                    <a className={`inline-block align-middle text-gray-500 no-underline border-b-2 border-white ml-1 mr-3 pt-3 pb-1 text-lg ${(item.sysName === selectItem) ? `border-teal-500  text-gray-900` : `hover:border-teal-500 hover:text-gray-900`}`}>
                                        {item.name}
                                    </a>
                                </Link>

                                {/* <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg> */}
                            </div>

                        ))
                    ) : (
                            <div className="m-10">
                                <p>На это время нет актуальных мероприятий, но скоро обязательно появятся :)</p>
                                <p className="mt-4 mb-4"><a className="align-middle no-underline border-b-2 border-white hover:border-teal-500 hover:text-gray-900" href="/">Посмотреть все мероприятия.</a></p>
                            </div>
                        )
                }
            </div>

            {/* {
                props.items ? (
                    props.items.map(item => (

                        <Badge key={`group-${item.sysName}`} color="primary" badgeContent={item.itemscount}>
                            <Link
                                href={(item.sysName === selectItem) ? `/[language]/events/[city]/[moment]/` : `/[language]/events/[city]/[moment]/[group]`}
                                as={(item.sysName === selectItem) ? `${props.baseUrl}` : `${props.baseUrl}/${item.sysName}`}
                            >
                                <a className={`inline-block align-middle text-gray-500 no-underline border-b-2 border-white ml-4 mr-4 pt-2 ${(item.sysName === selectItem) ? `border-teal-500  text-gray-900` : `hover:border-teal-500 hover:text-gray-900`}`}>
                                    {item.name}
                                </a>
                            </Link>
                        </Badge>

                    ))
                ) : (
                        <div className="m-10">
                            <p>На это время нет актуальных мероприятий, но скоро обязательно появятся :)</p>
                            <p className="mt-4 mb-4"><a className="align-middle no-underline border-b-2 border-white hover:border-teal-500 hover:text-gray-900" href="/">Посмотреть все мероприятия.</a></p>
                        </div>
                    )
            } */}

        </div>









    );
}