import * as React from "react";
// import ImageList from "@mui/material/ImageList";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

export default function TitlebarImageList() {
  const [showModal, setShowModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState({});

  return (
    <div className="appWrapper">
      <ImageListItem key="Subheader">
        <ListSubheader component="div">
          <h1 className="title mainTitle">Wedding dresses</h1>
        </ListSubheader>
      </ImageListItem>
      <Grid container spacing={2}>
        {itemData.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={item.img}
            className="galleryItem"
          >
            <img src={`${item.img}`} alt={item.title} loading="lazy" className="gridImage" />
            <ImageListItemBar sx={{ml: '16px'}}
              onClick={() => {
                setSelectedItem(item);
                setShowModal(true);
              }}
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </Grid>
        ))}
      </Grid>

      {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h1 className="modalTitle">{selectedItem.title}</h1>
              <p className="descriptionContent">{selectedItem.description}</p>
              <button onClick={() => setShowModal(false)} className="modalButton">Close</button>
            </div>
          </div>
        )}
    </div>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/564x/36/c3/94/36c3943f2d5436a85ea26237207881cd.jpg",
    title: "Dark tulle wedding dress",
    id: 1,
    description: "A dark tulle wedding dress is a bridal gown made of delicate, sheer fabric called tulle in a deep or rich shade, typically black or navy blue, instead of the traditional white or ivory. The dress may have multiple layers of tulle to create a flowing, ethereal look, and may be adorned with lace, sequins, or other embellishments. The dark color gives the dress a dramatic and unconventional feel, making it a unique choice for brides who want to break away from tradition and make a statement on their wedding day. This type of dress can be worn for formal or alternative weddings and can be styled with various accessories such as a veil, tiara, or statement jewelry."
  },
  {
    img: "https://i.pinimg.com/564x/68/51/46/68514642b82a4b4d7bc1cfa675973a22.jpg",
    title: "Nymph Dress",
    id: 2,
    description: "A Nymph wedding dress is a romantic and ethereal bridal gown inspired by the mythical creatures of Greek mythology known for their beauty and grace. These dresses are typically made of lightweight, flowing fabrics such as tulle, chiffon, or silk, and often feature delicate embroidery, lace, or beading that creates a whimsical, fairy-tale-like effect. The silhouette of a Nymph wedding dress is typically loose and flowing, with a fitted bodice and a full skirt that cascades down to the floor in soft, airy layers. These dresses often feature romantic details such as flutter sleeves, open backs, or intricate appliqués that add to the dreamy, otherworldly feel. Nymph wedding dresses are a popular choice for outdoor, garden, or bohemian weddings, and can be accessorized with floral crowns, delicate jewelry, or bare feet to complete the look."
  },
  {
    img: "https://i.pinimg.com/originals/58/6d/62/586d620bc77dcbd34991d5afb59acb2b.jpg",
    title: "Princess",
    id: 3,
    description: "A Princess wedding dress is a classic and timeless bridal gown style that is inspired by the gowns worn by royalty. These dresses typically feature a fitted bodice that is embellished with intricate beading or lace, and a full, voluminous skirt that creates a dramatic, elegant effect. The skirt is often made up of several layers of tulle or organza, giving it a fullness that adds to the regal and grandiose look of the dress. The neckline of a Princess wedding dress can vary, but is often a sweetheart or scoop neckline that flatters the bride's décolletage. These dresses are often paired with a long, flowing veil that adds to the royal and romantic feel. Princess wedding dresses are a popular choice for formal and traditional weddings, and can be accessorized with a tiara, sparkling jewelry, and a pair of heels to complete the look."
  },
  {
    img: "https://i.pinimg.com/564x/97/8d/8d/978d8de635a0045b13f5f3853a419664.jpg",
    title: "Lady Boelyn",
    id: 4,
    description: "A Lady Boelyn wedding dress is a style of bridal gown inspired by the fashion of the Tudor era in England, particularly the dress worn by Anne Boleyn, the second wife of King Henry VIII. This dress typically features a fitted bodice with a square or plunging neckline, adorned with delicate lace or embroidery, and a full skirt that is often voluminous and made of heavy fabric such as velvet or brocade. The sleeves of a Lady Boelyn wedding dress are typically long and fitted, and may be adorned with lace cuffs or other intricate details. These dresses often feature a low-cut back and a train that trails behind the bride as she walks down the aisle. Lady Boelyn wedding dresses are a popular choice for brides who want a unique, historical-inspired look for their wedding day. They can be accessorized with a crown or tiara, as well as jewelry that complements the intricate details of the dress."
  },
  {
    img: "https://i.pinimg.com/564x/bb/27/f3/bb27f3c95a9fcb5be919b762c3a41c2c.jpg",
    title: "Vampire",
    id: 5,
    description: "A Vampire wedding dress is a style of bridal gown that is inspired by the gothic and romantic aesthetics of vampire lore. These dresses are typically black, red, or deep purple in color, and are made of luxurious fabrics such as velvet, lace, or satin. The silhouette of a Vampire wedding dress is often form-fitting, with a corseted bodice that accentuates the bride's curves, and a flowing, floor-length skirt that creates a dramatic, vampiric effect. These dresses may feature intricate details such as ruffles, lace-up closures, or beaded embroidery that adds to the dark, romantic aesthetic. Vampire wedding dresses are a popular choice for alternative or Halloween-themed weddings, and can be accessorized with dramatic makeup, a veil, or a statement piece of jewelry such as a choker or cuff."
  },
  {
    img: "https://i.pinimg.com/564x/85/6e/4f/856e4f2e80f9d231ab2683f2cf59d5bc.jpg",
    title: "The other powerful Spellman",
    id: 6,
    description: "The Powerful Spellman wedding dress is a bridal gown inspired by the powerful and mystical world of Sabrina Spellman, the teenage witch from the popular television series 'Chilling Adventures of Sabrina.' This dress is typically designed with a gothic, dark aesthetic and features intricate details that evoke the supernatural and mystical elements of the show. The dress may be black or a deep, rich color such as burgundy or emerald green, and is often made of luxurious fabrics such as velvet or silk. The silhouette of a Powerful Spellman wedding dress can vary, but is often fitted at the top with a corseted bodice or off-the-shoulder neckline, and has a flowing, layered skirt that trails behind the bride as she walks. These dresses may feature intricate embroidery, lace details, or beading that adds to the mystical and magical feel. Powerful Spellman wedding dresses are a unique choice for brides who want to channel their inner witch and embrace a gothic and supernatural aesthetic on their wedding day. They can be accessorized with bold makeup, statement jewelry, or a dramatic cape or veil to complete the look."
  },
  {
    img: "https://i.pinimg.com/564x/bf/96/6d/bf966d4a360bbfbc6663b3dcde27d755.jpg",
    title: "Emerald Green",
    id: 7,
    description: "An Emerald Green wedding dress is a striking and unique bridal gown that features a deep, rich shade of green. This color is bold and dramatic, and adds a pop of unexpected color to traditional wedding attire. The dress may be made of various fabrics, such as silk, satin, or tulle, and can feature various silhouettes, from a fitted sheath to a flowing ballgown. The dress may be adorned with intricate details such as lace, beading, or embroidery, or it may feature clean lines and minimalist design to showcase the vibrant color. Emerald Green wedding dresses are a popular choice for brides who want to make a statement with their wedding attire, and are especially fitting for outdoor weddings or those with a nature-inspired theme. These dresses can be accessorized with gold or silver jewelry, a simple veil, and neutral or metallic shoes to complete the look."
  },
  {
    img: "https://i.pinimg.com/564x/a9/dc/78/a9dc78d2b5b8c815ead0c33855cbba96.jpg",
    title: "Lady Dracula",
    id: 8,
    description: "A Lady Dracula wedding dress is a gothic-inspired bridal gown that draws inspiration from the legendary vampire countess, Elizabeth Bathory. This dress typically features a dark color palette, such as black or deep red, and is made from luxurious materials such as velvet or satin. The dress often has a fitted bodice with intricate detailing such as lace, beading, or embroidery, and a flowing, full skirt that creates a dramatic and mystical effect. The neckline can vary from a high, Victorian-inspired collar to a low, plunging neckline, depending on the desired level of drama and sophistication. These dresses may also feature unique and unexpected details, such as bat wings or a cape, to add to the eerie and vampiric feel. Lady Dracula wedding dresses are a popular choice for brides who want to embrace their dark side and channel their inner vampire queen. They can be accessorized with dark, dramatic makeup, a tiara or crown, and bold, statement jewelry to complete the look."
  },
  {
    img: "https://i.pinimg.com/564x/d5/92/49/d592496f47fc434960127a13c45e4ba9.jpg",
    title: "Hail to the King",
    id: 9,
    description: "The 'Hail to the King' wedding dress is a bridal gown that is inspired by the iconic style of the King of Rock and Roll, Elvis Presley. This dress is typically designed with a nod to the '50s and '60s rock and roll era, and features unique elements that pay tribute to Elvis's signature style. The dress is often white, with a full skirt and a fitted bodice that is adorned with intricate beading or embroidery. The neckline may be high or off-the-shoulder, and the sleeves may be capped or three-quarter length. The dress may also feature a distinctive, wide collar or a bejeweled belt that cinches the waist. These dresses often have a retro and playful feel, with full skirts that twirl and dance as the bride moves. 'Hail to the King' wedding dresses are a unique choice for brides who are fans of Elvis Presley and want to incorporate a touch of rock and roll flair into their wedding day. They can be accessorized with bold statement jewelry, a vintage-inspired veil, or a pair of retro-inspired shoes to complete the look."
  },
  {
    img: "https://i.pinimg.com/564x/4a/1a/66/4a1a667a2db2c3d7eb77a4518ed6a2b0.jpg",
    title: "Poisonous Ivy",
    id: 10,
    description: "A Poisonous Ivy wedding dress is a bridal gown that is inspired by the character Poison Ivy from the Batman comics and movies. This dress is typically designed with a botanical theme, featuring ivy or other plant-like details and a color palette that includes various shades of green. The dress may be made from luxurious materials such as silk, velvet, or tulle and can feature various silhouettes, from a fitted mermaid style to a flowing ballgown. The dress may be adorned with intricate detailing such as 3D floral appliques, leaf embroidery, or beading that adds to the botanical feel. A Poisonous Ivy wedding dress is a unique choice for brides who want to channel their inner villain and embrace a dark and nature-inspired aesthetic on their wedding day. These dresses can be accessorized with simple jewelry, a nature-inspired headpiece, or a bold statement lip to complete the look."
  },
  {
    img: "https://i.pinimg.com/564x/11/9c/14/119c14969343ae4afa8dbe9e23f9554f.jpg",
    title: "Maleficient",
    id: 11,
    description: "A Maleficent wedding dress is a bridal gown that is inspired by the iconic villain from Disney's Sleeping Beauty. This dress typically features a gothic, dark aesthetic, with a black or dark color palette and intricate detailing that evokes the dark and mystical elements of the character. The dress may be made from luxurious fabrics such as silk or velvet, and can feature various silhouettes, from a fitted mermaid style to a flowing ballgown. The dress may be adorned with intricate detailing such as lace, beading, or embroidery, and may also feature unique and unexpected details such as a dramatic train, a feathered collar, or a statement cape. Maleficent wedding dresses are a popular choice for brides who want to embrace their dark side and channel their inner villain on their wedding day. These dresses can be accessorized with bold statement jewelry, a dramatic veil, or a dark and smokey makeup look to complete the look."
  },
  {
    img: "https://i.pinimg.com/564x/76/b4/8f/76b48fe43756d489be9ca1741b3dc6be.jpg",
    title: "Butterfly",
    id: 12,
    description: "A butterfly wedding dress is a bridal gown that is inspired by the delicate and graceful creature, the butterfly. This dress typically features a light and airy aesthetic, with a soft color palette that evokes the beauty of nature. The dress may be made from materials such as chiffon, tulle, or organza, and can feature various silhouettes, from a fitted sheath to a flowing ballgown. The dress may be adorned with intricate detailing such as 3D butterfly appliques, delicate embroidery, or beading that adds to the ethereal feel. A butterfly wedding dress is a popular choice for brides who want to embrace a romantic and whimsical aesthetic on their wedding day. These dresses can be accessorized with simple jewelry, a nature-inspired headpiece, or a delicate veil to complete the look. The overall effect is a feminine and graceful wedding gown that evokes the beauty and magic of the natural world."
  }
];
