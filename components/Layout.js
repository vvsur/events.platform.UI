import React from 'react';

import { connect } from 'react-redux'
import { initGA, logPageView } from './analytics'

class Layout extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    }

    render() {
        return (
            <div>
                <div className="flex flex-1 flex-col overflow-hidden relative">

                    {this.props.children}

                    {/* </BaseScrollbars> */}


                </div>

                {/* {config.rightSidePanel.display && (
                        <RightSideLayoutBase />
                    )} */}

                {/* <LayoutMessage /> */}

            </div>
        )
    }
}

export default connect()(Layout);