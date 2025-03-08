import React from "react";
import ButtonProject from "../../components/button-project";

export default function NicoviangiManager() {

    return (
        <ButtonProject
            title="2023 - Web Application for Managing Contracts"
            href="https://nv-management.vercel.app/"
            images={2}
        >
            I collaborated with a colleague to build a Next.js web application that fills
            rental contract templates using apartment and client data from MongoDB database.
        </ButtonProject>
    );
}