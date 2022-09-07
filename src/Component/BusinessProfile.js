import AppleButton from "../Component/AppleButton";
import GooglePlayBtn from "../Component/GooglePlayBtn";

const BusinessProfileText = {
  "font-size": "40px",
  "line-height": "32px",
  margin: "-305px 0 0 0"
};

const pFontStyle = {
  "font-size": "15px",
  "line-height": "32px",
  margin: "0 0 0 0"
};
const BusinessProfile = () => {
  return (
    <div>
      <h1 style={BusinessProfileText}>
        A Powerful App <br />
        Your Business.
      </h1>
      <p style={pFontStyle}>
        From open source to pro services,
        <br />
        Piqes helps you to build, deploy, test, and monitor apps.
      </p>

      <AppleButton />
      <GooglePlayBtn />
    </div>
  );
};
export default BusinessProfile;
