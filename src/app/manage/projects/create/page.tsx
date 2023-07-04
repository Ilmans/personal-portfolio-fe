"use client";
import React, { Fragment } from "react";
import HeadSection from "../../../../components/Dashboard/HeadSection";
import Form from "../../articles/create/Form";
import FormProject from "./FormProject";
import { useAuthRedirect } from "../../../../hook/useAuthRedirect";

function page() {
  useAuthRedirect("/login", true);
  return (
    <Fragment>
      <HeadSection
        right={<></>}
        title="Add New Project/Portfolio"
        desc="Display your project to others!"
      />
      <div className="mt-8">
        <FormProject />
      </div>
    </Fragment>
  );
}

export default page;
