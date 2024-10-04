import React from 'react';
import AvgTabela from './avgTabela';
import OverviewHeader from './overviewHeader';
import KpiMedias from './kpiMedias';
import '../style/index.css'

function Overview() {
    return (
        <>
        <OverviewHeader />
        <main>
            <KpiMedias />
            <AvgTabela />
        </main>
        </>
    )
};

export default Overview;