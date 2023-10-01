import React from 'react';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig = {
    containerStyle: {
        border: '1px solid rgb(234, 234, 234)',
        borderRadius: '16px',
    },
    tokens: {
        // Featured tokens will appear on top of the list
        featured: [
            {
                address: '0x2fd6c9b869dea106730269e13113361b684f843a',
                symbol: 'CHH',
                decimals: 9,
                chainId: 56,
                name: 'Chihuahua',
                logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21334.png',
            },
        ],
    },
};


const WidgetPage = () => {
    return (
        <div>
            <LiFiWidget integrator="Your dApp/company name" config={widgetConfig} />
        </div>
    );
};

export default WidgetPage;
