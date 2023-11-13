import { Database } from "react-feather";

import TextIconLink from "../ui/links/TextIconLink";
import { useTranslation } from "react-i18next";

function AdminSpecificLinks() {
  const { t } = useTranslation();

  return (
    <>
      <TextIconLink to="/admin" Icon={Database}>
        {t("navigation.adminPanel")}
      </TextIconLink>
    </>
  );
}

export default AdminSpecificLinks;
