import React, { useEffect } from 'react';
import Header from '../atoms/header';
import SidebarMenu from '../atoms/sidebarMenu';

import OverviewHeader from '../atoms/overviewHeader';
import AvgTabela from '../atoms/avgTabela';
import KpiMedias from '../atoms/kpiMedias';
import '../../style/index.css'

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