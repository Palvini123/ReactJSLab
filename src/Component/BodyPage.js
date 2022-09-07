import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";

const itemData = [
  {
    img:
      "https://preview.uideck.com/items/appvilla/assets/images/hero/phone.png",
    title: "Mobile"
  }
];
const BodyPage = () => {
  return (
    <ImageList
      sx={{ width: 2000, height: 550, margin: "0 0 0 370px" }}
      variant="woven"
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}`} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default BodyPage;
