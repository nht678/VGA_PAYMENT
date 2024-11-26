
import React from "react";
import { Helmet } from "react-helmet-async";
import HighSchoolView from "src/sections/highschool/view/highschool-view";

export default function HighSchoolPage() {
    return (
        <>
            <Helmet>
                <title> Trường cấp ba</title>
            </Helmet>

            <HighSchoolView />
        </>
    );
}
