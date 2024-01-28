import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";

const Progress = lazy  (()=>import("../components/Progress/Progress.jsx"));

const ProgressPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Progress/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ProgressPage;