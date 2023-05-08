import { ContactDataType } from "@interfaces/dataTypes";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import LayoutIconFacebook from "../Icon/Facebook";
import LayoutIconPhone from "../Icon/Phone";
import LayoutIconYoutube from "../Icon/Youtube";

interface LayoutHeaderSocialProps {
  contact: ContactDataType;
  className?: string;
}

const LayoutHeaderSocial = ({ contact, className }: LayoutHeaderSocialProps) => {
  if (
    _.isEmpty(contact?.site_facebook) &&
    _.isEmpty(contact?.site_youtube) &&
    _.isEmpty(contact?.site_phone_number)
  ) {
    return null;
  }

  return (
    <div className={twMerge("hidden space-x-2 lg:flex", className)}>
      {contact?.site_phone_number && <LayoutIconPhone href={`tel:${contact.site_phone_number}`} />}
      {contact?.site_facebook && <LayoutIconFacebook href={contact.site_facebook} />}
      {contact?.site_youtube && <LayoutIconYoutube href={contact.site_youtube} />}
    </div>
  );
};

export default LayoutHeaderSocial;
