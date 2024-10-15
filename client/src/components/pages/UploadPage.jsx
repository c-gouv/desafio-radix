import React, {useEffect} from 'react';
import SidebarMenu from '../atoms/sidebarMenu';
import CsvUpload from '../atoms/csvUpload';
import Header from '../atoms/header';
import '../../style/index.css';

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