import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import TeamDetails from "../sections/team/TeamDetails";

export const metadata = {
  title: `Team Details || ${SITE_NAME}`,
};


function TeamDetailsPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Team Details" pageBigTitle="Team" />
            <TeamDetails />
        </LayoutWrapper>                
        </>
    )
}
export default TeamDetailsPage
