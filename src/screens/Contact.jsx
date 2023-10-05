import MapContainer from "../Components/MapContainer";

import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mb-20">
      <h1 className="font-bold text-center text-[24px] lg:text-[35px] py-8 lg:py-10 lg:pt-16">
        {t("contact_title1")}
        <br className="lg:hidden" /> {t("contact_title2")}
      </h1>

      <div className="text-center pt-4 space-y-4">
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]">
            {" "}
            {t("contact_email")}
          </div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            help@cowithone.com
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]"> {t("contact_tel")}</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            {t("contact_tel_d")}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]"> {t("contact_fax")}</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            {t("contact_fax_d")}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[16px] lg:text-[20px]"> {t("contact_addr")}</div>
          <div className="text-[20px] lg:text-[24px] font-semibold">
            {t("contact_addr_d1")}
            <br className="lg:hidden" /> {t("contact_addr_d2")}
          </div>
        </div>
      </div>
      <MapContainer />
    </div>
  );
}
export default Contact;
