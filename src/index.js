import React from "react";
import OverviewHeader from './components/overviewHeader';
import KpiMedias from './components/kpiMedias';
import AvgTabela from'./components/avgTabela';

function Index(){
    console.log("banana")
    return (
        <div>
            <OverviewHeader />
            <main>
                <KpiMedias />
                <AvgTabela />
            </main>
        </div>
    );
};

export default Index;