import React, { useEffect } from 'react';
import Header from './header';
import SidebarMenu from './sidebarMenu';

import OverviewHeader from './overviewHeader';
import AvgTabela from './avgTabela';
import KpiMedias from './kpiMedias';
import '../style/index.css'

function Overview() {
    useEffect(() => {
        document.title = 'Dashboard'
    }, []);

    return (
        <>
        <Header/>
        <SidebarMenu/>
        <main>
            <OverviewHeader/>
            <KpiMedias/>
            <AvgTabela/>
        </main>
        </>
    )
};

export default Overview;