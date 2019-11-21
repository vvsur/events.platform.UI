import React from "react";
import Link from 'next/link'

const NextButton = ({ handleGetPage, currentPage, isDisabled, urlHref, urlAs }) => (
    <span>
        {
            isDisabled === true ? (
                <span
                    className="cursor-default mr-1 pl-4 pr-4 pt-2 pb-2 font-bold rounded border border-transparent text-gray-500">
                    Следующая страница
        </span>
            ) : (
                    <Link href={urlHref} as={urlAs}>
                        <a
                            // onClick={handleGetPage.bind(null, urlAs, currentPage + 1)}
                            // to={urlAs}
                            className="cursor-pointer mr-1 pl-4 pr-4 pt-2 pb-2 font-bold rounded border border-transparent hover:text-white hover:shadow hover:bg-teal-500">
                            Следующая страница
                        </a>
                    </Link>
                )

        }
    </span>
);

const PreviousButton = ({ handleGetPage, currentPage, isDisabled, urlHref, urlAs }) => (
    <span>
        {
            isDisabled === true ? (
                <span
                    className="cursor-default mr-1 pl-4 pr-4 pt-2 pb-2 font-bold rounded border border-transparent text-gray-500">
                    Предыдущая
        </span>
            ) : (
                    <Link href={urlHref} as={urlAs}>
                        <a
                            // onClick={handleGetPage.bind(null, prevUrl, currentPage - 1)}
                            // to={prevUrl}
                            className="cursor-pointer mr-1 pl-4 pr-4 pt-2 pb-2 font-bold rounded border border-transparent hover:text-white hover:shadow hover:bg-teal-500">
                            Предыдущая
                        </a>
                    </Link>
                )
        }
    </span>
);



const SetPageButton = ({ handleGetPage, currentPage, type, pageCount, urlHref, urlAs }) => {
    const ellipsis = (<span className="mr-1 pl-4 pr-4 pt-2 pb-2 font-bold rounded border border-transparent">...</span>);

    let component = null;
    const leftEllipsis = type === 0 ? ellipsis : null;
    const rightEllipsis = type === 1 ? ellipsis : null;
    const page = type === 1 ? 1 : pageCount;


    if ((type === 1 && pageCount > 1 && currentPage > 1) || (type === 0 && pageCount > 1 && currentPage < pageCount)) {
        component = (
            <span>
                {leftEllipsis}

                <Link href={urlHref} as={urlAs}>
                    <a
                        className="cursor-pointer mr-1 pl-4 pr-4 pt-2 pb-2 font-bold rounded border border-transparent hover:text-white hover:shadow hover:bg-teal-500"
                    // onClick={handleGetPage.bind(null, pageUrl, page)}
                    // to={pageUrl}
                    >
                        {page}
                    </a>
                </Link>
                {rightEllipsis}
            </span>
        );
    }


    return component;
};


export default class Pagination extends React.PureComponent {

    render() {
        const {
            currentPage,
            itemsCount,
            handleGetPage,
            // currentPageItemsNum,
            pageSize,
            baseUrl,
            //baseUrlAdditionParams
            group
        } = this.props;

        let currentPageInPagination = currentPage ? currentPage : 0;
        if (currentPageInPagination === 0) currentPageInPagination = 1;

        let isPrevDisabled = false;
        let isNextDisabled = false;

        let isVisible = false;

        let pageCount = Math.ceil(itemsCount / pageSize);

        let prevUrl = {
            urlHref: { pathname: '/[language]/events/[city]/[moment]', query: { page: (currentPageInPagination - 1), group : group } },
            urlAs: baseUrl + "?page=" + (currentPageInPagination - 1) + (group ? "&group=" + group : "")
        };
        let nextUrl = {
            urlHref: { pathname: '/[language]/events/[city]/[moment]', query: { page: (currentPageInPagination + 1), group : group } },
            urlAs: baseUrl + "?page=" + (currentPageInPagination + 1)  + (group ? "&group=" + group : "")
        };
        let firstPageUrl = {
            urlHref: { pathname: '/[language]/events/[city]/[moment]', query: { group : group } },
            urlAs: baseUrl + (group ? "?group=" + group : "")
        };
        let lastPageUrl = {
            urlHref:  { pathname: '/[language]/events/[city]/[moment]', query: { page: pageCount, group : group } },
            urlAs: baseUrl + "?page=" + pageCount + (group ? "&group=" + group : "")
        };

        if (currentPageInPagination <= 1) isPrevDisabled = true;
        if (currentPageInPagination === 2) prevUrl = {
            urlHref: { pathname: '/[language]/events/[city]/[moment]', query: { group : group } },
            urlAs: baseUrl + (group ? "?group=" + group : "")
        };

        if (pageCount > 1) isVisible = true;

        if (currentPageInPagination >= pageCount) isNextDisabled = true;

        if (isVisible === false) {
            return null;
        }
        else {
            return (
                <div className="p-3 border-gray-400 bg-gray-200">

                    <PreviousButton
                        isDisabled={isPrevDisabled}
                        //handleGetPage={handleGetPage}
                        currentPage={currentPageInPagination}
                        urlHref = {prevUrl.urlHref}
                        urlAs = {prevUrl.urlAs}
                    />
                    <span>
                        <SetPageButton
                            type={1}
                            currentPage={currentPageInPagination}
                            pageCount={pageCount}
                            //handleGetPage={handleGetPage}
                            urlHref = {firstPageUrl.urlHref}
                            urlAs = {firstPageUrl.urlAs}
                        // dataSpec="paginator__first-page-link"
                        />
                        <span className="mr-1 pl-4 pr-4 pt-2 pb-2 font-bold rounded border border-transparent text-white shadow bg-teal-500 border border-transparent">{currentPageInPagination}</span>
                        <SetPageButton
                            type={0}
                            currentPage={currentPageInPagination}
                            pageCount={pageCount}
                            //pageUrl={lastPageUrl}
                            urlHref = {lastPageUrl.urlHref}
                            urlAs = {lastPageUrl.urlAs}
                            //handleGetPage={handleGetPage}
                        // dataSpec="paginator__last-page-link"
                        />
                    </span>
                    <NextButton
                        currentPage={currentPageInPagination}
                        handleGetPage={handleGetPage}
                        isDisabled={isNextDisabled}
                        //nextUrl={nextUrl}
                        urlHref = {nextUrl.urlHref}
                        urlAs = {nextUrl.urlAs}
                    />
                </div>
            );
        }
    }
}