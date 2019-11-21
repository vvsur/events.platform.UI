import React from 'react';
import { useSelector } from 'react-redux';

function LayoutFooter(props) {

	const { content } = props;

	//const footer = useSelector(({ pageReducer }) => pageReducer.footer);

	if (!content) return null;

	return (
		// <ThemeProvider>
		<>
			<footer className="bg-white border-t border-gray-400 shadow">

				{/* <div className="container max-w-4xl mx-auto flex py-8" dangerouslySetInnerHTML={{ __html: footer.content }}></div> */}
				<div className="w-full container mx-auto flex flex-wrap py-10">

					<div className="block w-full text-right align-bottom">
						<ul className="inline-block">
							<li><a className='block align-middle no-underline border-b-2 border-white ml-4 mr-4 pt-2 hover:border-teal-500 hover:text-gray-900' href="/ru/content/about">О ПРОЕКТЕ GonnaVisit</a></li>
							<li><a className='block align-middle no-underline border-b-2 border-white ml-4 mr-4 pt-2 hover:border-teal-500 hover:text-gray-900' href="/ru/events/msk/today">СЕГОДНЯ В МОСКВЕ</a></li>
						</ul>
					</div>
					<div className="block w-full align-bottom">
						© 2019 GonnaVisit.com
						</div>

				</div>



			</footer>

		</>
		// </ThemeProvider>
	);
}

export default LayoutFooter;
