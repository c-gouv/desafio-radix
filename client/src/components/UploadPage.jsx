import React, {useEffect} from 'react';
import SidebarMenu from './sidebarMenu';
import CsvUpload from './csvUpload';
import Header from './header';
import '../style/index.css';

function Upload() {
    useEffect(() => {
        document.title = 'Upload'
    }, []);

    return (
        <>
        <Header/>
        <SidebarMenu/>
        <main>
            <CsvUpload/>
        </main>
        </>
    )
};

export default Upload;