import React from "react";
import { SITE_NAME } from "../Head";
import Page404 from "../sections/error/Page404";

export const metadata = {
  title: `Error Page || ${SITE_NAME}`,
};

function Error() {

    return (
        <>
            
        <Page404 />

        </>
    )
}
export default Error