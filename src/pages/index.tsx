import React from 'react';
import c from 'classnames';
import './index.less';
import jsCheckerMap from '../checker-core';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: 'letConst'
        }
    }
    handleItemClick = key => {
        this.setState({
            currentKey: key
        })
    };
    renderSupport = () => {
        const els = [];
        for (const key in jsCheckerMap) {
            const values = jsCheckerMap[key];
            const supportCls = c('support', {
                'show': this.state.currentKey === key
            });
            const ulLists = (
                <div key={key} className={supportCls}>
                    <div className="support-header" onClick={this.handleItemClick.bind(this, key)}>
                        {
                            key
                        }
                    </div>
                    <ul className="support-content">
                        {
                            values.map((value, index) => {
                                const {name, grammar, type, isSupport} = value;
                                const liCls = c('support-item', {
                                    'not-support': !isSupport
                                });
                                return ((
                                    <li className={liCls} key={index}>
                                        <div>
                                            <span>{name}</span>
                                        </div>
                                    </li>
                                ));
                            })
                        }
                    </ul>
                </div>
            );
            els.push(ulLists);
        }
        return els;
    }
    render() {
        return (
            <>
                <div className="header">
                    浏览器ES6接口支持情况
                </div>
                <div className="content">
                    {
                        this.renderSupport()
                    }
                </div>
            </>
        );
    }
}
export default App;
