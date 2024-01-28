import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import {lazy, Suspense,} from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";

const Dashboard = lazy  (()=>import("../components/Dashboard/Dashboard.jsx"));

const DashboardPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Dashboard/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default DashboardPage;