import { ref } from "vue";
import type { IProducts } from "./types";

export const allItems = ref<IProducts[]>([
    {id: 1, itemName: 'Mouse Razer FX', itemPrice: 3500, weight: 80, img: 'https://static.razer.ru/public/CVeZiJxjKyEJoLA6MsaEBH/800x600-razer-viper-v3-pro-black-product-promo.png'},
    {id: 2, itemName: 'Keyboard Razer MK', itemPrice: 8000, weight: 160, img: 'https://static.razer.ru/239803/razer-pro-type-ultra-power-mobile-768x500.jpg'},
    {id: 3, itemName: 'Headset SteelSeries H7', itemPrice: 12000, weight: 300, img: 'https://avatars.mds.yandex.net/get-mpic/4525599/img_id2807108152814152709.jpeg/orig'},
    {id: 4, itemName: 'Mouse Logitech G Pro X', itemPrice: 4500, weight: 75, img: 'https://4frag.ru/image/cache/data/product/logitech-g-pro-x-superlight-wireless-mouse-white-1-1000x1000.jpg'},
    {id: 5, itemName: 'Keyboard Corsair K70', itemPrice: 9500, weight: 180, img: 'https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Gaming-Keyboards/CH-9109410-NA/Gallery/K70_RGB_PRO_PBT_01.webp'},
    {id: 6, itemName: 'Gaming Chair DXRacer King', itemPrice: 22000, weight: 15000, img: 'https://www.i-sit.ru/image/cache/webp/catalog/product/DXRacer/OHKB06/dxracer_king_gaming_chair_-_ohkf06nb_8-800x800-1600x1200.webp'},
    {id: 7, itemName: 'Monitor ASUS ROG 27" 144Hz', itemPrice: 40000, weight: 5000, img: 'https://dlcdnwebimgs.asus.com/gain/22D72EED-0D05-46FA-AB23-D285E6770465/w717/h525'},
    {id: 8, itemName: 'Gaming Mouse Pad XXL SteelSeries', itemPrice: 1500, weight: 400, img: 'https://media.steelseriescdn.com/thumbs/filer_public/1c/4d/1c4d534a-30fc-4cb3-889d-4ba6abb6f01c/qck_heavy_xxl_diablo_4_pdp_img_buy_03.png__1920x1080_crop-fit_optimize_subsampling-2.png'},
    {id: 9, itemName: 'Webcam Logitech C920', itemPrice: 8000, weight: 250, img: 'https://unitsolutions.ru/5290-large_default/logitech-hd-pro-webcam-c920.jpg'},
    {id: 10, itemName: 'Streaming Microphone Blue Yeti', itemPrice: 13000, weight: 1200, img: 'https://img.mvideo.ru/Big/50148065bb.jpg'},
    {id: 11, itemName: 'Game Controller Xbox Elite', itemPrice: 18000, weight: 350, img: 'https://m.media-amazon.com/images/I/717XTm0moDL.jpg'},
    {id: 12, itemName: 'RGB Mouse Pad Razer', itemPrice: 2000, weight: 450, img: 'https://assets2.razerzone.com/images/og-image/razer-firefly-v2-OGimage-1200x630.jpg'},
    {id: 13, itemName: 'Gaming Desk Secretlab Magnus', itemPrice: 30000, weight: 25000, img: 'https://images.secretlab.co/theme/common/magnus-beauty-01-min.jpg'},
    {id: 14, itemName: 'VR Headset Oculus Quest 2', itemPrice: 25000, weight: 800, img: 'https://apple-region.com/upload/iblock/60a/agh40t6bpnfl1ehq6ozurnxe6jt5dccr.jpg'},
    {id: 15, itemName: 'Gaming PC MSI Trident X', itemPrice: 150000, weight: 12000, img: 'https://asset.msi.com/resize/image/global/product/product_5_20200430090226_5eaa23a23423f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'},
    {id: 16, itemName: 'Gaming Laptop ASUS TUF 15', itemPrice: 100000, weight: 2000, img: 'https://asus-store.ru/assets/images/laptop/tuf/fx_fa507_2023/001.jpg'},
    {id: 17, itemName: 'Streaming Capture Card Elgato HD60 S', itemPrice: 15000, weight: 500, img: 'https://m.media-amazon.com/images/I/31y-Fjwt3yL._AC_UF894,1000_QL80_.jpg'},
    {id: 18, itemName: 'External SSD Samsung T5 1TB', itemPrice: 12000, weight: 70, img: 'https://cdn1.ozone.ru/s3/multimedia-1/6563383081.jpg'},
    {id: 19, itemName: 'RGB Cooling Fan Cooler Master', itemPrice: 3000, weight: 250, img: 'https://a.storyblok.com/f/281110/72f38aa0b0/hyper-212-rgb-black-gallery-1.png/m/960x0/smart'},
    {id: 20, itemName: 'USB Hub Anker 10-Port', itemPrice: 4500, weight: 200, img: 'https://microless.com/cdn/products/ed731e1bfa2ddc52b35d4e495e0844b4-hi.jpg'}
]);