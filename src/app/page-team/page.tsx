import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import TeamGrid from "../sections/team/TeamGrid";
import Instagram from "../sections/pricing/Instagram";

export const metadata = {
  title: `Our Teams || ${SITE_NAME}`,
};

function TeamPage() {

    return (
        <>
        <LayoutWrapper HeaderStyle="headerInner">
            <PageTitle pageName="Team Grid" pageBigTitle="Team" />
            <TeamGrid />
            <Instagram />
        </LayoutWrapper>
        </>
    )
}
export default TeamPage