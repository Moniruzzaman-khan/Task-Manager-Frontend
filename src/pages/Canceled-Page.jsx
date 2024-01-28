import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";

const Canceled = lazy  (()=>import("../components/Canceled/Canceled.jsx"));

const CanceledPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Canceled/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CanceledPage;