import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";

const Completed = lazy  (()=>import("../components/Completed/Completed.jsx"));

const CompletedPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Completed/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CompletedPage;